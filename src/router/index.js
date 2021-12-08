import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../components/Customer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer/:id',
    name: 'Customer',
    component: Customer,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
