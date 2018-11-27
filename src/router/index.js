import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: resolve => require(['../components/page/Page'], resolve),
    }
  ]
})
