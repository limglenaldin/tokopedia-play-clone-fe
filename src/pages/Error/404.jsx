// Third-party Libraries
import { Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Flex minH='100vh' direction="column" justify="center" align="center" gap="6">
      <Flex direction="column" align="center" gap="2">
        <Heading as="h1" size="lg">Oops, Page Not Found</Heading>
        <Text>The page you reach are not found</Text>
      </Flex>
      <ChakraLink as={ReactRouterLink} to="/" pt="1">
        Go back to Home
      </ChakraLink>
    </Flex>
  )
}

export default NotFoundPage