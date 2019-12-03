import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'superSignature',
      component: () => import('@/pages/superSignature/superSignature'), //登录
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/superSignatureAread',
      name: 'superSignatureAread',
      component: () => import('@/pages/superSignature/superSignatureAread'), //登录
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/login'), //登录
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/register/register'),
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/pages/forget/forget'),
    },
    {
      path: '/myApp',
      name: 'myApp',
      component: () => import('@/pages/myApp/myApp'),
      meta: {
        requireAuth: true
      },
      children:[
        {
          path: '/survey',
          name: 'survey',
          component: () => import('@/pages/myApp/survey'),
        },
        {
          path: '/appManagement',
          name: 'appManagement',
          component: () => import('@/pages/myApp/appManagement'),
        },
        {
          path: '/appManagementDetail',
          name: 'appManagementDetail',
          component: () => import('@/pages/myApp/appManagementDetail'),
          meta: {
            requireAuth: true
          },
          children:[
            {
              path: '/',
              name: 'applicationProfile',
              component: () => import('@/pages/myApp/applicationProfile'),

            },
            {
              path: '/versionRecord',
              name: 'versionRecord',
              component: () => import('@/pages/myApp/versionRecord'),

            },
            {
              path: '/downLoadRecord',
              name: 'downLoadRecord',
              component: () => import('@/pages/myApp/downLoadRecord'),

            },
            {
              path: '/consumptionRecord',
              name: 'consumptionRecord',
              component: () => import('@/pages/myApp/consumptionRecord'),

            },
            {
              path: '/buqianRecord',
              name: 'buqianRecord',
              component: () => import('@/pages/myApp/buqianRecord'),

            },
            {
              path: '/statistics',
              name: 'statistics',
              component: () => import('@/pages/myApp/statistics'),

            },
            {
              path: '/abnormal',
              name: 'abnormal',
              component: () => import('@/pages/myApp/abnormal'),

            },
            {
              path: '/applicationMerge',
              name: 'applicationMerge',
              component: () => import('@/pages/myApp/applicationMerge'),
            },
            {
              path: '/messagePush',
              name: 'messagePush',
              component: () => import('@/pages/myApp/messagePush'),
            },
          ]
        },
        {
          path: '/updateApplication',
          name: 'updateApplication',
          component: () => import('@/pages/myApp/updateApplication'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/billManagement',
          name: 'billManagement',
          component: () => import('@/pages/myApp/billManagement'),
          meta: {
            requireAuth: true
          },
          children:[
            {
              path: '/',
              name: 'billManagement',
              component: () => import('@/pages/myApp/billConsumptionRecord'),
            },
            {
              path: '/billInvest',
              name: 'billInvest',
              component: () => import('@/pages/myApp/billInvest'),
            }
          ]
        },
        {
          path: '/publishingApplications',
          name: 'publishingApplications',
          component: () => import('@/pages/myApp/publishingApplications'),
          meta: {
            requireAuth: true
          }
        },

        {
          path: '/personal',
          name: 'personal',
          component: () => import('@/pages/myApp/personal'),
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/realName',
      name: 'realName',
      component: () => import('@/pages/myApp/realName'),
    },
    {
      path: '/enterpriseAuthentication',
      name: 'enterpriseAuthentication',
      component: () => import('@/pages/myApp/enterpriseAuthentication'),
    },
    {
      path: '/personAuthentication',
      name: 'personAuthentication',
      component: () => import('@/pages/myApp/personAuthentication'),
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('@/pages/myApp/enterprise'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/enterprisePubish',
      name: 'enterprisePubish',
      component: () => import('@/pages/myApp/enterprisePubish'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/encapsulationindex',
      name: 'encapsulationindex',
      component: () => import('@/pages/encapsulation/encapsulationindex'),
      meta: {
        requireAuth: true
      },
      children:[
        {
          path: '/',
          name: 'applist',
          component: () => import('@/pages/encapsulation/applist'),
        },
        {
          path: '/noFlash',
          name: 'noFlash',
          component: () => import('@/pages/encapsulation/noFlash'),
        },
        {
          path: '/ordinary',
          name: 'ordinary',
          component: () => import('@/pages/encapsulation/ordinary'),
          children:[
            {
              path: '/',
              name: 'ordinaryInformation',
              component: () => import('@/pages/encapsulation/ordinaryInformation'),
              meta: {
                keepAlive: true
              }
            },
            {
              path: '/ordinaryIcon',
              name: 'ordinaryIcon',
              component: () => import('@/pages/encapsulation/ordinaryIcon'),
              meta: {
                keepAlive: true
              }
            },
            {
              path: '/ordinaryConfig',
              name: 'ordinaryConfig',
              component: () => import('@/pages/encapsulation/ordinaryConfig'),
              meta: {
                keepAlive: true
              }
            },
            {
              path: '/ordinaryChoose',
              name: 'ordinaryChoose',
              component: () => import('@/pages/encapsulation/ordinaryChoose'),
              meta: {
                keepAlive: true
              }
            },
            {
              path: '/ordinaryDownApp',
              name: 'ordinaryDownApp',
              component: () => import('@/pages/encapsulation/ordinaryDownApp'),
              meta: {
                keepAlive: true
              }
            },


          ]
        },


      ]
    },
    {
      path: '/down',
      name: 'down',
      component: () => import('@/pages/down/down'),
    },
    {
      path: '/examine',
      name: 'examine',
      component: () => import('@/pages/myApp/examine'),
    },

    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/pages/pay/pay'),
    },
    {
      path: '/privatePool',
      name: 'privatePool',
      component: () => import('@/pages/privatePool/privatePool'),

    }








  ]
})


export default router




