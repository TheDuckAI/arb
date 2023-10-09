import { useEffect, useState, useMemo } from "react";
import { Image } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import MathJaxComponent from "./Components/Mathjax";
import { FaArrowCircleLeft } from "react-icons/fa";
import { LawProblem, numericalProblem } from "@/types/Problem";

function isNumericalProblem(
  problem: LawProblem | numericalProblem
): problem is numericalProblem {
  return (problem as numericalProblem).Problem_Statement !== undefined;
}

function isLawProblem(
  problem: LawProblem | numericalProblem
): problem is LawProblem {
  return (problem as LawProblem).Solution == "";
}

export default function Home() {
  const [problem, setProblem] = useState<LawProblem | numericalProblem | null>(
    null
  );
  const [randomEndpoint, setRandomEndpoint] = useState("");
  const [problemType, setProblemType] = useState("");
  const [problemStatement, setProblemStatement] = useState<string>("");
  const [finalAnswer, setFinalAnswer] = useState<string>("");
  const [solution, setSolution] = useState<string>("");
  const [answerCandidates, setAnswerCandidates] = useState<string[]>([]);

  const [showSolution, setShowSolution] = useState(false);
  const [showFinalAnswer, setShowFinalAnswer] = useState(false);

  const endpoints = useMemo(() => ({
    "Law Problem": "/api/lawProblem",
    "Math Numerical Problem": "/api/mathProblem",
    "MCAT Reading Problem": "/api/mcatReadingProblem",
    "MCAT Science Problem": "/api/mcatScienceProblem",
    "MCAT Science Image Problem": "/api/mcatScienceImageProblem",
    "Physics Numerical Problem": "/api/physicsProblem",
    "Physics Numerical Image Problem": "/api/physicsImgProblem",
  }), []);

  const fetchProblem = (endpoint: string) => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProblem(data["randomProblem"]);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  useEffect(() => {
    if (problem) {
      if (isNumericalProblem(problem)) {
        setProblemStatement(problem.Problem_Statement);
        setSolution(problem["Solution"]);
        setFinalAnswer(problem["Final Answer"]);
      } else {
        setProblemStatement(problem["Problem Statement"]);
        setSolution(problem["Solution"]);
        setAnswerCandidates(problem["Answer Candidates"]);
        setFinalAnswer(problem["Final Answer"]);
      }
    }
  }, [problem, endpoints]);

  useEffect(() => {
    const randomProblemType =
      Object.keys(endpoints)[
        Math.floor(Math.random() * Object.keys(endpoints).length)
      ];
    setProblemType(randomProblemType);
    const randomEndpoint = (endpoints as { [key: string]: string })[
      randomProblemType
    ];
    setRandomEndpoint(randomEndpoint);
    fetchProblem(randomEndpoint);
  }, [endpoints]);

  const handleProblemTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProblemType = event.target.value;
    setProblemType(selectedProblemType);
    const selectedEndpoint = (endpoints as { [key: string]: string })[
      selectedProblemType
    ];
    setRandomEndpoint(selectedEndpoint);
    fetchProblem(selectedEndpoint);
  };

  const toggleSolutionVisibility = () => {
    setShowSolution((prevState) => !prevState);
  };

  const toggleFinalAnswerVisibility = () => {
    setShowFinalAnswer((prevState) => !prevState);
  };

  if (!problem) {
    return (
      <Flex
        width="100vw"
        height="100vh"
        align="center"
        justify="center"
        bg="gray.50"
      >
        <Text fontSize="xl" fontWeight="bold" color="teal.500">
          Loading...
        </Text>
      </Flex>
    );
  }

  console.log("Problem Statement:", problemStatement);

  console.log("Final Answer:", finalAnswer);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        mb="5"
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Box
          flexBasis={{ base: "100%", md: "auto" }}
          flexGrow={1}
          textAlign={{ base: "center", md: "left" }}
        >
          <Link href="https://duckai.org">
            <Image src="/twitter-card.png" alt="DuckAI Logo" maxW="150px" />
          </Link>
        </Box>
        <Box flexBasis={{ base: "100%", md: "auto" }}>
          <Link href="/" title="Return Home">
            <Icon as={FaArrowCircleLeft} w={6} h={6} color="white" />
          </Link>
        </Box>
      </Flex>

      <Flex
        direction="column"
        align="center"
        minHeight="100vh"
        maxW="80vw"
        marginLeft="auto"
        marginRight="auto"
        p={2}
      >
        <Heading mb={5}>Advanced Reasoning Benchmark</Heading>

        <Heading mb={5} as="h4" size="md">
          an interactive problem sampler*
        </Heading>

        <Select value={problemType} onChange={handleProblemTypeChange} mb={4}>
          {Object.keys(endpoints).map((problemType, index) => (
            <option key={index} value={problemType}>
              {problemType}
            </option>
          ))}
        </Select>

        <Button mt={2} mb={5} onClick={() => fetchProblem(randomEndpoint)}>
          Fetch New Problem
        </Button>

        <Box w="full" borderWidth="1px" borderRadius="md" p={4} mb={5}>
          <Box fontWeight="bold" mb={4}>
            <MathJaxComponent problemStatement={problemStatement} />
          </Box>
          {randomEndpoint === "/api/mcatScienceImageProblem" && (
            <Box mt={5}>
              {problem.Images &&
                problem.Images.map((imageName, index) => {
                  const imageUrl = `https://storage.googleapis.com/images_problems/${imageName}`;
                  return (
                    <Center key={index} mb={4}>
                      <Image
                        src={imageUrl}
                        alt={`Problem image ${index + 1}`}
                        width={"50%"}
                        height={"auto"}
                        maxW="50vw"
                        mx="auto"
                      />
                    </Center>
                  );
                })}
            </Box>
          )}
          {randomEndpoint === "/api/physicsImgProblem" && (
            <Box mt={5}>
              {problem.Images &&
                problem.Images.map((imageUrl, index) => {
                  return (
                    <Center key={index} mb={4}>
                      <Image
                        src={imageUrl}
                        alt={`Problem image ${index + 1}`}
                        width={"50%"}
                        height={"auto"}
                        maxW="50vw"
                        mx="auto"
                      />
                    </Center>
                  );
                })}
            </Box>
          )}

          {!isNumericalProblem(problem) && (
            <Box mt={5} key={`${problemType}-${Date.now()}`}>
              <Text fontWeight="bold" mb={2}>
                Answer Candidates:
              </Text>
              {answerCandidates &&
                answerCandidates.map((answer, index) => {
                  let prefix = String.fromCharCode(index + 65);
                  return (
                    <Text key={index}>
                      {`${prefix}. `}
                      <MathJaxComponent problemStatement={answer} />
                    </Text>
                  );
                })}
            </Box>
          )}

          {!isLawProblem(problem) && (
            <Button mt={2} onClick={toggleSolutionVisibility}>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          )}
          {!isLawProblem(problem) && showSolution && (
            <Box mt={5}>
              <Text fontWeight="bold" mb={2}>
                Solution:
              </Text>
              {solution && <MathJaxComponent problemStatement={solution} />}
            </Box>
          )}
          <br />

          <Button mt={2} onClick={toggleFinalAnswerVisibility}>
            {showFinalAnswer ? "Hide Final Answer" : "Show Final Answer"}
          </Button>

          {showFinalAnswer && (
            <Box mt={5}>
              <Text fontWeight="bold" mb={2}>
                Final Answer:
              </Text>
              <MathJaxComponent problemStatement={finalAnswer} />
            </Box>
          )}
        </Box>

        <Heading mb={5} as="h5" size="sm">
          * To prevent data contamination in the training data of future models,
          only the validation split has been made available on the web
          interface. <br /> For details, please refer to section C of the
          appendix in the paper.
        </Heading>
      </Flex>

      <Flex
        as="footer"
        align="center"
        justify="center"
        wrap="wrap"
        padding={6}
        bg="teal.500"
      >
        <Link
          href="https://github.com/TheDuckAI"
          color="white"
          textDecoration="underline"
          _hover={{ color: "white", textDecoration: "underline" }}
        >
          <Text fontWeight="bold" fontSize="md">
            Built with ❤️ by DuckAI
          </Text>
        </Link>
      </Flex>
    </>
  );
}
