import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

interface Token {
  access_token: string | null
  refresh_token: string | null
}

export const useTokenStore = defineStore('access_token', () => {
  const access_token = ref('')
  const refresh_token = ref('')
  const token = computed<Token>(() => {
    try {
      return {
        access_token: access_token.value || window.sessionStorage.getItem('access_token'),
        refresh_token: access_token.value || window.localStorage.getItem('refresh_token')
      }
    } catch (err) {
      ElMessage.error('token获取失败' + err)
      window.sessionStorage.setItem('access_token', '')
      window.localStorage.setItem('refresh_token', '')
      throw err
    }
  })

  function saveToken(accessToken = '', refreshToken = '') {
    access_token.value = accessToken
    refresh_token.value = refreshToken
    // 保存 access_token 到内存中
    window.sessionStorage.setItem('access_token', accessToken)
    // 保存 refresh_token 到本地存储中
    window.localStorage.setItem('refresh_token', refreshToken)
  }

  return { token, saveToken }
})
