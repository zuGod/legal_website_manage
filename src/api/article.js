import request from '../utils/request'
// 分页文章信息
export const getArticleAPI = params => {
  return request({
    method: 'GET',
    url: '/my/articles',
    params
  })
}
// 文章分类列表
export const getArticleCate = params => {
  return request({
    method: 'GET',
    url: '/my/articleCate'
  })
}

// 删除文章
export const postDelArticle = data => {
  return request({
    method: 'POST',
    url: '/my/delArticle',
    data
  })
}

// 发布文章
export const postCreateArticle = data => {
  return request({
    method: 'POST',
    url: '/my/createArticle',
    data
  })
}
