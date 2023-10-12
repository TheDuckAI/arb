import React from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  Container,
  Image,
  Icon,
  Code,
} from "@chakra-ui/react";
import {
  FaArrowCircleRight
} from "react-icons/fa";

const Documentation: React.FC = () => {

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
          <Flex align="center">
            <Heading fontSize="2s" color="white" mr={2}>
              Try out our interface!
            </Heading>
            <Link href="/home" title="Go to interface">
              <Icon as={FaArrowCircleRight} w={6} h={6} color="white" />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Container maxW="container.xl" py={8}>
        <Heading as="h2" size="xl" mb={6}>
          API Documentation
        </Heading>
        <Text mb={4}>
          We provide a simple API to access the Advanced Reasoning Benchmark (ARB). The API currently supports standard HTTP GET requests.
        </Text>
      
        <Heading as="h2" size="xl" mb={6}>
          API Calls
        </Heading>
        <Text mb={4}>
          We have three different types of API calls for retrieving problems. See <Link href="https://app.swaggerhub.com/apis-docs/arb-dataset/arb-api/1.0.5" color="teal.500">here</Link> and select ARB API server as the mock server to see what the outputs look like.
        </Text>


        <Heading as="h3" size="lg" mb={4}>
          Categories without Images.
        </Heading>
        <Text mb={4}>
          For law, problems are retrieved according to the following:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/law/&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text mb={4}>
          For math, you can retrieve the problems according to the following template:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://advanced-reasoning-benchmark.netlify.app/api/lib/math/
          </Code>
        </Box>
        <Text mb={4}>
          Numerical
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/math/numerical&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
          Symbolic
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/math/symbolic&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
          Proof-like
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/math/prooflike&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>






      </Container>

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
            Copyright © 2023 DuckAI
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Documentation;

