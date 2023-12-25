export default [
  {
    name: 'roles',
    path: 'role/list',
    component: () => import('../views/permissions/RoleList.vue'),
    meta: { title: '角色列表', icon: 'User' }
  }
]
