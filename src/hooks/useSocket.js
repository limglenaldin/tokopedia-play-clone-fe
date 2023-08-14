// Third-party Libraries
import { io } from 'socket.io-client';

const useSocket = () => {
  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

  const socket = io(BASE_API_URL, {
    autoConnect: false
  })

  return { socket }
}

export default useSocket