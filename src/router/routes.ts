import { RouteRecordRaw } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default routes
