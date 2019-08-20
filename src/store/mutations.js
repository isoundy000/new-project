export default {
  changeLogin (state, user) {
    state.Authorization = user.Authorization;
    alert(user.Authorization+'000000000')
    localStorage.setItem('Authorization', user.Authorization);
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


