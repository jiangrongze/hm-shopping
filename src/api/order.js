import request from '@/utils/request'
// 定单结算确认
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj

    }
  })
}
