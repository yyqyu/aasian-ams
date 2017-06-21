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
export default{
	data (){
		return {
					nowIndexes:[],
					navlist:[
			        {"title":"0-6h","path":"h06"},
			        {"title":"6-12h","path":"h612"},
			        {"title":"12-24h","path":"h1224"}
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
  background-color: rgb(66,67,70);
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
  margin-left: 265px;
  background-color: rgb(66,67,70);
  border: 1px red solid;
}
.li-1th{
  height: 38px;
  border-bottom: 2px solid #3a3b3d;
}
.span-1th{
  background:url("../assets/menu-icon-up.png") no-repeat ;
  background-position: 245px 12px;
  font-family: arial;
  font-weight: bold;
  display: block;
  font-weight: bold;
  text-align: left;
  height: 22px;
  color: #fff;
  line-height: 32px;
  padding-left: 15px;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}
.span-1th-locked{
  background:url("../assets/menu-icon-down.png") no-repeat ;
  background-position:245px 12px;
  background-color: rgb(68,145,224);
  font-family: arial;
  font-weight: bold;
  display: block;
  font-weight: bold;
  text-align: left;
  height: 22px;
  color: #fff;
  line-height: 22px;
  padding-left: 15px;
  letter-spacing: 1px;
  font-size: 12px;
}
</style>