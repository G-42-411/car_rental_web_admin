import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main'
import Home from '@/views/home'
import Login from '@/views/login'
import Rental from '@/views/rental'
import Place from '@/views/place'
import Pay from '@/views/pay'
import Order from '@/views/order'
import Modifypassword from '@/views/modifypassword'

Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    path: '/',
    component: Main,
    children:[
      {
        name: 'home',
        path: '/home',
        component: Home,
      },
      {
        name: 'rental',
        path: '/rental',
        component: Rental,
      },
      {
        name: 'place',
        path: '/place',
        component: Place,
      },
      {
        name: 'order',
        path: '/order',
        component: Order,
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'pay',
    path: '/pay',
    component: Pay
  },
  {
    name: 'modifypassword',
    path: '/modifypassword',
    component: Modifypassword
  }


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
