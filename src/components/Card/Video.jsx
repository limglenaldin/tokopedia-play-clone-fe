// Third-party Libraries
import { Box, Card, CardBody, Flex, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";

const VideoItem = () => {
  const cardHeightResponsive = {
    base: "sm",
    lg: "md"
  }

  return (
    <Card color="white" height={cardHeightResponsive} maxW="sm" overflow="hidden" _hover={{cursor: "pointer"}}>
      <CardBody p="2">
        <Flex
          position="relative"
          zIndex="1"
          direction="column"
          minH="full"
        >
          <Flex bgColor="blackAlpha.400" align="center" gap="2" p="1" w="max-content" borderRadius="md">
            <Icon as={FiEye} />
            <Text fontSize="sm">200</Text>
          </Flex>
          <Spacer />
          <Box>
            <Text fontSize="md" as="b">Sales Kamis Harga Sadis</Text>
            <Text fontSize="sm">Uniqlo</Text>
          </Box>
        </Flex>
        <Box inset="0" position="absolute"
        >
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
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

export default VideoItem;