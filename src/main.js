// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import $ from 'jquery'
// 引入echarts
import echarts from 'echarts'
// 引入axios
import axios from 'axios'
// 挂载到vue原型链上


import Vuex from 'vuex'
import store from './store';
// Vue.prototype.axios = axios
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import {BASE_URL} from "./api";
Vue.prototype.$video = Video
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(iView);
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if(to.path=='/' || to.path=='/login' || to.path=='/forget' || to.path=='/register'){
  }else{
    /*判断token过期没有*/
    let config = {
      headers: {'token': localStorage.getItem('Authorization')}
    };
    axios.get(BASE_URL+'/api/token/check',config)
      .then(res => {
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
        next({
          path: '/login'
        })
      })
  }

  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('Authorization')){// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      console.log(to)
      console.log(to.fullPath)
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/*阻止點擊router-link报错*/
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
