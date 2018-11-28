import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path:'/pages',
      component: resolve => require(['../components/page/Page'], resolve),
      children:[
        {
          path:'',
          redirect: '/pages/home'
        },
        {
          path:'home',
          component: resolve => require(['../components/page/Home'],resolve)
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: resolve => require(['../components/page/Movie'],resolve)
        },
        {
          path: 'book',
          name: 'BookView',
          component: resolve => require(['../components/page/Book'],resolve)
        },
        {
          path: 'status',
          name: 'StatusView',
          component: resolve => require(['../components/page/Status'],resolve)
        },
        {
          path: 'group',
          name: 'GroupView',
          component: resolve => require(['../components/page/Group'],resolve)
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: resolve => require(['../components/page/Detail'],resolve)
        }
      ]
    }
  ]
})
