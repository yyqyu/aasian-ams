<template>
<div class="nav-wrap">
	<div class="nav-left">
		  <ul class="ul-1th">
		  	 	 	<li v-for="item in navlist"  
		  	 	 	    class="li-1th" 		  	 	 	              
	  	                v-on:click="checkList(item.title)"
		  	 	 	>
		  	 	 		<router-link v-bind:class="[checkActive(item.title)?'span-1th-locked':'span-1th']"
			                         :to="{path:item.path}"
			                         tag="span"
		  	 	 		>
		  	 	 			  {{item.title}}
		  	 	 		</router-link>
		  	 	 	</li>
		  </ul>
	</div>
	<div class="nav-right">
		      <router-view></router-view>
	</div>
</div>
</template>

<script>
import _ from 'lodash'
export default{
	data (){
		return {
				nowIndexes:[],
				navlist:[
			        {"title":"User Management","path":"user"},
			        {"title":"Authority Management","path":"authority"},
			        {"title":"Information Management","path":"information"},
			        {"title":"Notice Management","path":"notice"},
			        {"title":"Links Management","path":"links"},
			        {"title":"Products Monitor","path":"products"},
			        {"title":"Upload Aircraft Reports","path":"upload"}
				]
		}
	},
	methods: {
		checkList: function(index){
	      if(this.nowIndexes.indexOf(index) === -1){
	      	this.nowIndexes=[]
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
  background-color: rgb(214,216,222);
  min-height: 650px;
}	
.nav-left{
	float: left;
	width: 265px;
	height: 560px;
	margin-top: 50px;
}
.nav-right{
  width: auto;
  margin-left: 270px;
  background-color: rgb(66,67,70);
  border: 1px red solid;
}
.li-1th{
  height: 30px;
  border-bottom: 2px solid rgb(198,201,210);
}
.span-1th{
  background:url("../assets/menu-icon-up-black.png") no-repeat ;
  background-position: 240px 12px;
  font-family: arial;
  font-weight: bold;
  display: block;
  text-align: left;
  height: 22px;
  color: rgb(96,101,105);
  line-height: 32px;
  padding-left: 18px;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}
.span-1th-locked{
  background:url("../assets/menu-icon-down.png") no-repeat ;
  background-position:240px 9px;
  background-color: rgb(68,145,224);
  font-family: arial;
  display: block;
  font-weight: bold;
  text-align: left;
  height: 22px;
  color: #fff;
  line-height: 22px;
  padding-left: 18px;
  letter-spacing: 1px;
  font-size: 12px;
  margin-top: 9px;
}	
</style>