// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import menus from './menu'
import adv from './adv'
import user from './user'
import course from './course'
import resource from './resource'
import roles from './roles'
import base from './base'

// 使用路由项目类型声明一个路由数组
const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404NotFound.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/UserLogin.vue')
  },
  {
    path: '/',
    name: 'home',
    component: AppLayout,
    meta: { requiresAuth: true, title: '首页', icon: 'User' },
    children: [...base, ...menus, ...adv, ...user, ...course, ...resource, ...roles]
  }
]

// 将路由数组导出给其他模块使用
export default routes
