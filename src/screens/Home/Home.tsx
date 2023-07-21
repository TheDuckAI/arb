import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import MathJaxComponent from "./Components/Mathjax";

interface LawProblem {
  "Problem Statement": string;
  "Problem Number": string;
  Topic: string;
  Source: string;
  "Answer Candidates": string[];
  "Output Format Instructions": string;
  Solution: string;
  "Final Answer": string;
  Images: string[];
  "Problem Type": string;
  _id: string;
}

interface numericalProblem {
  Problem_Statement: string;
  "Problem Type": string;
  Topic: string;
  Solution: string;
  "Final Answer": string;
  Images: string[];
  "Output Format Instructions": string;
  rubric: string;
  rubric_template: string;
  _id: string;
}

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

  const endpoints = {
    "Law Problem": "/api/lawProblem",
    "Math Problem": "/api/mathProblem",
    "MCAT Reading Problem": "/api/mcatReadingProblem",
    "MCAT Science Problem": "/api/mcatScienceProblem",
    "MCAT Science Image Problem": "/api/mcatScienceImageProblem",
    "Physics Problem": "/api/physicsProblem",
    "Physics Image Problem": "/api/physicsImgProblem",
  };

  const fetchProblem = (endpoint: string) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProblem(data["randomProblem"]);
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
  }, [problem]);

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
  }, []);

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
  if (!problem) {
    return <div>Loading...</div>;
  }

  console.log("Problem Statement:", problemStatement);

  console.log("Final Answer:", finalAnswer);

  return (
    <Flex direction="column" align="center" minHeight="100vh" p={2}>
      <Heading mb={5}>Select Problem Type</Heading>
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
          <Box mt={5}>
            <Text fontWeight="bold" mb={2}>
              Solution:
            </Text>
            {solution && <MathJaxComponent problemStatement={solution} />}
          </Box>
        )}

        <Box mt={5}>
          <Text fontWeight="bold" mb={2}>
            Final Answer:
          </Text>
          <MathJaxComponent problemStatement={finalAnswer} />
        </Box>
      </Box>
    </Flex>
  );
}
