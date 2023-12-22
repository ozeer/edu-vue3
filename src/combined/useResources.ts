import { getAllResource, type Condition, type QueryResult } from '@/api/resources'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

// 查询条件
export const queryCondition = reactive<Condition>({
  name: '',
  url: '',
  categoryId: '',
  current: 1,
  size: 15
})

// 查询结果
export const queryResult = ref<QueryResult>({
  current: 1,
  records: [],
  size: 0,
  total: 2,
  hitCount: 0,
  orders: [],
  pages: 0,
  searchCount: 0
})

// 查询方法
export const queryResources = async (params: Condition = {}) => {
  Object.assign(queryCondition, params)
  const { data } = await getAllResource(queryCondition)

  if (data.code === 200) {
    queryResult.value = data.data
  } else {
    ElMessage.error('查询数据出错')
    throw new Error('查询数据出错')
  }
}
