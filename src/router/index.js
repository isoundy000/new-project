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
import buqianRecord from '@/pages/myApp/buqianRecord'//我的应用--应用管理--补签消费记录路由
import abnormal from '@/pages/myApp/abnormal'//我的应用--应用管理--异常报警路由
import applicationMerge from '@/pages/myApp/applicationMerge'//我的应用--应用管理--应用合并路由
import messagePush from '@/pages/myApp/messagePush'//我的应用--应用管理--消息推送路由

import statistics from '@/pages/myApp/statistics'//我的应用--应用管理--统计路由
import billManagement from '@/pages/myApp/billManagement'//我的应用--账单管理路由
import billConsumptionRecord from '@/pages/myApp/billConsumptionRecord'//我的应用--账单管理--消费记录路由
import billInvest from '@/pages/myApp/billInvest'//我的应用--账单管理--充值记录路由
import publishingApplications from '@/pages/myApp/publishingApplications'//我的应用--发布路由
import realName from '@/pages/myApp/realName'//我的应用--实名认证
import personal from '@/pages/myApp/personal'//我的应用--实名认证--个人认证

import updateApplication from '@/pages/myApp/updateApplication'//我的应用--更新应用
import enterprise from '@/pages/myApp/enterprise'//企业签名
import enterprisePubish from '@/pages/myApp/enterprisePubish'//企业签名-发布应用




Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'superSignature',
      component: superSignature,  //没登录进来的页面
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/superSignatureAread',
      name: 'superSignatureAread',
      component: superSignatureAread, //登录成功后看到的页面
      meta: {
        requireAuth: true
      }
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
      meta: {
        requireAuth: true
      },
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
          meta: {
            requireAuth: true
          },
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
              path: '/buqianRecord',
              name: 'buqianRecord',
              component: buqianRecord

            },
            {
              path: '/statistics',
              name: 'statistics',
              component: statistics

            },
            {
              path: '/abnormal',
              name: 'abnormal',
              component: abnormal

            },
            {
              path: '/applicationMerge',
              name: 'applicationMerge',
              component: applicationMerge
            },
            {
              path: '/messagePush',
              name: 'messagePush',
              component: messagePush
            },
          ]
        },
        {
          path: '/updateApplication',
          name: 'updateApplication',
          component: updateApplication,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/billManagement',
          name: 'billManagement',
          component: billManagement,
          meta: {
            requireAuth: true
          },
          children:[
            {
              path: '/',
              name: 'billManagement',
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
          component: publishingApplications,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/realName',
          name: 'realName',
          component: realName,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/personal',
          name: 'personal',
          component: personal,
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: enterprise,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/enterprisePubish',
      name: 'enterprisePubish',
      component: enterprisePubish,
      meta: {
        requireAuth: true
      }
    },






  ]
})


export default router




