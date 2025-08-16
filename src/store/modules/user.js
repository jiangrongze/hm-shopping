import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
      // {
      //   token: '',
      //   userId: ''
      // }
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      console.log(obj)
      state.userInfo = obj
      setInfo(obj)
    }

  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      // 购物车信息要重置（跨模块调用 mutation）cart/setCartList
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {

  }
}
