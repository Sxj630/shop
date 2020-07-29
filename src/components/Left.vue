<template>
	<div>
	<div class="title">热门推荐</div>
	<ul class="ul">
		<li @click="ms1">笔记本电脑</li>
		<li @click="ms2">手机</li>
		<li>服饰</li>
		<li>电脑</li>
		<li>书籍</li>
		<li>办公用品</li>
		<li>笔记本电脑</li>
		<li>手机</li>
	</ul>
	</div>
</template>

<script>
	import msg from './msg.js'
	export default{
	methods:{
		ms1:function(){
			msg.$emit('val','1')
		},
		ms2:function(){
			msg.$emit('val','2')
		}
	}}
	
</script>


<style>

.title{
	color: red;
	font-size: 1.25rem;
	margin-bottom: 1.25rem;
}

.ul li{
	list-style: none;
	height: 50px;
	background-color: white;
	margin: 0.125rem;
	line-height: 50px;
	cursor: pointer;
	text-align: center;
}	
</style>
