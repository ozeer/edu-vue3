/**
 * 资源管理相关接口
 */

import request from '@/utils/request'
import type { CommonResp } from '@/utils/response'

export type Resource = {
  id: number
  name: string
  url: string
  category_id: number
  description: string
  operator: number
  creator: number
  created_at: string
  updated_at: string
}

/**
 * 资源列表接口
 * @returns
 */
export type Condition = Partial<{
  id: number
  name: string
  startCreateTime: string
  url: string
  category_id: number
  endCreateTime: string
  current: number
  size: number
}>

export type QueryResult = {
  current: number
  hitCount: number
  orders: any[]
  records: any[]
  pages: number
  size: number
  total: number
  searchCount: number
}

export const getAllResource = (condition: Condition) => {
  return request<CommonResp<QueryResult>>({
    method: 'POST',
    url: '/front/admin/resource/list',
    data: condition
  })
}

/**
 * 提交资源表单接口
 */
type ResourceForm = {
  name: string
  category_id: number
  url: string
  description: string
}
export const submitEditResource = (resource: ResourceForm) => {
  return request<CommonResp<string>>({
    method: 'POST',
    url: '/front/admin/resource/edit',
    data: resource
  })
}
