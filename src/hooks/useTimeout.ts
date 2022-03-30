import { onBeforeUnmount } from 'vue'

export default function useTimeout(fn: Function, wait: number) {
  let timer: number | null = null

  timer = setTimeout(() => {
    fn()
  }, wait)

  onBeforeUnmount(() => {
    timer && clearTimeout(timer)
    timer = null
  })
}
