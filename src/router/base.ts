export default [
  {
    name: 'default',
    path: '',
    component: () => import('../views/DefaultPage.vue'),
    meta: { title: '默认页', icon: 'User' }
  },
  {
    name: 'error_page',
    path: '/:xxx(.*)*',
    component: () => import('../views/errors/ErrorPage.vue')
  }
]
