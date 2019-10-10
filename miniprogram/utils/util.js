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

export default {
  isIphoneX
}
