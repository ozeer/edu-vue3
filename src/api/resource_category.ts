/**
 * 资源类别相关接口
 */

import request from '@/utils/request'
import type { CommonResp } from '@/utils/response'

/**
 * 获取所有资源类别接口
 * @returns
 */
export type ResourceCategory = {
  id: number
  name: string
  selected: boolean
  sort: number
  operator: number
  creator: number
  created_at: string
  updated_at: string
}

type ResourceCategoryResp = CommonResp<{
  list: ResourceCategory[]
  total: number
}>
export const getAllCategory = (page = 1, size = 15) => {
  return request<ResourceCategoryResp>({
    method: 'GET',
    url: '/front/admin/resource/getAllCategory',
    params: {
      page,
      size
    }
  })
}

/**
 * 保存资源类别信息
 */
export type CategoryFormInfo = {
  name: string
  sort: number
}
export const submitEditCategory = (data: CategoryFormInfo) => {
  return request<CommonResp<string>>({
    method: 'POST',
    url: '/front/admin/resource/editCategory',
    data: data
  })
}

export const deleteCategory = (id: number) => {
  return request<CommonResp<string>>({
    method: 'POST',
    url: '/front/admin/resource/deleteCategory',
    data: `id=${id}`
  })
}
