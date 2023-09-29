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
import { FaArrowCircleRight } from "react-icons/fa";

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
          <Heading fontSize="3xl" color="black" mr={2}>
            Advanced Reasoning Benchmark
          </Heading>
        </Box>
      </Flex>

      <Container maxW="container.xl" py={8}>
        <Heading as="h2" size="xl" mb={6}>
          API Documentation
        </Heading>
        <Text mb={4}>
          We provide a simple API to access the Advanced Reasoning Benchmark
          (ARB). The API currently supports standard HTTP GET requests.
        </Text>

        <Heading as="h2" size="xl" mb={6}>
          API Calls
        </Heading>
        <Text mb={4}>
          We have three different types of API calls for retrieving problems.
          See{" "}
          <Link
            href="https://app.swaggerhub.com/apis-docs/arb-dataset/arb-api/1.0.5"
            color="teal.500"
          >
            here
          </Link>{" "}
          and select ARB API server as the mock server to see what the outputs
          look like.
        </Text>

        <Heading as="h3" size="lg" mb={4}>
          Get problem by category:
        </Heading>
        <Text mb={4}>
          You can retrieve all the problems in a particular subject area by the
          following API call. Acceptable values for `category` are `law`,
          `math`, `mcatReading`, etc.
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>https://arb.duckai.org/api/lib/{"{category}"}</Code>
        </Box>
        <Text fontWeight="bold" mb={2}>
          Math Numerical:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/math&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          Math Symbolic:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/testSplit/math/symbolic&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          Math Proofs:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/testSplit/math/proof&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          Physics Numerical:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/physics/val&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          Physics Symbolic:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/testSplit/physics/val&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          Law:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/law&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text fontWeight="bold" mb={2}>
          MCAT Reading:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/mcatReading&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Heading as="h3" size="lg" mb={4}>
          Get a specific problem by id within category
        </Heading>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://arb.duckai.org/api/lib/{"{category}"}/{"{id}"}
          </Code>
        </Box>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/math/1234&quot;)
            <br />
            problem = response.json()
          </Code>
        </Box>

        <Heading as="h3" size="lg" mb={4}>
          Get problem by category variation (e.g. img vs val)
        </Heading>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://arb.duckai.org/api/lib/{"{category}"}/{"{variation}"}
          </Code>
        </Box>
        <Text fontWeight="bold" mb={2}>
          Physics Numerical w/ Images:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/physics_numerical/img&quot;)
            <br />
            variation_data = response.json()
          </Code>
        </Box>
        <Text fontWeight="bold" mb={2}>
          Physics Symbolic w/ Images:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://arb.duckai.org/api/lib/testSplit/physics/img&quot;)
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
          href="/docs"
          color="white"
          textDecoration="underline"
          _hover={{ color: "white", textDecoration: "underline" }}
        >
          <Text fontWeight="bold" fontSize="md">
            Copyright © 2023 The ARB Team
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Documentation;
