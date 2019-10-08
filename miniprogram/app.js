import api from './api/index.js'
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'dev-dnk2g',
        traceUser: true,
      })
      setTimeout(() => {
        wx.cloud.callFunction({
          name: 'login'
        }).then(res => {
          console.warn('登录成功')
          this.globalData.openId = res.result.openid;
        }).catch(err => {
          console.warn('登录失败')
        })
      },200)
    }
  },
  globalData: {
    userInfo: null,
    openId: ''
  }
})