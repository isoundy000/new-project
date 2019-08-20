/*
直接更新state的多个方法对象
* */

export default{
 isLogin:0, //没登录
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}
