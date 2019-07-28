import Vue from 'vue'
import Vuex from 'vuex'
import commonModule from './module/commonModule'
Vue.use(Vuex)

export default  new Vuex.Store({
     modules:{
      commonModule,
     }
})
