import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装Vant
import Vant from 'vant'
// 覆盖vant主题,引入vant的index.less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

// 不建议使用
// import axios from 'axios'
// Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
