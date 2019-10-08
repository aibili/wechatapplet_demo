export function cloudrequest(f_name,param = {}){
  return new Promise((resolve,reject) => {
    wx.cloud.callFunction({
      name: f_name,
      data: {...param}
    }).then(res => {
      resolve(res.result)
    }).catch(err => {
      reject(err)
    })
  })
}