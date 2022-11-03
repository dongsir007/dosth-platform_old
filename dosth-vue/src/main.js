import Vue from 'vue'
import App from './App.vue'
//import Test from './components/Test.vue'
import Count from '@/components/Count.vue'

Vue.component('Count', Count)

Vue.config.productionTip = false

new Vue({
 // render: h => h(Test),
 render: h => h(App)
}).$mount('#app')
