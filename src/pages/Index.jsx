// Built-in Libraries
// Third-party Libraries
import { Flex, Grid } from "@chakra-ui/react";
import VideoItem from "../components/Card/Video";

const Index = () => {
  return (
    <Flex minH='100vh' direction="column">
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </Grid>
    </Flex>
  )
}

export default Index;