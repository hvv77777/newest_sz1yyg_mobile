<template>
	<div class="nav_header">
		<img src="../../../assets/images/member/icon_arrow@2x.png" alt="" />
		<span>{{navTitle}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			navTitle: {
				type: [String]
			}
		}
	}
</script>

<style lang="scss">
	.nav_header {
		height: 40px;
		line-height: 40px;
		background: #fff;
		padding: 0 10px;
		margin-bottom: 10px;
		text-align: center;
		img {
			/*float: left;*/
			margin-left: 0;
			width: 8px;
			height: 14px;
		}
		span {
			
		}
	}
</style>