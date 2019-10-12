
const DEFAULT_COLOR = '#F56262';
Component({
  properties: {
    config:{
      type: Object,
      value:{
        size: 'large',
        type: '1',
        text: '文案文案',
        color: '#fff',
        bgcolor:'#000',
        src:''
      }
    },
    size: {
      type: String,
      value: 'large', // 大小, 可选值为large medium
    },
    type: {
      type: String,
      value: '', // 类型，可选值为1 2 3 4   1=>新品 2=>NEW 3=>热卖 4=>HOT 5=>自定义图标地址
      observer: function(val) {
        if (val && val !== '1' && val !== '2' && val !== '3' && val !== '4') {
          this.setData({
            src: ''
          })
        }
      }
    }
  },
  data: {
    
  }
})