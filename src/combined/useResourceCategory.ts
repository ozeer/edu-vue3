import { getAllCategory, queryCategory, deleteCategory } from '@/api/resource_category'
import type { ResourceCategory, QueryResult } from '@/api/resource_category'

import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'
import type { Condition } from '@/api/resource_category'

// 查询条件
export const queryCondition = reactive<Condition>({
  current: 1,
  size: 15
})

// 保存所有资源类别信息
export const allCategoryItem = ref([] as ResourceCategory[])
export const currentPage = ref(1)
export const pageSize = ref(15)

export const queryResult = ref<QueryResult>({
  list: [],
  total: 0
})

// 查询资源类别信息
export const queryResourceCategory = async (params: Condition = {}) => {
  Object.assign(queryCondition, params)
  const { data } = await queryCategory(queryCondition)

  if (data.code === 200) {
    queryResult.value = data.data
  } else {
    ElMessage.error('获取所有资源类别信息失败')
  }
}

// 获取所有资源类别信息
export const getAllCategoryItem = async () => {
  const { data } = await getAllCategory()

  if (data.code === 200) {
    allCategoryItem.value = data.data.list
  } else {
    ElMessage.error('获取所有资源类别信息失败')
  }
}

// 删除单个资源信息
export const handleDelete = async (id: number) => {
  await ElMessageBox.confirm('确认要删除该类别吗？', '删除提醒', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).catch(() => {
    ElMessage.info('删除操作被取消！')
    return new Promise(() => {})
  })

  const { data } = await deleteCategory(id)
  if (data.code === 200) {
    ElMessage.success('删除成功')
    queryResourceCategory()
  } else {
    ElMessage.error('删除失败')
  }
  return
}
