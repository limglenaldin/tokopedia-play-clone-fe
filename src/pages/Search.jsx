// Third-party Libraries
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Flex bg="red.500" direction="column" minH='100vh'>
      <Heading as='h1' size='lg'>Hello from Search</Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus, id dicta consequuntur iure ratione magni? Deserunt, nam quae.</Text>
      <Link to="/">Go to Home</Link>
    </Flex>
  )
}

export default Search;