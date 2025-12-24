<template>
	<!-- <z-nav-bar backState="1000" fontColor='#000' title='健康检测'></z-nav-bar> -->
	<view class="container">
		<image class="topii" src="../../static/20240515112204.png" mode=""></image>
		<view class="user-tip">
			<image class="imgmask" src="../../static/JK_03_Mask00.png" mode="widthFix"></image>
			<view class="message">{{message}}</view>
			<!-- <view class="message">{{text1}}</view> -->
			<view class="tips2">请将您的身体置于虚线内</view>
			<view class="tips2">检测大约需要30s，请在良好的光线环境内使用</view>
			<view class="tips2">请注意:本产品暂不适合未成年人的检测。</view>
			<view class="tips2">测量数据与结果仅为身体指征参考信息。是为了助力您更好地了解自身健康，不能作为诊疗依据。建议您定期前往专业体检机构进行深度健康体检，呵护自己与家人。</view>
			<view class="tips2">备注</view>
			<view class="tips2">睡商检测共分为两项检测，完成第一项AI健康检测后进行第二项检测，第二项检测需用户自行点击按钮进行问卷调查，填写完成后会自动生成睡商</view>
			<view class="tips2">检测所使用的{{config.detection_deduct}}积分将再完成AI健康检测后扣除，若途中退出则积分不退不补</view>
		</view>
		<canvas id="canvas" class="canvas-c" :style="backBtnStyle" canvas-id="canvas"></canvas>

		<view class="counting-c" v-if="counting>0">
			{{counting}}
		</view>
		<div class="circle" v-else ref="charts1"></div>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import {
		Measurement,
		MeasurementCategory
	} from 'xy-health-measurement'
	// #ifdef H5

	import {
		autoLogin,
		getToken,
		addReport,
		getdeduct,
		getconfgn
	} from '../../utils/h5app.js'
	// #endif
	import {
		storeToRefs
	} from 'pinia'
	import userInfoStore from '../../store/user.js'
	export default {
		setup() {
			const getUserInfo = userInfoStore()
			const {
				userInfo,
				measureToken
			} = storeToRefs(getUserInfo)
			console.log('health setup:::', getUserInfo)
			return {
				userInfo,
				getUserInfo
			}
		},
		data() {
			return {
				config:{},
				text1: '',
				text2: '',
				text3: '',
				finished: false,
				gaugeData: [{
					value: 0,
					name: '',
					title: {
						offsetCenter: ['0%', '-30%']
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '0%']
					}
				}],
				totalOption: {
					animation: true,
					animationEasing: 'linear',
					animationDuration: function(idx) {
						// 越往后的数据时长越大
						return idx * 100;
					},
					animationDurationUpdate: 0,
					series: [{
						type: 'gauge',
						startAngle: 90,
						endAngle: -270,
						pointer: {
							show: false
						},
						progress: {
							show: true,
							overlap: false,
							roundCap: true,
							clip: false,
							itemStyle: {
								color: '#ffaa00',
								borderWidth: 0,
								borderColor: '#f2b329'
							}
						},
						axisLine: {
							lineStyle: {
								width: 10
							}
						},
						splitLine: {
							show: false,
							distance: 0,
							length: 10
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false,
							distance: 50
						},
						data: this.gaugeData,
						title: {
							fontSize: 14
						},
						detail: {
							width: 50,
							height: 14,
							fontSize: 14,
							color: '#ffaa00',
							borderColor: '#ffaa00',
							borderRadius: 20,
							borderWidth: 1,
							formatter: '{value}%'
						}
					}]
				},
				measureIns: '',
				video: null,
				collectTime: 20, //秒
				canvas: null,
				equeneId: 0,
				intervalId: 0,
				counting: 3,
				LastTimestamp: 0, //
				echartIns: {},
				message: '',
				MaxMeasureTime: 90, // 最大检测时间
				StartMeasurementTime: 0, // 开始测量时间
				backBtnStyle: {
					'--canvasWdith': '30px',
					'--canvasHeight': '30px',
					'--canvasLeft': '30px',
					'--canvasTop': '30px',
				},
				SSS: '',
			}
		},
		computed: {},
		onShow() {
			this.startCamera()
			this.confgn()
			this.message = ''
			this.counting = 3
			this.finished = false
		},
		onHide() {
			this.stopMedia()
			// cancelAnimationFrame(that.equeneId)
		},
		methods: {
			confgn(){
				getconfgn({}).then(res => {
					this.config = res
				})
			},
			deduct(){
				getdeduct({}).then(res => {
					uni.navigateTo({
						url: '/pages/health/healthResult'
					})
					// uni.switchTab({
					// 	url: "/pages/func/func"
					// })
				})
			},
			
			initCharts() {
				this.$nextTick(() => {
					// 使用 Canvas 渲染器（默认）
					// if (this.echartIns) {
					// 	this.echartIns.dispose()
					// }
					this.echartIns = echarts.init(this.$refs.charts1);
					this.totalOption.series[0].data = this.gaugeData
					this.echartIns.setOption(this.totalOption);
					// let that = this
					// const measurement = new Measurement(this.measureToken, MeasurementCategory.ALL)
					// requestAnimationFrame((timestamp) => {
					// 	that.LastTimestamp = timestamp
					// 	console.log('that.LastTimestamp:', timestamp)
					// 	that.StartMeasurementTime = Date.now()
					// 	that.equenId(measurement, timestamp)
					// })
				})
			},
			addListener() {
				const getUserInfo = userInfoStore()
				if (!getUserInfo.measureToken) {
					uni.showToast({
						title: '不存在token'
					})
				}
				this.text1 = getUserInfo.measureToken
				
				const measurement = new Measurement(getUserInfo.measureToken, MeasurementCategory.ALL)
				this.text2 = MeasurementCategory.ALL
				this.text3 = measurement
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
					this.message = e
					console.log('crashed!停止采集视频')
					that.stopMedia()

					uni.showToast({
						title: '意外停止采集视频，请重试'
					})

					// uni.switchTab({
					// 	url: '/pages/health/health'
					// })
				})

				//监听视频帧采集完成事件
				measurement.addEventListener("collected", sender => {
					//停止采集视频帧
					console.log('正常停止采集视频')
					// uni.showToast({
					// 	title: '采样结束'
					// })
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
					if (that.finished) return;
					console.log('wholeReportGenerated', report)
					
					if(report.aggressivityreport){
						// this.SSS =  report.aggressivityreport
						report.aggressivityreport.explanation.detailsList[0].valuesList[0] = '进取性（也可称为进取精神、上进心）是指个体在追求目标、实现自我价值的过程中，所表现出的积极向上、勇于挑战、不断超越自我的内在动力和态度。它是一种内在的心理品质，体现为对个人成长、事业发展和社会贡献的强烈渴望，并伴随为此付出努力的意愿和行动。在自制力不足的情形下，进取性会表现为生活上的攻击性.'
						if (report.aggressivityreport.data >= 0 && report.aggressivityreport.data <= 20) {
						    report.aggressivityreport.explanation.introductionList[0] = '您的进取性处于较低水平，对目标缺乏主动追求的意识，自我价值实现的内在动力较弱，行动力不足。在面对挑战时，往往倾向于回避，较少主动尝试突破现状，这可能会在一定程度上限制个人成长和发展的可能性。'
							report.aggressivityreport.explanation.advicesList[0].valuesList[0] = '建议从身边的小事入手，逐步唤醒进取意识。例如，每天为自己设定一个极易完成的小目标，如整理桌面、听一首新歌曲，并在完成后给予自己积极的心理暗示；尝试参与一些简单的社交活动，和身边积极向上的人交流，从他们身上汲取动力；在生活中培养一个低成本的小爱好，如养一盆绿植，观察其生长变化，从中感受付出与收获的联系，逐步激发行动的意愿。'
						} else if (report.aggressivityreport.data >= 21 && report.aggressivityreport.data <= 40) {
						    report.aggressivityreport.explanation.introductionList[0] = '您有一定的进取意识，偶尔会对某些目标产生追求的想法，但这种动力不够稳定，容易受到外界因素的干扰而中断。在面对稍具难度的任务时，容易产生畏难情绪，缺乏持续行动的毅力，自我超越的意愿不够强烈。'
							report.aggressivityreport.explanation.advicesList[0].valuesList[0] = '建议建立简单的目标追踪机制，比如用表格记录每天为目标付出的行动，直观看到自己的努力轨迹，增强坚持下去的信心；学习一些基础的时间管理方法，合理安排做事的顺序，避免因任务繁杂而产生抵触心理；每周给自己安排一次 “小挑战”，比如尝试做一道新菜、走一条新的上班路线，在完成挑战的过程中积累成就感，强化进取的动力。'
						} else if (report.aggressivityreport.data >= 41 && report.aggressivityreport.data <= 60) {
						    report.aggressivityreport.explanation.introductionList[0] = '您的进取性处于中等水平，有较为明确的目标追求，并且能够主动为实现目标付出行动。但在面对复杂或长期的目标时，可能会因为缺乏清晰的规划而感到迷茫，偶尔也会因为短期内看不到成果而产生动摇，进取的持续性有待提升。'
							report.aggressivityreport.explanation.advicesList[0].valuesList[0] = '建议将较大的目标分解成多个具体的小步骤，明确每个步骤的完成时间和衡量标准，让目标变得更易执行；定期对自己的行动进行复盘，总结成功的经验和失败的教训，及时调整前进的方向和方法；注意保持身心的平衡，合理安排休息和娱乐时间，避免因过度消耗精力而降低进取的热情。'
						} else if (report.aggressivityreport.data >= 61 && report.aggressivityreport.data <= 80) {
						    report.aggressivityreport.explanation.introductionList[0] = '您的进取性处于中等偏上水平，表现出较强的目标感和行动力，能够积极应对挑战，在实现目标的过程中展现出一定的毅力和决心。但在面对困难和挫折时，可能会因为过于专注于结果而忽略过程中的收获，有时还会因为对自己要求过高而产生不必要的压力。'
							report.aggressivityreport.explanation.advicesList[0].valuesList[0] = '建议在追求目标的过程中，学会关注过程中的进步，即使最终结果未达预期，也能肯定自己在过程中的努力；适当调整对自己的要求，允许自己有犯错和休息的空间，避免因过度紧绷而影响状态；尝试与他人分享自己的目标和进展，一方面可以获得他人的支持和建议，另一方面也能通过交流拓宽思路，找到更高效的实现路径。'
						} else if (report.aggressivityreport.data >= 81 && report.aggressivityreport.data <= 100) {
						    report.aggressivityreport.explanation.introductionList[0] = '您的进取性非常突出，拥有强烈的自我驱动能力和坚定的目标信念，能够为了实现目标付出巨大的努力，甚至在面对重大困难时也能保持积极的态度。但需要注意的是，过度专注于目标可能会让你忽略生活的其他方面，如家庭关系、身心健康等，长期下来可能会导致身心失衡。'
							report.aggressivityreport.explanation.advicesList[0].valuesList[0] = '建议在追求事业或个人成长目标的同时，合理分配时间和精力到家庭和生活中。养成定期体检和运动的习惯，保证身体处于健康状态，为持续进取提供基础；学会适当放慢脚步，偶尔给自己一段放松的时间，让身心得到休整，以更饱满的状态面对后续的挑战。'
						}
					}
					// 上传报告
					addReport({
						// desc: JSON.stringify(report)
						result: report
					}).then((res) => {
						console.log('add:', res)
						uni.setStorageSync('test_id', res.id)
						// try {
						// 	let userInfo = res
						// 	console.log('addadd:', userInfo)
						// 	const teuserInfoStore = userInfoStore()
						// 	teuserInfoStore.$patch({
						// 		'userInfo': userInfo
						// 	})
						// 	uni.setStorageSync("userInfo", userInfo);
						// } catch (e) {
						// 	TODO handle the exception
						// }
						that.stopMedia();
						that.deduct()
						// 跳转结果界面
						// uni.navigateTo({
						// 	url: '/pages/health/healthResult'
						// })
					})
					that.finished = true;
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
					this.StartMeasurementTime = Date.now()
					let result = measurement.start(this.canvas)
					this.initCharts()
					// console.log('takephoto result!', result)
				}, 3000)
			},
			equenId(measurement, timestamp) {
				// console.log('this.MeasureTime >= this.MaxMeasureTime', this.MeasureTime, this.MaxMeasureTime)
				// 40毫秒发送一次绘制请求
				if (timestamp - this.LastTimestamp >= 40) {
					//更新测量时间
					this.MeasureTime = Math.floor((Date.now() - this.StartMeasurementTime) / 1000)

					if ((Date.now() - this.StartMeasurementTime) / 1000 <= this.collectTime) {
						this.message = '正在测量...'
						// this.gaugeData[0].name = this.message;
					}
					if ((Date.now() - this.StartMeasurementTime) / 1000 >= this.collectTime) {
						this.message = '汇总中...'
						// this.gaugeData[0].name = this.message;
					}
					this.LastTimestamp = timestamp
					let percent = (((Date.now() - this.StartMeasurementTime) / (this.collectTime * 1000)) * 100).toFixed(2)
					this.gaugeData[0].value = percent > 100 ? 100 : percent;
					this.echartIns.setOption({
						series: [{
							data: this.gaugeData,
							pointer: {
								show: false
							}
						}]
					});
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
				this.$set(this.backBtnStyle, '--canvasTop', '110rpx')
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

		.topii {
			position: absolute;
			top: 0;
			left: 50%;
			width: 94.5rpx;
			height: 104.4rpx;
			transform: translateX(-50%);
		}

		.circle {
			position: absolute;
			z-index: 80;
			left: 50%;
			top: 620rpx;
			width: 240rpx;
			height: 240rpx;
			transform: translateX(-50%);
		}

		.counting-c {
			font-size: 220rpx;
			text-align: center;
			font-weight: bold;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			color: #ffaa00;
			z-index: 101;
			top: 480rpx;
		}

		.tips2 {
			padding-top: 5rpx;
			text-align: center;
			word-wrap: break-word;
			word-break: break-all;
			font-size: 24rpx;
			line-height: 36rpx;
			color: rgba(97, 97, 105, 1);
			padding-left: 70rpx;
			padding-right: 70rpx;
		}

		.imgmask {
			width: 100%;
		}

		.user-tip {
			position: absolute;
			z-index: 2;
			left: 0;
			top: 106rpx;
			width: 100%;

			.message {
				text-align: center;
				font-weight: bold;
				font-size: 38rpx;
				padding: 10rpx;
				color: #ffaa00;
			}

			.tips {
				text-align: center;
				word-wrap: break-word;
				word-break: break-all;
			}
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