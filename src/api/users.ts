import request from '@/utils/request'

// 用户登录 - 参数类型
type LoginInfo = {
  phone: string
  code?: string
  password: string
}

// 用户登录 - 返回数据类型
type LoginResult = {
  msg: string
  code: number
  data: any
}

export const login = (loginInfo: LoginInfo) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/front/admin/user/login',
    data: `phone=${loginInfo.phone}&password=${loginInfo.password}`
  })
}
