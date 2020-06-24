import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/superheroes',
    name: 'superheroes',
    component: Home
  },
  {
    path: '*',
    redirect: '/superheroes'
  }
]

const router = new VueRouter({
  routes
})

export default router
