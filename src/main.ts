import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// 公用样式
import '@/styles/index.scss'

createApp(App).use(store).use(router).mount('#app')
