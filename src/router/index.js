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
    path: '/admin/',
    name: 'Admin',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
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
    path: '/karta/',
    name:'karta',
    component: () => import(/* webpackChunkName: "about" */ '../views/karta.vue')
  },
  {
    path: '/registar',
    name: 'registar',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/registar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
