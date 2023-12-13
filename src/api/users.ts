/**
 * 用户管理接口
 */

import request from '@/utils/request'
import { useTokenStore } from '@/stores/access_token'

// 用户登录 - 参数类型
type LoginInfo = {
  phone: string
  code?: string
  password: string
}

// 登录
export const login = (loginInfo: LoginInfo) => {
  return request({
    method: 'POST',
    url: '/front/admin/user/login',
    data: `phone=${loginInfo.phone}&password=${loginInfo.password}`
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/front/admin/user/getUserInfo'
  })
}

// 用户退出
export const logout = () => {
  return request({
    method: 'POST',
    url: '/front/admin/user/logout'
  })
}

// 用户管理
export const getUsers = () => {
  return request({
    method: 'GET',
    url: '/front/admin/user/list'
  })
}

// 刷新token
type RToken = {
  code: number
  data: any
  msg: string
}
export const refreshToken = () => {
  return request<RToken>({
    method: 'POST',
    url: '/front/admin/user/refresh_token',
    params: {
      refreshToken: useTokenStore().token
    }
  })
}
