import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('access_token', () => {
  const access_token = ref('')
  const token = computed(() => {
    try {
      return access_token.value || window.localStorage.getItem('access_token')
    } catch (err) {
      console.log('token获取失败' + err)
      throw err
    }
  })
  function saveToken(data: string) {
    access_token.value = data
    window.localStorage.setItem('access_token', data)
  }

  return { token, saveToken }
})
