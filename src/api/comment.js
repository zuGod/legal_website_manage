import request from '@/utils/request'
// 评论信息
export const getComment = () => {
  return request({
    method: 'GET',
    url: '/my/getComment'
  })
}

// 发布评论
export const createComment = data => {
  return request({
    method: 'POST',
    url: '/my/createComment',
    data
  })
}
