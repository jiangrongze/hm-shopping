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

  },
  getters: {

  }
}
