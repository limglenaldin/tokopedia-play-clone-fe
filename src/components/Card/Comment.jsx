// Third-party Libraries
import { Box, Flex, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types';
import useMoment from "../../hooks/useMoment";

const CommentItem = ({data}) => {
  const time = useMoment(data.createdAt)

  return (
    <Box py="2">
      <Flex direction="row" justify="space-between">
        <Text as="b" fontSize="md">{data.username}</Text>
        <Text fontSize="sm">{time}</Text>
      </Flex>
      <Text>{data.comment}</Text>
    </Box>
  )
}

CommentItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CommentItem