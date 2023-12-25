export default [
  {
    path: '/menus',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '菜单列表', icon: 'User' },
    children: [
      {
        name: 'menus',
        path: '',
        component: () => import('../views/menu/MenuIndex.vue')
      },
      {
        name: 'menu_create',
        path: 'create',
        component: () => import('../views/menu/MenuEdit.vue'),
        meta: { title: '创建菜单', icon: 'User' }
      },
      {
        name: 'menu_edit',
        path: 'edit/:id',
        component: () => import('../views/menu/MenuEdit.vue'),
        meta: { title: '编辑菜单', icon: 'User' }
      }
    ]
  }
]
