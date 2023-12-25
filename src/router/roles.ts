export default [
  {
    path: '/roles',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '角色管理', icon: 'User' },
    children: [
      {
        name: 'roles',
        path: '',
        component: () => import('../views/permissions/RoleList.vue'),
        meta: { title: '角色列表', icon: 'User' }
      }
    ]
  }
]
