/**
 * 课程管理相关接口
 */

import request from '@/utils/request'

/**
 * 课程列表接口
 * @returns
 */
export const getCourseList = () => {
  return request({
    method: 'GET',
    url: '/front/admin/course/list'
  })
}
