import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // 不走鉴权
  if (to.meta.notAuth) return next()

  try {
    next()
  } catch (error) {
    console.error(error)
    next(false)
  }
})

export default router
