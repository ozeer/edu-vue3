import { ref } from 'vue'
import request from '@/utils/request'

// 用户登录 - 参数类型
type LoginInfo = {
  phone: string
  code?: string
  password: string
}

// 用户登录 - 返回数据类型
type LoginRes = {
  msg: string
  code: number
  data: any
}

export const login = (loginInfo: LoginInfo) => {
  return request<LoginRes>({
    method: 'POST',
    url: '/front/admin/user/login',
    data: `phone=${loginInfo.phone}&password=${loginInfo.password}`
  })
}

// 获取用户信息
type UserInfoRes = {
  uid: string
  nick: string
  avatar: string
}

export const getUserInfo = () => {
  return request<UserInfoRes>({
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
