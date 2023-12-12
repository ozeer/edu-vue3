import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const useTokenStore = defineStore('access_token', () => {
  const tokenJson = ref('')
  const token = computed(() => {
    try {
      return tokenJson.value || ''
    } catch (err) {
      ElMessage.error('json字符串格式不对,解析失败')
      throw err
    }
  })
  function saveToken(data: string) {
    tokenJson.value = data
    window.localStorage.setItem('access_token', data)
  }

  return { token, saveToken }
})
