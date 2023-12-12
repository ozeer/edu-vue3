import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/access_token'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'demo' }
})

request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {} as AxiosRequestHeaders
  }
  const store = useTokenStore()
  config.headers.Authorization = store.token

  return config
})

export default request
