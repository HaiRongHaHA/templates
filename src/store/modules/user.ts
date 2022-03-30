import { ref } from 'vue'
import { defineStore } from 'pinia'
import user from '@/api/modules/user'
import { setToken, clearToken } from '@/api/tools/dealToken'

interface IUserInfo {
  id: number | string
  nickname: string
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfo | null>(null)

  async function login() {
    try {
      await user.login()
    } catch {
    } finally {
      setToken(true)
    }
  }

  async function logout() {
    try {
      await user.logout()
    } finally {
      userInfo.value = null
      clearToken()
    }
  }

  async function getUserInfo() {
    // api ……
    const data = {
      id: 403,
      nickname: '哈哈'
    }
    userInfo.value = data
  }

  return { userInfo, login, logout, getUserInfo }
})
