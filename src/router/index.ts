import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Icons from '../views/Icons.vue'
import Buttons from '../views/Buttons.vue'
import Alerts from '../views/Alerts.vue'
import Slider from '../views/Slider.vue'

Vue.use(VueRouter)

const routes:Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
