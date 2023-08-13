// Built-in Libraries
import { useEffect, useState } from "react";

// Third-party Libraries
import { useParams, useHistory } from "react-router-dom";
import { AspectRatio, Box, Flex, FormControl, FormErrorMessage, Heading, Icon, IconButton, Input, Text, Textarea } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'

// Icons
import { FiArrowLeft, FiSend } from "react-icons/fi";

// Components
import ProductItem from "../../components/Card/Product";
import CommentItem from "../../components/Card/Comment";

// API
import apiV1 from "../../api/apiInstance";


const Detail = () => {
  const { id } = useParams();
  let history = useHistory();

  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  useEffect(() => {
    const updateVideoView = async () => {
      try {
        const response = await apiV1.patch(`/videos/${id}`)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getVideoDetails = async () => {
      try {
        const resVideoDetail = await apiV1.get(`/videos/${id}`)
        const resProducts = await apiV1.get(`/videos/${id}/products`)
        const resComments = await apiV1.get(`/videos/${id}/comments`)

        setVideo({
          ...resVideoDetail.data?.data,
          products: resProducts.data?.data,
          comments: resComments.data?.data
        })
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    updateVideoView()
    getVideoDetails()
  }, [])

  const handleClickBack = () => {
    history.push(`/`)
  }

  const onSubmitComment = async (data) => {
    try {
      const response = await apiV1.post(`/videos/${id}/comments`, data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Flex minH='100vh' direction="column" gap="6">
      {
        loading
          ? <Text>Loading Brow</Text> 
          : (<>
            <Flex gap="2">
              <IconButton
                aria-label="back to index"
                icon={<Icon as={FiArrowLeft} />}
                variant="unstyled"
                onClick={handleClickBack}
              />
              <Heading as="h3" size="lg">{video?.title}</Heading>
            </Flex>
            <Flex direction="row" gap="4">
              <Box w={9/12}>
                <AspectRatio ratio={16/9}>
                  <iframe
                    title={video?.title}
                    src={video?.videoUrl}
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Flex w={3/12} bgColor="gray.600" p="2" direction="column" borderRadius="xl" justify="space-between">
                <Flex direction="column" gap="1" overflowY="auto" maxH="sm">
                  {
                    video?.comments?.map((comment, i) => (
                      <CommentItem
                        key={i}
                        data={comment}
                      />
                    ))
                  }
                </Flex>
                <Box borderTop="1px" pt="4">
                  <form onSubmit={handleSubmit(onSubmitComment)}>
                    <Flex gap="2" direction="column">
                      <FormControl isInvalid={errors.comment}>
                        <Textarea
                          name="comment"
                          id="comment"
                          placeholder="Comment"
                          _placeholder={{color: 'white' }}
                          {...register('comment', { required: 'This field is required' })}
                          disabled={isSubmitting}
                        />
                        <FormErrorMessage>
                          {errors.comment && errors.comment.message}
                        </FormErrorMessage>
                      </FormControl>
                      <Flex direction="row" gap="2">
                        <FormControl isInvalid={errors.username}>
                            <Input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="Username"
                              _placeholder={{color: 'white' }}
                              {...register('username', { required: 'This field is required' })}
                              disabled={isSubmitting}
                            />
                            <FormErrorMessage>
                              {errors.username && errors.username.message}
                            </FormErrorMessage>
                        </FormControl>
                        <IconButton
                          type="submit"
                          aria-label='send comment'
                          icon={<Icon as={FiSend} />}
                          isLoading={isSubmitting}
                          />
                      </Flex>
                    </Flex>
                  </form>
                </Box>
              </Flex>
            </Flex>
            <Flex overflowX="auto" gap={2} pb="4">
              {
                video?.products?.map((product) => (
                  <ProductItem
                    key={product.id}
                    data={product}
                  />
                ))
              }
            </Flex>
          </>)
      }
    </Flex>
  )
}

export default Detail;