/**
 * 资源类别相关接口
 */

import request from '@/utils/request'
import type { CommonResp } from '@/utils/response'

export type Condition = Partial<{
  current: number
  size: number
}>

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

export type QueryResult = {
  list: ResourceCategory[]
  total: number
}

/**
 * 查询资源类别分页信息
 */
type ResourceCategoryResp = CommonResp<{
  list: ResourceCategory[]
  total: number
}>
export const queryCategory = (condition: Condition) => {
  return request<ResourceCategoryResp>({
    method: 'POST',
    url: '/front/admin/resource_category/list',
    data: condition
  })
}

// 查询所有资源类别
type AllCategoryItemResp = CommonResp<{
  list: ResourceCategory[]
}>
export const getAllCategory = () => {
  return request<AllCategoryItemResp>({
    method: 'GET',
    url: '/front/admin/resource_category/all'
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
    url: '/front/admin/resource_category/edit',
    data: data
  })
}

export const deleteCategory = (id: number) => {
  return request<CommonResp<string>>({
    method: 'POST',
    url: '/front/admin/resource_category/delete',
    data: `id=${id}`
  })
}
