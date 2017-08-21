<template>
	<div class="primary-button" >{{ msg }}</div>
</template>

<script>
	export default {
		props: {
			to: {
				type: String,
			},
			msg: {
				type: String,
			}
		}
	};
</script>

<style lang="scss" scoped>
	.primary-button {
		height: 44px;
		line-height: 44px;
		font-size: 15px;
		border-radius: 3px;
		background:#f13329 ;
		color: #fff;
		display: flex;
		justify-content: center;
		margin: auto;
	}
</style>