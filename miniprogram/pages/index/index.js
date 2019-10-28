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
    detail:[
    {
      componentName:'ccross_slip',
      cofig:{},
      detail:[{
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/fff3385a69ad4dbd9a6f8d3aba2a747e.jpeg"
      },
      {
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/db333bd3ebc948a7ad8b538ebd2cc0ba.jpeg"
      }]
    },
    {
      componentName:'ccross_slip',
      cofig:{},
      detail:[{
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/fff3385a69ad4dbd9a6f8d3aba2a747e.jpeg"
      },
      {
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/db333bd3ebc948a7ad8b538ebd2cc0ba.jpeg"
      }]
    }],
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
