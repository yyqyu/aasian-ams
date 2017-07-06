<template>
 <div class="nav2-wrap">
     <div class="nav2-left">
     	<ul class="ul-1th">
     	  <li v-for="nav in nav2List" class="li-1th"
              v-bind:class="[checkActive(nav.title)?'li-1th-locked':'']"
     	  >
     	     <span v-on:click="checkList(nav.title)" class="nav2-span">
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
     <div class="nav2-right">
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
  		nav2List: {
	  		sa:{
	  			title:'Synoptic Analysis',
	  			list: [
		           {
		              name:'upper-air',
		              path:'high-altitude'
		           },
		           {
		              name:'surface',
		              path:'low-altitude'
		           }
	  			]
	  		},
	  		storms:{
	  			title:'Thunderstorm、Sand/Dust storm',
	  			list:[
		           {
	                name:'thunderstorm monitoring',
	                path:'thunderstorm'
		           },
		           {
		           	name:'sand/dust storm monitoring',
	                path:'sandstorm'
		           }
	  			]
	  		},
	  		mr:{
	  			title:'meteorology reports',
	  			list:[
		           {
	                name:'METAR/SPECI',
	                path:'met-reports'
		           },
		           {
	                name:'SIGMET/AIRMET',
	                path:'sig-reports'
		           }
	  			]
	  		},
	  		radar:{
	  			title:'composite Radar Images',
	  			list:[
		           {
	                name:'combined reflectivity',
	                path:'com-reflect'
		           }
	  			]
	  		},
	  		satellite:{
	  			title:'satellite Images',
	  			list:[
		           {
	                name:'infrared 1',
	                path:'infrared1'
		           },
		           {
		           	  name:'infrared 2',
	                  path:'infrared2'
		           },
		           {
		           	  name:'visible light',
		           	  path:'visiblelight'
		           },
		           {
		           	  name:'water-vapor',
		           	  path:'vapor'
		           }
	  			]
	  		},
	  		aircraft:{
	  			title:'Aircraft Reports',
	  			list:[
		           {
	                name:'aircrafts',
	                path:'aircraft'
		           }
	  			]
	  		},
	  		light:{
	  			title:'Lightning Image',
	  			list:[
		           {
	                name:'lightnings',
	                path:'lightning'
		           }
	  			]
	  		}
  	    },
  	    nav2List2: {
          "sa":  {
	  			"title":"Synoptic Analysis",
	  			"list": [
		           {
		              "name":"high altitude",
		              "path":"high-altitude"
		           },
		           {
		              "name":"low altitude",
		              "path":"low-altitude"
		           }
	  			]
	  		},
	  		"storms":{
	  			"title":"storms",
	  			"list":[
		           {
	                "name":"thunderstorm",
	                "path":"thunderstorm"
		           },
		           {
		           	  "name":"sandstorm",
	                  "path":"sandstorm"
		           }
	  			]
	  		}
  	    } 	  
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
  	   return	this.nowIndexes.indexOf(index) != -1 
  	}
  }	
}
</script>

<style scoped>
.nav2-wrap{
	width: 100%;
/*  margin-top: 4px;*/
    background-color: rgb(66,67,70);
    min-height: 650px;
}
.nav2-left{
	float: left;
	width: 270px;
    height: 560px;
    margin-top: 15px;
}	
.nav2-right{
    width: auto;
    margin-left: 270px;
    /*height: 698px;*/
    background-color: rgb(66,67,70);
}
.ul-1th{
	cursor: pointer;
	color: white;
	/*background: #666770*/
}
.nav2-span{
	display: block;
	height: 40px;
	font-size: 14px;
    font-weight: bold;
    text-align: left;
    color: #fff;
    border-bottom: 2px solid #3a3b3d;
    line-height: 40px;
    padding-left: 15px;
   /* letter-spacing: 1px;*/
}
.li-1th{
	background:url("../assets/menu-icon-up.png") no-repeat ;
	background-position:250px 17px;
}
.li-1th-locked{
    background:url("../assets/menu-icon-down.png") no-repeat ;
    background-position:250px 17px;
}
.li-2th{
	height: 20px;
	text-align: left;
	background: #424346;
	color: #d3d6df;
	font-size: 14px;
    font-weight: bold;
    text-align: left;
    height: 20px;
    color: #fff;
    border-bottom: 1px solid #3a3b3d;
    line-height: 20px;
    padding-left: 18px;
    /*letter-spacing: 1px;*/
    margin-top: 10px;
    margin-bottom: 10px;
}
.li-2th:hover{
	background: url("../assets/menu-icon-down2.png") no-repeat;
	background-position: 262px 3px;
	background-color: #4491e0;
}
.li-2th-clicked{
	background: url("../assets/menu-icon-down2.png") no-repeat;
	background-position: 262px 3px;
	background-color: #4491e0;
}
.ul-2th{
	display:none
}
.panelt{
	display: block
}
</style>