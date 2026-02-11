<template>
	<z-nav-bar type="transparent" backState="1000" fontColor='#fff' title=''></z-nav-bar>
	<view class="container">
		<view>
			<image class="img" src="../../static/JK_08_Bg01.png" mode="widthFix"></image>
		</view>
		<view class="desc">
			<view class="title">
				眠加积分
			</view>
			<view class="desc-part">
				{{desc}}
			</view>
		</view>
		<view class="bottom-part flex align-items">
			<!-- 仅在微信内置浏览器（非小程序、非 web-view）内使用开放标签；其余环境用按钮 + API 跳转 -->
			<template v-if="showLaunchTag">
				<wx-open-launch-weapp id="launch-btn" style="width: 100%;" appid="wx041bde7c633d4ec0"
					username='gh_e2eb98762ddf'>
					<component :is="'script'" type="text/wxtag-template">
						<style>
							.jump {
								color: white;
								background-color: #F77913;
								padding: 10rpx 20rpx;
								font-size: 32rpx;
								border-radius: 30rpx;
								justify-content: center;
								display: flex;
								width: 485rpx;
								height: 60rpx;
								margin: 0 auto;
								text-align: center;
								box-shadow: 0rpx 0rpx 35rpx 35rpx rgba(0, 0, 0, 0.1);


								.txt {
									line-height: 60rpx;
								}

								.icon {
									width: 68rpx;
									height: 68rpx;
									margin-right: 10rpx;
									margin-top: -5rpx;
								}
							}
						</style>
						<view class="jump" style="color: white;
								background-color: #F77913;
								padding: 10rpx 20rpx;
								font-size: 32rpx;
								border-radius: 30rpx;
								justify-content: center;
								display: flex;
								width: 485rpx;
								height: 60rpx;
								margin: 0 auto;
								text-align: center;
								">
							<img style="width: 68rpx;
									height: 68rpx;
									margin-right: 10rpx;
									margin-top: -5rpx;" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png" />
							<!-- <image mode="widthFix" class="icon" style="width: 68rpx;
									height: 68rpx;
									margin-right: 10rpx;
									margin-top: -5rpx;" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png"></image> -->
							<text class="txt" style="line-height: 60rpx;">眠加商城</text>
						</view>
					</component>
				</wx-open-launch-weapp>
			</template>
			<view v-else class="jump jump-btn" @click="goToMall">
				<image class="icon" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png" mode="widthFix"></image>
				<text class="txt">眠加商城</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { canUseLaunchWeappTag, goToMall as goToMallFn } from '@/utils/launchMall.js'

	export default {
		data() {
			return {
				showLaunchTag: true,
				desc: `      会员积分是眠加小程序商城针对会员购物、参加会员活动等情况而给予的奖励，积分可在“眠加小程序商城”和“眠加活力健康检测”中使用。您可在眠加会员中心（ 我的>
会员中心>
积分）查看所获得的积分。具体的积分获取、使用规则详见如文规定。

一、积分获取规则：

1. 注册积分：在眠加小程序商城完成注册，送200初始积分；
2. 消费积分：会员在眠加小程序商城消费时，每消费1元可获得1积分，积分可累计；
3. 签到积分：会员每天签到可获得1积分，每月签到次数不超过31次；
4. 积分回馈的数量以订单完成时的商品实付金额和比例为准，且仅计取整数。例如购买1000.9元的商品，发放1000个积分。

二、积分兑换规则：

1. 适用范围：积分仅可在“眠加小程序商城”和“眠加活力健康检测”中使用，可用于商品购买、健康检测、礼品兑换、活动抽奖等；
2. 购物积分抵扣：会员可使用积分抵扣购物金额，每20积分可抵扣1元，最高可抵扣订单总金额的40%；
3. 健康检测积分抵扣：60积分可进行健康检测一次，健康检测无次数限制；
4. 积分兑换礼品：会员可使用积分兑换眠加小程序商城指定的礼品，兑换所需积分以具体兑换礼品为准；
5. 订单内全部商品确认收货后，且7天内未发生退货的情况下，所发放积分才可使用；
6. 若使用现金+积分购买商品，所使用积分不享受积分回馈权益，只有使用的现金享受积分回馈权益，且单个商品不能连续15次用积分购买；
7. 若使用优惠券购买商品，则优惠券折扣部分不享受积分回馈；
8. 支付订单一经提交则该笔订单中所使用的积分将会预扣处理，如您最终取消付款，所使用的积分将在一定时间内返还到您的眠加帐号；
9. 积分使用后无法退还，兑换所需要的积分数量可能发生变动，具体以实际兑换所需积分数量为准；
10. 积分不可兑现、转让、售卖或跨帐号使用，使用积分抵扣商品金额的部分作为销售折扣在发票上单独列示，使用积分抵扣全部金额的则不开发票；
11. 可使用积分抵扣的金额可能会根据情况相应调整，具体请以实际页面提示为准。

三、特别声明：

1. 眠加小程序商城对本规则拥有最终解释权，保留对细则进行变更，解释，及终止权利；
2. 如用户注销眠加小程序商城帐号，所获的积分将被清空并作废；
3. 当订单已完成，发生增值税发票更换普通发票情况时，不补发对应积分；发生普通发票更换增值税发票情况时，则需要扣减该笔订单发放的积分；
4.凡以违反积分规则的方式或采用不正当手段（包括但不限于作弊、恶意刷分、扰乱/破坏系统、恶意利用系统或者规则漏洞）获取、使用积分，我们有权根据其行为恶劣程度决定扣除您帐号内所有或部分积分，对于已使用积分，有权要求您返还已抵扣的订单金额或所兑换的礼品或权益；
5. 以上积分规则自2024年8月13日生效。
`

			}
		},
		mounted() {
			this.showLaunchTag = canUseLaunchWeappTag()
		},
		methods: {
			goToMall() {
				goToMallFn()
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
	}

	.desc-part {
		padding: 57rpx;
		padding-top: 30rpx;
		line-height: 46rpx;
		letter-spacing: 2rpx;
		padding-bottom: 135rpx;
	}

	.bottom-part {
		position: fixed;
		bottom: 0;
		;
		height: 135rpx;
		background-color: white;
		box-shadow: 0rpx 0rpx 18rpx 18rpx rgba(0, 0, 0, 0.1);
		width: 100%;
		align-items: center;
	}

	.jump {
		color: white;
		background-color: #F77913;
		padding: 10rpx 20rpx;
		font-size: 32rpx;
		border-radius: 30rpx;
		justify-content: center;
		width: 485rpx;
		height: 60rpx;
		margin: 0 auto;
		text-align: center;
		box-shadow: 0rpx 0rpx 35rpx 35rpx rgba(0, 0, 0, 0.1);


		.txt {
			line-height: 60rpx;
		}

		.icon {
			width: 68rpx;
			height: 68rpx;
			margin-right: 10rpx;
			margin-top: -5rpx;
			// display: block;
		}
	}

	.jump-btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.img {
		width: 750rpx;
	}

	.desc {
		padding: 30rpx;
		text-align: justify;
		white-space: pre-wrap;
		line-height: 35rpx;
		font-size: 30rpx;
		color: #616169;
	}

	.title {
		text-align: center;
		font-weight: bold;
		padding: 20rpx;
		font-size: 36rpx;
		color: #616169;
	}

	.subtitle {
		text-align: center;
		font-weight: bold;
		padding: 20rpx;
		font-size: 30rpx;
	}
</style>