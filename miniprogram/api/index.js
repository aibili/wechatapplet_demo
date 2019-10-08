import {cloudrequest} from '../utils/cloudrequest.js';
export default {
  // 云开发-登录
  login: data => cloudrequest('login', data),
  // 云开发-读取用户授权信息
  read: data => cloudrequest('read', data),
  // 云开发-用户信息
  addUser: data => cloudrequest('addUser', data),
}