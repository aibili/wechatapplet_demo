// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'release-a533c5'
});
const db = cloud.database()
const _ = db.command;


// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((reslove,reject) => {
    db.collection('user').add({
      data: {
        "openId": event.openId,
        "avatarUrl": event.avatarUrl,
        "city": event.city,
        "country": event.country,
        "gender": event.gender,
        "language": event.language,
        "nickName": event.nickName,
        "province": event.province
      }
    }).then(res => {
      reslove(res)
    }).catch(err => {
      reject(err);
    })
  })
}