<template>
	<div class="all-login">
		<div class="logoImg">
			<img src="../../../assets/images/login/logo@2x.png" alt="" />
		</div>
		<form action="">
			<p>
				<img src="../../../assets/images/login/login_user@2x.png" alt="" />
				<input type="text" name="userName" v-model="userName" placeholder="请输入手机号码/邮箱" />
			</p>
			<p>
				<img src="../../../assets/images/login/login_code@2x.png" alt="" />
				<input type="text" name="code" v-model="code" placeholder="请输入验证码" />
				<span></span>
			</p>
		</form>
		<primary-button msg="下一步" goSkip='/member/next' class='nextBtn'></primary-button>
	
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
		components: {
			primaryButton,
		}
	}
</script>
<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-login {
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
				span {
					position: absolute;
					right: 10px;
					bottom: 8px;
					display: inline-block;
					width: 75px;
					height: 35px;
					background: $black6;
				}
			}
		}

	}
</style>