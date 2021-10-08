import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>  import('../views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () =>  import('../views/News.vue')
  },
  {
    path: '/news/:id',
    name: 'New',
    component: () =>  import('../views/NewId.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
