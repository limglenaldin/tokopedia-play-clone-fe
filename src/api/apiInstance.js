// Third-party Libraries
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

const apiV1 = axios.create({
    baseURL: `${BASE_API_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiV1;