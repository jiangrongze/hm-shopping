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
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img src="" alt="">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text">
          <button>获取验证码</button>
        </div>
      </div>
      <div class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import request from '@/utils/request'
export default {
  name: 'LoginPage',
  methods: {
    onClickLeft () {
      Toast('返回')
      this.$router.go(-1)
    },
    onClickRight () {
      Toast('按钮')
    }
  },
  async created () {
    const res = await request.get('/cpatcha/image')
    console.log(res)
  }
}
</script>

<style>

</style>
