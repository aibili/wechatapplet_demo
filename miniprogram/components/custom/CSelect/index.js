// components/custom/CSelect/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config: {
      type: Object,
      value: {
        type:'3'
      }
    },
    detail: {
      type: Object,
      value: [{
        componentId: "519d0ee8643b4c129d004c50f9e6b11b",
        id: "fd88909b29d84ad388197a04a384ca5d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "车辆类型",
        sort: 0,
        data:[{
          id: 'paoche',
          name:'跑车'
        },
        {
          id: 'paoche',
          name:'跑车'
        },
        {
          id: 'paoche',
          name:'跑车'
        }]
      },
      {
        componentId: "519d0ee8643b4c129d004c50f9e6b11b",
        id: "fd88909b29d84ad388197a04a384ca5d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "变速箱",
        sort: 0,
        data:[{
          id: 'paoche',
          name:'自动'
        },
        {
          id: 'paoche',
          name:'手动'
        }]
      },
      {
        componentId: "519d0ee8643b4c129d004c50f9e6b11b",
        id: "fd88909b29d84ad388197a04a384ca5d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "车龄",
        sort: 0,
        data:[{
          id: 'paoche',
          name:'1年'
        },
        {
          id: 'paoche',
          name:'3年'
        },
        {
          id: 'paoche',
          name:'3年以上'
        }]
      }]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navbarHeight: app.globalData.navbarHeight,
    animation:''
  },

  ready(){
    // 渲染一个动画
    this.animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
  },
  methods: {
    showPopup(){
      this.animation.top(0).step();
      this.setData({
        animation: this.animation.export()
      });
    
    },
    onClose(){
      this.animation.top("-100%").step();
      this.setData({
        animation: this.animation.export()
      });
    }
  }
})
