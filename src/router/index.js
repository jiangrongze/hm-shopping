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
import store from '@/store/modules/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
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
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
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
// const authUrls = ['/pay', '/myorder']
const authUrls = []

router.beforeEach((to, from, next) => {
// console.log(to, from, next)
// 如果访问/pay且未登录，则重定向到/login

  // if (authUrls.includes(to.path) && store.getters.token) {
  // 只有当来源路由不是/login时才重定向（避免循环重定向）
  // if (from.path !== '/login') {
  // 用return避免重复调用next()
  // return next('/login')
  //   }
  // }
  // next() // 正常放行

  // if (to.path === '/pay' && !store.getters.token) {
  // next('/login') // 这里会导致从/cart→/pay时触发重定向，引发错误
  // } else {
  //   next()
  // }

  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  // const token = store.state.user.userInfo.token

  // console.log(token)
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
