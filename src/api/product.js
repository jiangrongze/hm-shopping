import request from '@/utils/request'

export const getProList = (obj) => {
  const { CategoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      CategoryId,
      goodsName,
      page
    }
  })
}
export const getProDetail = (goodsId) => {
  console.log('999999999999999999999999999999999999')
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}
