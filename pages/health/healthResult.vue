<template>
	<view class="container">
		<view class="tab flex">
			<view class="tabitem" :class="{'active':0==current}" @click="swipeTab(0)">
				<view class="">
					生理测量报告
				</view>
				<view class="timestamp" v-if="0==current">
					{{lastCreateTime}}
				</view>
			</view>
			<view class="tabitem" :class="{'active':1==current}" @click="swipeTab(1)">
				<view class="">情绪测量报告</view>
				<view class="timestamp" v-if="1==current">
					{{lastCreateTime}}
				</view>
			</view>
		</view>
		<view class="result" v-if="showInfo">
			<view class="" v-if="1==current">
				<happy-result :result="data__"></happy-result>
			</view>
			<view class="" v-else>
				<physical-result :result="data__"></physical-result>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	import progressBar from '../comp/progressBar.vue';
	import * as echarts from 'echarts';
	import data_ from '@/static/xy.json'
	import progressData from '@/utils/progrossData.js'
	import moreDesc from '../comp/moreDesc.vue';
	import happyResult from '../comp/happyResult.vue';
	import physicalResult from '../comp/physicalResult.vue';
	import {
		lastReport,
		addReport,
		getJsonResult
	} from '@/utils/h5app.js'
	export default {
		components: {
			physicalResult,
			happyResult,
			progressBar,
			moreDesc
		},
		data() {
			return {
				lastCreateTime: '2024', // 上次检测时间
				current: 0,
				showInfo: false,
				riskToopTipLeft: 0,
				riskTips: '轻度风险',
				riskColor: '#f2b329',
				hrreport: {},
				data__: {},
				gaugeData: [{
					value: 60,
					name: 'score',
					title: {
						offsetCenter: ['00%', '30%']
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '00%']
					}
				}],
				totalOption: {
					series: [{
						type: 'gauge',
						startAngle: 0,
						endAngle: -360,
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
								borderWidth: 1,
								borderColor: '#ffaa00'
							}
						},
						axisLine: {
							lineStyle: {
								width: 15
							}
						},
						splitLine: {
							show: false,
							distance: 0,
							length: 10
						},
						axisTick: {
							show: true
						},
						axisLabel: {
							show: false,
							distance: 50
						},
						data: {},
						title: {
							fontSize: 14
						},
						detail: {
							width: 50,
							height: 14,
							fontSize: 34,
							color: 'inherit',
							borderColor: 'inherit',
							borderRadius: 20,
							borderWidth: 0,
							formatter: '{value}'
						}
					}]
				}

			}
		},
		onShow() {
			uni.showLoading({
				title: '请求中'
			})
			//获取最后一条记录
			lastReport().then(data => {
				console.log('data', data)
				this.initLastData(data)
			}).catch((data) => {
				console.log('catch:', data)
				uni.hideLoading()
				// this.initLastData()
			})
		},
		mounted() {
			// this.data__ = data_
			// const {
			// 	physiologyscorereport, // 综合
			// 	afreport,
			// 	bpreport,
			// 	essentialreport,
			// 	healthScoreReport,
			// 	hrreport,
			// 	riskreport,
			// 	spo2hreport,
			// 	calculatedReport
			// } = data_
			// this.hrreport = hrreport
			// this.afreport = afreport
			// this.bpreport = bpreport
			// this.spo2hreport = spo2hreport
			// this.riskreport = riskreport
			// this.essentialreport = essentialreport
			// this.physiologyscorereport = physiologyscorereport
			// this.showInfo = true;

			// let riskValue = this.physiologyscorereport.data
			// if (riskValue >= 100) {
			// 	riskValue = 100
			// 	this.riskTips = '低风险'
			// 	this.riskColor = '#f26f29'
			// } else if (riskValue >= 90) {
			// 	this.riskTips = '低风险'
			// 	this.riskColor = '#f26f29'
			// } else if (riskValue >= 80) {
			// 	this.riskTips = '中低风险'
			// 	this.riskColor = '#f2b329'
			// } else if (riskValue >= 70) {
			// 	this.riskTips = '中风险'
			// 	this.riskColor = '#e2c93e'
			// } else if (riskValue >= 60) {
			// 	this.riskTips = '中高风险'
			// 	this.riskColor = '#acea6f'
			// } else {
			// 	this.riskTips = '高风险'
			// 	this.riskColor = '#7cc4c8'
			// }
			// this.riskToopTipLeft = riskValue + '%'
			// console.log('this.riskc:', this.riskColor)
		},
		methods: {
			swipeTab(index) {
				this.current = index
			},
			async initHappyData(data) {

			},
			async initLastData(data) {
				// 生理部分
				let data_url = (data.contentDetail)
				let report = await getJsonResult(data_url)
				const {
					physiologyscorereport, // 综合
					afreport,
					bpreport,
					essentialreport,
					healthScoreReport,
					hrreport,
					riskreport,
					spo2hreport,
					calculatedReport
				} = report
				this.hrreport = hrreport
				this.afreport = afreport
				this.bpreport = bpreport
				this.spo2hreport = spo2hreport
				this.riskreport = riskreport
				this.essentialreport = essentialreport
				this.physiologyscorereport = physiologyscorereport

				this.lastCreateTime = data.createAt;
				this.showInfo = true;
				this.data__ = report


				let riskValue = this.physiologyscorereport.data
				if (riskValue >= 100) {
					riskValue = 100
					this.riskTips = '低风险'
					this.riskColor = '#f26f29'
				} else if (riskValue >= 90) {
					this.riskTips = '低风险'
					this.riskColor = '#f26f29'
				} else if (riskValue >= 80) {
					this.riskTips = '中低风险'
					this.riskColor = '#f2b329'
				} else if (riskValue >= 70) {
					this.riskTips = '中风险'
					this.riskColor = '#e2c93e'
				} else if (riskValue >= 60) {
					this.riskTips = '中高风险'
					this.riskColor = '#acea6f'
				} else {
					this.riskTips = '高风险'
					this.riskColor = '#7cc4c8'
				}
				this.riskToopTipLeft = riskValue + '%'
				console.log('this.riskc:', this.riskColor)

				console.log('report:', report)

				this.$nextTick(() => {
					// 使用 Canvas 渲染器（默认）
					var chart = echarts.init(this.$refs.charts1);
					this.totalOption.series[0].data = this.gaugeData
					this.gaugeData[0].value = this.physiologyscorereport.data
					chart.setOption(this.totalOption);
					console.log('chart:', chart)
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f1f5f7;
		font-family: "YouYuan";
		color: #333;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
		font-weight: 500;

		.bigtitle {
			font-size: 30rpx;
			padding-bottom: 30rpx;
		}

		.circle {
			background-color: white;
			box-shadow: 0px 0px 5px 5px #46647d;
			width: 220rpx;
			height: 220rpx;
			border-radius: 200rpx;
			line-height: 220rpx;
			text-align: center;
			font-size: 40rpx;
			letter-spacing: 2rpx;
			color: #46647d;
		}

		.icon {
			width: 105rpx;
			height: 116rpx;
			display: block;
		}

		.heartbpsIcon {
			width: 40rpx;
			height: 48rpx;
		}

		.icon-risk {
			width: 50rpx;
			height: 45rpx;
			display: block;
		}

		.icon-age {
			width: 42rpx;
			height: 43rpx;
			display: block;
		}

		.icon-add {
			width: 45rpx;
			height: 48rpx;
			display: block;
		}

		.icon-ai {
			width: 49rpx;
			height: 58rpx;
			display: block;
		}

		.icon-title {
			padding-left: 10rpx;
			font-size: 35rpx;
		}

		.subtitle {
			line-height: 116rpx;
			font-size: 35rpx;
		}

		.heartIcon {
			width: 50rpx;
			height: 45rpx;
		}

		.hearto2Icon {
			width: 45rpx;
			height: 46rpx;
		}

		.heartbreakIcon {
			width: 50rpx;
			height: 45rpx;
		}

		.heartafIcon {
			width: 58rpx;
			height: 39rpx;
		}

		.heartbpppIcon {
			width: 52rpx;
			height: 48rpx;
		}

		.heartpressIcon {
			width: 53rpx;
			height: 42rpx;
		}

		.heartriskIcon {
			width: 48rpx;
			height: 50rpx;
		}

		.desc-ccc {
			background-color: #249631;
			border-radius: 15rpx;
			color: white;
			display: block;
			padding: 10rpx;
			width: fit-content;
		}

		.desc {
			font-size: 28rpx;
			line-height: 35rpx;
			text-indent: 60rpx;
			text-align: justify;
			color: #616169;
		}

		.border {
			background-color: white;
			margin: 30rpx;
			padding: 30rpx;
			border-radius: 20rpx;
			box-shadow: 0px 0px 5px 5px #eee;
		}

		.border-line {
			border-bottom: #f5f5f5 solid 1px;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}

		.morebtn {
			display: flex;
			align-items: right;
			justify-content: right;
			text-decoration: underline;
			color: #46647d;
			font-size: 25rpx;
			text-underline-offset: 5rpx;
			margin: 20rpx;
		}
	}


	.tab {
		padding-top: 18rpx;
		background-color: #547896;

		.tabitem {
			text-align: center;
			padding-bottom: 10rpx;
			padding-top: 10rpx;
			height: 68rpx;
			color: #D3E2EF;
			background-color: #6186a5;
			border-top-right-radius: 30rpx;
			border-top-left-radius: 30rpx;
			line-height: 68rpx;
			font-size: 28rpx;
			width: 260rpx;
		}

		.timestamp {
			color: #547896;
			font-size: 22rpx;
			line-height: 30rpx;
			padding-top: 10rpx;
			font-family: Arial, Helvetica, sans-serif;
		}

		.active {
			font-weight: bold;
			color: #616169;
			// margin-top: 0rpx;
			// padding-top: 10rpx;
			line-height: 36rpx;
			background-color: white;
			height: 68rpx;
			// border-bottom: solid 1rpx skyblue;
		}
	}

	.progress-container {
		width: 100%;
		height: 25rpx;
		color: #333;
		position: relative;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;

		.tick {
			position: relative;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			font-family: 'YouYuan';

			.tick-item {
				position: absolute;
			}
		}

		.progress-bar {
			height: 100%;
			border-radius: 10rpx;
			background-color: #eee;
			overflow: hidden;
			position: relative;

			.progress-layer {
				height: 100%;
			}

			.first {
				width: 60%;
				background-color: rgb(124, 196, 200);
			}

			.second {
				width: 10%;
				background-color: rgb(172, 234, 111);
			}

			.third {
				width: 10%;
				background-color: rgb(226, 201, 62);
			}

			.forth {
				width: 10%;
				background-color: rgb(242, 179, 41);
			}


			.fifth {
				width: 10%;
				background-color: rgb(242, 111, 41);
			}
		}
	}
</style>