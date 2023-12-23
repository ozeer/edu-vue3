import {
  getAllCategory,
  queryCategory,
  submitEditCategory,
  deleteCategory
} from '@/api/resource_category'
import type { ResourceCategory } from '@/api/resource_category'

import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

// 保存所有资源类别信息
export const allResourceCategory = ref([] as ResourceCategory[])
export const allCategoryItem = ref([] as ResourceCategory[])
export const currentPage = ref(1)
export const pageSize = ref(15)
export const total = ref(0)

// 查询资源类别信息
export const queryResourceCategory = async (page = currentPage, size = pageSize) => {
  const { data } = await queryCategory(page.value, size.value)

  if (data.code === 200) {
    allResourceCategory.value = data.data.list
    total.value = data.data.total
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

// 提交按钮事件处理
export const onSubmit = async () => {
  if (!form.name) {
    ElMessage.error('资源类别不能为空')
    return
  }
  const { data } = await submitEditCategory(form).finally(() => {
    dialogFormVisible.value = false
  })

  if (data.code === 200) {
    ElMessage.success(`${msgText.value}资源类型成功`)
    queryResourceCategory()
  } else {
    ElMessage.error(`${msgText.value}资源类型失败`)
  }
}

export const dialogFormVisible = ref(false)
export const form = reactive({
  name: '',
  sort: 0
})

export const isCreate = ref(true)
export const msgText = ref('')

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
