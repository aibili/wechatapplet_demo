const app = getApp();

Component({
  properties: {
    config: {
      type: Object,
      value: {}
    },
    detail: {
      type: Object,
      value: [{
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/fff3385a69ad4dbd9a6f8d3aba2a747e.jpeg"
      },
      {
        id: "5c52610d310b4752babadf7774fbb2b6",
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/db333bd3ebc948a7ad8b538ebd2cc0ba.jpeg"
      }]
    }
  },
  data: {
    swiperHeight: {},
    opt: {}
  },
  methods: {
    openLink(e) {
      console.log('点击事件');
    },
    //获取轮播图第一张图片高度作为swiper默认高度
    swiperImgLoad: function(e) {
      // 图片原始宽高
      let h = parseInt(e.detail.height);
      const w = parseInt(e.detail.width);
      // 图片页面显示高度
      const img_h = parseInt(e.currentTarget.dataset.img_h);
      // 数据索引
      const index = e.currentTarget.dataset.index;
      let opt = this.data.opt;
      opt[index] = {
        h,
        w,
        imgWidth: w * img_h / h
      }
      this.setData({
        opt
      })
    }
  }
})