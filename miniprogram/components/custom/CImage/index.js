let app = getApp();

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
    opt: {}
  },
  methods: {
    //获取轮播图第一张图片高度作为swiper默认高度
    swiperImgLoad: function(e) {
      if (this.data.detail[0].src) {
        // 图片原始宽高
        let h = parseInt(e.detail.height);
        const w = parseInt(e.detail.width);
        // 图片页面显示宽度
        const img_w = parseInt(e.currentTarget.dataset.img_w);
        // 数据索引
        const index = e.currentTarget.dataset.index;

        let imgHeight = h * img_w / w;
        if (index === 0 || !this.data.imgHeight) {
          this.setData({
            imgHeight
          })
        }
      } else { // 如果第一张没上传，则默认取正方形
        let config = this.data.config;
        this.setData({
          imgHeight: 750 / config.type
        })
      }

    },
    openLink(e) {
      console.log('点击事件');
    }
  }
})