// Third-party Libraries
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"

const ProductItem = () => {
  return (
    <Card flexBasis="16%" flexShrink="0" maxW="sm">
      <CardBody p="2">
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Box mt="4">
          <Heading size='sm'>Living room Sofa</Heading>
          <Text fontSize='md'>
            Rp. 10.000
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}

export default ProductItem;