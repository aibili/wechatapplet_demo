// components/custom/CSelect/index.js
const app = getApp();
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navbarHeight: app.globalData.navbarHeight,
    animation:'',
    selList:[]
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
    },
    onReset(){
      if(!this.data.selList.length) return;
      this.data.detail.forEach((val,index) => {
        val.data.forEach((_val,_index) => {
          _val.isSel = false
        })
      });
      this.setData({
        detail: this.data.detail,
        selList:[]
      });
    },
    onSure(){
      console.log(this.data.selList);
      this.onClose();
    },
    selItem(e){
      let index = e.target.dataset.index;
      let childindex = e.target.dataset.childindex;
      let item = this.data.detail[index].data[childindex];
      
      if(!item.isSel){
        this.data.selList.push({
          index: index,
          childindex: childindex,
          ...item
        })
      }else{
        this.data.selList.forEach((val,ind) => {
          if(val.id == item.id){
            this.data.selList.splice(ind,1)
          }
        });
      }
      let target = "detail["+ index + "].data["+ childindex + "].isSel";
      this.setData({
        [target]: !item.isSel,
        selList: this.data.selList
      });
    },
    delSel(e){
      let item = e.currentTarget.dataset.item
      this.data.selList.forEach((val,ind) => {
        if(val.id == item.id){
          this.data.selList.splice(ind,1)
        }
      });
      this.setData({
        selList: this.data.selList,
        ["detail["+ item.index + "].data["+ item.childindex + "].isSel"]:false
      });
    }
  }
})
