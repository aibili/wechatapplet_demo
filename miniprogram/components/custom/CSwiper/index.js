const app = getApp();

Component({
  properties: {
    config: {
      type: Object,
      value: {}
    },
    detail: {
      type: Object,
      value: []
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