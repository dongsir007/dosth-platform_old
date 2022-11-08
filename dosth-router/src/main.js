import Vue from 'vue'
import App from './App2.vue'
// 在模块化导入的时候,如果是文件夹,自动加载index.js
// import router from '@/router/index.js'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 路由对象挂载
  router
}).$mount('#app')
