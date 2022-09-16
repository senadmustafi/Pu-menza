import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },

  {
    path: '/admin/',
    name: 'Admin',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
  },
  {
    path: '/register',
    name: 'Register',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/main',
    name: 'Main',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/main.vue')
  },
  {
    path: '/glavnimeni',
    name: 'glavnimeni',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/glavnimeni.vue')
  },
  {
    path: '/vegemeni',
    name: 'vegemeni',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/vegemeni.vue')
  },  
  {
    path: '/fastfoodmeni',
    name: 'fastfoodmeni',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/fastfoodmeni.vue')
  },
  {
    path: '/karta',
    name: 'karta',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/karta.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
