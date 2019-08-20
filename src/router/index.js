import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import superSignature from '@/pages/superSignature/superSignature'
import superSignatureAread from '@/pages/superSignature/superSignatureAread'
import login from '@/pages/login/login'//登录路由
import register from '@/pages/register/register'//注册路由
import forget from '@/pages/forget/forget'//忘记密码路由
import myApp from '@/pages/myApp/myApp'//我的应用
import survey from '@/pages/myApp/survey'//我的应用--概况路由
import appManagement from '@/pages/myApp/appManagement'//我的应用--应用管理路由
import appManagementDetail from '@/pages/myApp/appManagementDetail'//我的应用--应用管理查看详情路由
import applicationProfile from '@/pages/myApp/applicationProfile'//我的应用--应用管理--应用简介路由
import versionRecord from '@/pages/myApp/versionRecord'//我的应用--应用管理--版本记录路由
import downLoadRecord from '@/pages/myApp/downLoadRecord'//我的应用--应用管理--下载记录路由
import consumptionRecord from '@/pages/myApp/consumptionRecord'//我的应用--应用管理--消费记录路由
import statistics from '@/pages/myApp/statistics'//我的应用--应用管理--统计路由
import billManagement from '@/pages/myApp/billManagement'//我的应用--账单管理路由
import billConsumptionRecord from '@/pages/myApp/billConsumptionRecord'//我的应用--账单管理--消费记录路由
import billInvest from '@/pages/myApp/billInvest'//我的应用--账单管理--充值记录路由
import publishingApplications from '@/pages/myApp/publishingApplications'//我的应用--发布路由
import realName from '@/pages/myApp/realName'//我的应用--实名认证
import personal from '@/pages/myApp/personal'//我的应用--实名认证--个人认证
import enterprise from '@/pages/myApp/enterprise'//我的应用--实名认证--企业认证



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'superSignature',
      component: superSignature
    },
    {
      path: '/superSignatureAread',
      name: 'superSignatureAread',
      component: superSignatureAread
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
    },
    {
      path: '/myApp',
      name: 'myApp',
      component: myApp,
      children:[
        {
          path: '/survey',
          name: 'survey',
          component: survey
        },
        {
          path: '/appManagement',
          name: 'appManagement',
          component: appManagement
        },
        {
          path: '/appManagementDetail',
          name: 'appManagementDetail',
          component: appManagementDetail,
          children:[
            {
              path: '/',
              name: 'applicationProfile',
              component: applicationProfile
            },
            {
              path: '/versionRecord',
              name: 'versionRecord',
              component: versionRecord
            },
            {
              path: '/downLoadRecord',
              name: 'downLoadRecord',
              component: downLoadRecord
            },
            {
              path: '/consumptionRecord',
              name: 'consumptionRecord',
              component: consumptionRecord
            },
            {
              path: '/statistics',
              name: 'statistics',
              component: statistics
            }
          ]
        },
        {
          path: '/billManagement',
          name: 'billManagement',
          component: billManagement,
          children:[
            {
              path: '/',
              name: 'billConsumptionRecord',
              component: billConsumptionRecord,
            },
            {
              path: '/billInvest',
              name: 'billInvest',
              component: billInvest,
            }
          ]
        },
        {
          path: '/publishingApplications',
          name: 'publishingApplications',
          component: publishingApplications
        },
        {
          path: '/realName',
          name: 'realName',
          component: realName
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal
        },
        {
          path: '/enterprise',
          name: 'enterprise',
          component: enterprise
        }






      ]
    },



  ]
})




