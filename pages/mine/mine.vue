<template>
	<view>
		<tabbar current='2'></tabbar>
		<view>
			<view class="info">
				<view class="user_info">
					<view class="top_info">
						<view class="avatar_bg">
							<image v-if="hasLogin" class="avatar" :src="userInfo.avatar || '/static/default-avatar.png'"
								@click="navTo('/pages/my/set/userInfo')"></image>
							<image v-else class="avatar"
								:src="userInfo&&userInfo.avatar || '/static/default-avatar.png'" @click="clickWxLogin">
							</image>
						</view>
						<view class="usernameInfo">
							<view class="username">
								<!-- <text class="username">{{ userInfo.nickName || '未知用户' }}</text> -->
								<text>{{ '未知用户' }}</text>
								<!-- <image src="../../static/icon/edit.png"></image> -->
							</view>
							<view class="username">

							</view>
						</view>
					</view>
				</view>
				<view class="score_part">
					<view class="score_info">
						<view class="sub_score_info">
							<view>我的积分<image mode="widthFix" class="icon1" src="../../static/JK_02_IconJF2.png"></image>
							</view>
						</view>
						<view class="score_txt">{{score}}</view>
					</view>
				</view>
				<view class="desc">
					<view class="title">积分说明</view>
					<view class="subtitle">如何活动</view>
					<view>眠加积分是眠加健康睡眠中心</view>
				</view>
				<view class="score_part">
					<view class="score_info">
						<view class="btn" @click="measureHandler">历史数据</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import {
		mapActions,
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	import {
		Measurement,
		MeasurementCategory
	} from 'xy-health-measurement-wx'
	// #ifdef MP-WEIXIN

	import {
		autoLogin
	} from '@/utils/miniapp.js'
	// #endif
	// #ifdef H5
	import {
		autoLogin
	} from '@/utils/h5app.js'
	// #endif

	export default {
		data() {
			return {
				hasLogin: false,
				measurement: '',
				measurementId: 0,
				score: 123,
			}
		},
		computed: {
			...mapGetters(['measureToken'])
		},
		components: {
			tabbar
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			this.$login()
		},
		methods: {
			...mapActions(['$login']),
			measureHandler() {
				uni.navigateTo({
					url: '/pages/mine/history'
				})
			},
			clickWxLogin() {
				autoLogin((res) => {
					console.log('success')
				})
			},
			go2Use() {
				console.log('this.measureToken:', this.measureToken)
				this.measurement = new Measurement(this.measureToken, this.measureToken, MeasurementCategory.ALL)
				console.log('this.measureToke123n:', measure)

				//监听异常事件
				this.measurement.addEventListener("crashed", (sender, exception) => {
					const {
						errorMessage
					} = exception
					console.log(errorMessage)
				})

				//监听启动测量事件
				this.measurement.addEventListener("started", (sender, measurementId) => {
					this.measurementId = measurementId
					this.queneMeasure()
					console.log('suck:', measurementId)
				})


				this.measurement.start("base64_frame")
			},
			queneMeasure() {
				//监听视频帧采集完成事件
				this.measurement.addEventListener("collected", sender => {
					//停止采集视频帧
				})
				this.measurement.enqueue({
					base64_frame: "base64_frame"
				})

				// //入队视频帧
				// this.measurement.enqueue({
				// 	"base64_frame",
				// 	1709151805475
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info {
		margin: 0 auto;
		background-color: white;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		margin-top: 50rpx;
		position: relative;

		.user_info {

			// overflow: hidden;
		}


		.avatar_bg {
			width: 114upx;
			height: 114upx;
			border-radius: 100%;
			margin: 0 auto;
			border: 5px solid #fff;
			background-color: #FFF4EA;

			.avatar {
				flex-shrink: 0;
				width: 114upx;
				height: 114upx;
				transform: scale(0.9);
				border-radius: 100%;
				border: 4rpx solid #fff;
				background-color: #FFF4EA;
			}
		}

		.username {
			color: #333;
			padding: 10rpx;
			font-size: 35rpx;
			text-align: center;
			margin: 0 auto;
		}

		.score_part {
			width: 700rpx;
			height: 130rpx;
			border-radius: 20rpx;
			margin: 0 auto;
			display: flex;
			line-height: 130rpx;
			font-size: 30rpx;
			color: #5B7897;
			justify-content: center;
			align-items: center;

			.icon1 {
				width: 44rpx;
				height: 30rpx;
			}

			.sub_score_info {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.score_txt {
				border-radius: 10rpx;
				padding: 10rpx;
				text-align: center;
				line-height: 40rpx;
				border-radius: 20rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
				font-size: 30rpx;
				min-width: 150rpx;
				height: 40rpx;
				background-color: #dadada;
			}

			.icon {
				width: 54rpx;
				height: 49rpx;
				padding: 10rpx;
			}

			.score_info {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			.btn {
				width: 202rpx;
				height: 68rpx;
				line-height: 68rpx;
				text-align: center;
				font-size: 36rpx;
				background-color: rgb(238, 126, 39);
				border-radius: 10rpx;
				color: white;
				margin-right: 20rpx;
			}
		}

		.desc {
			font-size: 32rpx;
			color: #5B7897;
			line-height: 40rpx;
			padding-left: 66rpx;
			padding-right: 66rpx;
			padding-top: 60rpx;

			.subtitle {
				padding-top: 20rpx;
				padding-bottom: 20rpx;
			}

			.title {
				font-size: 40rpx;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
			}
		}
	}
</style>