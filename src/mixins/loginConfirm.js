export default {
  // 此处编写的就是 Vue组件实例的配置项，通过一定的语法，可以直接混入到组件内部
  // data methods computed 生命周期函数 ...
  // 注意点：
  // 1.如果此处和组件内，提供了同名的 data 或 methods,则组件内优先级更高
  // 2.如果编写了生命周期函数，则mixins中的生命周期函数和页面的生命周期函数会同数组管理统一执行
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    sayHi () {
      console.log('你好')
    },
    loginConfirm () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能操作',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            // this.$router.push('/login')
            // 如果希望，跳转到登录=>登录后能回跳回来，需要在跳转去携带参数（当前的路径
            // this.$route.fullpath (会包含查询参数)
            // this.$router.push({
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
          })
        return true
      }
      return false
    }
  },
  created () {
    console.log('哈哈')
  }
}
