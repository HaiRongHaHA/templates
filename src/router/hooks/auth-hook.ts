import { getStorage } from '@/utils'
import { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import { clearPending } from '@/api/tools/cancelRepeatRquest'

export default (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    try {
      clearPending()

      const user = useUserStore()
      const { userInfo } = storeToRefs(user)
      const { login, getUserInfo } = user

      if (!getStorage('token')) {
        await login()
      }

      if (!userInfo.value) {
        getUserInfo()
      }

      // todo: pv埋点

      next()
    } catch (error) {
      // todo: 错误监控
    }
  })
}
