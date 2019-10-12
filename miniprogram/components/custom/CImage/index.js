let app = getApp();

Component({
  properties: {
    config: {
      type: Object,
      value: {
        type: 6
      }
    },
    detail: {
      type: Object,
      value: [{
        componentId: "1607ce679abc444d95cd972806b3b639",
        id: "df5b36709f8a42ccac556261f418fd4d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "0",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191011/4b073ba2fe1147d385e93d4db505c0a5.jpeg"
      },
      {
        componentId: "1607ce679abc444d95cd972806b3b639",
        id: "df5b36709f8a42ccac556261f418fd4d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "0",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/fc19444eae89429992c7b0f589088c22.jpeg"
      },
      {
        componentId: "1607ce679abc444d95cd972806b3b639",
        id: "df5b36709f8a42ccac556261f418fd4d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "0",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/30e3931ac07d4c779fac88fe47c8a6dd.jpeg"
      },
      {
        componentId: "1607ce679abc444d95cd972806b3b639",
        id: "df5b36709f8a42ccac556261f418fd4d",
        linkTargetId: "",
        linkTargetName: "",
        linkType: 3,
        linkUrl: "",
        mgRight: "0",
        orgId: "81b69b451f5d4b13adce0d8687dc0c02",
        pageId: "",
        pageName: "",
        pageTitle: "",
        sort: 0,
        src: "https://qwyimg.do1.com.cn/fileweb/upload/img/81b69b451f5d4b13adce0d8687dc0c02/20191010/02f6dc40bece4ac5a9892301245ef976.jpeg"
      }]
    },
    authorized: {
      type: Boolean,
      value: false
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