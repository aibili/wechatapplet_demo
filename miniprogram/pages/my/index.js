// pages/my/my.js
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
    let that = this;
    if (!app.globalData.openId) {
      wx.showLoading({
        title: '登录中...',
        mask: true
      })
      wx.cloud.callFunction({
        name: 'login'
      }).then(res => {
        console.warn('登陆成功', res)
        app.globalData.openId = res.result.openid;

        wx.cloud.callFunction({
          name: 'read',
          data: {
            openId: app.globalData.openId
          }
        }).then(res => {
          console.warn('查询成功', res);
          console.log(res);
          // wx.hideLoading();
          // if (!res.result.data.length){
          //   that.setData({
          //     btnFlag: true
          //   });
          // }else{
          //   that.setData({
          //     userPic: res.result.data[0].avatarUrl,
          //     userName: res.result.data[0].nickName
          //   })
          // }
        }).catch(err => {
          console.warn('查询失败', err);
          wx.hideLoading();
        })

      }).catch(err => {
        console.log('登陆失败', err)
      })
    }
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
    let res = JSON.parse(e.detail.rawData);
    let that = this;
    wx.cloud.callFunction({
      name: 'addUser',
      data: {
        openId: app.globalData.openId,
        avatarUrl: res.avatarUrl,
        city: res.city,
        country: res.country,
        gender: res.gender,
        language: res.language,
        nickName: res.nickName,
        province: res.province

      }
    }).then(req => {
      console.warn('插入成功',res)
      
      that.setData({
        userPic: res.avatarUrl,
        userName: res.nickName,
        btnFlag: false
      })
    });
  }
})