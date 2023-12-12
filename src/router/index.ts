import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import IndexView from '@/views/IndexView.vue'
import { useTokenStore } from '@/stores/access_token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        {
          name: 'default',
          path: '',
          component: IndexView
        },
        {
          name: 'ErrorPage',
          path: '/:xxx(.*)*',
          component: () => import('../views/errors/ErrorPageView.vue')
        },
        {
          name: 'roles',
          path: 'roles',
          component: () => import('../views/permissions/RoleView.vue')
        },
        {
          name: 'menus',
          path: 'menus',
          component: () => import('../views/permissions/MenuView.vue')
        },
        {
          name: 'resources',
          path: 'resources',
          component: () => import('../views/permissions/ResourceView.vue')
        },
        {
          name: 'users',
          path: 'users',
          component: () => import('../views/user/UserListView.vue')
        },
        {
          name: 'courses',
          path: 'courses',
          component: () => import('../views/course/CourseListView.vue')
        },
        {
          name: 'adv-list',
          path: 'adv-list',
          component: () => import('../views/adv/AdvListView.vue')
        },
        {
          name: 'adv-space',
          path: 'adv-space',
          component: () => import('../views/adv/AdvSpaceView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.requiresAuth)) {
    const store = useTokenStore()
    if (!store.token) {
      next({ name: 'login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})

export default router
