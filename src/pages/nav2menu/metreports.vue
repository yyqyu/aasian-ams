<template>
<div class="wrap">
  <div class="bottom" id="mapid" v-bind:style="{ height:clientHeights}">
  	   	<div class="fun-panel">
  	   	       <template v-for="check in checkList">  	   	          	   	       
  	   	              <div v-for="(item,index) in check.list">  	   	              
  	   	                  <span class="fa" 
  	   	                       v-bind:class="[checkActive(item.id) ? 'ckbef' : 'ckaft']" 
  	   	                       v-on:click="checklist(item.id)"
  	   	                  >	   	                       
  	   	                      {{item.name}}
  	   	                  </span>	   	               
  	   	              </div> 	   	      	   	          
  	   	      </template>
  	   	</div> 
  	   	<div class="shijianzhou">
  	   		<ul>
  	   			<!-- <li v-for="(item,index) in timeline" class="tline">
  	   				<span class="timexianshi"
                          v-bind:style="{'display':item.xianshi}"
                          v-bind:class=""
  	   				>
  	   				    {{item.time}}
  	   				</span>
  	   			</li> -->
  	   			<li v-for="(item,index) in timeline" class="tline">
  	   				<span class="timexianshi"
                          v-bind:class="[shijianbiao(index)?'timexianshi2':'']"
  	   				>
  	   				    {{item.time}}
  	   				</span>
  	   				
  	   			</li>
  	   			<span class="timexianshi3">
  	   					24h
  	   			</span>
  	   		</ul>
  	   	</div>
  </div>	
</div>
</template>

<script>
import _ from 'lodash'
import ol from 'openlayers'

export default{
	data (){
		return {
			clientHeights:null,
			map:null,
			KHlayer:null,
			nowIndexes:[],
			checkList:{
				"obs":{
					"title":"obser",
					"list":[
                         {"name":"Aircraft REPs","id":"00"},
                         {"name":"AMDAR","id":"01"}
					]
				}
			},
			timeline:[
              {time:'24h'},{time:'1h'},{time:'2h'},{time:'3h'},{time:'4h'},{time:'5h'},{time:'6h'},{time:'7h'}
              ,{time:'8h'},{time:'9h'},{time:'10h'},{time:'11h'},{time:'12h'},{time:'13h'},{time:'14h'},{time:'15h'}
              ,{time:'16h'},{time:'17h'},{time:'18h'},{time:'19h'},{time:'20h'},{time:'21h'},{time:'22h'},{time:'23h'}
              
			]
		}
	},
	methods:{
	    checklist: function(index) {
	    	if(this.nowIndexes.indexOf(index) === -1 ){
	            this.nowIndexes.push(index)  

	            // this.KHlayer = new ol.layer.Tile({
	            //        opacity:0.4,
	            //        source: new ol.source.TileWMS({
	            //            url: 'http://106.37.210.226:8091/ncWMS2/wms',
	            //            params: { 'LAYERS': 'kuihua/Light', 'tiled': true }
	            //        }),
	            //        zIndex:0
	            // });    
	            // this.map.addLayer(this.KHlayer);
	            
	  		}
	  		else {    
	         // this.KHlayer.setVisible(false);

	  			this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
	                 return idx !== index
	        })
	  		}	
	    },  
	    checkActive (index) {
	  		return this.nowIndexes.indexOf(index) == -1
	  	},	
      gaodu: function(){
           this.clientHeights = `${window.innerHeight-122}px`;
           const that = this
           window.onresize = function temp() {
               that.clientHeights = `${window.innerHeight-122}px`;
           }
      },
      chuangjianditu:function(){
      	this.map = new ol.Map({
      	    control:[],
      	    layers: [
      	              new ol.layer.Tile({
      	                      source: new ol.source.TileWMS({
      	                      url:'http://106.37.210.226:8093/geoserver/World/wms',
      	                      params: { 'LAYERS': 'World:world_tif', 'TILED': true }
      	                    })
      	              })
      	    ],
      	    target: 'mapid',
      	    extend: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
      	    projection: new ol.proj.Projection('EPSG:3857'),
      	    view: new ol.View({
      	        center: ol.proj.fromLonLat([115.25, 41.03], 'EPSG:3857'),
      	        zoom: 4
      	    })
      	})
      },
      shijianbiao:function(index){
         if(index%4==0){
         		return true
         	}
         // this.timeline.forEach(function(item,index){
         // 	if(index%4==0){
         // 		//item.xianshi = 'block !important'
         // 	}
         // })
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
        this.gaodu()
        this.chuangjianditu()
        // this.shijianbiao()
	}
}	
</script>

<style scoped>
.span-word{
 width: 50px;
}	
.timexianshi{
	display: none;
	font-size: 14px;
	color: #295180;
	font-weight: bold;
	cursor: pointer;
}
.timexianshi2{
	display: block !important;
	background: url('../../assets/timepoint.png') no-repeat;
    background-position-x: 5px;
    background-position-y: 16px;
    margin-left: -5px;
    z-index: 90;
    height: 40px;
    cursor: pointer;
}
.timexianshi3{
	display: inline-block;
	background: url('../../assets/timepoint.png') no-repeat;
    background-position-x: 5px;
    background-position-y: 16px;
    margin-left: -5px;
    z-index: 100;
    height: 40px;
    cursor: pointer;

}
.tline{
	float: left;
    color: rgb(41,81,128);
    width: 45px;
    height: 40px;
    background: url('../../assets/timeic.png') no-repeat;
    /*background: url(/static/img/timeic.b56c657.png) no-repeat;*/
    background-position-x: 5px;
    background-position-y: 21px;
    margin-left: -5px;
     cursor: pointer;
}
.ckbef{
  background:url('../../assets/ckbefore.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
}
.ckaft{
   background:url('../../assets/ckafter.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
}
.bottom{
	width: 97%;
	height: 100%;
	min-height: 655px;
	border: 10px solid white;
	border-radius: 14px;
	min-width: 1070px;
	display: inline-block;
	margin-top: 10px;
	position: relative;
}
.shijianzhou{
     width: 1130px;	
	 height:100px; 
	 z-index: 100;
	 position: absolute;
	 left: 50%;
     margin-left: -500px;
	 bottom: 30px;
}
.fun-panel{
    width: 300px;
    font-size: 14px;
    position: absolute;
    right: 0px;
    z-index: 100;
    top: 28px;
}
.fun-panel .fun-title{
    width:100%;
    height:28px;
    line-height:28px;
    color:#333333;
    font-weight:bold;
}
.fun-panel .fun-title span{
    display:inline-block;
    height:100%;
    border-bottom:2px solid #317abe;
}
.fun-panel table{
    margin-top:6px;
    width:100%;
}
.fun-panel table td{
	float: left;
    width:50%;
    color:#1f649b;
}
.fun-panel table td .btn-check{
    cursor:pointer;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
}

.fun-panel table td .btn-check i{
    margin-right:8px;
    font-size:23px;
}
.fun-panel .classify{
    border-top:2px solid #dddddd;
    margin-top:8px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 1px;
    font-weight: bold;
    height: 18px;
    padding-left: 18px;
    line-height: 18px;
    color: #317abe !important;
    float: left;
    padding-right: 13px;
    cursor: pointer;
    margin-left: 23px;
}
.checkword{
	font-size: 14px !important
}
.fa-square-o:before {
    content: "\f096";
}
.fa-square-o{
	font-size: 23px !important
}
.fa-check-square-o{
	font-size: 23px !important
}
</style>