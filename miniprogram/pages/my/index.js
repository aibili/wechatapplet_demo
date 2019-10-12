
import api from '../../api/index';
const app = getApp();
Page({
  data: {
    bg: {
      color: 'rgba(255,255,255,0)'
    },
    navbarHeight: app.globalData.navbarHeight,
    userPic:'',
    userName:'',
    authFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
     // 获取用户信息
     wx.getSetting({
      success: res => {
        wx.hideLoading();
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                authFlag: true,
                userPic: res.userInfo.avatarUrl,
                userName: res.userInfo.nickName
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getInfo(e){
    if(Object.keys(e.detail).length == 1) return;
    wx.showLoading({
      title: '登录中...',
      mask: true
    })
    let userinfo = JSON.parse(e.detail.rawData);
    api.addUser({
      openId: app.globalData.openId,
      avatarUrl: userinfo.avatarUrl,
      city: userinfo.city,
      country: userinfo.country,
      gender: userinfo.gender,
      language: userinfo.language,
      nickName: userinfo.nickName,
      province: userinfo.province
    }).then(res => {
      wx.hideLoading();
      this.setData({
        userPic: userinfo.avatarUrl,
        userName: userinfo.nickName,
        authFlag: true
      })
    }).catch(err => {
      console.log(err);
    })
  }
})