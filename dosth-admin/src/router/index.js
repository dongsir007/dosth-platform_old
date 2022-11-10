import Vue from 'vue'
import VueRouter from 'vue-router'

import pathArr from '@/router/pathArr'

import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

import User from '@/components/menus/User.vue'
import Right from '@/components/menus/Right.vue'
import Good from '@/components/menus/Good.vue'
import Order from '@/components/menus/Order.vue'
import Setting from '@/components/menus/Setting.vue'

import UserDetail from '@/components/user/UserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login'},
    { path: '/login', component: Login },
    { path: '/home', 
      component: Home,
      redirect: '/home/users',
      children: [
        { path: 'users', component: User },
        { path: 'rights', component: Right },
        { path: 'goods', component: Good },
        { path: 'orders', component: Order },
        { path: 'settings', component: Setting },
        // 用户详情的路由规则
        { path: 'userinfo/:id', component: UserDetail, props: true}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
//  const pathArr = [ '/home', '/home/users', '/home/rights', '/home/goods', '/home/settings' ]
  if (pathArr.indexOf(to.path) != -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router