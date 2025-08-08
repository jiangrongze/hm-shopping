import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list.vue'
import ProDetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
// import { component } from 'vue/types/umd'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    redirect: '/home1',
    children: [
      {
        path: '/home1',
        name: 'home1',
        component: Home
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/user',
        name: 'user',
        component: User
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/searchlist',
    name: 'searchlist',
    component: SearchList
  },
  {
    path: '/prodetail/:id',
    name: 'prodetail',
    component: ProDetail
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: MyOrder
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
