<template>
<div class="wrap">
  <div class="top">
  	 {{title}}
  </div>

  <div class="bottom" v-bind:style="{ height:clientHeights}">
  	 <div class="bottom-button"  v-on:click="tanchuangClick">
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
  	 	  	 	<p class="dialog-close" @click="closeMyself">x</p>
  	 	  	 </ul>
  	 	  	 <table class="table-1th">
  	 	  	 	  <tr>
  	 	  	 	  	 <th class="th-1th">Original</th>
  	 	  	 	  	 <th class="th-1th">Sigment</th>
  	 	  	 	  </tr>
  	 	  	 	<!--   <tr v-for="tds in baowen" class="tr-1th">
  	 	  	 	  	 <td class="td-1th">DTG:{{tds.DTG}}<br/>SAC:{{tds.SAC}} <br/> VALID:{{tds.VALID}}
  	 	  	 	  	 </td>
  	 	  	 	  	 <td class="td-1th">
	  	 	  	         {{tds.SIGMENT}}
	  	 	  	         <br/>
	  	 	  	         <span class="td-span" v-on:click="graphics">
	  	 	  	         	Graphics
	  	 	  	         </span>
  	 	  	 	  	 </td>
  	 	  	 	  </tr> -->

  	 	  	 	  <!-- 设计图用 -->
  	 	  	 	    <tr v-for="tds in baowen" class="tr-1th">
  	 	  	 	  	 <td class="td-1th">
	  	 	  	 	  	 DTG:20170309/1200Z<br/>
	  	 	  	 	  	 SAC:BEIJING <br/> 
	  	 	  	 	  	 VALID:1500000/210000<br/>
	  	 	  	 	  	 <span style="color:black;background-color:rgb(131,192,255)">&nbspPHENOMENON:MOD TURB</span><br/>
	  	 	  	 	  	 1 Aircraft Report<br/>
	  	 	  	 	  	 PART:1/5<br>
	  	 	  	 	  	 <span style="color:black;background-color:rgb(150,241,255)">LOCATION:WI N3000 E08500 - N2700 E08800 - N2700 E08900- N3000</span><br>
	  	 	  	 	  	 <span style="color:black;background-color:rgb(150,241,255)">E1200- N2700 E1300-N2700 E08500</span><br>
	  	 	  	 	  	 <span style="color:black;background-color:rgb(164,224,254)">LEVEL:FL270/350</span><br>
	  	 	  	 	  	 <span style="color:black;background-color:rgb(172,183,195)">MOVEMENT:STNR</span><br>
	  	 	  	 	  	 INTENSITY:NC<br>
	  	 	  	 	  	 RANGE:NARROW<br>
	  	 	  	 	  	 RMK:NIL<br>
	  	 	  	 	  	 NXT ADVISORY:20170309/1800Z= 
  	 	  	 	  	 </td>
  	 	  	 	  	 <td class="td-1th">
	  	 	  	         ZBPE SIGMENT 1 VALID 091500/092100 ZBAA-<br/>
	  	 	  	         ZBPE BEIJING FIR <span style="color:black;background-color:rgb(131,192,255)">MOD TURB </span>&nbsp FCST<br>
                         <span style="color:black;background-color:rgb(150,241,255)">WI N3000 E08500 - N2700 E08800 - N2700 E08900- N3000 E12000-</span><br>
                         <span style="color:black;background-color:rgb(150,241,255)">N2700 E13000- N2700 E08500</span><br>
                         <span style="color:black;background-color:rgb(164,224,254)">FL270/350</span><span style="color:black;background-color:rgb(172,183,195)">STNR</span><br>
	  	 	  	         <span class="td-span" v-on:click="graphics">
	  	 	  	         	Graphics
	  	 	  	         </span>
  	 	  	 	  	 </td>
  	 	  	 	  </tr>
  	 	  	 </table>
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
			clientHeights:null,
			isShow:false,
			title:"Asian Hazardous Weather Advision Products  >  Hazardous Weather(TS、Turb、Ice、DS、MTW)",
			buttontitle:"Greate SIGMET",
			riqi:[
              {"title":"TS","id":"TS"},
              {"title":"Turb","id":"Turb"},
              {"title":"Ice","id":"Ice"},
              {"title":"DS","id":"DS"},
              {"title":"MTW","id":"MTW"}
			],
			baowen:[
              {
              	"DTG":"20170309/1200Z",
              	"SAC":"BEIJING",
              	"VALID":"1500000/210000",
              	"SIGMENT":"ZBPE SIGMENT 1 VALID ",
              	"id":"01"
              },
              {
              	"DTG":"20160505/1222z",
              	"SAC":"BEIJING",
              	"VALID":"8888888",
              	"SIGMENT":"ZBPE SIGMENT 1 VALID ",    
              	"id":"02"
              }  
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
                //       this.baowen = res.data
                // },(err)=>{
                // 	console.log(err)
                // })
	         }
	   	},
	   	checkActive (index) {
	   	   return this.nowIndexes.indexOf(index) != -1 
	   	},
	   	closeMyself (){
	   		this.isShow = false
	   	},
	   	graphics (id) {

	   	},
	   	setHeight (){

	   	}
	},
	//第一次加载请求的数据源
	//creted: function (){
        // this.$http.get('')
        // .then( (res) =>{
        //      this.baowen = res.data
        // },(err) =>{
        // 	console.log(err)
        // })  
//	},
	mounted () {
        // this.nowIndexes.push(0)
        // this.checkActive(0)

	        this.clientHeights = `${window.innerHeight-151}px`;
	        const that = this
	        window.onresize = function temp() {
	            that.clientHeights = `${window.innerHeight-151}px`;
	        }
	}
}	
</script>

<style scoped>
.wrap{

}	
.dialog-close{
	float: right;
	padding-right:5px;
    font-size: 27px;
    color: rgb(193,193,193);
    cursor: pointer;
}
.top{
	height: 45px;
	color: white;
	line-height: 45px;
}
.bottom{
	width: 98%;
	height: 100%;
	min-height: 655px;
	border: 7px solid rgb(238,238,238);
	border-radius: 14px;
	min-width: 1070px;
	position: relative;
	background-color: rgb(250,250,250);
}
.baowen{
  width: 900px;
  min-height: 625px;
  height: 96%;
  top: -7px;
  border:7px rgb(238,238,238) solid;
  position: absolute;
  left: 50%;
  margin-left: -470px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
 /* box-shadow: -1px 0px 29px 0px rgb(208,208,208);*/
  background-color: white;
}
.table-1th{
	width: 900px;
	height: 550px;
	background-color: rgb(235,236,240);
	padding-left: 15px;
	border-left: 1px solid rgb(205,206,209);
	border-right: 1px solid rgb(205,206,209);
}
.th-1th{
	text-align: left;
	color: #3399cc;
	font-size: 14px;
	font-weight: bold;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid rgb(208,208,208);
	letter-spacing: 1px;
}
.td-1th{
	min-height: 200px;
	border-bottom: 1px solid rgb(208,208,208);
	padding-top: 12px;
	font-size: 12px;
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
	font-size: 14px;
	font-weight: bold;
}
.li-1th-locked{
	float: left;
	width: 63px;
	height: 29px;
	line-height: 30px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
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
.td-span{
	display: inline-block;
	margin-top: 20px;
	width: 105px;
	height: 27px;
	color: white;
	background-color: rgb(68,145,224);
	text-align: center;
	line-height: 27px;
	font-size: 14px;
	cursor: pointer;
	box-shadow:0 0 10px 2px rgb(68,145,224);
	letter-spacing: 2px;
	font-weight: bold;  
}
.tr-1th{
 
}
</style>