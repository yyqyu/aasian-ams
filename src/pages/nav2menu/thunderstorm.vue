<template>
  <div v-bind:style="{ height:clientHeights}">
    thunder
  </div>	
</template>
<script >
export default{
	data(){
		return {
			 clientHeights:null
		}
	},
	methods:{
		gaodu: function(){
           this.clientHeights = `${window.innerHeight-92}px`;
           const that = this
           window.onresize = function temp() {
               that.clientHeights = `${window.innerHeight-92}px`;
           }
      }
   },
   mounted (){
      this.gaodu()
   }
}	
</script>
<style scoped>
	
</style>