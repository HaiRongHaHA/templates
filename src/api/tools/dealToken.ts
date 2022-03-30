import { getStorage, removeStorage, setStorage } from '@/utils'

export function clearToken() {
  return removeStorage('token')
}

export function getToken() {
  return getStorage('token')
}

export function setToken(data: any) {
  return setStorage('token', data)
}
