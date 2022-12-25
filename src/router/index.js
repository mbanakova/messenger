import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
// const About = () => import('../views/About')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router