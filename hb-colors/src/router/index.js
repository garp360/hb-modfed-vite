import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
// const RedApp = defineAsyncComponent(() => import("red_app/RedApp"));
// const BlueApp = defineAsyncComponent(() => import("blue_app/BlueApp"));
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/red',
      name: 'red',
      component: () => import("red_app/RedApp")
    },
    {
      path: '/blue',
      name: 'blue',
      component: () => import("blue_app/BlueApp")
    }
  ]
})

export default router
