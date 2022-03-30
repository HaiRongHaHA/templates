import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import Hooks from './hooks'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

Hooks(router)

export default router
