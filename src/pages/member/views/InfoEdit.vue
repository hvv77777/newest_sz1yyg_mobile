<template>
	<div class="all-infoEdit">
		<ul class="info-list">
			<li class="edit-avatar">
				<span>头像</span>
				<input type="file" name='avatar' @change="isChange" />
				<img :src="avatar" alt="" />
				<span class="arrowIcon"></span>
			</li>
			<li class="edit-name">
				<span>昵称</span>
				<input type="text" name="uName" v-model="uName" placeholder="昵称" />
				<span class="arrowIcon"></span>
			</li>
			<li class="edit-sign">
				<p>个人签名</p>
				<textarea name="infoSign" maxlength="30" @input="descInput" v-model='desc' placeholder="请输入签名">
				</textarea>
				<span>{{remnant}}/30</span>
			</li>
		</ul>
		<primary-button msg="确定" @click='comfirm' class='confirmBtn'></primary-button>
	</div>
</template>

<script>
	import navHeader from '../components/navHeader.vue';
	import primaryButton from '../components/primaryButton.vue';

	import avatar from '../../../assets/images/member/avatar.jpg'

	export default {
		props: {},
		data() {
			return {
				uName: null,
				desc: null,
				remnant: 0,
				avatar: avatar
			}
		},
		methods: {
			descInput() {
				this.remnant = this.desc.length;
			},
			isChange(e) {
				var files = e.target.files || e.dataTransfer.files;
				if(!files.length) return;
				this.avatar = files[0].name;
			},
			confirm() {

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
	.all-infoEdit {
		height: 667px;
		background: $black6;
		padding-top: 10px;
		font-size: 15px;
		.info-list {
			li {
				background: $white;
				border-bottom: 1px solid $black6;
				color: $black2;
				padding: 0 15px;
				input::placeholder,
				textarea::placeholder {
					color: $black4;
				}
				textarea {
					width: 100%;
					height: 105px;
				}
				.arrowIcon {
					background: url(../../../assets/images/member/icon_arrow@2x.png);
					width: 8px;
					height: 14px;
					display: inline-block;
					background-size: cover;
					float: right;
					margin-top: 14px;
				}
			}
			.edit-avatar {
				height: 60px;
				line-height: 60px;
				input {
					opacity: 0;
					filter: alpha(opacity=0);
					height: 60px;
					z-index: 99;
					position: absolute;
					right: 0;
					height: 60px;
				}
				img {
					position: absolute;
					right: 33px;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					margin-top: 5px;
				}
			}
			.edit-name {
				height: 44px;
				line-height: 44px;
				input {
					text-align: right;
					width: 80%
				}
			}
			.edit-sign {
				height: 150px;
				position: relative;
				p {
					padding: 15px 0;
				}
				span {
					position: absolute;
					bottom: 10px;
					right: 15px;
				}
			}
		}
		.confirmBtn {
			width: 345px;
			margin-top: 30px;
		}
	}
</style>