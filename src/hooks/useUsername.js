// Built-in Libraries
import { useEffect, useState } from "react"

const useUsername = () => {
  const initValue = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : 'guest'
  const [username, setUsername] = useState(initValue)

  useEffect(() => {
    sessionStorage.setItem('username', username)
  }, [username])
  
  return {username, setUsername}
}

export default useUsername