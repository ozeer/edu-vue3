import { getMenuList, menuEdit } from '@/api/menu'
import type { MenuItem, MenuForm } from '@/api/menu'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'

export function useMenus() {
  // 先获取一级菜单
  // 1、获取所有菜单
  const allMenus = ref()
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
  const topMenu = computed(() => allMenus.value.filter((menu: MenuItem) => menu.level === 0))

  // 3、表单的响应数据
  const form = ref<MenuForm>({
    name: '',
    href: '',
    parent_id: -1,
    description: '',
    icon: '',
    show: true,
    order_num: 0,
    id: 0
  })

  // 表单提交事件
  const onSubmit = async () => {
    const { data } = await menuEdit(form.value)

    if (data.code === 200) {
      router.push({ name: 'menus' })
    } else {
      throw new Error('菜单信息保存失败')
    }
  }

  return { allMenus, getAllMenus, topMenu, form, onSubmit }
}
