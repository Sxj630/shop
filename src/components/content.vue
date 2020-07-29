<template>
	<div class="show">
		<ul class="goodlist" >
			<li v-for="(goods,index) in list" :key="index" @click="detail(goods)">
				<img v-bind:src="goods.img"/>
				<p>{{goods.name}}</p>
			</li>
		</ul>
	</div>
</template>


<script>
	export default
	{
	
	data(){
		var  _this=this;
		var url="";
		if(_this.ID==1)
		{
			url="json/first.json";
		}
		else if(_this.ID==2)
		{
			url="json/second.json";	
		}
		else{
				url="json/first.json";
			}	
				this.$http.get(url).then(function(res){
			_this.list=res.data;
		})
		return{
			list:[]
		}
		
	},
	props:{
		ID:Number
	},
	methods:{
		detail(goods){
			this.$router.push({
				path:'/detail',
				query:{
					name:goods.name,
					src:goods.img
				}
			})
		}
	},
	watch:{
		ID(){
			var _this=this;
			var url="";
			if(_this.ID==1)
			{
				url="json/first.json";
			}else if(_this.ID==2)
			{
			url="json/second.json";	
			}
			else{
				url="json/first.json";	
			}
			this.$http.get(url).then(function(res){
					_this.list=res.data;
				})
				return{
					list:[]
			}
		}
	}
	}
</script>

<style>
	.goodlist li{
		list-style: none;
		float: left;
		width: 200px;
		height: 200px;
		text-align: center;
		font-size: 12px;
		color: red;
		margin-bottom: 30px;
	}
	img{
		width:180px ;
		height: 180px;
	}
	p{
		width: 180px;
	}
</style>
