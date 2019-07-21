// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'dev-dnk2g'
});
const db = cloud.database()
const _ = db.command;


// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((reslove, reject) => {
    db.collection('note').where({
      "_id": event.id
    }).remove().then(res => {
      reslove(res)
    }).catch(err => {
      reject(err);
    })
  })
}