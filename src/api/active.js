import request from '@/utils/request'
export const getActive = () => {
  return request({
    method: 'GET',
    url: '/my/getActive'
  })
}

export const postActiveStatus = data => {
  return request({
    method: 'POST',
    url: '/my/postActiveStatus',
    data
  })
}
