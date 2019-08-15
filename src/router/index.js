import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import superSignature from '@/pages/superSignature/superSignature'
import login from '@/pages/login/login'//登录路由
import register from '@/pages/register/register'//注册路由
import forget from '@/pages/forget/forget'//忘记密码路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'superSignature',
      component: superSignature
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    }
  ]
})
