// Built-in Libraries
import { useState } from "react";

// Third-party Libraries
import { Box, Flex, FormControl, FormErrorMessage, Grid, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'

// Icons
import { FiSearch } from "react-icons/fi";

// Component
import Header from "../components/Header";
import VideoItem from "../components/Card/Video";
import VideoSkeleton from "../components/Loading/Skeleton/VideoSkeleton";

// Hooks
import useUsername from "../hooks/useUsername";
import apiV1 from "../api/apiInstance";

// Chakra Responsive
const gridColResponsive = {
  base: "repeat(2, 1fr)",
  sm: "repeat(3, 1fr)",
  md: "repeat(4, 1fr)",
  lg: "repeat(5, 1fr)",
  xl: "repeat(6, 1fr)"
}

const Search = () => {
  const { username } = useUsername();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      keyword: ''
    }
  })

  const onSubmitSearch = async (data) => {
    console.log(data)
    try {
      setLoading(true)
      const response = await apiV1.get(`/videos`, { params: { search: data.keyword } })
      setVideos(response.data?.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Flex minH='100vh' direction="column" pb="4" gap="8">
      <Header
        username={username}
      />
      <Box>
        <form onSubmit={handleSubmit(onSubmitSearch)}>
          <FormControl isInvalid={errors.keyword}>
            <InputGroup>
              <InputLeftElement>
                <Icon as={FiSearch} />
              </InputLeftElement>
              <Input
                type="text"
                name="keyword"
                id="keyword"
                placeholder="Put your keyword"
                {...register('keyword')}
                rounded="full"
                _disabled={isSubmitting}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.keyword && errors.keyword.message}
            </FormErrorMessage>
          </FormControl>
        </form>
      </Box>
      <Grid templateColumns={gridColResponsive} gap={4}>
        {
          loading
            ? <>
              <VideoSkeleton />
              <VideoSkeleton />
              <VideoSkeleton />
              <VideoSkeleton />
              <VideoSkeleton />
              <VideoSkeleton />
            </>
            : videos?.map((video) => (
                <VideoItem
                  key={video._id}
                  data={video}
                />
              ))
        }
      </Grid>
    </Flex>
  )
}

export default Search;