
import api from '../../api/index';
const app = getApp();
Page({
  data: {
    userPic:'',
    userName:'',
    btnFlag: false
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
                userPic: res.userInfo.avatarUrl,
                userName: res.userInfo.nickName
              })
            }
          })
        }else{
          this.setData({
            btnFlag: true
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
    let userinfo = JSON.parse(e.detail.rawData);
    api.addUser({
      openId: app.globalData.openId,
      avatarUrl: res.avatarUrl,
      city: res.city,
      country: res.country,
      gender: res.gender,
      language: res.language,
      nickName: res.nickName,
      province: res.province
    }).then(res => {
      console.log(res);
      this.setData({
        userPic: userinfo.avatarUrl,
        userName: userinfo.nickName,
        btnFlag: false
      })
    }).catch(err => {
      console.log(err);
    })
  }
})