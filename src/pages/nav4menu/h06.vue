<template>
<div class="wrap">
  <div class="top">
  	 {{title}}
  </div>

  <div class="bottom">
  	 <div class="bottom-button" v-on:click="tanchuangClick">
  	     {{buttontitle}}
  	 </div>

  	 <div v-if="isShow" class="baowen">
  	 	  <div class="baowen-top">
  	 	  	 <ul class="ul-1th">
  	 	  	 	<li v-for="item in riqi" 
  	 	  	 	    v-bind:class="[checkActive(item.title)?'li-1th-locked':'li-1th']"
  	 	  	 	    v-on:click="checkList(item.title,item.id)"
  	 	  	 	>
  	 	  	 		{{item.title}}
  	 	  	 	</li>
  	 	  	 </ul>
  	 	  </div>
  	 	  <div class="baowen-bottom">
  	 	  	
  	 	  </div>
  	 </div>
  </div>	

</div>
</template>

<script>
import _ from 'lodash'
export default{
	data (){
		return {
			nowIndexes:[],
			isShow:true,
			title:"Asian Hazardouc Weather Advision Products > Hazardous Weather(TS,Turb,Ice,DS,MTW)",
			buttontitle:"Greate SIGMET",
			riqi:[
              {"title":"TS","id":"TS"},
              {"title":"Turb","id":"Turb"},
              {"title":"Ice","id":"Ice"},
              {"title":"DS","id":"DS"},
              {"title":"MTW","id":"MTW"}
			]
		}
	},
	methods:{
       tanchuangClick (){
       	  this.isShow = true
       },
       closeDialog (attr) {
          this[attr]= false
       },
	   	checkList: function(index,id){
	         if(this.nowIndexes.indexOf(index) === -1){
	         	this.nowIndexes=[]
	         	this.nowIndexes.push(index)

                // 按照id值更新数据
                // this.$http.get('',{id})
                // .then((res)=>{

                // },(err)=>{
                // 	console.log(err)
                // })
                
	         }
	   	},
	   	checkActive (index) {
	   	   return this.nowIndexes.indexOf(index) != -1 
	   	}
	}
}	
</script>

<style scoped>
.wrap{

}	
.top{
	height: 45px;
	color: white;
	line-height: 45px;
}
.bottom{
	width: 98%;
	height: 655px;
	border: 7px solid rgb(238,238,238);
	border-radius: 14px;
	min-width: 1070px;
	position: relative;
}
.baowen{
  width: 900px;
  height: 611px;
  border:7px rgb(238,238,238) solid;
  position: absolute;
  left: 50%;
  margin-left: -450px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  box-shadow: -1px 0px 29px 0px rgb(208,208,208);
}
.ul-1th{
	overflow: hidden;
}
.li-1th{
	float: left;
	width: 65px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: rgb(68,145,224);
	background-color: white;
	cursor: pointer;
}
.li-1th-locked{
	float: left;
	width: 63px;
	height: 29px;
	line-height: 30px;
	text-align: center;
	color: rgb(68,145,224);
	background-color: rgb(235,236,240);
	border-top:1px solid rgb(205,206,209);
	border-left:1px solid rgb(205,206,209);
	border-right:1px solid rgb(205,206,209);
	cursor: pointer;
}
.bottom-button{
	position: absolute;
	width: 140px;
	height: 30px;
	bottom: 0;
	left: 50%;
	margin-left: -70px;
	text-align: center;
	line-height: 30px;
	color: white;
	cursor: pointer;
	background-color: rgb(193,219,245);
	border-radius: 7px;
}
</style>