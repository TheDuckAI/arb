import React from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  IconButton,
  Button,
  Container,
  Image,
  Icon, 
  Code,
} from "@chakra-ui/react";
import {
  FaArrowCircleRight,
  FaFilePdf,
  FaGithub,
  FaBook,
  FaImages,
} from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";


const Arb: React.FC = () => {
  const example_problems = ["/proof_1.png", "/proof_2.png"];
  const overview = [
    "/parsed_results.png",
    "/rubric_eval.png",
    "/rubric_example.png",
    "sample_model_response.png",
  ];

  return (
    <Box bg="#F9FAFC">
      <Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        position="sticky"
        top={0}
        zIndex={1000}
      >

      </Flex>

      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.md">
          <Flex direction="column" align="center">
            <Heading as="h1" size="xl">
              ARB: Advanced Reasoning Benchmark for Large Language Models
            </Heading>

          
            <Flex mt={4} wrap="wrap" justify="center">
              <Link
                href="https://arxiv.org/pdf/2307.13692.pdf"
                w={["auto", "calc(20% - 16px)"]}
                mb={4}
                mr={4}
                display="flex"
                justifyContent="center"
              >
                <Button
                  w={"140px"}
                  leftIcon={<FaFilePdf />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Paper
                </Button>
              </Link>

              <Link
                href="https://arxiv.org/abs/2307.13692"
                w={["auto", "calc(20% - 16px)"]}
                mb={4}
                mr={4}
                display="flex"
                justifyContent="center"
              >
                <Button
                  w={"140px"}
                  leftIcon={<AiFillFile />}
                  colorScheme="teal"
                  variant="solid"
                >
                  arXiv
                </Button>
              </Link>
              <Link
                href="/home"
                w={["auto", "calc(20% - 16px)"]}
                mb={4}
                mr={4}
                display="flex"
                justifyContent="center"
              >
                <Button
                  w={"140px"}
                  leftIcon={<FaImages />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Interface
                </Button>
              </Link>

              <Link
                href="/documentation"
                w={["auto", "calc(20% - 16px)"]}
                mb={4}
                display="flex"
                justifyContent="center"
              >
                <Button
                  w={"140px"}
                  leftIcon={<FaBook />}
                  colorScheme="teal"
                  variant="solid"
                >
                  API
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box fontWeight="bold" as="section" py={10}>
        <Container maxW="container.md">
          <Flex direction="column" align="center">
            <Heading as="h2" size="lg">
              Abstract
            </Heading>

            <Flex direction="column" mt={4} w="full">
              <Text textAlign="justify" mt={4}>
                Large Language Models (LLMs) have demonstrated remarkable
                performance on various quantitative reasoning and knowledge
                benchmarks, such as MMLU and MATH. However, many of these
                benchmarks are losing utility as LLMs get increasingly high
                scores, despite not yet achieving expert level performance in
                these domains. We introduce ARB, a novel benchmark composed of
                advanced reasoning problems designed to evaluate LLMs on text
                comprehension and expert domain reasoning. ARB presents a more
                challenging test than prior benchmarks, featuring questions that
                test deeper knowledge of mathematics, physics, biology,
                chemistry, and law.
              </Text>

              <Text textAlign="justify" mt={4}>
                As a subset of ARB, we introduce a challenging set of math and
                physics problems which require advanced symbolic reasoning and
                domain knowledge. In order to improve both automatic and
                assisted symbolic evaluation capabilities, we introduce a
                rubric-based self-evaluation approach, allowing GPT-4 to score
                its own intermediate reasoning steps.
              </Text>

              <Text textAlign="justify" mt={4}>
                We evaluated recent models such as GPT-4 and Claude on ARB and
                demonstrated that even with Chain-of-Thought prompting methods,
                current models score well below 50% on more demanding expert
                tasks. Further, we conducted a human evaluation of the symbolic
                subset of ARB, finding close agreement between annotators and
                GPT-4 self-evaluation scores.
              </Text>
            </Flex>
          </Flex>

          <br />
          <br />

          <Flex direction="column" align="center">
            <Heading as="h2" size="lg">
              Sample Problems
            </Heading>

            <Text textAlign="justify" mt={4}>
              Math Symbolic
            </Text>
            <Box mt={4}>
              <Image
                src="/examples/symbolic.png"
                alt="Symbolic"
                width="80%"
                mx="auto"
              />
            </Box>

            <Text textAlign="justify" mt={4}>
              Math Proof-like
            </Text>
            <Box mt={4}>
              <Image
                src="/examples/proof_1.png"
                alt="Proof-like"
                width="80%"
                mx="auto"
              />
            </Box>

            <Text textAlign="justify" mt={4}>
              Physics Symbolic
            </Text>
            <Box mt={4}>
              <Image
                src="/examples/physics_symbolic_1.png"
                alt="Physics Symbolic"
                width="80%"
                mx="auto"
              />
            </Box>

            <Text textAlign="justify" mt={4}>
              ... see more in the interface!
              <Link href="/home" title="Go to interface">
                <Icon as={FaArrowCircleRight} w={6} h={6} color="teal" />
              </Link>
            </Text>
          </Flex>

          <br />
          <br />

          <Flex direction="column" align="center">
            <Heading as="h2" size="lg">
              Evaluation Results
            </Heading>
            <Text textAlign="justify" mt={4}>
              Our evaluation of current large language models (LLMs) focuses on
              text-only problems, with no multimodal tasks, using models
              including ChatGPT, GPT 3.5, GPT-4, and Claude. Each question type
              is assessed with task-specific instructions and chain of thought;
              for multiple-choice questions, the model&apos;s choice is compared
              with the correct answer, while numerical, symbolic, and proof-like
              problems require extraction and parsing of the model&apos;s
              answer, often requiring mathematical libraries and manual grading
              due to their complexity. We also tested two model-based approaches
              for grading, including GPT-4&apos;s ability to grade equivalence
              of two symbolic expressions and a rubric-based evaluation method,
              which showed promising results, facilitating the evaluation of
              increasingly unstructured answers.
            </Text>
            <Box mt={4}>
              <Image
                src="/parsed_results.png"
                alt="Eval Result"
                width="80%"
                mx="auto"
              />
            </Box>
          </Flex>

          <br />
          <br />

          <Flex direction="column" align="center">
            <Heading as="h2" size="lg">
              Model-based Rubric Evaluation
            </Heading>
            <Text textAlign="justify" mt={4}>
              As the complexity of reasoning tasks for language learning models
              (LLMs) grows, reliable evaluation becomes challenging due to
              difficulties in grading symbolic answers and assessing
              intermediate reasoning steps. We propose an approach where the
              model generates and uses rubrics to evaluate solutions, based on
              reference solutions and examples of human-crafted rubrics. Our
              evaluation revealed that GPT-4 creates effective rubrics, covering
              key solution steps well but struggling with point allocation,
              outperforming its predecessor, GPT-3.5-turbo.
            </Text>
            <Box mt={4}>
              <Image
                src="/rubric_eval.png"
                alt="Rubric Eval"
                width="80%"
                mx="auto"
              />
              <Image
                src="/rubric_example.png"
                alt="Rubric Example"
                width="80%"
                mx="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

    
    </Box>
  );
};

export default Arb;
