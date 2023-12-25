export default [
  {
    path: '/courses',
    component: () => import('../views/RouterView.vue'),
    meta: { title: '课程管理', icon: 'User' },
    children: [
      {
        name: 'courses',
        path: '',
        component: () => import('../views/course/CourseList.vue'),
        meta: { title: '课程列表', icon: 'User' }
      }
    ]
  }
]
