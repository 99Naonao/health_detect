<template>
	<view class="container" v-if="showInfo">
		<view class="topkv">
			<view class=" flex just-align-center">
				<view>
					<view class="bigtitle">
						情绪综合分
					</view>
					<div ref="charts1" style="width: 168px;height: 168px;"></div>
					<!-- <view class="circle">{{physiologyscorereport.data}}</view> -->
				</view>
				<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
			</view>
			<!-- 			<view class="subtitle flex">
				<image class="icon" src="../../static/icon/SY_IconZFFX.png"></image><text>AI专家解读</text>
			</view>
			<view class="desc">{{emotionscorereport.data.introductionList.join('')}}</view> -->
		</view>
		<view class="border">
			<view class="age">
				<image class="icon-risk" src="../../static/icon/SY_IconQXZH_Y.png"></image>
				<text class="icon-title">风险区间</text>
			</view>
			<view class="progress-container">
				<view class="tooltip" :style="{'left':riskToopTipLeft}">
					<view class="tooltip-text" :style="{'background-color':riskColor}">
						{{riskTips}}
					</view>
					<view class="tooltip-triangle"
						:style="{'border-color':riskColor+' transparent transparent transparent'}"></view>
				</view>
				<view class="progress-bar flex">
					<view class="progress-layer first">

					</view>
					<view class="progress-layer second">

					</view>
					<view class="progress-layer third">

					</view>
					<view class="progress-layer forth">

					</view>
					<view class="progress-layer fifth">

					</view>
				</view>
				<view class="tick">
					<view class="tick-item" style="width: 20px;">
						0
					</view>
					<view class="tick-item" style="width: 20px;left: 20%;">
						20
					</view>
					<view class="tick-item" style="width: 20px;left: 40%;">
						40
					</view>
					<view class="tick-item" style="width: 20px;left: 60%;">
						60
					</view>
					<view class="tick-item" style="width: 20px;left: 80%;text-align: center;">
						80
					</view>
					<view class="tick-item" style="width: 20px;left: 100%;text-align: center;">
						100
					</view>
				</view>
			</view>
			<view class="border-line"></view>
			<view class="">
				<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
					class="icon-title">概念解释</text>
			</view>
			<more-desc :descValue="motionReport"></more-desc>
		</view>
		<!-- 攻击性 -->
		<border-view :title="'攻击性'" :icon="'icon-attack'" :value="(aggressivityreport.data).toFixed(2)"
			:ticks="[0,50,100,150]" :adv="aggressivityreport.explanation.advicesList[0].valuesList.join('')"
			:aiDesc="aggressivityreport.explanation.introductionList.join('')"
			:desc="aggressivityreport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 焦虑度 -->
		<border-view :title="'焦虑度'" :icon="'icon-jiaolv'" :value="(anxietyreport.data).toFixed(2)"
			:ticks="[0,50,100,150]"
			:adv="anxietyreport.explanation.advicesList[0]?anxietyreport.explanation.advicesList[0].valuesList.join(''):''"
			:aiDesc="anxietyreport.explanation.introductionList.join('')"
			:desc="anxietyreport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 活力度 -->
		<border-view :title="'活力度'" :icon="'icon-huoli'" :value="(vitalityreport.data).toFixed(2)"
			:ticks="[0,50,100,150]" :adv="vitalityreport.explanation.advicesList[0].valuesList.join('')"
			:aiDesc="vitalityreport.explanation.introductionList.join('')"
			:desc="vitalityreport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 抑郁度 -->
		<border-view :title="'抑郁度'" :icon="'icon-yiyu'" :value="(suppressionreport.data).toFixed(2)"
			:ticks="[0,50,100,150]" :adv="suppressionreport.explanation.advicesList[0].valuesList.join('')"
			:aiDesc="suppressionreport.explanation.introductionList.join('')"
			:desc="suppressionreport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!--疲劳度 -->
		<border-view :title="'疲劳度'" :icon="'icon-pilao'" :value="(fatiguereport.data).toFixed(2)"
			:ticks="[0,50,100,150]" :adv="fatiguereport.explanation.advicesList[0].valuesList.join('')"
			:aiDesc="fatiguereport.explanation.introductionList.join('')"
			:desc="fatiguereport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!--压力度 -->
		<border-view :title="'压力度'" :icon="'icon-yali'" :value="(msireport.data).toFixed(2)" :ticks="[0,50,100,150]"
			:adv="msireport.explanation.advicesList[0].valuesList.join('')"
			:aiDesc="msireport.explanation.introductionList.join('')"
			:desc="msireport.explanation.detailsList[0].valuesList.join('')">
		</border-view>
	</view>
</template>

<script>
	import borderView from './borderView.vue';
	import * as echarts from 'echarts';
	import progressBar from '@/pages/comp/progressBar.vue';
	import moreDesc from '@/pages/comp/moreDesc.vue';
	export default {
		components: {
			moreDesc,
			progressBar,
			borderView
		},
		props: {
			result: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
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
								width: 10
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
				},
				motionReport: '情绪综合分是根据焦虑、压力、疲劳等预测指标，对健康状况进行汇总。个人的测量数值会随着情绪变化、身体状况等个人行为的变化而产生一定程度的波动，这种波动属于正常。建议采用坐姿测量，以确保排除干扰因素。本产品的测量原理决定了测量结果会受到光线，角度和受试者状态的影响，因此，两次测量结果有些差异属于正常现象。',
				msireport: {},
				showInfo: false,
				riskTips: '',
				riskColor: '',
				riskToopTipLeft: '',
			}
		},
		mounted() {
			const {
				emotionscorereport, // 综合
				fatiguereport,
				suppressionreport,
				vitalityreport,
				anxietyreport,
				aggressivityreport,
				msireport,
				riskreport,
				spo2hreport,
				calculatedReport
			} = this.result
			// console.log('123:', msireport.explanation.detailsList[0].valuesList.join(''))
			this.msireport = msireport
			this.emotionscorereport = emotionscorereport
			this.fatiguereport = fatiguereport
			this.suppressionreport = suppressionreport
			this.vitalityreport = vitalityreport
			this.anxietyreport = anxietyreport
			this.aggressivityreport = aggressivityreport
			this.showInfo = true;


			let riskValue = this.emotionscorereport.data
			if (riskValue >= 100) {
				riskValue = 100
				this.riskTips = '情绪稳定'
				this.riskColor = '#f26f29'
			} else if (riskValue >= 80) {
				this.riskTips = '情绪稳定'
				this.riskColor = '#f26f29'
			} else if (riskValue >= 60) {
				this.riskTips = '情绪平和'
				this.riskColor = '#f2b329'
			} else if (riskValue >= 40) {
				this.riskTips = '情绪欠佳'
				this.riskColor = '#e2c93e'
			} else if (riskValue >= 20) {
				this.riskTips = '情绪偏低'
				this.riskColor = '#acea6f'
			} else if (riskValue >= 0) {
				this.riskTips = '情绪低落'
				this.riskColor = '#7cc4c8'
			}
			this.riskToopTipLeft = riskValue + '%'
			console.log('this.riskc:', this.riskColor)

			this.$nextTick(() => {
				// 使用 Canvas 渲染器（默认）
				var chart = echarts.init(this.$refs.charts1);
				this.totalOption.series[0].data = this.gaugeData
				this.gaugeData[0].value = riskValue
				chart.setOption(this.totalOption);
				// console.log('chart:', chart)
				// uni.hideLoading()
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		// background-color: #f1f5f7;
		font-family: "YouYuan";
		color: #333;

		.content {
			padding-top: 20rpx;
			padding-left: 50rpx;
			padding-bottom: 20rpx;
			line-height: 38rpx;
		}

		.virturecontent {
			padding-top: 20rpx;
			padding-left: 50rpx;
			padding-bottom: 20rpx;
			line-height: 38rpx;
		}

		.valueNum {
			font-weight: bold;
			color: #ffaa00;
			padding-left: 10rpx;
			font-size: 30rpx;
			letter-spacing: 2rpx;
		}

		.focusnum {
			color: #ffaa00;
			letter-spacing: 2rpx;
		}

		.topkv {
			background-color: white;
			padding: 30rpx;
			border-top-left-radius: 55rpx;
			border-top-right-radius: 55rpx;

			.topimg {
				width: 399rpx;
				height: 397rpx;
			}
		}

		.bigtitle {
			font-size: 30rpx;
			text-align: center;
			// padding-bottom: 30rpx;
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
		}

		.heartbpsIcon {
			width: 40rpx;
			height: 48rpx;
		}

		.icon-risk {
			width: 45rpx;
			height: 44rpx;
		}

		.icon-age {
			width: 42rpx;
			height: 43rpx;
		}

		.icon-add {
			width: 39rpx;
			height: 43rpx;
		}

		.icon-ai {
			width: 49rpx;
			height: 58rpx;
			display: block;
		}

		.icon-title {
			padding-left: 10rpx;
			font-size: 30rpx;
		}

		.subtitle {
			line-height: 116rpx;
			font-size: 35rpx;
		}

		.heartIcon {
			width: 46rpx;
			height: 44rpx;
		}

		.heartatt {
			width: 56rpx;
			height: 41rpx;
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
	}


	.progress-container {
		width: 100%;
		height: 17rpx;
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
				font-size: 24rpx;
				font-family: 'Arial';
				transform: translateX(-50%);
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
				width: 20%;
				background-color: rgb(124, 196, 200);
			}

			.second {
				width: 20%;
				background-color: rgb(172, 234, 111);
			}

			.third {
				width: 20%;
				background-color: rgb(226, 201, 62);
			}

			.forth {
				width: 20%;
				background-color: rgb(242, 179, 41);
			}

			.fifth {
				width: 20%;
				background-color: rgb(242, 111, 41);
			}
		}
	}

	.tooltip {
		position: absolute;
		left: 100px;
		top: -12px;
		transform: translateX(-50%);

		.tooltip-text {
			padding: 5rpx;
			padding-left: 10rpx;
			padding-right: 10rpx;
			word-wrap: normal;
			word-break: keep-all;
			color: #fff;
			border-radius: 10rpx;
			text-align: center;
			font-size: 22rpx;
			// transform: translateX(-50%);
			top: -20px;
		}

		.tooltip-triangle {
			border-width: 15rpx;
			border-color: #000 transparent transparent transparent;
			border-style: solid;
			width: 0px;
			height: 0px;
			margin-top: -2rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>