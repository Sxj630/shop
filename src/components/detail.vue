<template>
	<div class="detail">
		<img v-bind:src="img">
		<p>{{name}}</p>
		<button @click="buy()">购买</button>
	</div>
</template>

<script>
	export default{

		data(){
			return{
				name:this.$route.query.name,
				img:this.$route.query.src
			}
		},
	methods:{
		buy(){
			alert("购买成功，返回首页");
			this.$router.go(-1);
		}
	}
	}

	
</script>

<style>
	p{
		text-align: center;
		color: #E54847;
		margin: auto;
	}
	button{
		width: 80px;
		
		
	}
</style>
