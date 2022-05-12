import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLunchView from '../views/TheLunchView.vue'
import LottoView from '../views/LottoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch',
    name: 'lunch',
    component: TheLunchView
  },
  {
    path: '/lotto/:lottoNum',
    name: 'lotto',
    component: LottoView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
