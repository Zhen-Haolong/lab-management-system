import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', redirect:'/manager/home'},
    {path: '/manager', component: () => import('../views/Manager.vue'), children: [
      {path: 'home', name: 'home', component: () => import('../views/Home.vue'),},
      {path: 'test1', name: 'test1', component: () => import('../views/Test1.vue'),},
      {path: 'membermanagement', name: 'membermanagement', component: () => import('../views/MemberManagement.vue'),},
    ]},
    {path: '/404', name: 'NotFound', component: () => import('../views/404.vue'),},
    { path: '/:pathMatch(.*)', redirect: '/404' },
  ],
})

export default router
