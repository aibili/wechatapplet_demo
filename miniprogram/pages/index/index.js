import util from '../../utils/util.js';
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bg: {
      color: 'rgba(255,255,255,1)'
    },
    navbarHeight: app.globalData.navbarHeight,
    list:[],
    isLoad: true
  },
 
  onLoad: function (e) {},
  onReady: function () {},
  onShow: function () {},
  openItem(){
    wx.navigateTo({
      url: '/packageA/pages/chooseDifficult/index'
    });
  },
  lower: util.debounce(function(e){
    console.log(e);
  }),
  lowerStop(){
    console.log('空');
  }
})
