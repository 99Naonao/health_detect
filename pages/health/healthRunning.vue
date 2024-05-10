<template>
	<!-- <z-nav-bar backState="1000" fontColor='#000' title='健康检测'></z-nav-bar> -->
	<view class="container">
		<image class="imgmask" src="../../static/JK_03_Mask00.png" mode="widthFix"></image>
		<canvas id="canvas" class="canvas-c" :style="backBtnStyle" canvas-id="canvas"></canvas>
	</view>
</template>

<script>
	import data from '@/static/xy.json'
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
			this.addListener()
			this.startCamera()
			console.log('data:', data)
		},
		onHide() {
			this.stopMedia()
			clearInterval(that.equeneId)
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
						that.equeneId = setInterval(() => {
							let now = Date.now()
							measurement.enqueue({
								frame: canvas,
								timestamp: now
							})
						}, 60)
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
					that.stopMedia()
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

					addReport(report)
				})

				//监听完整报告
				measurement.addEventListener("wholeReportGenerated", (sender, report) => {
					const {
						afreport,
						bpReport,
						essentialReport,
						healthScoreReport,
						hrreport,
						riskReport,
						spo2HReport,
						calculatedReport
					} = report
					console.log('wholeReportGenerated', report)
					addReport(JSON.string(report))
				})

				console.log('measurement:', measurement)
				this.intervalId = setInterval(() => {
					this.takePhoto()
				}, 60)
				// 3秒后开始
				setTimeout(() => {
					let result123 = document.getElementsByClassName('uni-canvas-canvas')
					let base645 = this.takePhoto();
					let result = measurement.start(this.canvas)
					console.log('takephoto result!', result)
				}, 3000)
			},
			// 截图拍照
			takePhoto() {
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
				this.canvas.width = pageSize.width;
				this.canvas.height = pageSize.height;
				// ctx.scale(-1, 1)
				this.$set(this.backBtnStyle, '--canvasWidth', (pageSize.width) * 0.8 + 'px')
				this.$set(this.backBtnStyle, '--canvasHeight', (pageSize.height) * 0.8 + 'px')
				this.$set(this.backBtnStyle, '--canvasLeft', (pageSize.width) * 0.1 + 'px')
				this.$set(this.backBtnStyle, '--canvasTop', (pageSize.height) * 0.1 + 'px')
				ctx.drawImage(this.video, 0, 0, pageSize.width / deviceInfo.pixelRatio, pageSize.height / deviceInfo
					.pixelRatio);
				return ''
				let base64 = canvas.toDataURL("image/jpeg")
				// console.log('takephotoing base64,', base64)
				// let base64_new = 'data:image/jpeg;base64,' + base64;
				//打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
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
				clearInterval(this.equeneId)
				clearInterval(this.intervalId)
				addReport(JSON.stringify(data))
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
				let constraints = {
					video: {
						height: pageSize.width,
						width: pageSize.height,
						// facingMode: {
						// 	exact: "user", // environment --后置  user --前置
						// },
					},
					audio: false
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
				this.video.srcObject = await window.navigator.mediaDevices.getUserMedia(constraints);
				// 直接播放就行了
				this.video.play();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;

		.imgmask {
			width: 100%;
			position: absolute;
			z-index: 2;
			left: 0;
			top: 0;
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
</style>