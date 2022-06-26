import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/icon.less'
import MyIcon from '@/components/MyIcon.vue'

Vue.config.productionTip = false

Vue.component('MyIcon', MyIcon)

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
