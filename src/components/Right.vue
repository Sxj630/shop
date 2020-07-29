<template>
	<div>
		<div v-if="mm==1">
			<count :ID="1"></count>
		</div>
		<div v-else-if="mm==2">
			<count :ID="2"></count>
		</div>
		<div v-else-if="mm==3">
			<count :ID="3"></count>
		</div>
		<div v-else>
			<count :ID="0"></count>
		</div>
	</div>
</template>

<script>
	import msg from './msg.js'
	import count from './content.vue'
	export default
	{
		data(){
			return{
				mm:0
			}
		},
			mounted(){
				var _this=this;
				msg.$on('val',function(m){
					_this.mm=m
				})
			},

	components:{
				count
			},
	}


</script>

<style>
</style>
