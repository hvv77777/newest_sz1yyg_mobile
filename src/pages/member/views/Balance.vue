<template>
	<div class="all-balance">
		<div class="balance">
			<p>您的账户余额</p>
			<span>￥{{user.balance}}</span>
			<!--<primary-button msg="去充值" goSkip='/member/packet' class='balanceBtn'></primary-button>-->
		</div>
		<ul class="tab-ul">
			<!--			<li v-for="(tab,$i) in tabs" @click="toggle($i,tab.view)" :class="{tabActive:active == $i}">{{tab.type}}</li>-->
			<li v-for="(tab,$i) in tabs" @click="toggle($i,tab.view)" :class="{tabActive:active == $i}">{{tab.type}}</li>
		</ul>
		<tab-view :tabView='currentView' :deShow='deShow'></tab-view>
	</div>
</template>
<script>
	//	import { mapActions } from 'vuex';
	import primaryButton from '../components/primaryButton.vue';
	import tabView from '../components/tabView.vue';

	export default {
		name: 'balance',
		props: {},
		data() {
			return {
				title: '余额',
				user: {
					balance: '77.00',
				},
				currentView: '消费明细',
				active: 0,
				deShow: 'v1',
				tabs: [{
					type: '消费明细',
					view: 'v1',
				}, {
					type: '充值明细',
					view: 'v2'
				}, {
					type: '转账明细',
					view: 'v3'
				}],

			}

		},
		methods: {
			//			...mapActions('appShell/appBottomNavigator', [
			//				'hideBottomNav',
			//			]),
			toggle(i, v) {
				this.active = i,
					this.currentView = v,
					this.deShow = ''
			}
		},
		components: {
			primaryButton,
			tabView,
		},

	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.balance {
		height: 86px;
		background: url(../../../assets/images/member/balance_background@2x.png);
		background-size: cover;
		color: $white;
		padding-left: 30px;
		p {
			padding-top: 6px;
			padding-bottom: 19px;
			font-size: 15px;
		}
		span{
			font-size: 30px;
		}
		/*.balanceBtn {
			width: 80%;
			margin: 10px 0;
		}*/
	}
	
	.tab-ul {
		display: flex;
		justify-content: space-around;
		li {
			height: 44px;
			line-height: 44px;
			font-size: 15px;
		}
		.tabActive {
			color: $main-red;
			border-bottom: 2px solid $main-red;
		}
	}
</style>