import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装Vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 不建议使用
// import axios from 'axios'
// Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
