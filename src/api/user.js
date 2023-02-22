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
