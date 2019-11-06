const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarHeight: app.globalData.navbarHeight,
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  selectPart(e){
    let type = e.currentTarget.dataset.type;
    this.setData({
      detail:[{
        componentName:'cswiper',
        cofig:{
          type:'3'
        },
        detail:[{
          id: "fd88909b29d84ad388197a04a384ca5d",
          src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/6e5e4943a2a3451db7cc28d60d609608.jpeg"
        },
        {
          id: "fd88909b29d84ad388197a04a384ca5d",
          src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/c6a78b4b2d384be78c489bb4d0521d05.jpeg"
        },
        {
          id: "fd88909b29d84ad388197a04a384ca5d",
          src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/f2c228e40b96430e8b82a4a844a69a8e.jpeg"
        }]
      }]
    })
  }
})