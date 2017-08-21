<template>
		<section class="list border-1px" @click='goSkip(uLink)'>
			<div class="list-left" v-if="listStyle==2">
				<img src="../assets/images/member/avatar.jpg" alt="">
				<div>
					<p>username~~~guoguoguo</p>
					<p class="gray-font-12">2017-12-16 15:14:14.838</p>
				</div>
			</div>
			<div v-else class="title">
				<img :src="iconSrc" alt="" class='iconImg' v-if="showIconLeft" />
				<span>{{title}}</span>
			</div>
			<div class="list-right">
				<p class="gray-font-12" v-if="havePeople"><span class="orange-font-12">1</span>人次</p>
				<span class="icon-more" v-if="showIconRight"></span>
			</div>
             <i v-if="hideBorder"></i>
		</section>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			title: {
				type: [String, Number]
			},
			showIconRight: { //箭头图标
				type: Boolean,
				default: true
			},
			showIconLeft: {
				type: Boolean,
				default: true
			},
			listStyle: {
				type: [Number, String],
				//1:简单模式，2：带头像  
				default: 1
			},
			// haveIcon: {
			//   type: Boolean,
			//   default: true
			// },
			havePeople: {
				type: Boolean,
				default: false
			},
			iconSrc: {
				type: String,
			},
			uLink: {
				type: String,
			},
			hideBorder:{
				type:Boolean,
				defatult:false
			}
		},
		methods: {
			goSkip(link) {
				this.$router.push({
					path: link
				})
			}
		}
	}
</script>
<style lang="scss">
	@import '../assets/scss/common';
	.list {
		height: 44px;
		line-height: 44px;
		display: flex;
		justify-content: space-between;
		background: #fff;
		color: #777;
		padding: 0 15px !important;
		background-origin: 100 100;
		&:active {
			background: #f1f1f1;
		}
		.list-left {
			margin-top: 8px;
			display: flex;
			img {
				width: 36px;
				height: 36px;
				border-radius: 50%;
				margin-right: 5px;
			}
		}
		.title {
			span {
				font-size: 15px;
				color: #333;
			}
			.iconImg {
				width: 16px;
				vertical-align: middle;
				margin-right: 10px;
			}
		}
		.list-right {
			.icon-more {
				background: url(../assets/images/member/icon_arrow@2x.png) no-repeat;
				width: 8px;
				height: 14px;
				line-height: 14px;
				display: inline-block;
				background-size: cover;
			}
		}
	}
	

	
	i {
		display: inline-block;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 11;
		width: 15px;
		height: 1px;
		background: #fff;
	}
</style>