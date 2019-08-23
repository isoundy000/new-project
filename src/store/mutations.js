export default {
  changeLogin (state, user) {
    state.Authorization = user.Authorization;
    alert(user.Authorization)
    localStorage.setItem('Authorization', user.Authorization);
  },
  set_money(state,balance){
    state.balance=balance
    localStorage.setItem('balance', balance);
  },
  set_userName(state,userName){
    state.userName=userName
    localStorage.setItem('userName', userName);
  },
  del_token(state) {
    state.Authorization = null
    state.userName=''
    state.balance=''
    localStorage.removeItem('Authorization')
    localStorage.removeItem('balance')
    localStorage.removeItem('userName')
  }

  // changeLogin(state,data){
  //   state.isLogin = data;
  // },
  // 修改token，并将token存入localStorage

  // set_uploadimg(state, file) {
  //   console.log(file)
  //   console.log(state.uploadImgUrls)
  //   const tmp = state.uploadImgUrls;
  //   tmp.push(file);
  //   console.log(file)
  //   console.log(state.uploadImgUrls)
  //   state.uploadImgUrls = tmp;
  // },
  // del_uploadimg(state, data) {
  //   state.uploadImgUrls = [...data];
  // },
  // receive_movie(state, {movie}) {
  //   state.movie = movie;
  // },
  // receive_list(state, {hotelList}) {
  //   state.hotelList = hotelList;
  // },
  // add(state){
  //   state.count++;
  //   localStorage.setItem('count',JSON.stringify(state.count))//存到本地，以免刷新数据消失
  // },
  // del(state){
  //   state.count--
  //   localStorage.setItem('count',JSON.stringify(state.count))
  // }
}


