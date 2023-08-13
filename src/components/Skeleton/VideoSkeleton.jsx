// Third-party Libraries
import { Skeleton } from "@chakra-ui/react"

// Chakra Responsive
const cardHeightResponsive = {
  base: "sm",
  lg: "md"
}

const VideoSkeleton = () => {
  return (
    <Skeleton height={cardHeightResponsive}/>
  )
}

export default VideoSkeleton