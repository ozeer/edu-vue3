import request from '@/utils/request'
import type { CommonResp } from '@/utils/response'

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
  show: number
  creator: number
  operator: number
  created_at: string
  updated_at: string
  deleted_at: string
}

export const getMenuList = (page: number, size: number) => {
  return request<
    CommonResp<{
      list: MenuItem[]
      total: number
    }>
  >({
    method: 'GET',
    url: '/front/admin/menu/list',
    params: {
      page,
      size
    }
  })
}

export const getTopMenuList = () => {
  return request<
    CommonResp<{
      list: MenuItem[]
    }>
  >({
    method: 'GET',
    url: '/front/admin/menu/top'
  })
}

type SubMenuList = MenuItem & { subMenuList: SubMenuList[] }
type EditMenuInfo = CommonResp<{
  menuInfo: MenuItem
  parentMenuList: SubMenuList[]
}>
export const getMenuInfo = (id: string) => {
  return request<EditMenuInfo>({
    method: 'GET',
    url: '/front/admin/menu/info',
    params: {
      id
    }
  })
}

export type MenuForm = {
  id: number
  name: string
  href: string
  parent_id: number
  description: string
  icon: string
  show: number
  order_num: number
}

// type MenuForm = Partial<MenuItem>

// type MenuForm = Omit<MenuItem, 'created_at' | "updated_at"> & { id?: number }

// type MenuForm = Pick<
//   MenuItem,
//   'name' | 'parent_id' | 'href' | 'icon' | 'description' | 'show' | 'order_num'
// > & { id?: number }

export const menuEdit = (menuInfo: MenuForm) => {
  return request<CommonResp<[]>>({
    method: 'POST',
    url: '/front/admin/menu/edit',
    data: menuInfo
  })
}

export const menuDelete = (id: string) => {
  return request<CommonResp<[]>>({
    method: 'POST',
    url: '/front/admin/menu/del',
    data: `id=${id}`
  })
}
