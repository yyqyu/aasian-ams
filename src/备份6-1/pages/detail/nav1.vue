<template>
  <div class="main">
	   <div class="gis-box">
          <!-- 地图代码插在此 -->
		    <div class="funBtn" v-on:click="kaiguan">
		    </div>
			<div class="fun-panel" v-bind:class="{panelt:isPanelt}">
				<template v-for="check in checkList">
					  <div class="fun-title"><span>{{check.title}}</span></div>
				    <table>
				    	<tr>
				    		<td v-for="(item,index) in check.list"                             
				    		>
				    			<label >
				    				<span class="btn-check">
				    					    <span>
                             <i class="fa" 
                                v-bind:class="[checkActive(index) ? 'fa-square-o' : 'fa-check-square-o']"
                                v-on:click="checklist(index)"	    
                            >
                             </i>
                             <input type="radio" name="c-radio" hidden>
                          </span>
                          {{item.name}} 
				    				</span>
				    			</label>
				    		</td>
				    	</tr>
				    </table>
				</template>
			</div>
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
     	checkList: {
     		obs: {
     			title:'Observation',
     			list: [
                  {
                  	name:'METAR/SPECI',
                  	id:'metar'
                  },
                  {
                  	name:'SIGMET/AIRMET',
                  	id:''
                  },
                  {
                  	name:'CR',
                    id:''
                  },
                  {
                  	name:'Sat',
                  	id:''
                  },
                  {
                  	name:'Aircraft REP',
                  	id:''
                  },
                  {
                  	name:'AMDAR',
                  	id:''
                  },
                  {
                  	name:'Lightning',
                  	id:''
                  }
     			]
     		},
     		hwd: {
     			title:'Hazardous Weather Distinguish',
     			list:[
                  {
                  	name:'Convective cloud',
                  	id:'convective'
                  },
                  {
                  	name:'Turbulence',
                  	id:''
                  },
                  {
                  	name:'Sand-dust storm',
                  	id:''
                  },
                  {
                  	name:'Mountain wave',
                  	id:''
                  },
                  {
                  	name:'lcing',
                  	id:''
                  }
     			]
     		},
     		ahwa:{
     			title:'Asian Hazardous Weather Advisory',
     			list:[
                  {
                  	name:'0-6h',
                  	id:''
                  },
                  {
                  	name:'6-12h',
                  	id:''
                  },
                  {
                  	name:'12-24h',
                  	id:''
                  }
     			]
     		},
     		fourth:{
     			title:'',
     			list:[
                  {
                  	name:'Routes',
                  	id:''
                  },
                  {
                  	name:'FIRs',
                  	id:''
                  }
     			]
     		}
     	}
     }
  },
  methods: {
    kaiguan: function() {
        this.isPanelt = !this.isPanelt
    },
    checklist: function(index) {
    	//alert(this.isPanelt)
    	if(this.nowIndexes.indexOf(index) === -1 ){
            this.nowIndexes.push(index)  
  		}
  		else {
  			this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
                 return idx !== index
            })
  		}		
    },
    checkActive (index) {
  		return this.nowIndexes.indexOf(index) == -1
  	}
  }
}
</script>

<style scope>
.main{
    height: 570px;
    padding:10px;
    background:#f0f2f5;
    border-left: 8px solid #4d4d4d;
    border-right: 8px solid #4d4d4d;
    border-bottom:8px solid #4d4d4d;
    border-top: 8px solid #4d4d4d;
    box-shadow: 0px 2px 2px black;
}
.main .gis-box{
    width:100%;
    height:100%;
    background:url("../../assets/gisBG.jpg") no-repeat center;
    position:relative;
}
.main .gis-box .funBtn{
    width:38px;
    height:36px;
    background:url("../../assets/gisBtn.png") no-repeat center;
    position:absolute;
    right:20px;
    top:20px;
    z-index:100;
    cursor:pointer;
}
.fun-panel{
    width:340px;
    height:506px;
    font-size:14px;
    position:absolute;
    right:10px;
    top:10px;
    background-color:rgba(255,255,255,.85);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    border:1px solid #c8cacc;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    box-shadow: 0 0 20px rgba(0, 0, 0, .35);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    padding:15px;
    visibility: hidden;
    opacity: 0;
}
.panelt{
    visibility: visible;
    opacity: 1;
}

.main .gis-box .fun-panel .fun-title{
    width:100%;
    height:28px;
    line-height:28px;
    color:#333333;
    font-weight:bold;
}
.main .gis-box .fun-panel .fun-title span{
    display:inline-block;
    height:100%;
    border-bottom:2px solid #317abe;
}
.main .gis-box .fun-panel table{
    margin-top:6px;
    border-spacing:4px;
    width:100%;
    border:none;
}
.main .gis-box .fun-panel table td{
	float: left;
    width:50%;
    color:#1f649b;
}
.main .gis-box .fun-panel table td .btn-check{
    cursor:pointer;
}
.main .gis-box .fun-panel table td .btn-check span{
    display:inline-block;
    width:20px;
}
.main .gis-box .fun-panel table td .btn-check i{
    margin-right:8px;
    font-size:23px;
}
.main .gis-box .fun-panel .classify{
    /*padding:8px 0;*/
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