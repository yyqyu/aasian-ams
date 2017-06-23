<template>
<div class="app-wrap-wrap">
   <div class="app-wrap">
    <div class="app-head">     
        <router-link to="/" class="head-left">
            <img src="./assets/logo.png">          
            <span class="headleft-span">
                Asian Aeronautical Meteorology Service
            </span>         
         </router-link>  
         <ul>
             <router-link v-for="item in navs"
                          :key="item.name"
                          :to="{path:item.path}"
                          tag="li"
                          class="head-li"
                          active-class="active"
             >  
                  {{item.name}}
             </router-link>
         </ul>       
         <div class="head-right">
            <router-link to="/" class="h-right-a">Co-work</router-link>
            <router-link to="/" class="h-right-a">download</router-link>
            <span class="h-right-span" v-if="username=== ''" @click="logClick">login</span>
            <!-- <a class="h-right-a" v-if="username=== ''" href="http://www.w3school.com.cn" target="_blank">register</a> -->
             
             <div class="h-right-div" v-on:click="closeSet">
                <!-- <div class="h-set-covers" v-if="isShowSet" v-on:click="closeSet"></div> -->
                <div class="h-set-content" v-if="isShowSet">               
                   <router-link  :to="{path:'/management'}"
                                 tag="span"
                   >
                     setting
                   </router-link>
                   <br/>   
                   <span>xxx</span>
                </div>
             </div>
          </div> 
    </div>
    <div class="app-content">
        <keep-alive> <!-- 缓存 -->
           <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-foot">      
    </div>
   
    <my-dialog 
        v-bind:is-show="isShowLogDialog" 
        @on-close="closeDialog('isShowLogDialog')"
    > 
        <log-form @has-log="onSuccessLog"></log-form>      
    </my-dialog>
 </div>
</div>
</template>

<script>
import {eventBus} from './eventBus'
import Dialog from './components/base/dialog'
import LogForm from './components/LogForm'

export default {
  components: {
    MyDialog:Dialog,
    LogForm
  },
  data (){
    return {
       isShowSet:false,
       isShowLogDialog: false,
       username:'',
        navs:[        
          {
            name:'AVIATION WEATHER OVERVIEW',
            path:'/overview',
            active:false
          },
          {
            name:'OBSERVATION',
            path:'/observation',
            active:false
          },
          {
            name:'FORECAST',
            path:'/forecast',
            active:false
          },
          {
            name:'ASIAN HAZARDOUS WEATHER ADVISORY ADVISORY PRODUCTS',
            path:'/advisory',
            active:false
          },
        ],
        navs2:[ 
          {       
            "name":"OVERVIEW",
            "path":"'/overview'",
            "active":"false"
          },
          {
            "name":"OBSERVATION",
            "path":"'/observation'",
            "active":"false"
          }
        ]
    }
  },
  methods: {
     closeSet () {
        this.isShowSet = !this.isShowSet
     },
     aboutClick () {
        this.isShowAboutDialog = true
     },
     logClick () {
        this.isShowLogDialog = true
     },
     regClick () {
        this.isShowRegDialog = true
     },
     closeDialog (attr) {
        this[attr]= false
     },
     onSuccessLog (data) {
        this.closeDialog('isShowLogDialog')
        this.username = data.username
     },
     resetComponent () {
       eventBus.$emit('reset-component')
     }
  }

}

</script>

<style>
#app {
  font-family: arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body, div,  applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
a {
  color: inherit;
  text-decoration: none;
}
.app-foot{
  height: 42px;
  background-color: rgb(71,71,71);
}
.app-foot2{
  height: 98px;
  
}
.app-wrap-wrap{
  width: 100%;
  min-width: 1360px;
  font-family: arial;
}
.app-wrap{
margin:0 auto;
}
.app-head{
  width: 100%;
  height: 50px;
  min-width: 1360px;
  position: relative;
  font-weight: bold;
}
.head-left{
  position: absolute;
  width: 357px;
  left: 0;
  color: #fff;
  background: black;
  height: 100%;
  top: 0;
}
.headleft-span{
  display: block;
  margin-top: -31px;
  height: 31px;
  margin-left: 51px;
  opacity: 0.9;
  font-size: 16px;
}
.app-head ul{ 
  margin-left: 357px;
  margin-right: 255px;
  color: #fff;
  background: black;
  min-width: 683px;
  height: 100%;
}
.app-head li{
  height: 30px;
  font-size: 13px;
  float: left;
  text-align: left;
  padding-top: 18px;
  padding-left: 24px;
  line-height: 11px;
  opacity: 0.65;
  word-wrap: break-word;
  max-width: 204px;
  cursor: pointer;
}
.app-head li.active,
.app-head li:hover {
  color: #fff;
  opacity: 1;
  background: url("./assets/icon1.png") no-repeat;
  background-position-x:10px;
  background-position-y:20px;
}
.app-head li a{
  display: block
}
.head-right{
  background: black;
  height: 33px;
  color: white;
  right: 0;
  padding-top: 17px;
  width: 255px;
  position: absolute;
  top: 0;
}
.h-right-div{
  position: absolute;
  left: 200px;
  top: 21px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid rgb(179,179,179);
  cursor: pointer;
}
.h-right-a{
    opacity: 0.65;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;
}
.h-right-a:hover{
  opacity: 1
}
.h-right-span{
  cursor: pointer;
  opacity: 0.65;
  font-size: 14px;
}
.h-right-span:hover{
  opacity: 1
}

.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-a-button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.g-form-a-button:hover {
  background: #4fc08d;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
.h-set-cover{
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.h-set-content{
  position: absolute;
  top: 6px;
  left: -54px;
  font-size: 14px;
  color: rgb(165,165,165);
}
</style>
