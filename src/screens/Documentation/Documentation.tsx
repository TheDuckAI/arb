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
          We have three different types of API calls for retrieving problems. See <Link href="https://app.swaggerhub.com/apis-docs/arb-dataset/arb-api/1.0.5" color="teal.500">here</Link> and select "ARB API server" as the mock server to see what the outputs look like.
        </Text>

        <Heading as="h3" size="lg" mb={4}>
          Get problem by category:
        </Heading>
        <Text mb={4}>
          You can retrieve all the problems in a particular subject area by the following API call. Acceptable values for `category` are `law`, `math`, and `mcatReading`.
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://arb.duckai.org/api/lib/{`{category}`}
          </Code>
        </Box>

        {/* For each example */}
        <Text fontWeight="bold" mb={2}>Math:</Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response = requests.get("https://arb.duckai.org/api/lib/math")
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>Law:</Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response = requests.get("https://arb.duckai.org/api/lib/law")
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>MCAT Reading:</Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response = requests.get("https://arb.duckai.org/api/lib/mcatReading")
            <br />
            data = response.json()
          </Code>
        </Box>

        <Heading as="h3" size="lg" mb={4}>
          Get a specific problem by id within category
        </Heading>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://arb.duckai.org/api/lib/{`{category}`}/{`{id}`}
          </Code>
        </Box>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response = requests.get("https://arb.duckai.org/api/lib/math/1234")
            <br />
            problem = response.json()
          </Code>
        </Box>

        <Heading as="h3" size="lg" mb={4}>
          Get problem by category variation (e.g. img vs val)
        </Heading>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://arb.duckai.org/api/lib/{`{category}`}/{`{variation}`}
          </Code>
        </Box>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response = requests.get("https://arb.duckai.org/api/lib/physics_numerical/img")
            <br />
            variation_data = response.json()
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
