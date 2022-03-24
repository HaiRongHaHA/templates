import axios, { AxiosError } from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true
})

service.interceptors.request.use(config => {
  config.headers = {
    token: ''
  }
  return config
})

service.interceptors.response.use(
  response => {
    const {
      data: { code, data }
    } = response

    const successCodes = [200, 0, 1000]

    if (successCodes.includes(code)) {
      return data
    }

    console.log('请求失败状态码：', code)
    return Promise.reject(response)
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      console.log('请求失败状态码：', response.status)
      return Promise.reject(response.data)
    } else {
      console.log('网络连接异常,请稍后再试!')
    }
  }
)

export default service
