/**
 * 广告管理相关接口
 */

import request from '@/utils/request'

/**
 * 广告列表接口
 * @returns
 */
export const getAdvList = () => {
  return request({
    method: 'GET',
    url: '/front/admin/adv/list'
  })
}

/**
 * 广告位管理接口
 * @returns
 */
export const getAdvSpace = () => {
  return request({
    method: 'GET',
    url: '/front/admin/adv/space'
  })
}
