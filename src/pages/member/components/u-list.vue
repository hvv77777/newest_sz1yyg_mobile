<template>
	<div class="u-list" @click="goSkip(uLink)">
		<!--<img :src="uIcon" alt="" class='iconList'/>-->
		<span>{{uText}}</span>
		<i v-if="showIcon">
			<img src="../../../assets/images/member/icon_arrow@2x.png" alt="" class="iconRight" />
		</i>
	</div>
	</div>
</template>
<script>
	export default {
		props: {
			uText: {
				type: [String, Number]
			},
			uIcon: {
				type: String,
			},
			showIcon: {
				default: false
			},
			uLink: {
				type: String
			}

		},
		methods: {
			goSkip(l) {
				this.$router.push({
					path: l
				})
			}
		}

	}
</script>

<style lang="scss">
	.u-list {
		width: 100%;
		height: 44px;
		line-height: 44px;
		background: #fff;
		color: #333;
		font-size: 15px;
		margin: 0 15px;
		border-bottom: 1px solid burlywood !important;
	}
	.iconRight{
		width:7px;
		height: 14px;
	}
</style>