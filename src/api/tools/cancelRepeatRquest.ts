import qs from 'qs'
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { formatJson } from '@/utils'

const pending = new Map()

function generateReqKey(config: AxiosRequestConfig) {
  config.data = formatJson(config.data)
  const { method, url, params, data } = config
  return [method, url, qs.stringify(params), qs.stringify(data)].join('&')
}

export function addPending(config: AxiosRequestConfig) {
  const requestKey = generateReqKey(config)

  if (pending.has(requestKey)) {
    config.cancelToken = new Axios.CancelToken(cancel => {
      cancel(`${config.url} 请求重复，已取消`)
    })
  } else {
    config.cancelToken =
      config.cancelToken ||
      new Axios.CancelToken(cancel => {
        pending.set(requestKey, cancel)
      })
  }
}

export function removePending(response: AxiosResponse) {
  const requestKey = generateReqKey(response.config)
  if (pending.has(requestKey)) {
    const cancelToken = pending.get(requestKey)
    cancelToken(requestKey)
    pending.delete(requestKey)
  }
}

export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}
