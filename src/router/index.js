import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewOne',
    component: () => import('../views/ViewOne.vue')
  },
  {
    path: '/viewtwo',
    name: 'Viewtwo',
    component: () => import('../views/ViewTwo.vue')
  },
  {
    path: '/viewthree',
    name: 'viewthree',
    component: () => import('../views/ViewThree.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router
