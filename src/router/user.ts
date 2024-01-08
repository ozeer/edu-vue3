export default [
  {
    path: '/users',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '用户管理', icon: 'User' },
    children: [
      {
        name: 'users',
        path: '',
        component: () => import('../views/user/UserList.vue')
      },
      {
        name: 'user_profile',
        path: 'user/profile',
        component: () => import('../views/user/UserProfile.vue'),
        meta: { title: '用户详情', icon: 'User' }
      },
      {
        name: 'user_edit',
        path: 'user/edit',
        component: () => import('../views/user/UserEdit.vue'),
        meta: { title: '编辑用户', icon: 'User' }
      },
      {
        path: 'blacklist',
        name: 'blacklist',
        component: () => import('../views/home/BlacklistView.vue'),
        meta: { title: '黑名单管理', icon: 'User' }
      }
    ]
  }
]
