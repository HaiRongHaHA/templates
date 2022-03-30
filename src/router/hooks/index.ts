import authHook from './auth-hook'
import { Router } from 'vue-router'

export default (router: Router) => {
  authHook(router)
}
