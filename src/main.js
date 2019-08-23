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
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(iView);
Vue.config.productionTip = false

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {



  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null'||token === '' ) {
      next('/');
      // alert('2222'+token)
      // alert('2222'+typeof(token))
    } else {
      // alert('3333'+token)
      // alert("3333"+typeof(token))
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
