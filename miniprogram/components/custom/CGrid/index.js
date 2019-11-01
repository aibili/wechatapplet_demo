// components/custom/CGrid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config: {
      type: Object,
      value: {}
    },
    detail: {
      type: Object,
      value: []
    },
  },
  data: {
    fixSize: false //如果有一个用了自定义图片,所有图标大小要适应
  },
  ready() {
    this.data.detail.some((val,index) => {
      if(val.navType == 3){
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
