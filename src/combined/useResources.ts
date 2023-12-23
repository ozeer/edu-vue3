import { getAllResource } from '@/api/resources'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import type { Condition, QueryResult } from '@/api/resources'

export const currentPage = ref(1)
export const pageSize = ref(15)
export const total = ref(0)

// 查询条件
export const queryCondition = reactive<Condition>({
  name: '',
  url: '',
  category_id: 0,
  current: currentPage.value,
  size: pageSize.value
})

// 查询结果
export const queryResult = ref<QueryResult>({
  list: [],
  total: 0
})

// 查询方法
export const queryResources = async (params: Condition = {}) => {
  Object.assign(queryCondition, params)
  const { data } = await getAllResource(queryCondition)

  if (data.code === 200) {
    queryResult.value = data.data
    total.value = data.data.total
  } else {
    ElMessage.error('查询数据出错')
    throw new Error('查询数据出错')
  }
}
