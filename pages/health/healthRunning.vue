<template>
	<!-- <z-nav-bar backState="1000" fontColor='#000' title='健康检测'></z-nav-bar> -->
	<view class="container">
		<image class="imgmask" src="../../static/JK_03_Mask00.png" mode="widthFix"></image>
		<canvas id="canvas" class="canvas-c" :style="backBtnStyle" canvas-id="canvas"></canvas>
		<view class="" style="position: relative;padding-top: 220rpx;">
			<view class="tips">请将您的身体置于虚线内</view>
			<view class="tips">检测大约需要30s，请在良好的光线环境内使用</view>
		</view>
		<view class="counting-c" v-if="counting>0">
			{{counting}}
		</view>

		<!-- 		<div class="countdown">
			<svg viewBox="-50 -50 100 100" stroke-width="10" class="circle">
				<circle r="45" class="circle-01"></circle>
				<circle r="45" class="circle-02" pathLength="1"></circle>
			</svg>
		</div> -->
	</view>
</template>

<script>
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
		getToken,
		addReport,
	} from '../../utils/h5app.js'
	// #endif
	export default {
		data() {
			return {
				measureIns: '',
				video: null,
				canvas: null,
				equeneId: 0,
				intervalId: 0,
				counting: 3,
				LastTimestamp: 0, //
				message: '',
				MaxMeasureTime: 90, // 最大检测时间
				StartMeasurementTime: 0, // 开始测量时间
				backBtnStyle: {
					'--canvasWdith': '30px',
					'--canvasHeight': '30px',
					'--canvasLeft': '30px',
					'--canvasTop': '30px',
				},
			}
		},
		computed: {
			...mapGetters(['measureToken', 'userInfo'])
		},
		onShow() {
			this.startCamera()
			this.message = ''
		},
		onHide() {
			this.stopMedia()
			// cancelAnimationFrame(that.equeneId)
		},
		methods: {
			addListener() {
				if (!this.measureToken) {
					uni.showToast({
						title: '不存在token'
					})
				}
				const measurement = new Measurement(this.measureToken, MeasurementCategory.ALL)
				let that = this;
				//监听启动测量事件
				measurement.addEventListener("started", (sender, measurementId) => {
					console.log('measurementId:', measurementId)
					let canvas = that.canvas
					console.log('measurementId canvas:', canvas)
					if (canvas && canvas.width) {
						requestAnimationFrame((timestamp) => {
							that.LastTimestamp = timestamp
							that.equenId(measurement, timestamp)
						})
					} else {
						uni.showToast({
							title: 'canvas width error'
						})
					}
				})
				measurement.addEventListener('crashed', async (sender, e) => {
					console.log('crashed!停止采集视频')
					that.stopMedia()
				})

				//监听视频帧采集完成事件
				measurement.addEventListener("collected", sender => {
					//停止采集视频帧
					console.log('正常停止采集视频')
					uni.showToast({
						title: '采样结束'
					})
					// that.stopMedia()
				})


				//监听阶段性报告
				measurement.addEventListener("chunkReportGenerated", (sender, report) => {
					// hrBpm:心率 hrv:心率变异性
					const {
						data: {
							hrBpm,
							hrv
						}
					} = report
					console.log('chunkReportGenerated', report)

					// addReport(JSON.stringify(report))
				})

				//监听完整报告
				measurement.addEventListener("wholeReportGenerated", (sender, report) => {
					// const {
					// 	afreport,
					// 	bpReport,
					// 	essentialReport,
					// 	healthScoreReport,
					// 	hrreport,
					// 	riskReport,
					// 	spo2HReport,
					// 	calculatedReport
					// } = report
					console.log('wholeReportGenerated', report)
					// 上传报告
					addReport({
						desc: JSON.stringify(report)
					}).then(() => {
						that.stopMedia();
						// 跳转结果界面
						uni.navigateTo({
							url: '/pages/health/healthResult'
						})
					})
					// 停止
				})

				console.log('measurement:', measurement)

				setTimeout(() => {
					this.takePhoto()
				}, 100)

				setTimeout(() => {
					this.counting = 2
				}, 1000)

				setTimeout(() => {
					this.counting = 1
				}, 2000)

				// 3秒后开始
				setTimeout(() => {
					this.counting = 0
					// let result123 = document.getElementsByClassName('uni-canvas-canvas')
					// let base645 = this.takePhoto();
					this.StartMeasurementTime = Date.now()
					let result = measurement.start(this.canvas)
					// console.log('takephoto result!', result)
				}, 3000)
			},
			equenId(measurement, timestamp) {
				// 40毫秒发送一次绘制请求
				if (timestamp - this.LastTimestamp >= 40) {
					//更新测量时间
					this.MeasureTime = Math.floor((Date.now() - this.StartMeasurementTime) / 1000)

					if ((Date.now() - this.StartMeasurementTime) / 1000 <= 30) {
						this.message = '正在测量...'
					}
					if ((Date.now() - this.StartMeasurementTime) / 1000 >= 30) {
						this.message = '汇总中...'
					}
					this.LastTimestamp = timestamp
					measurement.enqueue({
						frame: this.canvas,
						timestamp: Date.now()
					})
				}

				if (this.MeasureTime >= this.MaxMeasureTime) {
					// 测量时间大于最大测量时间 主动结束测量
					this.stopMedia()
					this.message = '网络请求异常，请稍后重试'
					uni.showToast({
						title: this.message
					})

					uni.navigateTo({
						url: '/pages/health/health'
					})
					// '网络请求异常，请稍后重试'
				} else {
					this.equeneId = requestAnimationFrame((timestamp) => {
						this.equenId(measurement, timestamp)
					})
				}
			},
			// 截图拍照
			takePhoto(timestamp) {
				// 借助canvas绘制视频的一帧
				// if (!this.canvas) {
				// 	this.canvas = document.createElement("canvas");
				// }

				let result123 = document.getElementsByClassName('uni-canvas-canvas')
				let result123_container = document.getElementsByClassName('uni-canvas')
				// console.log('result', result123.length, result123[0]);
				this.canvas = result123[0]
				if (!this.canvas) {
					uni.showToast({
						title: '没有canvas!'
					})
					return
				} else {

				}
				const canvas = this.canvas;
				const ctx = canvas.getContext('2d');
				// console.log('takephotoing,', this.video)
				// 将宽高设置成容器大小
				let deviceInfo = uni.getWindowInfo()
				const pageSize = {
					width: deviceInfo.screenWidth,
					height: deviceInfo.screenHeight
				}
				// console.log('this.canvas.width:', deviceInfo)
				this.canvas.width = pageSize.width;
				this.canvas.height = pageSize.width;
				this.$set(this.backBtnStyle, '--canvasWidth', (pageSize.width) + 'px')
				this.$set(this.backBtnStyle, '--canvasHeight', (pageSize.width) + 'px')
				this.$set(this.backBtnStyle, '--canvasLeft', '0px')
				this.$set(this.backBtnStyle, '--canvasTop', '1px')
				ctx.scale(-1, 1)
				ctx.translate(-pageSize.width / deviceInfo.pixelRatio, 0);
				// 截取一部分
				ctx.drawImage(this.video, 0, 0, pageSize.width, pageSize.width, 0, 0, pageSize.width / deviceInfo
					.pixelRatio, pageSize.width / deviceInfo.pixelRatio);


				this.intervalId = requestAnimationFrame((timestamp) => {

					this.takePhoto(timestamp)
				});
				return ''
				let base64 = canvas.toDataURL("image/jpeg")
				// console.log('takephotoing base64,', base64)
				// let base64_new = 'data:image/jpeg;base64,' + base64;
				//打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
				return base64
			},
			// 停止
			stopMedia() {
				try {
					// 获取媒体流
					const stream = this.video.srcObject;
					const tracks = stream.getTracks();
					// 停止所有轨道
					tracks.forEach(function(track) {
						track.stop();
					})
					this.video.srcObject = null;
					cancelAnimationFrame(this.equeneId)
					cancelAnimationFrame(this.intervalId)
				} catch (e) {
					//TODO handle the exception
				}
				// if (this.video) {
				// 	document.body.removeChild(this.video)
				// }
			},
			async startCamera() {
				// 获取设备媒体的设置，通常就video和audio
				// ....
				// 将宽高设置成容器大小
				// 将宽高设置成容器大小
				let deviceInfo = uni.getWindowInfo()
				const pageSize = {
					width: deviceInfo.screenWidth,
					height: deviceInfo.screenHeight
				}
				// video的横竖的宽高是反的，所以要切换
				// let constraints = {
				// 	video: {
				// 		height: pageSize.width,
				// 		width: pageSize.height,
				// 		// facingMode: {
				// 		// 	exact: "user", // environment --后置  user --前置
				// 		// },
				// 	},
				// 	audio: false
				// };

				const _videoConstraints = {
					audio: false,
					video: {
						width: {
							ideal: deviceInfo.screenWidth,
							min: deviceInfo.screenWidth,
							max: 1920
						},
						height: {
							ideal: deviceInfo.screenWidth,
							min: deviceInfo.screenWidth,
							max: 1080
						},
						frameRate: {
							ideal: 30,
							max: 30
						},
						facingMode: {
							ideal: 'user'
						}
					}
				};
				console.log('startCamera', deviceInfo)

				this.video = document.getElementById("video");
				this.video.width = pageSize.width;
				this.video.height = pageSize.height;
				// console.log('startCameravideo', this.video)

				// this.video = document.getElementById("video");
				// console.log('window.navigator:', window.navigator.mediaDevices)
				// 使用getUserMedia获取媒体流
				// 媒体流赋值给srcObject
				this.video.srcObject = await window.navigator.mediaDevices.getUserMedia(_videoConstraints);
				// 直接播放就行了
				this.video.play();
				this.LastTimestamp = 0;

				this.addListener()
				console.log('startCamera success')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;

		.counting-c {
			font-size: 220rpx;
			text-align: center;
			font-weight: bold;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			color: #ffaa00;
			z-index: 101;
			top: 350rpx;
		}

		.imgmask {
			width: 100%;
			position: absolute;
			z-index: 2;
			left: 0;
			top: 0;
		}

		.tips {
			text-align: center;
		}
	}

	.canvas-c {
		width: var(--canvasWidth);
		height: var(--canvasHeight);
		left: var(--canvasLeft);
		top: var(--canvasTop);
		position: relative;
		z-index: 1;
	}

	@property --t {
		syntax: "<number>";
		initial-value: 10;
		inherits: true;
	}

	@property --s {
		syntax: "<integer>";
		initial-value: 0;
		inherits: true;
	}

	.countdown {
		display: grid;
		width: 20em;
		height: 20em;

		.circle {
			grid-column: 1;
			grid-row: 1;

			.circle-01 {
				fill: none;
				stroke: #fff;
			}

			.circle-02 {
				--t: 16;
				--k: calc(var(--t)/20);
				fill: none;
				transform: rotate(-90deg);
				stroke-linecap: round;
				stroke: color-mix(in hsl shorter hue, #ffaa00 calc(var(--k)*100%), #ffaa00);
				stroke-dasharray: var(--k) 1;
			}
		}

		&::after {
			grid-column: 1;
			grid-row: 1;
			place-self: center;
			font-size: 5em;
			color: #fff;
			content: "00:19";
		}
	}

	.countdown {
		animation: linear 10s linear infinite;

		.circle {
			.circle-02 {
				--k: calc(var(--t)/10);
				stroke: color-mix(in hsl shorter hue, #8a9b0f calc(var(--k)*100%), #940a3d);
				stroke-dasharray: var(--k) 1;
			}
		}
	}

	@keyframes linear {
		to {
			--t: 0;
		}
	}
</style>