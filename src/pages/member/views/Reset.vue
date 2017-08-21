<template>
	<div class="all-reset">
		<div class="logoImg">
			<img src="../../../assets/images/login/logo@2x.png" alt="" />
		</div>
		<form action="">
			<p>
				<img src="../../../assets/images/login/login_password@2x.png" alt="" />
				<input type="password" name="newPsd" v-model="newPsd" placeholder="请输入新密码" />
			</p>
			<p>
				<img src="../../../assets/images/login/login_password@2x.png" alt="" />
				<input type="password" name="againPsd" v-model="againPsd" placeholder="再次输入密码" />
			</p>
		</form>
		<primary-button msg="确认修改" @click='confirmReset' class='confirmReset'></primary-button>
	</div>
</template>

<script>
	import primaryButton from '../components/primaryButton.vue';
	export default {
		props: {},
		data() {
			return {

			}
		},
		methods:{
			confirmReset(){
				
			},
		},
		components: {
			primaryButton,
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-reset {
		padding: 0 25px;
		margin-top: 45px;
		.logoImg {
			text-align: center;
			margin-top: 45px;
			img {
				width: 50px;
				height: 75px;
			}
		}
		form {
			padding-top: 15px;
			margin-bottom: 50px;
			p {
				border-bottom: 1px solid $black6;
				position: relative;
				margin-top: 25px;
				input::placeholder {
					color: $black4;
					font-size: 13px;
				}
				input {
					margin-bottom: 5px;
					margin-left: 32px;
					height: 20px;
					line-height: 20px;
					width: 70%;
					padding-top: 10px;
				}
				img {
					position: absolute;
					left: 10px;
					top: 12px;
					width: 14px;
					margin-right: 11px;
				}
			}
		}
		.marker {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 40px;
			margin: auto;
			text-align: center;
			font-size: 12px;
			color: $black4;
			img {
				width: 12px;
				height: 12px;
				margin-right: 5px;
			}
			span {
				color: $main-red;
			}
			
		}
	}
</style>
