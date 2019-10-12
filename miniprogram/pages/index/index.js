const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bg: {
      color: 'rgba(255,255,255,1)'
    },
    navbarHeight: app.globalData.navbarHeight
  },
 
  onLoad: function (e) {},
  onReady: function () {},
  onShow: function () {},
  openItem(){
    wx.navigateTo({
      url: '/packageA/pages/chooseDifficult/index'
    });
  }
})
