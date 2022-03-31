import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// vant ui
import registerVant from '@/plugins/vant'

// Vconsole
import '@/plugins/vconsole'

// 公用样式
import '@/styles/index.scss'

const app = createApp(App).use(store).use(router)

registerVant(app)

app.mount('#app')
