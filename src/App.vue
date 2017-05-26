<template>
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
                          :to="{path:item.path}"
                          tag="li"
                          active-class="active"
             >  
                  {{item.name}}
             </router-link>
         </ul> 
    </div>
    <div class="ap-content">
        <keep-alive> <!-- 缓存 -->
           <router-view></router-view>
        </keep-alive>
    </div>
    <div class="app-foot">
      
    </div>
 </div>
</template>

<script>
export default {
  data (){
    return {
        navs:[        
          {
            name:'OVERVIEW',
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
            name:'ADVISORY',
            path:'/advisory',
            active:false
          },
        ]
    }
  }

}

</script>



<style>
#app {
  font-family: 'arial', Helvetica, Arial, sans-serif;
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

.app-wrap{
 min-width: 1300px;
 max-width: 1600px;
}
.app-head{
  width: 100%;
  height: 51px;
}
.head-left{
  position: absolute;
  width: 357px;
  float: left;
  color: #fff;
  background: black;
  /*opacity: 0.8;*/
}
.headleft-span{
  display: block;
  margin-top: -31px;
  height: 31px;
  margin-left: 51px;
  opacity: 0.9;
}
.app-head ul{ 
  margin-left: 357px;
  float: left;
  color: #fff;
  background: black;
  min-width: 1000px;
  width: auto;
  padding-left: 30px;
}
.app-head li{
  height: 30px;
  float:left;
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
  line-height: 32px;
  opacity: 0.65;
}
.app-head li.active,
.app-head li:hover {
  /*background: #4fc08d;*/
  color: #fff;
  opacity: 1;
  background: url(./assets/icon1.png) no-repeat;
      background-position-x:0px;
      background-position-y:20px;
}
.app-head li a{
  display: block
}
</style>
