import util from '../../utils/util.js';
const app = getApp();
const DATA_DEMO = [
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
    componentName:'cgrid',
    cofig:{
      num: 4,
      border: false,
      square: false,
      clickable: false,
      useslot: false
    },
    detail:[{
      id: "df5b36709f8a42ccac556261f418fd4d",
      customPic: "photo-o",
      navName: "导航1",
      navType: 2,
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/4b073ba2fe1147d385e93d4db505c0a5.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      customPic: "photo-o",
      navName: "导航2",
      navType: 2,
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/fc19444eae89429992c7b0f589088c22.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      customPic: "photo-o",
      navName: "导航3",
      navType: 2,
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/30e3931ac07d4c779fac88fe47c8a6dd.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      customPic: "photo-o",
      navName: "导航4",
      navType: 2,
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/02f6dc40bece4ac5a9892301245ef976.jpeg"
    }]
  },
  {
    componentName:'cimage',
    cofig:{
      type: 6
    },
    detail:[{
      id: "df5b36709f8a42ccac556261f418fd4d",
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/4b073ba2fe1147d385e93d4db505c0a5.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/fc19444eae89429992c7b0f589088c22.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/30e3931ac07d4c779fac88fe47c8a6dd.jpeg"
    },
    {
      id: "df5b36709f8a42ccac556261f418fd4d",
      src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/02f6dc40bece4ac5a9892301245ef976.jpeg"
    }]
  },
  {
    componentName:'cproduct',
    cofig:{
      isDisplayProductName: 1,
      isDisplayProductDetail: 1,
      isDisplayProductPrice: 1,
      isDisplayProductMessage: 1,
      listTemplate: 4 //哪个模板
    },
    detail:[{
      cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190829/9cd70a415f594a6fa4a05363eb4fad55.jpeg",
      id: "576bce4669fd4f048250f001051259e3",
      mark: {
        size: 'medium',
        type: '5',
        text: '最后3天，最后3天',
        color: '#fff',
        bgcolor:'#000',
        src: 'https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190817/0d86c788ede14da891bfd78f1ddf7f1e.jpeg'
      },
      price:{
        current: '12.08',
        delete:'1.00'
      },
      detail:{
        text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
      },
      message:{
        value:[{
          text:'广东广州',
          size:'30',
          color: '#ccc',
        },
        {
          text:'10/19周六',
          size:'30',
          color: '#ccc',
        }]
      },
      statistics:{
        name: 'like',
        size: '30',
        color:'red'
      },
      tags:{
        value:[{
          type:'plain',
          color:'#f2826a',
          text:'标签1'
        },
        {
          type:'round',
          color:'#f2826a',
          text:'标签2'
        },
        {
          type:'mark',
          color:'#f2826a',
          text:'标签3'
        }]
      },
      productName: "灰度环灰度环灰度环灰度环灰度环灰度环灰度环",
      refId: "0c1149937d2b4ebf982e2b2df6389dc0"
    },
    {
      cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190817/0d86c788ede14da891bfd78f1ddf7f1e.jpeg",
      id: "459cfa6e7cd0446dbaac19b5f84b81e2",
      mark: {
        size: 'large',
        type: '1',
        text: '文案',
        color: '#fff',
        bgcolor:'#000'
      },
      price:{
        current: '0.01',
        delete:'1.00'
      },
      detail:{
        text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
      },
      message:{
        value:[{
          text:'广东广州',
          size:'30',
          color: '#ccc',
        },
        {
          text:'10/19周六',
          size:'30',
          color: '#ccc',
        }]
      },
      statistics:{
        name: 'like',
        size: '30',
        color:'red'
      },
      productName: "测试预约给钱",
      refId: "481225325dd2455f9f6b72322c5bc529"
    },
    {
      cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
      id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
      mark: {
        size: 'large',
        type: '1',
        text: '文案文',
        color: '#fff',
        bgcolor:'#000'
      },
      price:{
        current: '0.01',
        delete:'1.00'
      },
      detail:{
        text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
      },
      message:{
        value:[{
          text:'广东广州',
          size:'30',
          color: '#ccc',
        },
        {
          text:'10/19周六',
          size:'30',
          color: '#ccc',
        }]
      },
      statistics:{
        name: 'like',
        size: '30',
        color:'red'
      },
      productName: "多规格_展示型",
      refId: "f8c1c6e773e24c3fadcd2080163402f4"
    },
    {
      cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
      id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
      mark: {
        size: 'large',
        type: '1',
        text: '文案文案',
        color: '#fff',
        bgcolor:'#000'
      },
      price:{
        current: '0.01',
        delete:'1.00'
      },
      detail:{
        text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
      },
      message:{
        value:[{
          text:'广东广州',
          size:'30',
          color: '#ccc',
        },
        {
          text:'10/19周六',
          size:'30',
          color: '#ccc',
        }]
      },
      statistics:{
        name: 'like',
        size: '30',
        color:'red'
      },
      productName: "多规格_展示型",
      refId: "f8c1c6e773e24c3fadcd2080163402f4"
    },
    {
      cover: "https://qwyimg.do1.com.cn/fileweb/upload/img/1dca4756172e43318391487a5a68d59c/20190805/108845bdf82242dda9f3cfc79825b7cc.jpeg",
      id: "f3ade0ed8eee47aaac5be4c2a2e5d98d",
      mark: {
        size: 'large',
        type: '1',
        text: '文案文案',
        color: '#fff',
        bgcolor:'#000'
      },
      price:{
        current: '0.01',
        delete:'1.00'
      },
      detail:{
        text:'这里是详情这里是详情这里是详情这里是详情这里是详情'
      },
      message:{
        value:[{
          text:'广东广州',
          size:'30',
          color: '#ccc',
        },
        {
          text:'10/19周六',
          size:'30',
          color: '#ccc',
        }]
      },
      statistics:{
        name: 'like',
        size: '30',
        color:'red'
      },
      productName: "多规格_展示型",
      refId: "f8c1c6e773e24c3fadcd2080163402f4"
    }]
  },
  {
    componentName:'cselect',
    cofig:{},
    detail:[{
      id: "fd88909b29d84ad388197a04a384ca5d",
      pageTitle: "车辆类型",
      data:[{
        id: 'paoche',
        name:'跑车',
        isSel: false
      },
      {
        id: 'xiaoche',
        name:'小车',
        isSel: false
      },
      {
        id: 'lanbojini',
        name:'兰博基尼',
        isSel: false
      }]
    },
    {

      id: "fd88909b29d84ad388197a04a384ca5d",
      pageTitle: "变速箱",
      data:[{
        id: 'zidong',
        name:'自动',
        isSel: false
      },
      {
        id: 'shoudong',
        name:'手动',
        isSel: false
      }]
    },
    {
      id: "fd88909b29d84ad388197a04a384ca5d",    
      pageTitle: "车龄",
      data:[{
        id: '1nian',
        name:'1年',
        isSel: false
      },
      {
        id: '3nian',
        name:'3年',
        isSel: false
      },
      {
        id: '3nianyishang',
        name:'3年以上',
        isSel: false
      }]
    }]
  },
  {
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
  },
  {
    componentName:'ctitle',
    cofig:{
      type: '3',
      content: '标题'
    },
    detail:[]
  }];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bg: {
      color: 'rgba(255,255,255,1)'
    },
    navbarHeight: app.globalData.navbarHeight,
    detail: DATA_DEMO,
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
