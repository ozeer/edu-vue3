/**
 * 资源管理相关接口
 */

import request from '@/utils/request'
import type { CommonResp } from '@/utils/response'

/**
 * 资源列表接口
 * @returns
 */
export type Condition = Partial<{
  id: number
  name: string
  startCreateTime: string
  url: string
  categoryId: string
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
