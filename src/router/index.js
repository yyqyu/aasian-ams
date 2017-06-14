import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import nav1 from '../pages/nav1'
import nav2 from '../pages/nav2'
import nav3 from '../pages/nav3'
import nav4 from '../pages/nav4'
import register from '../pages/register'
import highaltitude from '../pages/nav2menu/highaltitude'
import lowaltitude from '../pages/nav2menu/lowaltitude'
import thunderstorm from '../pages/nav2menu/thunderstorm'
import sandstorm from '../pages/nav2menu/sandstorm'
import metreports from '../pages/nav2menu/metreports'
import comreflect from '../pages/nav2menu/comreflect'
import infrared1 from '../pages/nav2menu/infrared1'
import infrared2 from '../pages/nav2menu/infrared2'
import visiblelight from '../pages/nav2menu/visiblelight'
import vapor from '../pages/nav2menu/vapor'
import aircraft from '../pages/nav2menu/aircraft'
import lightning from '../pages/nav2menu/lightning'


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
    	component:nav2,
        redirect:'/observation/high-altitude',
        children: [
         {
            path:'high-altitude',
            component:highaltitude
         },
         {
            path:'low-altitude',
            component:lowaltitude
         },
         {
            path:'thunderstorm',
            component:thunderstorm
         },
         {
            path:'sandstorm',
            component:sandstorm
         },
         {
            path:'met-reports',
            component:metreports
         },
         {
            path:'sig-reports',
            component:metreports
         },
         {
            path:'com-reflect',
            component:comreflect
         },
         {
            path:'infrared1',
            component:infrared1
         },
         {
            path:'infrared2',
            component:infrared2
         },
         {
            path:'visiblelight',
            component:visiblelight
         },
         {
            path:'vapor',
            component:vapor
         },
         {
            path:'aircraft',
            component:aircraft
         },
         {
            path:'lightning',
            component:lightning
         }
        ]
    },
    {
    	path:'/forecast',
    	component:nav3
    },
    {
    	path:'/advisory',
    	component:nav4
    },
    {
    	path:'/register',
    	component:register
    }
  ]
})
