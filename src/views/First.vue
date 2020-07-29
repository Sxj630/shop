<template>
	<div class="main">
		<div class="left">
			<Left></Left>
		</div>
		<div class="right">
			<div class="top">
			<img src="img/shouye/shouye.jpg" />
			</div>
			<div class="buttom">
				<right></right>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Left from "../components/Left.vue"
	import right from '../components/Right.vue'
	
	export default{
		components:{
			Left,
			right
		}
	}

</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.left{
		width: 100px;
		float: left;
		margin-right: 10px;
	}
	.right{
		width: 1000px;
		float: left;
		margin-left: 10px;
	}
	.main
	{
		width: 1200px;
		padding: 20px;
		margin: 20px auto;
	}
	.top img
	{
			width: 1000px;
			height: 200px;
	}
	.left,.right{
			background-color: #f5f5f5;
			
			
	}
	
</style>
