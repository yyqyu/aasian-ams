import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import nav1 from '../pages/detail/nav1'
import nav2 from '../pages/detail/nav2'
import nav3 from '../pages/detail/nav3'
import nav4 from '../pages/detail/nav4'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: nav1
    },
    {
       path:'/overview',
       component:nav1
    },
    {
    	path:'/observation',
    	component:nav2
    },
    {
    	path:'/forecast',
    	component:nav3
    },
    {
    	path:'/advisory',
    	component:nav4
    }
  ]
})
