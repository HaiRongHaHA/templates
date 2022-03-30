/**
 * @description: 是否是对象
 */
export function isObject(obj: Record<string, any>) {
  return typeof obj === 'object' && obj != null
}

/**
 * @description: 是否是数组
 */
export function isArray(arr: []) {
  return Array.isArray(arr)
}

/**
 * @description: 格式化json串
 */
export function formatJson(value: any) {
  if (Number(value)) return value
  try {
    const json = JSON.parse(value)
    return json
  } catch (error) {
    return value
  }
}

/**
 * @description 设置本地缓存
 */
export function setStorage(key: string, value: any) {
  if (isObject(value)) {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

/**
 * @description 获取本地缓存数据
 */
export function getStorage(key: string, defaultVal?: any) {
  const storage = localStorage.getItem(key)
  return formatJson(storage) || defaultVal
}

/**
 * @description 删除本地缓存数据
 */
export function removeStorage(key: string) {
  localStorage.removeItem(key)
}
