/*
直接更新state的多个方法对象
* */

export default{
  balance:"",
  userName:'',
  newmobile:'',
  count:0,
  clickIndex:localStorage.getItem('clickIndex') ? localStorage.getItem('clickIndex') : '',
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}
