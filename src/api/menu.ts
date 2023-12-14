import request from '@/utils/request'

type CommonResp<T> = {
  code: number
  msg: string
  data: T
}

/**
 * 菜单列表接口
 * @returns
 */
export type MenuItem = {
  id: number
  name: string
  description: string
  href: string
  icon: string
  level: number
  order_num: number
  parent_id: number
  show: boolean
  creator: number
  operator: number
  created_at: string
  updated_at: string
  deleted_at: string
}

export const getMenuList = () => {
  return request<CommonResp<MenuItem[]>>({
    method: 'GET',
    url: '/front/admin/menu/list'
  })
}

type MenuForm = {
  id: number
  name: string
  description: string
  href: string
  icon: string
  order_num: number
  parent_id: number
  show: boolean
}

// type MenuForm = Partial<MenuItem>

// type MenuForm = Omit<MenuItem, 'created_at' | "updated_at"> & { id?: number }

// type MenuForm = Pick<
//   MenuItem,
//   'name' | 'parent_id' | 'href' | 'icon' | 'description' | 'show' | 'order_num'
// > & { id?: number }

export const menuEdit = (menuInfo: MenuForm) => {
  return request({
    method: 'POST',
    url: '/front/admin/menu/edit',
    data: menuInfo
  })
}
