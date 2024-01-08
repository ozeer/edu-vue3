export default [
  {
    path: '/resources',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '资源管理', icon: 'User' },
    children: [
      {
        name: 'resources',
        path: '',
        component: () => import('../views/resource/ResourceList.vue')
      },
      {
        name: 'resource_category',
        path: 'category',
        component: () => import('../views/resource/ResourceCategory.vue'),
        meta: { title: '资源类别列表', icon: 'User' }
      }
    ]
  }
]
