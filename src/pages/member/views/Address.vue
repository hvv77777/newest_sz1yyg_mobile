<template>
	<div class="all-address">
		<ul class="address-ul">
			<li v-for="(info,i) in infos">
				<p class="name">{{info.name}}
					<span class="floatRight">{{info.tel}}</span>
				</p>
				<p class="adr">{{info.address}}</p>
				<div class="edit">
					<span class="def-adr floatLeft" :class="{'text-a':isdef,'text-b':!isdef}" @click="toggle(i)" ><img src="../../../assets/images/login/Check_normal@2x.png" />{{adr.default}}</span>
					<div class="edit-item floatRight">
						<span>
							<img src="../../../assets/images/member/icon_edit@2x.png" alt="" /> 编辑
						</span>
						<span>
							<img src="../../../assets/images/member/icon_delete@2x.png" alt="" /> 删除
						</span>
					</div>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				infos: [{
					name: '郝微',
					tel: '18161560046',
					address: '广东省深圳市南山区西丽大学城'
				}, {
					name: '郝微',
					tel: '18161560046',
					address: '广东省深圳市南山区西丽大学城'
				}],
				adr: {
					default: '默认地址'
				},
				isdef:false
                
			}
		},
		methods: {
            toggle(e){
            	console.log(this.infos[e])
            	this.isdef = !this.isdef
            }
		}
	}
</script>

<style lang="scss">
	@import '../../../assets/scss/common';
	@import '../../../assets/scss/reset';
	.all-address {
		height: 667px;
		background: $black6;
		.address-ul {
			padding-top: 10px;
			li {
				margin-bottom: 10px;
				background: $white;
				padding: 15px 15px 0 15px;
				p{
					font-size: 15px;
				
				}
				.name {
					margin-bottom: 17px;
				}
				.adr {
					padding-bottom: 15px;
					border-bottom: 1px solid $black5;
				}
				.edit {
					height: 40px;
					line-height: 40px;
					.def-adr {
						font-size: 13px;
						img {
							display: inline-block;
							width: 15px;
							height: 15px;
							margin-right: 5px;
						}
					}
					.edit-item {
						font-size: 13px;
						color: $black4;
						img {
							width: 14px;
							height: 15px;
							margin-right: 5px;
							margin-bottom: -3px;
						}
						a:first-child {
							margin-right: 15px;
						}
					}
					.text-a{
						color: red;
					}
					.text-b{
						color: black;
					}
				}
			}
		}
	}
</style>