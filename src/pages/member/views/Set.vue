<template>
	<div class="all-set">
		<div class="setContent">
			<list v-for='(set,i) in setList' :iconSrc='set.sIcon' :title='set.sText' :lsit-style='1' :showIconLeft='false' :uLink='set.sLink' class='sList' :hideBorder='true' :class='{set_a: i == 2}'>

			</list>

		</div>
		<primary-button msg="退出登录" @click='logout' class='setBtn'></primary-button>
	</div>
</template>
<script>
	import primaryButton from '../components/primaryButton.vue';
	import List from '../../../components/list';

	export default {
		props: {},
		data() {
			return {
				setList: [{
					"sText": "编辑个人资料",
					"sLink": "/member/infoEdit"
				}, {
					"sText": "收货地址",
					"sLink": "haveWin"
				}, {
					"sText": "安全设置",
					"sLink": "my-postlist"
				}, {
					"sText": "常见问题",
					"sLink": "/member/common_question"
				}, {
					"sText": "联系客服",
					"sLink": "test"
				}]
			}
		},
		methods:{
			logout(){
//				this.router.push({path:''})
			}
		},
		components: {
			List,
			primaryButton,
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-set {
		background: $black6;
		height: 667px;
		padding-top: 10px;
		.setBtn {
			position: absolute;
			bottom: 15px;
			left: 15px;
			right: 15px
		}
	}
	
	.app-shell-footer {
		display: none;
	}
</style>