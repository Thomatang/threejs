import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Trois from '../components/Trois.vue'
import ThreeTest from '../components/ThreeTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/trois',
    name: 'Trois',
    component: Trois,
  },
  {
      path: '/three',
      name: 'Three',
      component: ThreeTest
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
