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
        </Box>
      </Flex>

      <Container maxW="container.xl" py={8}>
        <Heading as="h2" size="xl" mb={6}>
          API Documentation
        </Heading>
        <Text mb={4}>
          We provide a simple API to access the Advanced Reasoning Benchmark (ARB). The API currently supports standard HTTP GET requests.
        </Text>
      
        {/* <Heading as="h2" size="xl" mb={6}>
          API Calls
        </Heading>
        <Text mb={4}>
          We have three different types of API calls for retrieving problems. See <Link href="https://app.swaggerhub.com/apis-docs/arb-dataset/arb-api/1.0.5" color="teal.500">here</Link> and select ARB API server as the mock server to see what the outputs look like.
        </Text> */}





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
            https://advanced-reasoning-benchmark.netlify.app/api/lib/math/{"{answer-type}"}/
          </Code>
        </Box>
        <Text mb={4}>
          where acceptable values for `answer-type` are `numerical`, `symbolic`, and `prooflike`.
        </Text>
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


        <Text mb={4}>
          For MCAT Reading, you can retrieve the problems according to the following template:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatReading/{"{split}"}
          </Code>
        </Box>
        <Text mb={4}>
         where acceptable values for `split` are `val` and `test`.
        </Text>
        <Text mb={4}>
          MCAT Reading Validation Split:
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatReading/val&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
          MCAT Reading Test Split:
        </Text> 
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatReading/test&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>







        <Heading as="h3" size="lg" mb={4}>
          Categories without Images.
        </Heading>
        <Text mb={4}>
        For physics and MCAT Science, you can specify whether you want the problems with or without images.

        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://advanced-reasoning-benchmark.netlify.app/api/lib/{"{category}"}/{"{answer-type}"}/{"{modality}"}
          </Code>
        </Box>
        <Text mb={4}>
          For physics, acceptable values for `{"{answer-type}"}` are `numerical` and `symbolic`. Acceptable values for `{"{modality}"}` are `img` and `noimg`. 
        </Text>
        <Text mb={4}>
          Physics Numerical without Images
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/physics/numerical/noimg&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
        Physics Numerical with Images
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/physics/numerical/img&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
          Physics Symbolic without Images
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/physics/symbolic/noimg&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>
        <Text mb={4}>
        Physics Symbolic with Images
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/physics/symbolic/img&quot;)
            <br />
            data = response.json()
          </Code>
        </Box>

        <Text mb={4}>
        For MCAT Science, `{"{answer-type}"}` should be filled in with the splits, namely `val` and `test`. Acceptable values for `{"{modality}"}` are `img` and `noimg`. For example, if you want the MCAT Science from the validation split without images, you can use the following template:
        </Text>
        <Text mb={4}>
        MCAT Science Validation Split without Image
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatScience/val/noimg&quot;)
            <br />
            data = response.json()
          </Code>
        </Box> 
        <Text mb={4}>
        MCAT Science Validation Split with Image
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatScience/val/img&quot;)
            <br />
            data = response.json()
          </Code>
        </Box> 
        <Text mb={4}>
        MCAT Science Test Split without Image
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatScience/test/noimg&quot;)
            <br />
            data = response.json()
          </Code>
        </Box> 
        <Text mb={4}>
        MCAT Science Test Split with Image
        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            import requests
            <br />
            response =
            requests.get(&quot;https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatScience/test/img&quot;)
            <br />
            data = response.json()
          </Code>
        </Box> 


        <Heading as="h3" size="lg" mb={4}>
          Get a specific problem by id within category
        </Heading>
        <Text mb={4}>
        For any of the above, if you terminate the API call with `/{"id"}`, then you can get a specific problem with that ID. 

        Some examples: 

        </Text>
        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://advanced-reasoning-benchmark.netlify.app/api/lib/mcatScience/test/noimg/64cdbc1978a46c58407af688
          </Code>
        </Box>


        <Box p={4} mb={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <Code>
            https://advanced-reasoning-benchmark.netlify.app/api/lib/math/numerical/64ade9c30b1afac21d212df7
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
        
          <Text fontWeight="bold" fontSize="md">
            Copyright © 2023 ARB Team
          </Text>
      </Flex>
    </Box>
  );
};

export default Documentation;
