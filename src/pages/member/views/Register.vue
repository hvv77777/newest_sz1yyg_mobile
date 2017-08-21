<template>
	<div class="all-register">
		<div class="logoImg">
			<img src="../../../assets/images/login/logo@2x.png" alt="" />
		</div>
		<form action="">
			<p>
				<img src="../../../assets/images/login/login_user@2x.png" alt="" />
				<input type="text" name="userName" v-model="userName" placeholder="请输入手机号码/邮箱" />
			</p>
			<p>
				<img src="../../../assets/images/login/login_password@2x.png" alt="" />
				<input type="password" name="userPsd" v-model="userPsd" placeholder="请输入密码" />
				<i></i>
			</p>
			<p>
				<img src="../../../assets/images/login/login_code@2x.png" alt="" />
				<input type="password" name="userPsd" v-model="userPsd" placeholder="请输入验证码" />
				<span></span>
			</p>
		</form>
		<primary-button msg="注册" goSkip='' class='setBtn'></primary-button>
		<div class="marker">
			<img src="../../../assets/images/login/Check_normal@2x.png" alt="" />
			<i>我已阅读并同意</i><span>红狸网 .更精彩用户服务协议</span>
		</div>
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
	.all-register {
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
				i,
				span {
					position: absolute;
					right: 10px;
					bottom: 8px;
					display: inline-block;
				}
				i {
					background: url(../../../assets/images/login/login_open@2x.png);
					background-size: cover;
					width: 18px;
					height: 10px;
				}
				span {
					width: 75px;
					height: 35px;
					background: $black6;
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