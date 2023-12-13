/**
 * 权限管理相关接口
 */

import request from '@/utils/request'

/**
 * 角色列表接口
 * @returns
 */
export const getRoleList = () => {
  return request({
    method: 'GET',
    url: '/front/admin/permissions/roles'
  })
}

/**
 * 菜单列表接口
 * @returns
 */
export const getMenuList = () => {
  return request({
    method: 'GET',
    url: '/front/admin/permissions/menu'
  })
}

/**
 * 资源列表接口
 * @returns
 */
export const getResourceList = () => {
  return request({
    method: 'GET',
    url: '/front/admin/permissions/resource'
  })
}
