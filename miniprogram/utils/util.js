// 判断手机型号是否属于iPhoneX / iPhoneXS / iPhoneXR / iPhoneXS MAX
function isIphoneX() {
  const reg = /iPhone X/;
  try {
    const model = wx.getSystemInfoSync().model;
    return reg.test(model);
  } catch (error) {
    console.error(error)
  }
}

// 防抖
function debounce(fn) {
  let timer = null;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this,...arguments);
    },1000)
  }
}

export default {
  isIphoneX,
  debounce
}
