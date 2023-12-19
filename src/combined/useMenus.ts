import { getMenuList, menuEdit, menuDelete, getMenuInfo } from '@/api/menu'
import type { MenuItem, MenuForm } from '@/api/menu'
import router from '@/router/index'
import { ElMessage, ElMessageBox } from 'element-plus'
import { computed, ref } from 'vue'

export function useMenus() {
  // 先获取一级菜单
  // 1、获取所有菜单
  const allMenus = ref([] as MenuItem[])
  const getAllMenus = async () => {
    const { data } = await getMenuList()

    if (data.code === 200) {
      allMenus.value = data.data
    } else {
      ElMessage.error('获取菜单信息失败')
      throw new Error('获取菜单信息失败')
    }
  }

  // 2、过滤所有一级菜单
  const topMenus = computed(() => allMenus.value.filter((menu: MenuItem) => menu.level === 0))

  // 3、表单的响应数据
  const form = ref<MenuForm>({
    name: '',
    href: '',
    parent_id: -1,
    description: '',
    icon: '',
    show: 1,
    order_num: 0,
    id: 0
  })

  // 表单提交事件
  const onSubmit = async () => {
    // 检查必填字短
    if (!form.value.name || !form.value.href || !form.value.icon || !form.value.parent_id) {
      ElMessage.error('数据不能为空')
      return
    }

    const { data } = await menuEdit(form.value)

    if (data.code === 200) {
      ElMessage.success(`${msgText.value}成功！`)
      router.push({ name: 'menus' })
      return
    } else {
      ElMessage.success(`菜单信息${msgText.value}失败！`)
      throw new Error(`菜单信息${msgText.value}失败`)
    }
  }

  // 删除菜单
  const handleDeleteMenu = async (id: string) => {
    await ElMessageBox.confirm('确认要删除该菜单吗？', '删除提醒', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    }).catch(() => {
      ElMessage.info('删除操作被取消！')
      return new Promise(() => {})
    })

    const { data } = await menuDelete(id)

    if (data.code === 200) {
      ElMessage.success('删除成功！')
      getAllMenus()
    } else {
      ElMessage.error('菜单信息删除失败')
      throw new Error('菜单信息删除失败')
    }
  }

  const getMenuInfoById = async (id: string) => {
    if (!Number(id)) {
      isCreate.value = true
      return
    } else {
      isCreate.value = false
    }
    const { data } = await getMenuInfo(id)

    if (data.code === 200) {
      form.value = data.data.menuInfo
    } else {
      ElMessage.error('获取菜单信息失败')
      throw new Error('获取菜单信息失败')
    }
  }

  // 状态与提示文本
  const isCreate = ref(true)
  const msgText = computed(() => (isCreate.value ? '创建' : '更新'))

  return {
    allMenus,
    getAllMenus,
    topMenus,
    form,
    onSubmit,
    handleDeleteMenu,
    getMenuInfoById,
    msgText
  }
}
