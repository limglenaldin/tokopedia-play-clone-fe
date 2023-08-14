// Third-party Libraries
import { useHistory } from "react-router-dom";
import { Box, Card, CardBody, Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

// Icons
import { FiEye } from "react-icons/fi";

// Chakra Responsive
const cardHeightResponsive = {
  base: "sm",
  lg: "md"
}

const VideoItem = ({data}) => {
  let history = useHistory();

  const handleClickCard = () => {
    history.push(`/videos/${data._id}`)
  }

  return (
    <Card color="white" height={cardHeightResponsive} maxW="sm" overflow="hidden" _hover={{cursor: "pointer"}} onClick={handleClickCard}>
      <CardBody p="2">
        <Flex
          position="relative"
          zIndex="1"
          direction="column"
          minH="full"
        >
          <Flex bgColor="blackAlpha.400" align="center" gap="2" p="1" w="max-content" borderRadius="md">
            <Icon as={FiEye} />
            <Text fontSize="sm">{data.totalView}</Text>
          </Flex>
          <Spacer />
          <Box color="gray.100">
            <Text fontSize="md" as="b">{data.title}</Text>
            <Text fontSize="sm">{data.store}</Text>
          </Box>
        </Flex>
        <Box inset="0" position="absolute"
        >
          <Image
            src={data.thumbnailUrl}
            alt={data.title}
            position="absolute"
            objectFit="cover"
            h="full"
            w="full"
          />
        </Box>
      </CardBody>
    </Card>
  )
}

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
}


export default VideoItem;