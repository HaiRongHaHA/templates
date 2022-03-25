import { ref } from 'vue'
import { defineStore } from 'pinia'
import apis from '@/api/apis'

interface IUserInfo {
  id: number | string
  nickname: string
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfo | null>(null)

  async function login() {
    try {
      await apis.user.login()
    } finally {
      userInfo.value = {
        id: 403,
        nickname: '哈哈'
      }
    }
  }

  async function logout() {
    try {
      await apis.user.logout()
    } finally {
      userInfo.value = null
    }
  }

  return { userInfo, login, logout }
})
