import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', component: () => import('../views/index.vue') },
    { path: '/sub', component: () => import('../views/sub.vue') }
  ]
})

export default router
