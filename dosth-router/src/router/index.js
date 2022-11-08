import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'

// 调用Vue.use()函数,把VueRouter安装为Vue插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // hash与组件对应关系
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },
    // 路由规则
    { path: '/home', component: Home },
    // props 开启 props 动态传递参数
    { path: '/movie/:mid', component: Movie, props: true },
    { path: '/about',
    //  redirect: '/about/tab1',
      component: About,
      children: [
        { path: "", component: Tab1 },
      //  { path: "tab1", component: Tab1 },       
        { path: "tab2", component: Tab2 }
      ]
     },
     { path: '/login', component: Login },
     { path: '/main', component: Main }
  ]
})

// 声明前置导航守卫
// 只要发生路由跳转,必然触发前置导航首位
router.beforeEach((to, from, next) => {
  // to 将要访问的路由
  // console.log(to)
  // from 将要离开的路由
  // console.log(from)
  // next 函数表示放行
  // next()

  if (to.path === '/main') {
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

// 向外共享路由的实例对象
export default router