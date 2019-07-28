import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

if(process.env.NODE_ENV!=='production'){
  Vue.config.devtools=true
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
