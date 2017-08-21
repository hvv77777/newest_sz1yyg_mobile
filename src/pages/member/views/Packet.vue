<template>
	<div class="all-packet">
		<nav-header navTitle='红包'></nav-header>
		<div class="packet-content">6月狂欢，感恩回馈</div>
		<primary-button msg="领红包" goSkip='' class='packetBtn'></primary-button>
	</div>
</template>

<script>
	import navHeader from '../components/navHeader.vue';
	import primaryButton from '../components/primaryButton.vue';
	export default {
		props: {},
		data() {
			return {
			}
		},
		components: {
			navHeader,
			primaryButton,
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-packet {
		.packetBtn {
			width: 100%;
			position:fixed;
			left:0;
			bottom:0;
			right:0
		}
	}
	
	
</style>