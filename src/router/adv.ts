export default [
  {
    path: '/adv',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '广告管理', icon: 'User' },
    children: [
      {
        name: 'adv_list',
        path: '',
        component: () => import('../views/adv/AdvList.vue')
      },
      {
        name: 'adv_space',
        path: 'space',
        component: () => import('../views/adv/AdvSpace.vue'),
        meta: { title: '广告位管理', icon: 'User' }
      }
    ]
  }
]
