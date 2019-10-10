import util from './utils/util.js';
App({
  globalData: {
    userInfo: null,
    openId: '',
    // 自定义导航栏高度
    navbarHeight: 0,
    // 手机状态栏高度
    statusbarHeight: 0,
    // 手机系统
    deviceSystem: ''
  },
  onLaunch: function () {
    this.getSystemInfo()
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
  // 获取系统信息
  getSystemInfo() {
    wx.getSystemInfo({
      success: (res) => {
        let device = res.platform;
        let statusBarH = res.statusBarHeight;
        // 自定义导航栏高度,ios设置40px,安卓端48px
        if (device === 'ios') {
          this.globalData.navbarHeight = statusBarH + 40;
        } else {
          this.globalData.navbarHeight = statusBarH + 48;
        }
        // 手机状态栏高度
        this.globalData.statusbarHeight = statusBarH;
        // 手机系统
        this.globalData.deviceSystem = device;
      }
    });

    // 检查手机系统是否为iphoneX之后的版本
    const isIphoneX = util.isIphoneX();
    wx.setStorageSync('isIphoneX', isIphoneX);
  }
})