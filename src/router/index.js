import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/home/index'
import Layout from '@/views/layout/index'
import Article from '@/views/article/index'
import Publish from '@/views/publish/index'
import Comment from '@/views/comment/index'
import Person from '@/views/personList/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/article',
        name: 'article',
        component: Article
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish
      },
      {
        path: '/comment',
        name: 'comment',
        component: Comment
      }, {
        path: '/person',
        name: 'person',
        component: Person
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫
// from : 来自拿的路由信息
// to：要去的路由信息
// next：放行方法
router.beforeEach((to, from, next) => {
  // 如果访问的不是/login，校验登录状态
  // 如果没有登录，则跳转到登录页面
  // 如果登录了，则允许通过
  const token = window.localStorage.getItem('token')
  if (to.path !== '/login') {
    // 校验非登录页的登录状态
    if (token) {
      next()
    } else {
      // 跳转到登录页
      next('/login')
    }
  } else {
    next()
  }
})
export default router
