<template>
	<div class="all-question">
		<ul class="question-ul">
			<li class="" v-for="(quest,i) in questions">
				<span>{{quest.item}}</span>
				<img src="../../../assets/images/member/icon_arrow@2x.png" alt="" class="floatRight" @click="show[i] = !show"/>
			    <transtion name='fade'>
			    	
			    	<p v-if='show'>{{quest.answer}}</p>
			    </transtion>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{},
		data(){
			return{
				show:false,
				questions:[{
					item:'如何领取88元红包？',
//					show:true,
					answer:'8月9日上午，家住镇安县达仁镇春光村一组的67岁聋哑老人翟德兰吃过早饭后，与同样是聋哑人的60岁邻居张得梅背着竹篓结伴进山采药材。她们采药的地方当地人叫红崖沟，山大沟深林密，海拔约1500米。'
				},{
					item:'中奖的商品提供发票吗？',
//					show:true,
					answer:'8月9日上午，家住镇安县达仁镇春光村一组的67岁聋哑老人翟德兰吃过早饭后，与同样是聋哑人的60岁邻居张得梅背着竹篓结伴进山采药材。她们采药的地方当地人叫红崖沟，山大沟深林密，海拔约1500米。'
				
			}]
				}
		},
		methods:{
			
		},
		components:{
			
		}
	}
</script>

<style lang="scss" >
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	 .all-question{
	 	padding-top:10px;
	 	height:667px;
	 	background:$black6;
	 	.question-ul{
	 		li{
	 			background:$white;
	 			border-bottom:1px solid $black5;
	 			padding:15px;
	 			span{
	 				font-size:15px;
	 			}
	 			img{
	 				width:14px;
	 				height:14px;
	 			}
	 			p{
	 				font-size: 13px;
	 				color:$black4;
	 				padding-top: 15px;
	 				
	 			}
	 			.fade-enter-active,.fade-leave-active{
	 				transtion:opacity .5s
	 			}
	 			.fade-enter,.fade-leave-active{
	 				opacity: 0;
	 			}
	 		}
	 		
	 	}
	 }
	
</style>