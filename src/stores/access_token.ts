import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

interface Token {
  access_token: string | null
  refresh_token: string | null
}

export const useTokenStore = defineStore('access_token', () => {
  const token = computed<Token>(() => {
    try {
      return {
        access_token: sessionStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token')
      }
    } catch (err) {
      ElMessage.error('token获取失败' + err)
      throw err
    }
  })

  function saveToken(accessToken = '', refreshToken = '') {
    // 保存 access_token 到内存中
    sessionStorage.setItem('access_token', accessToken)
    // 保存 refresh_token 到本地存储中
    localStorage.setItem('refresh_token', refreshToken)
  }

  return { token, saveToken }
})
