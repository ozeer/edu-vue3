/**
 * 资源管理相关接口
 */

import request from '@/utils/request'

/**
 * 资源列表接口
 * @returns
 */
export const getAll = () => {
  return request({
    method: 'GET',
    url: '/front/admin/resource/list'
  })
}
