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
      meta: { requiresAuth: true, title: '首页' },
      children: [
        {
          name: 'default',
          path: '',
          component: () => import('../views/IndexView.vue'),
          meta: { title: '默认页' }
        },
        {
          name: 'error_page',
          path: '/:xxx(.*)*',
          component: () => import('../views/errors/ErrorPage.vue')
        },
        {
          name: 'user_profile',
          path: 'user/profile',
          component: () => import('../views/user/UserProfile.vue'),
          meta: { title: '用户详情' }
        },
        {
          name: 'roles',
          path: 'role/list',
          component: () => import('../views/permissions/RoleList.vue'),
          meta: { title: '角色列表' }
        },
        {
          name: 'menus',
          path: 'menu/list',
          component: () => import('../views/menu/MenuIndex.vue'),
          meta: { title: '菜单列表' }
        },
        {
          name: 'menu_create',
          path: 'menu/create',
          component: () => import('../views/menu/MenuEdit.vue'),
          meta: { title: '创建菜单' }
        },
        {
          name: 'menu_edit',
          path: 'menu/edit/:id',
          component: () => import('../views/menu/MenuEdit.vue'),
          meta: { title: '编辑菜单' }
        },
        {
          name: 'resources',
          path: 'resource/list',
          component: () => import('../views/resource/ResourceList.vue'),
          meta: { title: '资源列表' }
        },
        {
          name: 'users',
          path: 'user/list',
          component: () => import('../views/user/UserList.vue'),
          meta: { title: '用户列表' }
        },
        {
          name: 'user_edit',
          path: 'user/edit',
          component: () => import('../views/user/UserEdit.vue'),
          meta: { title: '编辑用户' }
        },
        {
          name: 'courses',
          path: 'course/list',
          component: () => import('../views/course/CourseList.vue'),
          meta: { title: '课程列表' }
        },
        {
          name: 'adv_list',
          path: 'adv/list',
          component: () => import('../views/adv/AdvList.vue'),
          meta: { title: '广告列表' }
        },
        {
          name: 'adv_space',
          path: 'adv/space',
          component: () => import('../views/adv/AdvSpace.vue'),
          meta: { title: '广告位管理' }
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
