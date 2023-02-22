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

export default request
