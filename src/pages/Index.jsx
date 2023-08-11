// Built-in Libraries
// Third-party Libraries
import { Flex, Grid } from "@chakra-ui/react";
import VideoItem from "../components/Card/Video";

const Index = () => {
  const gridColResponsive = {
    base: "repeat(2, 1fr)",
    sm: "repeat(3, 1fr)",
    md: "repeat(4, 1fr)",
    lg: "repeat(5, 1fr)",
    xl: "repeat(6, 1fr)"
  }

  return (
    <Flex minH='100vh' direction="column">
      <Grid templateColumns={gridColResponsive} gap={4}>
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