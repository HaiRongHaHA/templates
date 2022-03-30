/* eslint-disable */
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    errorCustom?: boolean // 自定义错误提示
  }
}
