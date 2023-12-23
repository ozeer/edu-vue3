import { getAllCategory, submitEditCategory, deleteCategory } from '@/api/resource_category'
import type { ResourceCategory } from '@/api/resource_category'

import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

// 保存所有资源类别信息
export const allResourceCategory = ref([] as ResourceCategory[])
export const totalPage = ref(0)

// 获取所有资源类别信息
export const getAllResourceCategory = async (page = 1, size = 15) => {
  const { data } = await getAllCategory(page, size)

  if (data.code === 200) {
    allResourceCategory.value = data.data.list
    totalPage.value = data.data.total
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
    getAllResourceCategory()
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
    getAllResourceCategory()
  } else {
    ElMessage.error('删除失败')
  }
  return
}
