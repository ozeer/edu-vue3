import axios from 'axios'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'demo' }
})

export default request
