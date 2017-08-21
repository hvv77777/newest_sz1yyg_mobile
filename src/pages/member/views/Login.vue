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
				<img src="../../../assets/images/login/login_password@2x.png" alt="" />
				<input type="password" name="userPsd" v-model="userPsd" placeholder="请输入密码" />
				<i></i>
			</p>
			<p>
				<img src="../../../assets/images/login/login_code@2x.png" alt="" />
				<input type="text" name="code" v-model="code" placeholder="请输入验证码" />
				<span></span>
			</p>
			<a href="">忘记密码?</a>
		</form>
		<primary-button msg="登录" goSkip='' class='setBtn'></primary-button>
		<div class="otherLogin">
			<div>
				<hr />
				<i>第三方登录</i>
				<hr />
			</div>
			<div>
				<a href="" class="qq-a"><img src="../../../assets/images/login/login_QQ@2x.png" class="wxImg" /></a>
				<a href="" class="wx-a"><img src="../../../assets/images/login/login_wechat@2x.png" class="wxImg" /></a>
			</div>
			<div class="register">快速注册</div>
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
			a {
				display: inline-block;
				float: right;
				margin-right: 10px;
				color: $black4;
				font-size: 12px;
				padding-top: 15px;
			}
		}
		.otherLogin {
			margin-top: 30px;
			div {
				display: flex;
				justify-content: center;
				i {
					font-size: 12px;
					color: $black4;
				}
				img {
					margin-top: 15px;
					width: 40px;
					height: 40px;
				}
				.qq-a {
					margin-right: 40px;
				}
				.wx-a {
					margin-left: 40px;
				}
				hr {
					height: 1px;
					border: none;
					border-top: 1px solid $black5;
					width: 30px;
					margin: 5px 8px;
				}
			}
			.register {
				width: 80px;
				height: 30px;
				line-height: 30px;
				color: $main-red;
				border: 1px solid $main-red;
				font-size: 15px;
				border-radius: 3px;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 30px;
				margin: auto;
			}
		}
	}
</style>