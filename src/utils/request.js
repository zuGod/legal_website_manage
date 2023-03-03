// 基于axios封装的请求模块
import axios from 'axios'
// import JSONBig from 'json-bigint'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://localhost:3007' // 请求的基础路径
  // transformResponse: [function (data) {
  //   try {
  //     return JSONBig.stringify(data)
  //   } catch (err) {
  //     return data
  //   }
  // }]
})
// 请求拦截器
request.interceptors.request.use(
  // 所有请求会经过
  function (config) {
    const token = window.localStorage.getItem('token')
    if (token) {
      // 后端要求把需要授权的用户身份放到请求头中
      config.headers.Authorization = token
    }
    return config
  }
)

export default request
