import { AxiosResponse } from 'axios'
import { clearToken } from './dealToken'
import { Toast } from 'vant'

const NOT_AUTH_CODE = [401]

const SUCCESS_CODES = [200, 0]

interface IResponseData {
  code: number
  msg: string
  data: any
}

export default function ResponseStatusCallback(
  response: AxiosResponse<IResponseData>
) {
  const {
    data: { code, msg, data },
    config: { errorCustom }
  } = response

  if (SUCCESS_CODES.includes(code)) {
    return data
  }

  if (NOT_AUTH_CODE.includes(code)) {
    clearToken()
    // todo ……
    // 登录
    // setToken
    return Promise.reject(response.data)
  }

  if (!errorCustom) {
    Toast(msg)
  }

  return Promise.reject(response.data)
}
