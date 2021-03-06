import Vue from 'vue'
import VueRouter from 'vue-router'

import First from "../views/First.vue"
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: First
  },
  {
	path:'/detail',
	component:()=>import('@/components/detail.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
