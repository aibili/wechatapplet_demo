// components/custom/CGrid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config: {
      type: Object,
      value: {
        num: 4,
        border: false,
        square: false,
        clickable: false,
        useslot: false
      }
    },
    detail: {
      type: Object,
      value: [{
        componentId: "1607ce679abc444d95cd972806b3b639",
        id: "df5b36709f8a42ccac556261f418fd4d",
        linkTargetId: "photo-o",
        linkTargetName: "导航1",
        linkType: 2,
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
        linkTargetId: "photo-o",
        linkTargetName: "导航2",
        linkType: 2,
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
        linkTargetId: "photo-o",
        linkTargetName: "导航3",
        linkType: 2,
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
        linkTargetId: "photo-o",
        linkTargetName: "导航4",
        linkType: 2,
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
  },
  data: {
    fixSize: false //如果有一个用了自定义图片,所有图标大小要适应
  },
  ready() {
    this.data.detail.some((val,index) => {
      if(val.linkType == 3){
        this.setData({
          fixSize: true
        });
        return true;
      }
    })
  },
  methods: {

  }
})
