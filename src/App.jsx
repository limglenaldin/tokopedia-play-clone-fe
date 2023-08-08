// Built-in Libraries
// Third-party Libraries
import {ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Flex bg="green.500" minW="full" minH='100vh' direction="column">
        <Heading as='h1' size='lg'>Hello from ChakraUI</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus, id dicta consequuntur iure ratione magni? Deserunt, nam quae.</Text>
      </Flex>
    </ChakraProvider>
  )
}

export default App
