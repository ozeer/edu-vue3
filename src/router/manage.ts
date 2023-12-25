import ManageLayout from '@/components/layout/AppLayout.vue'
import { RouterView } from 'vue-router'
const manageRouter =
  // 管理端
  {
    path: '/manage/',
    component: ManageLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/HomePageView.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/user',
        name: 'user',
        component: RouterView,
        meta: { title: '用户管理' },
        children: [
          {
            path: 'blacklist',
            name: 'blacklist',
            component: () => import('../views/home/BlacklistView.vue'),
            meta: { title: '黑名单管理' }
          }
        ]
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouterView,
        meta: { title: '数据看板' },
        children: [
          {
            path: 'pv',
            name: 'pv',
            component: () => import('../views/home/DashboardView.vue'),
            meta: { title: '浏览量' }
          }
        ]
      }
    ]
  }
export default manageRouter
