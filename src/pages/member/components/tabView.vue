<template>
	<div class="all-tabView">
		<ul v-if="tabView == 'v1' || deShow == 'v1'">
			<li class="list-header">
				<span class="list_a">消费金额</span>
				<span class="list_b">消费时间</span>
			</li>
			<li class="consume-list" v-for="cons in consumes">
				<span class="list_a">￥{{cons.amount}}</span>
				<span class="list_b">{{cons.time}}</span>
			</li>
		</ul>

		<ul v-if="tabView == 'v2'">
			<li class="list-header">
				<span class="list_a">充值金额</span>
				<span>充值渠道</span>
				<span class="list_b">充值时间</span>
			</li>
			<li class="recharge-list" v-for="rec in recharges">
				<span class="list_a">￥{{rec.amount}}</span>
				<span>{{rec.place}}</span>
				<span class="list_b">{{rec.time}}</span>
			</li>
		</ul>
		<ul v-if="tabView == 'v3'">
			<li class="list-header">
				<span class="list_a">消费金额</span>
				<span class="list_b">消费时间</span>
			</li>
			<li class="consume-list" v-for="cons in consumes">
				<span class="list_a">￥{{cons.amount}}</span>
				<span class="list_b">{{cons.time}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			tabView: {
				type: [String]
			},
			deShow: {
				type: [String]
			}
		},
		data() {
			return {

				consumes: [{
						amount: '5',
						time: '2017-04-16 11:00'
					},
					{
						amount: '6',
						time: '2017-05-16 11:00'
					}, {
						amount: '8',
						time: '2017-08-16 11:00'
					}
				],
				recharges: [{
						amount: '5',
						place: '管理员充值金额',
						time: '2017-04-16 11:00'
					},
					{
						amount: '6',
						place: '管理员充值金额',
						time: '2017-04-16 11:00'
					}, {
						amount: '8',
						place: '管理员充值金额',
						time: '2017-04-16 11:00'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-tabView {
		li {
			color: $black2;
			font-size: 13px;
			border-top: 1px solid $black6;
			height: 40px;
			line-height: 40px;
			padding: 0 25px;
			
		}
		.list-header span {
			color: $black2;
			font-size: 13px;
			
		}
		.list_a{
			display: inline-block;
			width:73px;
		}
		.list_b{
			float: right;
			display: inline-block;
			width:140px;
		}
	}
</style>