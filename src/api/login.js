import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
  // url: '/captcha/image',
  // method: 'get'
}
export const getSmgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
export const codeLogin = (mobile, smsCode) => {
  return request.post('passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
