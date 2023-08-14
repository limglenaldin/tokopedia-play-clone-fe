// Third-party Libraries
import moment from "moment/moment"

const useMoment = (time) => {
  return moment(time).fromNow()
}

export default useMoment