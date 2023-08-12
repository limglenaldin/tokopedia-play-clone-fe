// Built-in Libraries
import { useEffect, useState } from "react";

// Third-party Libraries
import { Flex, Grid, Text } from "@chakra-ui/react";

// Components
import VideoItem from "../components/Card/Video";

// API
import apiV1 from "../api/apiInstance";

// Chakra Responsive
const gridColResponsive = {
  base: "repeat(2, 1fr)",
  sm: "repeat(3, 1fr)",
  md: "repeat(4, 1fr)",
  lg: "repeat(5, 1fr)",
  xl: "repeat(6, 1fr)"
}

const Index = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await apiV1.get('/videos')
        
        setVideos(res.data?.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getVideos()
  })

  return (
    <Flex minH='100vh' direction="column">
      <Grid templateColumns={gridColResponsive} gap={4}>
        {
          loading
            ? <Text>Loading</Text>
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

export default Index;