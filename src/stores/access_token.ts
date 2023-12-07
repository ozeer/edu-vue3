import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

interface Token {
  token: string
  is_first_login: boolean
}

export const useTokenStore = defineStore('access_token', () => {
  const tokenJson = ref('')
  const token = computed<Token>(() => {
    try {
      return JSON.parse(tokenJson.value || '{}')
    } catch (err) {
      ElMessage.error('json字符串格式不对,解析失败')
      throw err
    }
  })
  function saveToken(data: string) {
    tokenJson.value = data
    window.localStorage.setItem('access_token', '123')
  }

  return { token, saveToken }
})
