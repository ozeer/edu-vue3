import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import { useTokenStore } from '@/stores/access_token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/UserLogin.vue')
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
          component: () => import('../views/IndexView.vue')
        },
        {
          name: 'ErrorPage',
          path: '/:xxx(.*)*',
          component: () => import('../views/errors/ErrorPage.vue')
        },
        {
          name: 'user_profile',
          path: 'user_profile',
          component: () => import('../views/user/UserProfile.vue')
        },
        {
          name: 'roles',
          path: 'roles',
          component: () => import('../views/permissions/RoleList.vue')
        },
        {
          name: 'menus',
          path: 'menu/list',
          component: () => import('../views/menu/MenuIndex.vue')
        },
        {
          name: 'menu_create',
          path: 'menu/create',
          component: () => import('../views/menu/MenuEdit.vue')
        },
        {
          name: 'menu_edit',
          path: 'menu/edit/:id',
          component: () => import('../views/menu/MenuEdit.vue')
        },
        {
          name: 'resources',
          path: 'resource/list',
          component: () => import('../views/resource/ResourceList.vue')
        },
        {
          name: 'users',
          path: 'users',
          component: () => import('../views/user/UserList.vue')
        },
        {
          name: 'user_edit',
          path: 'user_edit',
          component: () => import('../views/user/UserEdit.vue')
        },
        {
          name: 'courses',
          path: 'courses',
          component: () => import('../views/course/CourseList.vue')
        },
        {
          name: 'adv_list',
          path: 'adv_list',
          component: () => import('../views/adv/AdvList.vue')
        },
        {
          name: 'adv_space',
          path: 'adv_space',
          component: () => import('../views/adv/AdvSpace.vue')
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
