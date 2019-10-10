let timer = null;

const app = getApp();
// 导航栏默认配置
const bgDefault = {
  url: '',
  size: '',
  color: '#fff'
};

// 搜索框默认配置
const searchDefault = {
  width: '444rpx',
  height: '64rpx',
  left: '10%',
  placeholder: '搜索'
}

Component({
  properties: {
    //导航栏背景图
    bg: {
      type: Object,
      observer(newVal) {
        let value = {
          ...this.data.bgOptions,
          ...newVal
        }
        this.setData({
          bgOptions: value
        })
      },
    },

    // 导航显示
    navShow: {
      type: Boolean,
      value: true
    },

    // 带搜索的还是不搜索的
    hasSearch: {
      type: Boolean,
      value: false
    },

    // 搜索框宽度,高度,距离左侧宽度
    search: {
      type: Object,
      value: searchDefault,
      observer(newVal) {
        let value = {
          ...searchDefault,
          ...newVal
        };
        this.setData({
          searchOptions: value
        });
      }
    },

    // 标题名字
    title: {
      type: String,
      value: ''
    },

    // 标题对齐方式
    titleAlign: {
      type: String,
      value: 'center'
    },

    // 是否开启返回按钮
    navBackShow: {
      type: Boolean,
      value: true
    },

    // 是否开启input监听
    inputFlag: {
      type: Boolean,
      value: true
    },

    // 是否开启input失焦监听
    blurFlag: {
      type: Boolean,
      value: true
    },

    // 隐藏动画开关
    animationFlag: {
      type: Boolean,
      value: false,
      observer: 'animateStart'
    }
  },

  data: {
    //背景配置
    bgOptions: bgDefault,
    // 搜索框默认配置 
    searchOptions: searchDefault,
    // 小程序自定义顶部导航高度(手机自带的状态栏高度+固定导航高度)
    navHeight: app.globalData.navbarHeight,
    // 手机自带的状态栏高度
    statusbarHeight: app.globalData.statusbarHeight,
    // 手机系统
    deviceSystem: app.globalData.deviceSystem,
    // 展示用的搜索框开关
    searchShow: false,
    // 搜索框文本
    searchText: '',
    // 返回按钮显示隐藏
    navBackFlag: false,
    // 返回按钮颜色
    backUrl: '/images/svg/icon_back.svg',
    // 标题颜色
    titleColor: '#000',
    // 动画
    animate: ''
  },

  ready() {
    if (!this.data.navBackShow) return;
    const pages = getCurrentPages();
    // 检测路由栈数量为2时自动打开返回按钮
    if (pages.length - 1) {
      this.setData({
        navBackFlag: true
      });
    }

    // 根据传入背景色的深浅切换返回按钮的颜色 
    if (this.data.bgOptions.color.indexOf('#') > -1) {
      this.setBackStyle(this.vcolorRgb(this.data.bgOptions.color));
    } else {
      this.setBackStyle(this.data.bgOptions.color);
    }

    // 渲染一个动画
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease'
    });
  },

  methods: {
    // 显示隐藏真正的搜索框
    handleClick() {
      this.setData({
        searchShow: true
      });
    },

    // 绑定搜索文本值
    handleValue(e) {
      this.setData({
        searchText: e.detail.value
      });
      if (!this.data.inputFlag) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.triggerEvent('input', {
          value: this.data.searchText
        });
      }, 300);
    },

    // 清除搜索文本
    clearSearch() {
      this.setData({
        searchText: ''
      }, () => {
        this.triggerEvent('clear');
      });
    },

    // 导航后退
    navBack() {
      if(this.backIndex){
        wx.navigateTo({
          url: '/pages/index/index'
        });
      }else{
        setTimeout(() => {
          wx.navigateBack();
        }, 200);
      }
    },

    // 失去焦点
    emitBlurEvent() {
      if (!this.data.searchText) {
        this.setData({
          searchShow: false
        });
      }
      if (!this.data.blurFlag) return;
      this.triggerEvent('blur', {
        value: this.data.searchText
      });
    },

    // 16进制颜色转换为rgb
    vcolorRgb(sColor) {
      sColor = sColor.toLowerCase();
      //十六进制颜色值的正则表达式
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是16进制颜色
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          let sColorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgb(" + sColorChange.join(",") + ")";
      }
      return sColor;
    },

    // 设置返回按钮样式
    setBackStyle(color) {
      let RgbValueArry;
      if (color.indexOf('a') > -1) {
        RgbValueArry = color.replace("rgba(", "").replace(")", "").split(",");
      } else {
        RgbValueArry = color.replace("rgb(", "").replace(")", "").split(",");
      }
      let grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;
      let result = grayLevel >= 192;
      this.setData({
        backUrl: result ? '/images/svg/icon_back.svg' : '/images/svg/icon_back_white.svg',
        titleColor: result ? '#000' : '#fff'
      });
    },

    // 导航栏显示隐藏动画
    animateStart() {
      let slideH = this.data.navHeight;

      if (this.data.animationFlag) {
        this.animation.translate(0, -slideH).step();
      } else {
        this.animation.translate(0, 0).step();
      }

      this.setData({
        animate: this.animation.export()
      });
    }
  }
})