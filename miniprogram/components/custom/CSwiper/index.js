const app = getApp();

Component({
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
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/6e5e4943a2a3451db7cc28d60d609608.jpeg"
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
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/c6a78b4b2d384be78c489bb4d0521d05.jpeg"
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
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/f2c228e40b96430e8b82a4a844a69a8e.jpeg"
      }]
    },
    authorized: {
      type: Boolean,
      value: false
    }
  },

  data: {
    circular: true,
    duration: 1000,
    currentIndex: 0,
    swiperHeight: ''
  },

  methods: {
    openLink(e) {
      console.log('点击');
    },
    //获取轮播图第一张图片高度作为swiper默认高度
    swiperImgLoad: function(e) {
      // 图片原始宽高
      let h = parseInt(e.detail.height);
      const w = parseInt(e.detail.width);
      // 图片页面显示宽度
      const img_w = parseInt(e.currentTarget.dataset.img_w);
      // 数据索引
      const index = e.currentTarget.dataset.index;

      let swiperHeight = h * img_w / w;

      if (index === 0 || !this.data.swiperHeight) {
        this.setData({
          swiperHeight
        })
      }
    },
    // 改变轮播图的下标索引
    swiperChange(e) {
      this.setData({
        currentIndex: e.detail.current
      });
    }
  }
})