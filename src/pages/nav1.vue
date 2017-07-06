<template>
  <div class="main" v-bind:style="{ height:clientHeights}">
     <div class="gis-box" id="mapid">
        <div class="funBtn" v-on:click="kaiguan">
        </div>
        <div class="fun-panel" v-bind:class="{panelt:isPanelt}">
              <template v-for="check in checkLists">
                  <div class="fun-title" v-bind:style="{display:check.display}"><span>{{check.title}}</span></div>
                  <table v-bind:class="[checkActive2(check.title)?'lasttable':'']">
                    <tr>
                      <td v-for="(item,index) in check.list">
                              <span class="fa2" 
                                    v-bind:class="[checkActive(item.id) ? 'ckbef' : 'ckaft']" 
                                    v-on:click="checklist(item.id)"
                              >                            
                                  {{item.name}}
                              </span>  
                      </td>
                    </tr>
                  </table>
              </template>
        </div>	

        <ul class="mapright">
          <li class="giscaozuo1"></li>
          <li class="giscaozuo2"></li>
          <li class="giscaozuo3"></li>
        </ul>   
	   </div>
  </div> 	
</template>

<script>
import _ from 'lodash'
import ol from 'openlayers'

export default {
  data () {
     return {
      clientHeights:null,
     	isPanelt:false,
      KHlayer:null,
      map:null,
     	nowIndexes:[],
     	checkLists: [
     		{
     			title:'Observation',
     			list: [
                  {
                  	name:'METAR/SPECI',
                  	id:'00'
                  },
                  {
                  	name:'SIGMET/AIRMET',
                  	id:'01'
                  },
                  {
                  	name:'Combined Reflectivity',
                    id:'02'
                  },
                  {
                  	name:'Sat',
                  	id:'03'
                  },
                  {
                  	name:'Aircraft REP',
                  	id:'04'
                  },
                  {
                  	name:'AMDAR',
                  	id:'05'
                  },
                  {
                  	name:'Lightning',
                  	id:'06'
                  }
     			]
     		},
       	{
       			title:'Hazardous Weather Distinguish',
       			list:[
                    {
                    	name:'Convective cloud',
                    	id:'10'
                    },
                    {
                    	name:'Turbulence',
                    	id:'11'
                    },
                    {
                    	name:'Sand-dust storm',
                    	id:'12'
                    },
                    {
                    	name:'Mountain wave',
                    	id:'13'
                    },
                    {
                    	name:'lcing',
                    	id:'14'
                    }
       			]
       		},
         	{
         			title:'Asian Hazardous Weather Advisory',
         			list:[
                      {
                      	name:'0-6h',
                      	id:'20'
                      },
                      {
                      	name:'6-12h',
                      	id:'21'
                      },
                      {
                      	name:'12-24h',
                      	id:'22'
                      }
         			]
         	},
       		{
       			title:'kong',
       			list:[
                    {
                    	name:'Routes',
                    	id:'30'
                    },
                    {
                    	name:'FIRs',
                    	id:'31'
                    }
       			]
       		}
     	]
     }
  },
  methods: {
    kaiguan: function() {
        this.isPanelt = !this.isPanelt

        for(let i=0;i<this.checkLists.length;i++){
          if(this.checkLists[i].title == 'kong'){
                 this.checkLists[i].display = 'none'
          }
       }
    },
    checkActive2:function(index){
         if(index == 'kong'){
                 return true
          }
    },
    checklist: function(index) {
    	if(this.nowIndexes.indexOf(index) === -1 ){
            this.nowIndexes.push(index)  

            this.KHlayer = new ol.layer.Tile({
                   opacity:0.4,
                   source: new ol.source.TileWMS({
                       url: 'http://106.37.210.226:8091/ncWMS2/wms',
                       params: { 'LAYERS': 'kuihua/Light', 'tiled': true }
                   }),
                   zIndex:0
            });    
            this.map.addLayer(this.KHlayer);        
  		}
  		else {    
         this.KHlayer.setVisible(false);

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
    }
  },
  mounted () {
      this.gaodu()
      this.chuangjianditu()
  }
}
</script>

<style scoped>
.main{
    min-height: 570px;
    height: 100%;
    background:#f0f2f5;
    border-left: 8px solid #4d4d4d;
    border-right: 8px solid #4d4d4d;
    border-bottom:8px solid #4d4d4d;
    border-top: 8px solid #4d4d4d;
    box-shadow: 0px 2px 2px black;
    margin:7px;
}
.mapright{
   display: block;
   position: absolute;
   right:33px;
   top:590px;
   z-index:100;
}
.giscaozuo1{
   width: 24px;
   height: 24px;
  background:url('../assets/gisicon1.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
  cursor: pointer;
  padding-top: 3px;
}
.giscaozuo2{
   width: 24px;
   height: 24px;
  background:url('../assets/gisicon2.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
  cursor: pointer;
  padding-top: 3px;
}
.giscaozuo3{
   width: 24px;
   height: 24px;
  background:url('../assets/gisicon3.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
  cursor: pointer;
}
.lasttable{
   border-top: 2px solid rgb(228,229,241);
    border-bottom: 2px solid rgb(228,229,241);
    padding-bottom: 10px;
    margin-left: -15px;
    padding-left: 15px;
    width: 340px !important;
}
.fa2 {
    display: inline-block;  
    height: 16px;
    padding-left: 22px;
    line-height: 14px;
    color: #317abe !important;
    float: left;
    cursor: pointer;
    font-size: 14px;
}
.ckbef{
  background:url('../assets/ckbefore.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
}
.ckaft{
  background:url('../assets/ckafter.png') no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
}
.gis-box{
    width:100%;
    height:100%;
    position:relative;
}
.main .gis-box .funBtn{
    width:38px;
    height:36px;
    background:url('/static/img/gisBtn.png') no-repeat center;
    position:absolute;
    right:33px;
    top:20px;
    z-index:100;
    cursor:pointer;
}
.fun-panel{
    width:325px;
    height:491px;
    font-size:14px;
    position:absolute;
    right:20px;
    top:10px;
    background-color:rgba(255,255,255,.85);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    border:1px solid #c8cacc;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    padding-left: 15px;
    padding-top: 10px;
    visibility: hidden;
    opacity: 0;
}
.panelt{
    visibility: visible;
    opacity: 1;
    z-index: 99;    
    background-image:url('../assets/nav1list.png');
    background-repeat: no-repeat;
    background-position-x: 0px;
    background-position-y: 407px;
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
    font-size: 14px;
}
.fun-panel table{
    margin-top:6px;
    width:100%;
}
.fun-panel table td{
	float: left;
    width:50%;
    color:#1f649b;
    padding-top: 10px;
}
.fun-panel table td .btn-check{
    cursor:pointer;
}
.fun-panel table td .btn-check span{
    display:inline-block;
    width:20px;
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
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-square-o:before {
    content: "\f096";
}
</style>