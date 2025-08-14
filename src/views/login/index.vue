<template>
  <div class="login">login
    <van-nav-bar
    title="会员登录"
    left-text="返回"
    right-text="按钮"
    left-arrow @click-left="onClickLeft"
    @click-right="onClickRight"
     />

    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img @click="getPicCode" v-if="picUrl" :src="picUrl" alt="">
        </div>
        <div class="form-item">
          <input v-model="smsCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode">
            {{ second === totalSeconds ?  '获取验证码' : second + '秒后重新发送'  }}</button>
        </div>
      </div>
      <div @click="login" class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
// import request from '@/utils/request'
import { codeLogin, getPicCode, getSmgCode } from '@/api/login'

export default {
  name: 'LoginPage',
  data () {
    return {
      // checked: true
      mobile: '',
      picCode: '',
      picKey: '',
      picUrl: '',
      totalSeconds: 60,
      second: 60,
      smsCode: '',
      timer: null
    }
  },
  methods: {
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$toast('请输入正确的手机验证码')
        // return
      }
      const res = await codeLogin(this.mobile, this.smsCode)
      console.log(res)
      this.$store.commit('user/setUserInfo', res.data)
      this.$toast('登录成功')
      // 进行判断，看地址栏有无回跳地址
      // 1 如果有 => 说明是其它页面，拦截到登录来的，需要回跳
      // 2 如果没有 => 正常去首页
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    },
    async getCode () {
      if (!this.validFn()) {
        return
      }
      // 发送短信验证码的逻辑
      // console.log('发送短信验证码', this.picCode)
      if (!this.timer && this.second === this.totalSeconds) {
        const res = await getSmgCode(this.picCode, this.picKey, this.mobile)
        console.log(res)
        this.$toast('短信已发送，注意查收')
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.second = this.totalSeconds
            this.timer = null
          }
        }, 1000)
      } else {
        Toast('请稍后再试')
      }
    },
    // 返回上一页
    onClickLeft () {
      Toast('返回')
      this.$router.go(-1) // 返回上一页
    },
    onClickRight () {
      this.$toast('按钮111')
      // Toast('按钮')
    },
    validFn () {
      // if (this.timer) {
      //   Toast('请稍后再试')
      //   return false
      // }

      if (this.mobile === '') {
        Toast('请输入手机号码')
        return false
      }
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        Toast('请输入正确的手机号码')
        return false
      }
      if (this.picCode === '') {
        Toast('请输入图形验证码')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        Toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    async getPicCode () {
      if (this.timer) {
        Toast('请稍后再试')
        return
      }
      try {
        // const res = await getPicCode()
        const { data: { base64, key } } = await getPicCode()
        this.picUrl = base64 // res.data.url
        this.picKey = key // res.data.key
        console.log('图形验证码:', this.picUrl, this.picKey)
      } catch (error) {
        console.error('获取图形验证码失败:', error)
      }
    }

  },
  async created () {
    // const res = await request.get('/cpatcha/image')
    // console.log(res)
    this.getPicCode()
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style>

</style>
