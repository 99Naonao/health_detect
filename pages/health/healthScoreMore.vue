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
			<wx-open-launch-weapp id="launch-btn" style="width: 100%;" appid="wxadc17399e1b28d8b"
				username='gh_e511f8f79ddd'>
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				desc: `眠加积分是中数眠加相关产品通用的用户积分，可以在相关产品中获得、使用。

如何获取积分
1.访问眠加商城，购物1元等于1个积分
2.在眠加商城--我的页面签到，每天可获得8积分
3.更多方式陆续会推出

如何使用积分
1.使用眠加活力健康检测功能，每次使用需要20积分
2.在商城中抵扣商品费用，100积分可以抵扣1元（具体参考商品详情）
`

			}
		},
		methods: {
			jumpHandler() {
				// wxadc17399e1b28d8b
				// uni.navigateToMiniProgram({
				// 	appId: 'wxadc17399e1b28d8b'
				// })
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