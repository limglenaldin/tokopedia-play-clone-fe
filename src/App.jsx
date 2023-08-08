// Built-in Libraries
// Third-party Libraries
import {ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/detail">
            <Flex bg="red.500" minW="full" minH='100vh' direction="column">
              <Heading as='h1' size='lg'>Hello from Detail</Heading>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus, id dicta consequuntur iure ratione magni? Deserunt, nam quae.</Text>
              <Link to="/">Go to Home</Link>
            </Flex>
          </Route>
          <Route path="/">
            <Flex bg="green.500" minW="full" minH='100vh' direction="column">
              <Heading as='h1' size='lg'>Hello from Home</Heading>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus, id dicta consequuntur iure ratione magni? Deserunt, nam quae.</Text>
              <Link to="/detail">Go to Detail</Link>
            </Flex>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
