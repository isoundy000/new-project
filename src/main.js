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

Vue.prototype.$video = Video
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(iView);
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if(localStorage.getItem('Authorization')){ //判断本地是否存在access_token
//       next();
//     }else {
//       if(to.path === '/login'){
//         next();
//       }else {
//         next({
//           path:'/login'
//         })
//       }
//     }
//   }
//   else {
//     next();
//   }
//   /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//   if(to.fullPath == "/login"){
//     if(localStorage.getItem('Authorization')){
//       next({
//         path:from.fullPath
//       });
//     }else {
//       next();
//     }
//   }
// });
//判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
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
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('Authorization');
//   console.log(token,!token)
//   console.log(to)
//   console.log(from)
//     if(token) {
//       next()
//     }else {
//       next('/')
//     }
//
//
//
//   // if (to.path === '/') {
//   //   next();
//   //   console.log('sy')
//   // } else {
//   //
//   //   if (token == 'null') {
//   //     console.log('未登录')
//   //     next('/');
//   //   } else {
//   //     console.log('登录了')
//   //     next();
//   //   }
//   // }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
