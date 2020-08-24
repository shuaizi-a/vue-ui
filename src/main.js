import Vue from 'vue'
import App from './App.vue'
import install from './lib/index'
Vue.use(install)
Vue.config.productionTip = false

// 引入图标库
import '../src/font-awesome/css/font-awesome.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
