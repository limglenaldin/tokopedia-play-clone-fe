// Third-party Libraries
import { Box, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const CommentItem = ({data}) => {
  return (
    <Box py="2">
      <Text as="b" fontSize="md">{data.username}</Text>
      <Text>{data.comment}</Text>
    </Box>
  )
}

CommentItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CommentItem