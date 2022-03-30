import { onBeforeUnmount } from 'vue'

export default function useInterval(fn: Function, wait: number) {
  let timer: number | null = null

  const start = () => {
    timer = setInterval(() => {
      fn()
    }, wait)
  }
  const stop = () => {
    timer && clearInterval(timer)
    timer = null
  }

  onBeforeUnmount(stop)

  return { start, stop }
}
