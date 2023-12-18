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
