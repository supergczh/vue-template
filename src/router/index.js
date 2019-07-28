import Vue from 'vue'
import Router from 'vue-router'
import {afterEach} from './afterEach'
import {beforeEach} from './beforeEach'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => {
        require(['@/App'], resolve)
      },
    },            
  ]
})


router.beforeEach(beforeEach)
router.afterEach(afterEach)
export default  router