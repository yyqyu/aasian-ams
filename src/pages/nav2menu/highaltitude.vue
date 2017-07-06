<template>
  	 <slide-show v-bind:slides="slides" :formLi="formli" v-on:change-hpa="changehpa"> 
     </slide-show>
</template>

<script>
import slideShow from '../../components/slideShow'
export default {
	components :{
		slideShow
	},
	data (){
	  return {	
		 formli:[
             {altitude:"100"},
             {altitude:"200"},
             {altitude:"300"},
             {altitude:"400"},
             {altitude:"500"},
             {altitude:"600"},
             {altitude:"700"},
             {altitude:"800"},
             {altitude:"900"},
             {altitude:"1000"},
             {altitude:"1100"},
             {altitude:"1200"},
             {altitude:"1300"},
             {altitude:"1400"},
             {altitude:"1500"},
             {altitude:"1600"}
		 ],
		 slides: [
	         {
	           src: require('../../assets/slideShow/pic1.jpg'),
	           title: '2017/1/10 01:03:00'
	         },
	         {
	           src: require('../../assets/slideShow/pic2.jpg'),
	           title: '2017/1/10 04:53:40'
	         },
	         {
	           src: require('../../assets/slideShow/pic3.jpg'),
	           title: '2017/1/10 03:15:50'
	         },
	         {
	           src: require('../../assets/slideShow/pic4.jpg'),
	           title: '2017/1/10 04:03:00'
	         },
	         {
               src: require('../../assets/slideShow/pic5.jpg'),
	           title: '2017/1/10 09:13:20'
	         },
	         {
	         	src: require('../../assets/slideShow/pic6.jpg'),
	         	title:'2017/1/10 06:06:33'
	         },
	         {
	         	src: require('../../assets/slideShow/pic7.jpg'),
	         	title:'2017/1/10 07:03:24'
	         },
	         {
	         	src: require('../../assets/slideShow/pic8.jpg'),
	         	title:'2017/1/10 08:13:18'
	         },
	         {
	         	src: require('../../assets/slideShow/pic8.jpg'),
	         	title:'2017/1/10 08:13:18'
	         },
	         {
	         	src: require('../../assets/slideShow/pic8.jpg'),
	         	title:'2017/1/10 08:13:18'
	         }
	     ],
         slides2:[]
	      
	  }
    },
    methods:{
        changehpa(index) {
        	//点击高度更新slides
        	// this.$http.get('',{index})
        	// .then( (res)=>{
        	// 	alert('请求高度'+index)
        	// 	this.slides=res.slides
        	// },(err)=>{
        	// 	return 0
        	// })
        }
    },

    //打开页面初始化数据
    // mounted () {  
    // 	this.$http.get('')
    // 	.then( (res)=>{
    // 		this.slides=res.slides
    // 		this.formLi=res.formLi
    // 	},(err)=> {
    // 		console.log(err)
    // 	})
    // }
}
</script>

<style scoped>

</style>