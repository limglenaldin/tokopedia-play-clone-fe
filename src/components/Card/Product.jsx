// Third-party Libraries
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types';

// Hooks
import { useRupiahCurrency } from "../../hooks/useCurrency";

// Chakra Responsive
const cardFlexBasis = {
  base: "40%",
  sm: "30%",
  md: "24%",
  lg: "16%",
}

const ProductItem = ({ data }) => {
  const currency = useRupiahCurrency(data?.price)

  const handleClickProduct = () => {
    window.open(data?.link, '_blank')
  }

  return (
    <Card flexBasis={cardFlexBasis} flexShrink="0" maxW="sm" _hover={{cursor: "pointer"}} onClick={handleClickProduct}>
      <CardBody p="2">
        <Image
          src={data?.imageUrl}
          alt={data?.title}
          borderRadius='lg'
        />
        <Box mt="4">
          <Heading size='sm'>{data?.title}</Heading>
          <Text fontSize='md'>
            {currency}
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
}


export default ProductItem;