import { getAll } from '@/api/resource'
import { ref } from 'vue'

export function useResource() {
  // 保存所有资源类别信息
  const allResourceCategory = ref()

  // 获取所有资源类别信息
  const getAllResourceCategory = async () => {
    const res = await getAll()
    console.log(res.data)
  }

  // 获取单个资源信息

  return {
    allResourceCategory,
    getAllResourceCategory
  }
}
