import request from '@/utils/request'
// import Category from '@/views/layout/category.vue'

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
