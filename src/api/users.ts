/**
 * 用户管理接口
 */

import request from '@/utils/request'
import { useTokenStore } from '@/stores/access_token'
import type { CommonResp } from '@/utils/response'

// 用户登录 - 参数类型
type LoginReq = {
  phone: string
  code?: string
  password: string
}

type LoginResp = CommonResp<{
  uid: string
  nick: string
  access_token: string
}>

// 登录
export const login = (loginInfo: LoginReq) => {
  return request<LoginResp>({
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

// 获取用户个人资料详情
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/front/admin/user/getUserProfile'
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
type RefreshToken = {
  code: number
  data: any
  msg: string
}
export const refreshToken = () => {
  return request<RefreshToken>({
    method: 'POST',
    url: '/front/admin/user/refresh_token',
    params: {
      refresh_token: useTokenStore().token
    }
  })
}
