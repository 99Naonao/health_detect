<template>
	<view class="container">
		<tabbar current='0'></tabbar>
		<view>
			<view class='kv' ref="cccc">
				<image class="kv-img" src='@/static/JK_02_Bg01.png' mode="widthFix"></image>
			</view>
			<view class="law flex just-align-center align-center">
				<checkbox-group ref="ggg" @change="groupChange">
					<view class="flex just-align-center align-center">
						<checkbox :checked="sure" value="sure" /><text>我已经阅读同意</text>
					</view>
				</checkbox-group><text class="line" @click="navLink">用户使用条款</text>
			</view>
			<view class="opt1 flex just-align-center" @click="checkHandler">
				<view class="opt">
					<text>开始测量</text>
					<view>
						<image mode="widthFix" class="icon" src="../../static/JK_02_IconJF1.png"></image>{{cost}} /次
					</view>
				</view>
			</view>
			<view class="my-score flex just-align-center align-center">
				<view>我的积分<image mode="widthFix" class="icon1" src="../../static/JK_02_IconJF2.png"></image>
				</view>
				<view class="score">{{userInfo.score}}</view>
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
	} from 'xy-health-measurement'
	// #ifdef H5

	import {
		autoLogin,
		getToken
	} from '../../utils/h5app.js'
	// #endif
	export default {
		components: {
			tabbar
		},
		computed: {
			...mapGetters(['measureToken', 'userInfo'])
		},
		onLoad() {
			uni.hideTabBar()
		},
		data() {
			return {
				cost: 100,
				sure: false,
				measureIns: null,
				video: null,
			}
		},
		onShow() {
			this.sure = false
			// this.$refs.ppp.open('bottom')
			let userInfo = uni.getStorageSync('userInfo')
			if (!userInfo) {
				this.login()
			} else {
				console.log('登录2成功')
				this.$login().then((res) => {
					console.log('获取token2成功')
				})
			}
		},
		setup() {

		},
		methods: {
			...mapActions(['$login']),
			login() {
				autoLogin((res) => {
					uni.showToast({
						title: '登录成功'
					})
					console.log('登录成功')
					this.$login().then((res) => {

						uni.showToast({
							title: '获取token成功'
						})
						console.log('获取token1成功')
					})
				})
			},
			navLink() {
				uni.navigateTo({
					url: '/pages/health/userProtocal'
				})
			},
			async startCamera() {
				// 获取设备媒体的设置，通常就video和audio
				// ....
				// 将宽高设置成容器大小
				const pageSize = document.width
				let constraints = {
					video: {
						height: 500,
						width: 500,
						// facingMode: {
						// 	exact: "environment"
						// },
					},
					audio: false
				};
				this.video = document.getElementById("video");
				console.log('window.navigator:', window.navigator.mediaDevices)
				// 使用getUserMedia获取媒体流
				// 媒体流赋值给srcObject
				this.video.srcObject = await window.navigator.mediaDevices.getUserMedia(constraints);
				// 直接播放就行了
				this.video.play();
			},
			// 截图拍照
			takePhoto() {
				const video = document.getElementById("video");
				// 借助canvas绘制视频的一帧
				const canvas = document.getElementById("canvas");
				const ctx = canvas.getContext('2d');
				ctx.drawImage(this.video, 0, 0, 500, 500);
				let base64 = canvas.toDataUrl("image/jpeg")

				let base64_new = 'data:image/jpeg;base64,' + base64;
				//打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
				console.log(base64);
				return base64
			},
			// 停止
			stopMedia() {
				// 获取媒体流
				const stream = this.video.srcObject;
				const tracks = stream.getTracks();
				// 停止所有轨道
				tracks.forEach(function(track) {
					track.stop();
				})
				this.video.srcObject = null;
			},
			groupChange(e) {
				if (e.detail.value.length > 0) {
					this.sure = true
				} else {
					this.sure = false
				}
			},
			addListener() {
				this.measureIns = new Measurement(this.measureToken, MeasurementCategory.ALL)
				const measurement = this.measureIns
				//监听启动测量事件
				measurement.addEventListener("started", (sender, measurementId) => {
					console.log(measurementId)
					// measurement.enqueue({
					// 	"base64_frame",
					// 	1709151805475
					// })
				})
				measurement.start("base64_frame")
			},
			goCheck() {
				console.log(this.userInfo)
				if (this.userInfo.score >= this.cost) {

				} else {
					uni.navigateTo({
						url: '/pages/health/healthRunning'
					})

					uni.showToast({
						title: '当前积分不够',
						icon: 'error'
					})
				}
			},
			checkHandler() {
				if (this.sure) {
					this.goCheck()
				} else {
					uni.showModal({
						content: '未勾选同意，是否确定自动勾选?',
						showCancel: true,
						success: (res) => {
							console.log(res)
							if (res.confirm) {
								this.sure = true
								this.goCheck()
							}
						}
					});
					console.log('123:', this.sure)
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.kv-img {
		width: 750rpx;
	}

	.container {
		.check-label {
			line-height: 30rpx;
		}

		.law {

			text-align: center;
			padding-top: 50rpx;
			line-height: 40rpx;

			.line {
				color: #F77913;
			}
		}


		.icon1 {
			width: 44rpx;
			height: 30rpx;
			/* 			padding-right: 10rpx;
			padding-left: 10rpx; */
		}


		.my-score {
			margin: 0 auto;
			padding: 20rpx;
			text-align: center;
			line-height: 30rpx;
			padding-top: 50rpx;
		}

		.score {
			background-color: #EEE;
			padding: 10rpx;
			width: 200rpx;
			border-radius: 20rpx;
		}
	}

	.opt1 {
		padding-top: 50rpx;
	}

	.opt {
		background-color: rgba(90, 119, 149, 1);
		border-radius: 50rpx;
		text-align: center;
		color: white;
		padding: 20rpx;
		padding-left: 150rpx;
		padding-right: 150rpx;

		.icon {
			width: 35rpx;
			height: 25rpx;
			/* padding-right: 20rpx; */
		}
	}
</style>