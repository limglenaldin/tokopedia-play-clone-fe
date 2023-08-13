import { Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex minH='100vh' justify="center" align="center">
      <Spinner size='xl' />
    </Flex>
  )
}

export default Loading