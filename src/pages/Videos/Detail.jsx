// Built-in Libraries
// Third-party Libraries
import { AspectRatio, Box, Flex, FormControl, Icon, IconButton, Input, Textarea } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

// Components
import ProductItem from "../../components/Card/Product";
import CommentItem from "../../components/Card/Comment";

const comments = [
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet Lorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor amet"
  },
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet"
  },
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet"
  },
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet"
  },
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet"
  },
  {
    "username" : "limglenaldin",
    "comment" : "Lorem ipsum dolor amet"
  },
]

const Detail = () => {
  return (
    <Flex minH='100vh' direction="column">
      <Flex direction="row" gap="4" mb={6}>
        <Box w={9/12}>
          <AspectRatio ratio={16/9}>
            <iframe title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
          </AspectRatio>
        </Box>
        <Flex w={3/12} h bgColor="gray.600" p="2" direction="column" borderRadius="xl" justify="space-between">
          <Flex direction="column" gap="1" overflowY="auto" maxH="sm">
            {
              comments.map((comment, i) => (
                <CommentItem
                  key={i}
                  data={comment}
                />
              ))
            }
          </Flex>
          <Box borderTop="1px" pt="4">
            <FormControl display="flex" gap="2" flexDirection="column" alignItems="end">
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <Textarea
                placeholder="Comment"
              />
              <Box>
                <IconButton
                  aria-label='Send'
                  icon={<Icon as={FiSend} />}
                  variant='outline'
                  colorScheme='teal'
                  />
              </Box>
            </FormControl>
          </Box>
        </Flex>
      </Flex>
      <Flex overflowX="auto" gap={2} pb="4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Flex>
    </Flex>
  )
}

export default Detail;