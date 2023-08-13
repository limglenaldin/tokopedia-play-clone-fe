// Third-party Libraries
import { Avatar, Flex, Icon, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom";
import PropTypes from 'prop-types';

// Icons
import { FiSearch } from "react-icons/fi";

const Header = ({username = 'Guest'}) => {
  return (
    <Flex py="5" mb="6" align="center">
      <Text fontSize="lg" as="b">
        <ReactRouterLink to="/">
          TokoPlay
        </ReactRouterLink>
      </Text>
      <Spacer />
      <Flex align="center" gap="4">
        <ChakraLink as={ReactRouterLink} to="/search" pt="1">
          <Icon as={FiSearch} boxSize="5"/>
        </ChakraLink>
        <Flex align="center" gap="2">
          <Avatar bg="red.500" size="sm" />
          <Text>Halo, {username}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

Header.propTypes = {
  username: <PropTypes className="string"></PropTypes>,
}

export default Header