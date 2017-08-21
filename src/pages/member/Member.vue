<template>
	<div class="all-member">
		<div class="bgImg">
			<img class="avatar " src="../../assets/images/member/avatar.jpg" alt="">
		</div>
		<div class="member-float">
			<div class="userHeader">
				<div class="userMsg floatLeft">
					<p class="mName">{{user.name}}</p>
					<p class="mTel">{{user.tel}}</p>
				</div>
				<img src="../../assets/images/member/member_red@2x.png" alt="" class="redIcon floatRight" />
			</div>
			<ul class="member-money">
				<li id="set" @click="goBalance">
					<span class="mText">余额</span>
					<span class="mainRed numList">￥{{ user.balance }}</span>
					<hr />
				</li>
				<li class="">
					<span class="mText">福分</span>
					<span class="numList">{{ user.score }}</span>
					<hr />
				</li>
				<li class="" @click="goPacket">
					<span class="mText">红包</span>
					<span class="numList">{{ user.money }}</span>
				</li>
				<li class="goRecharge" @click="">
					去充值
				</li>
			</ul>
		</div>
		<!--<u-list :uText="user.uText" :uIcon="user.uIcon" :showIcon='user.show' v-for="(user,i) in userList" class="user-list" :uLink='user.uLink' :class='{setBtm: i == 4,set:i == 7 }'></u-list>-->
		<list v-for='(user,i) in userList' :iconSrc='user.uIcon' :title='user.uText' :lsit-style='1'  :uLink='user.uLink' class='uList' :hideBorder='true' :class='{set_a: i == 3,set_b:i == 6,set_c:i == 7 }'></list>
	</div>
</template>
<script>
	import { mapActions } from 'vuex';
	import List from '../../components/list';

	//先导入图片，再动态访问
	import record from '../../assets/images/member/member_Record@2x.png';
	import win from '../../assets/images/member/member_Win@2x.png';
	import show from '../../assets/images/member/member_Show@2x.png';
	import collect from '../../assets/images/member/member_collect@2x.png';
	import code from '../../assets/images/member/member_code@2x.png';
	import invite from '../../assets/images/member/member_invite@2x.png';
	import activity from '../../assets/images/member/member_activity@2x.png';
	import set from '../../assets/images/member/member_Set@2x.png';
	import vip from '../../assets/images/member/member_vip@2x.png';
	import query from '../../assets/images/member/member_query@2x.png';

	export default {
		name: 'member',
		props: {},
		data() {
			return {
				userList: [{
					"uText": "云购记录",
					//					"uLink": "record",
					"uIcon": record
				}, {
					"uText": "获得的商品",
					"uLink": "haveWin",
					"uIcon": win
				}, {
					"uText": "我的晒单",
					"uLink": "my-postlist",
					"uIcon": show
				}, {
					"uText": "收藏夹",
					"uLink": "wallet",
					"uIcon": collect
				}, {
					"uText": "我的二维码",
					"uLink": "test",
					"uIcon": code
				}, {
					"uText": "邀请管理",
					"uLink": "record",
					"uIcon": activity
				}, {
					"uText": "活动邀请",
					"uLink": "my-postlist",
					"uIcon": invite
				}, {
					"uText": "设置",
					"uLink": "/member/set",
					"uIcon": set
				}, {
					"uText": "VIP转账",
					"uLink": "test",
					"uIcon": vip
				}, {
					"uText": "订单查询",
					"uLink": "test",
					"uIcon": query
				}],
				user: {
					name: '从前慢一生只够',
					tel: '18161560049',
					balance: '700.00',
					score: '70',
					money: '7'
				}

			}
		},
		methods: {
			...mapActions('appShell/appBottomNavigator', [
				'showBottomNav',
				'activateBottomNav'
			]),
			goBalance() {
				this.$router.push({
					path: '/member/balance'
				})
			},
			goPacket() {
				this.$router.push({
					path: '/member/packet'
				})
			},

		},
		activated() {
			this.activateBottomNav('member');
			this.showBottomNav();
		},
		components: {
			List
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/common';
	@import '../../assets/scss/reset';
	.all-member {
		background: $black6;
		width: 100%;
		margin: 0 auto;
		color: $black1;
		.bgImg {
			background: url(../../assets/images/member/member_background_wechat@2x.png);
			background-size:cover;
			height: 116px;
			margin-bottom: 100px;
			.avatar {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				position: absolute;
				top:30px;
				left: 30px;
				z-index: 10;
			}
		}
		.member-float {
			height: 130px;
			width: 345px;
			border-radius: 6px;
			background: $white;
			position: absolute;
			top: 65px;
			left: 15px;
			.userHeader {
				margin-top: 15px;
				overflow: hidden;
				.mTel {
					color: $black4;
					margin-top: 10px;
				}
				.redIcon {
					width: 18px;
					height: 24px;
					margin-right: 20px;
				}
				.userMsg {
					margin-left: 100px;
				}
			}
			.member-money {
				display: flex;
				justify-content: space-around;
				text-align: center;
				align-items: flex-end;
				margin-top: 8px;
				.mName {
					font-size: 15px;
					color: $black1;
				}
				li {
					width: 86px;
					position: relative;
					span {
						display: block;
						margin-top: 10px;
					}
					.mainRed {
						color: $main-red;
					}
					.mText {
						color: $black4;
						margin-bottom: 10px;
						font-size: 13px;
					}
					.numList {
						font-size: 15px;
					}
					hr {
						border:none;
						border-left:1px solid $black5;
						height: 24px;
						position: absolute;
						right: 0;
						top: 10px;
					}
				}
				.goRecharge {
					width: 75px;
					height: 30px;
					line-height: 30px;
					background: $main-red;
					color: $white;
					border-radius: 4px;
					margin-bottom: 3px;
					font-size: 13px;
					margin-right: 10px;
				}
			}
		}
		
		.uList {
			z-index: 0;
		}
	}</style>