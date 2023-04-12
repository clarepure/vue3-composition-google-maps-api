import { createRouter, createWebHistory } from 'vue-router'
import streetAddress from '../components/StreetAddress.vue'
import CheckoutForm from '../components/CheckoutForm'

const routes = [
  // create a home view
  {
    path: '/address',
    name: 'address',
    component: streetAddress
  },
  {
    path: '/checkoutForm',
    name: 'checkoutForm',
    component: CheckoutForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
