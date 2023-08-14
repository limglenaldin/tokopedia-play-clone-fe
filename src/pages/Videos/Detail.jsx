// Built-in Libraries
import { useEffect, useState } from "react";

// Third-party Libraries
import { useParams, useHistory } from "react-router-dom";
import { AspectRatio, Box, Flex, FormControl, FormErrorMessage, Heading, Icon, IconButton, Input, Textarea } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'

// Icons
import { FiArrowLeft, FiSend } from "react-icons/fi";

// Components
import ProductItem from "../../components/Card/Product";
import CommentItem from "../../components/Card/Comment";
import Header from "../../components/Header";

// API
import apiV1 from "../../api/apiInstance";
import Loading from "../../components/Loading/Loading";

// Hooks
import useUsername from "../../hooks/useUsername";
import useSocket from "../../hooks/useSocket";

// Chakra Responsive
const flexContainerResponsive = {
  base: "column",
  xl: "row",
}

const videoContainerWidth = {
  base: "full",
  xl: 9 / 12
}

const commentContainerWidth = {
  base: "full",
  xl: 3 / 12
}

const titleFontSize = {
  base: "md",
  lg: "lg"
}

const Detail = () => {
  const { id } = useParams();
  let history = useHistory();

  const { username, setUsername } = useUsername()
  const { socket } = useSocket()

  const [video, setVideo] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      username: username !== 'guest' ? username : '',
      comment: ''
    }
  })

  useEffect(() => {
    const updateVideoView = async () => {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await apiV1.patch(`/videos/${id}`)
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
        })
        setComments(resComments.data?.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    updateVideoView()
    getVideoDetails()
    socket.connect()
  }, [])

  useEffect(() => {
    const getVideoComments = async () => {
      try {
        const resComments = await apiV1.get(`/videos/${id}/comments`)
  
        setComments(resComments.data?.data)
      } catch (error) {
        console.log(error)
      }
    }

    socket.on('newComment', () => {
      getVideoComments()
    })
  }, [id, socket])

  const handleClickBack = () => {
    history.push(`/`)
  }

  const onSubmitComment = async (data) => {
    try {
      const response = await apiV1.post(`/videos/${id}/comments`, data)
      if (response.status === 201) {
        reset({
          username: data.username,
          comment: ''
        })
        setUsername(data.username)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box minH='100vh' pb={4}>
      <Header
        username={username}
      />
    {
        loading
          ? <Loading />
          : <Flex direction="column" gap="6">
            <Flex gap="2" align="center">
              <IconButton
                aria-label="back to index"
                icon={<Icon as={FiArrowLeft} />}
                variant="unstyled"
                onClick={handleClickBack}
              />
              <Heading as="h3" size={titleFontSize}>{video?.title}</Heading>
            </Flex>
            <Flex direction={flexContainerResponsive} gap="4" height="min-content">
              <Box w={videoContainerWidth}>
                <AspectRatio ratio={16/9}>
                  <iframe
                    title={video?.title}
                    src={video?.videoUrl}
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Flex w={commentContainerWidth} bgColor="gray.600" p="2" direction="column" borderRadius="xl" justify="space-between" minH="sm">
                <Flex direction="column" gap="1" overflowY="auto" maxH="md">
                  {
                    comments?.map((comment) => (
                      <CommentItem
                        key={comment.id}
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
                          _disabled={isSubmitting}
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
                              placeholder="Name"
                              _placeholder={{color: 'white' }}
                              {...register('username', { required: 'This field is required' })}
                              readOnly={username !== 'guest' ? true : false}
                              _disabled={isSubmitting}
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
            <Flex overflowX="auto" gap="2" pb="4">
              {
                video?.products?.map((product) => (
                  <ProductItem
                    key={product.id}
                    data={product}
                  />
                ))
              }
            </Flex>
          </Flex>
      }
    </Box>
  )
}

export default Detail;