import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'count',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/CountdownView.vue')
      )
    },
    {
      path: '/home',
      name: 'home',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/HomeView.vue')
      )
    },
    {
      path: '/about',
      name: 'about',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/AboutView.vue')
      )
    },
    {
      path: '/present',
      name: 'present',
      component: defineAsyncComponent(
        //@ts-ignore
        () => import('../views/PresentView.vue')
      )
    },
  ]
})

export default router
