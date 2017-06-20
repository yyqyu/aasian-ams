<template>
 <div class="nav-wrap">
     <div class="nav-left">
      <ul class="ul-1th">
        <li v-for="nav in nav3List" class="li-1th"
            v-bind:class="[checkActive(nav.title)?'li-1th-locked':'']"
        >
           <span v-on:click="checkList(nav.title)" class="nav-span">
               {{nav.title}}
           </span> 
           <ul class="ul-2th" 
               v-bind:class="[checkActive(nav.title)?'panelt':'']"
           >
            <router-link v-for="item in nav.list"
                         :key="item.name"
                         :to="{path:item.path}" 
                         tag="li"  
                         class="li-2th"
                         active-class="li-2th-clicked"           
            >
               {{item.name}}
            </router-link>
           </ul>
        </li> 
      </ul>
     </div> 
     <div class="nav-right">
       <keep-alive>
           <router-view></router-view>
         </keep-alive>
     </div>
 </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      isPanelt:false,
      nowIndexes:[],
      nav3List:[
                 {
                  "title":"Aeronautical Meteorology Reports",
                   "list":[
                        {
                          "name":"Global Model Forecast Products",
                          "path":"globalmodel"
                        }
                   ]
                 },
                 {
                   "title":"Thunderstorm Forecast",
                    "list":[
                        {
                          "name":"1",
                          "path":"leibaoleida"
                        },
                        {
                          "name":"2",
                          "path":"leibaoweixing"
                        },
                        {
                          "name":"GRAPES-RAFS forecast products",
                          "path":"leibaokuaigeng"
                        }
                    ]
                 },
                 {
                  "title":"Turbulence Forecast",
                  "list":[
                      {
                        "name":"global model forecast products",
                        "path":"dianboquanqiu"
                      },
                      {
                        "name":"regional model forecast products",
                        "path":"dianboquyu"
                      },
                      {
                        "name":"GRAPES-RAFS forecast products",
                        "path":"dianbokuaigeng"
                      }
                  ]
                 },
                 {
                  "title":"Icing Forecast",
                  "list":[
                      {
                        "name":"global model forecast products",
                        "path":"jibingquanqiu"
                      },
                      {
                        "name":"regional model forecast products",
                        "path":"jibingquyu"
                      },
                      {
                        "name":"GRAPES-RAFS forecast products",
                        "path":"jibingkuaigeng"
                      }
                  ]
                 },
                 {
                  "title":"Mountain Wave Forecast",
                  "list":[
                      {
                        "name":"global model forecast products",
                        "path":"shandiquanqiu"
                      },
                      {
                        "name":"regional model forecast products",
                        "path":"shandiquyu"
                      },
                      {
                        "name":"GRAPES-RAFS forecast products",
                        "path":"shandikuaigeng"
                      }
                  ]
                 },
                 {
                  "title":"Sand/dust Storm Model Forecas",
                  "list":[
                      {
                        "name":"dry deposition rate",
                        "path":"shabaoganchen"
                      },
                      {
                        "name":"sand/dust density&wind",
                        "path":"shabaojindi"
                      },
                      {
                        "name":"sand/dust intensity&visibility",
                        "path":"shabaoqiangdu"
                      } 
                  ]
                 }
      ] 

    }
  },
  methods: {
    checkList: function(index) {
      if(this.nowIndexes.indexOf(index) === -1 ){
        this.nowIndexes=[]  //清空数组，来收回之前展开的菜单
        this.nowIndexes.push(index)
      }
      else{   
        this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
                 return idx !== index
            })
      }
    },
    checkActive (index) {
       return this.nowIndexes.indexOf(index) != -1 
    }
  } 
}
</script>

<style scoped>
.nav-wrap{
  width: 100%;
    background-color: rgb(66,67,70);
    min-height: 650px;
}
.nav-left{
  float: left;
  width: 310px;
    height: 560px;
} 
.nav-right{
    width: auto;
    margin-left: 310px;
    background-color: rgb(66,67,70);
    border: 1px red solid
}
.ul-1th{
  cursor: pointer;
  color: white;
}
.nav-span{
  font-family: arial;
  font-weight: bold;
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  height: 40px;
  color: #fff;
  border-bottom: 2px solid #3a3b3d;
  line-height: 32px;
  padding-left: 10px;
  letter-spacing: 1px;
}
.li-1th{
  background:url("../assets/menu-icon-up.png") no-repeat ;
  background-position:295px 17px;
}
.li-1th-locked{
    background:url("../assets/menu-icon-down.png") no-repeat ;
    background-position:295px 17px;
}
.li-2th{
  height: 40px;
  text-align: left;
  background: #505153;
  color: #d3d6df;
  font-size: 14px;
    font-weight: bold;
    text-align: left;
    height: 40px;
    color: #fff;
    border-bottom: 1px solid #3a3b3d;
    line-height: 40px;
    padding-left: 18px;
    letter-spacing: 1px;
}
.li-2th:hover{
  /*background: #4491e0 url("../assets/menu-left-icon.png") no-repeat;
  background-position: 252px -2px;
  background-size: 21px 45px;*/
  background: #4491e0
}
.li-2th-clicked{
  /*background: #4491e0 url("../assets/menu-left-icon.png") no-repeat;
  background-position: 252px -2px;
  background-size: 21px 45px;*/
  background: #4491e0
}
.ul-2th{
  display:none
}
.panelt{
  display: block
}
</style>