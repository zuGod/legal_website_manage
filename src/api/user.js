// 用户模块相关请求
import request from '@/utils/request'
// 用户登录
export const loginAPI = data => {
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}

// 获取用户信息
export const userInfoAPI = () => {
  return request({
    method: 'GET',
    url: '/my/userinfo'

  })
}

// 获取普通用户信息
export const regularInfo = params => {
  return request({
    method: 'GET',
    url: '/my/getRegularInfo',
    params
  })
}

// 跟新普通用户状态
export const logRegularInfo = params => {
  return request({
    method: 'GET',
    url: '/my/logRegularInfo',
    params
  })
}
