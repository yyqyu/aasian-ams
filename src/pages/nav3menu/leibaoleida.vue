<template>
<div >
	globalmodel
	<p>If you click on me, I will disappear.</p>

	<div class="loading">
		fff
	</div>

</div>	

</template>

<script>
jQuery(function () {
  $("p").click(function(){
		 	alert(2)
		   $(this).hide();
  });
})

export default{

}
</script>


<style scoped>
	
</style>