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
import globalmodel from '../pages/nav3menu/globalmodel'
import leibaoleida from '../pages/nav3menu/leibaoleida'
import leibaoweixing from  '../pages/nav3menu/leibaoweixing'
import leibaokuaigeng from  '../pages/nav3menu/leibaokuaigeng'
import dianboquanqiu from  '../pages/nav3menu/dianboquanqiu'
import dianboquyu from  '../pages/nav3menu/dianboquyu'
import dianbokuaigeng from  '../pages/nav3menu/dianbokuaigeng'
import jibingquanqiu from  '../pages/nav3menu/jibingquanqiu'
import jibingquyu from  '../pages/nav3menu/jibingquyu'
import jibingkuaigeng from  '../pages/nav3menu/jibingkuaigeng'
import shandiquanqiu from  '../pages/nav3menu/shandiquanqiu'
import shandiquyu from  '../pages/nav3menu/shandiquyu'
import shandikuaigeng from  '../pages/nav3menu/shandikuaigeng'
import shabaoganchen from  '../pages/nav3menu/shabaoganchen'
import shabaojindi from  '../pages/nav3menu/shabaojindi'
import shabaoqiangdu from  '../pages/nav3menu/shabaoqiangdu'
import h06 from '../pages/nav4menu/h06'
import h1224 from '../pages/nav4menu/h1224'
import h612 from '../pages/nav4menu/h612'

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
    	component:nav3,
      redirect:'/forecast/globalmodel',
      children:[
          {
            path:'globalmodel',
            component:globalmodel
          },
          {
            path:'leibaoleida',
            component:leibaoleida
          },
          {
            path:'leibaoweixing',
            component:leibaoweixing
          },
          {
            path:'leibaokuaigeng',
            component:leibaokuaigeng
          },
          {
            path:'dianboquyu',
            component:dianboquyu
          },
          {
            path:'dianbokuaigeng',
            component:dianbokuaigeng
          },
          {
            path:'dianboquanqiu',
            component:dianboquanqiu
          },
          {
            path:'jibingkuaigeng',
            component:jibingkuaigeng
          },
          {
            path:'jibingquyu',
            component:jibingquyu
          },
          {
            path:'jibingquanqiu',
            component:jibingquanqiu
          },
          {
            path:'shandikuaigeng',
            component:shandikuaigeng
          },
          {
            path:'shandiquyu',
            component:shandiquyu
          },
          {
            path:'shandiquanqiu',
            component:shandiquanqiu
          },
          {
            path:'shabaoqiangdu',
            component:shabaoqiangdu
          },
          {
            path:'shabaojindi',
            component:shabaojindi
          },
          {
            path:'shabaoganchen',
            component:shabaoganchen
          }              
      ]
    },
    {
    	path:'/advisory',
    	component:nav4,
      redirect:'/advisory/h06',
      children:[
        {
          path:'h06',
          component:h06
        },
        {
          path:'h612',
          component:h612
        },
        {
          path:'h1224',
          component:h1224
        }   
      ]
    },
    {
    	path:'/register',
    	component:register
    }
  ]
})
