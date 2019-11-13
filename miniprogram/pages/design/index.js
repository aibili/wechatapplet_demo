import {designData} from '../../dictionary/index';
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarHeight: app.globalData.navbarHeight,
    detail:[],
    maskFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  openMask(){
    this.setData({
      maskFlag: !this.data.maskFlag
    });
  },
  selectPart(e){
    //对应组件的类型
    let type = e.currentTarget.dataset.type;
    //对应组件的数据结构
    let item = designData[type];

    console.log(type)
    console.log(item)
    //这里不采用直接覆盖整个数组的方式，性能不太好
    //而是采用对应索引号更新的方式
    this.setData({
      ['detail['+this.data.detail.length+']']:item
    });

  }
})