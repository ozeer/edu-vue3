import axios, { type AxiosRequestHeaders } from 'axios'
import { useTokenStore } from '@/stores/access_token'
import { refreshToken } from '@/api/users'
import router from '@/router/index'
import { ElMessage } from 'element-plus'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'demo' }
})

// 请求拦截器
request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {} as AxiosRequestHeaders
  }
  const store = useTokenStore()
  config.headers.Authorization = store.token

  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const { data } = await refreshToken()
      if (data.code === 0) {
        // 成功
        // 保存新token
        useTokenStore().saveToken(data.data.access_token)
        // 重新请求之前的接口，并且把结果返回
        return request(error.config)
      } else {
        // 失败
        ElMessage.error('刷新token失败，需要重新登录')
        router.push('/login')
        return
      }
    }

    return Promise.reject(error)
  }
)

export default request
