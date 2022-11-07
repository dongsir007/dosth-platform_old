import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://mock.apipost.cn/app/mock/project/b213b00a-68b9-11eb-a95d-1c34da7b354c/'
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
