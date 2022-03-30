import axios, { AxiosError } from 'axios'
import axiosRetry from 'axios-retry'
import responseHandler from './tools/responseHandler'
import { getToken } from './tools/dealToken'
import { addPending, removePending } from './tools/cancelRepeatRquest'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true
})

axiosRetry(service, { retries: 3 })

service.interceptors.request.use(config => {
  config.headers = {
    token: getToken(),
    'h-app-id': process.env.APP_ID
  }
  addPending(config)
  return config
})

service.interceptors.response.use(
  response => {
    removePending(response)
    return responseHandler(response)
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      removePending(response)
      return Promise.reject(response.data)
    } else {
      return Promise.reject(Error('网络连接异常,请稍后再试!'))
    }
  }
)

export default service
