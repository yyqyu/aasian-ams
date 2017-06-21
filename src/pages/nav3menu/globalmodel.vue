<template>
<div class="wrap">
  <div class="top">
  	 <ul>
  	 	<li v-for="item in navlist" 
            v-bind:class="[checkActive(item.title)?'top-li-locked':'top-li']"
            v-on:click="checkList(item.title)"
  	 	>
  	 		{{item.title}}
  	 	</li>
  	 </ul>
  </div>
  <div class="bottom">
  	  
  </div>	
</div>	
</template>

<script>
import _ from 'lodash'
export default{
  data () {
  	return {
  		nowIndexes:[],
  		navlist:[
          {"title":"Wind&Geopotential Height&Temperature"},
          {"title":"Cumulative Precipitation"},
          {"title":"Ascending Velocity"}
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
  // created: function{
  //    this.$http.get('')
  //    .then( (res)=>{
  //          this.navlist = res.data
  //    },(err) =>{
  //       console.log(err)
  //    })
  // }  
}
</script>

<style scoped>
.wrap{
	margin-top: 25px;
}
.top-li{
	padding-right: 6px;
	padding-left: 6px;
	float: left;
	height: 30px;
	line-height: 30px;
	color: white;
	background-color: rgb(68,145,224);
	margin-right: 7px;
	text-align: center;
	border-top-left-radius: 10px;
	border-top-right-radius:10px;
	cursor: pointer;
}
.top-li-locked{
	padding-right: 6px;
	padding-left: 6px;
	float: left;
	height: 30px;
	line-height: 30px;
	color: black;
	background-color: white;
	margin-right: 7px;
	text-align: center;
	border-top-left-radius: 10px;
	border-top-right-radius:10px;
	cursor: pointer;
}
.top ul{
	overflow: hidden;
	margin-left: 45px;
	min-width: 700px;
}
.bottom{
	width: 98%;
	height: 655px;
	border: 7px solid rgb(238,238,238);
	border-radius: 14px;
	min-width: 1070px;
}	

</style>