<template>
	<view class="container" v-if="showInfo">
		<view class="topkv">
			<view class=" flex just-align-center">
				<view>
					<view class="bigtitle">
						综合心健康风险
					</view>
					<div ref="charts1" style="width: 168px;height: 168px;"></div>
					<!-- <view class="circle">{{physiologyscorereport.data}}</view> -->
				</view>
				<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
			</view>
			<view class="title">
				<image class="icon" src="../../static/icon/JK_04_IconAI_Y.png"></image><text
					class="icon-title">AI专家解读</text>
			</view>
			<view class="desc">{{physiologyscorereport.explanation.introductionList.join('')}}</view>
		</view>
		<view class="border">
			<view class="age">
				<image class="icon-risk" src="../../static/icon/JK_04_IconFXQJ_Y.png"></image>
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
					<view class="tick-item" style="width: 20px;left: 60%;">
						60
					</view>
					<view class="tick-item" style="width: 20px;left: 70%;">
						70
					</view>
					<view class="tick-item" style="width: 20px;left: 80%;">
						80
					</view>
					<view class="tick-item" style="width: 20px;left: 90%;text-align: center;">
						90
					</view>
					<view class="tick-item" style="width: 20px;left: 100%;text-align: center;">
						100
					</view>
				</view>
			</view>
			<view class="age">
				<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
				<text class="icon-title">同龄人对比</text>
			</view>
			<view class="content">超越<text
					class="focusnum">{{(physiologyscorereport.explanation.ranking * 100).toFixed(2) + '%'}}</text>同龄人
			</view>
			<view class="border-line"></view>
			<view class="title">
				<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
					class="icon-title">健康建议</text>
			</view>
			<view class="content">{{physiologyscorereport.explanation.advicesList[0].valuesList.join('')}}
			</view>
			<view class="border-line"></view>
			<view class="title">
				<image class="icon-explan" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
					class="icon-title">概念解释</text>
			</view>
			<more-desc :descValue="physiologyscorereport.explanation.detailsList[0].valuesList.join('')"></more-desc>
		</view>
		<!-- 皮肤年龄 -->
		<border-view :title="'皮肤年龄'" :icon="'icon-skin'"
			:adv="essentialreport.explanation.age.advicesList[0]?essentialreport.explanation.age.advicesList[0].valuesList.join(''):''"
			:aiDesc="skinDesc" :desc="essentialreport.explanation.age.detailsList[0].valuesList.join('')"
			:value="essentialreport.data.age" :essentialreport="essentialreport"></border-view>
		<!-- 体重指数 -->
		<border-view :title="'体重指数'" :icon="'icon-weight'"
			:adv="essentialreport.explanation.bmi.advicesList[0]?essentialreport.explanation.bmi.advicesList[0].valuesList.join(''):''"
			:ranking="essentialreport.explanation.bmi.ranking"
			:aiDesc="essentialreport.explanation.bmi.introductionList.join('')"
			:desc="essentialreport.explanation.bmi.detailsList[0].valuesList.join('')" :value="essentialreport.data.bmi"
			:essentialreport="essentialreport">
		</border-view>
		<!-- 心率 -->
		<border-view :title="'心率'" :icon="'icon-heart'" :value="hrreport.data.hrbpm"
			:adv="hrreport.explanation.hrbpm.advicesList[0].valuesList.join('')"
			:ranking="hrreport.explanation.hrbpm.ranking" :aiDesc="hrreport.explanation.hrbpm.introductionList.join('')"
			:desc="hrreport.explanation.hrbpm.detailsList[0].valuesList.join('')">
		</border-view>
		<!-- 心率变异性 -->
		<border-view :title="'心率变异性'" :icon="'icon-heart-change'" :valuePercent="true" :value="hrreport.data.hrv"
			:ticks="[0,50,200,300]"
			:adv="hrreport.explanation.hrv.advicesList[0]?hrreport.explanation.hrv.advicesList[0].valuesList.join(''):'无'"
			:ranking="hrreport.explanation.hrv.ranking" :aiDesc="hrreport.explanation.hrv.introductionList.join('')"
			:desc="hrreport.explanation.hrv.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 房颤 -->
		<view class="heartAfReport border">
			<view class="title">
				<image class="icon-shake" src="@/static/icon/SY_IconFC_Y.png"></image><text
					style="padding: 10rpx;">房颤</text>
			</view>
			<view class="content">
				<view class="desc-ccc">{{afreport.data == 0? '未发作':'发作'}}</view>
			</view>
			<view class="">
				<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
					class="icon-title">AI专家解读</text>
			</view>
			<view class="explanation content">
				{{afreport.explanation.introductionList.join('')}}
			</view>
			<view class="border-line"></view>
			<view class="">
				<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
					class="icon-title">健康建议</text>
			</view>
			<view class="content">{{afreport.explanation.advicesList[0].valuesList.join('')}}</view>
			<view class="border-line"></view>
			<view class="">
				<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
					class="icon-title">概念解释</text>
			</view>
			<more-desc :descValue="afreport.explanation.detailsList[0].valuesList.join('')"></more-desc>
		</view>
		<!-- 舒张压 -->
		<border-view :title="'舒张压'" :icon="'icon-press'" :value="bpreport.data.bpdiastolic" :ticks="[50,60,80,90,100]"
			:adv="bpreport.explanation.bpdiastolic.advicesList[0].valuesList.join('')"
			:ranking="bpreport.explanation.bpdiastolic.ranking"
			:aiDesc="bpreport.explanation.bpdiastolic.introductionList.join('')"
			:desc="bpreport.explanation.bpdiastolic.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 收缩压 -->
		<border-view :title="'收缩压'" :icon="'icon-up'" :value="bpreport.data.bpsystolic" :ticks="[70,90,110,140,170]"
			:adv="bpreport.explanation.bpsystolic.advicesList[0].valuesList.join('')"
			:ranking="bpreport.explanation.bpsystolic.ranking"
			:aiDesc="bpreport.explanation.bpsystolic.introductionList.join('')"
			:desc="bpreport.explanation.bpsystolic.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 血氧饱和度 -->
		<border-view :title="'血氧饱和度'" :icon="'icon-ox'" :valuePercent="true" :value="spo2hreport.data"
			:ticks="[60,90,100]"
			:adv="spo2hreport.explanation.advicesList[0]?spo2hreport.explanation.advicesList[0].valuesList.join(''):'无'"
			:ranking="bpreport.explanation.bpsystolic.ranking"
			:aiDesc="spo2hreport.explanation.introductionList.join('')"
			:desc="spo2hreport.explanation.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 心脏病风险 -->
		<border-view :title="'心脏病风险'" :icon="'icon-risk'" :valuePercent="true"
			:value="(riskreport.data.bpheartattack * 100).toFixed(2)" :ticks="[0,1.5,3,4.5,6,7.5]"
			:adv="riskreport.explanation.bpheartattack.advicesList[0]?riskreport.explanation.bpheartattack.advicesList[0].valuesList.join(''):'无'"
			:ranking="riskreport.data.bpheartattack"
			:aiDesc="riskreport.explanation.bpheartattack.introductionList.join('')"
			:desc="riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 中风风险 -->
		<border-view :title="'中风风险'" :icon="'icon-zrisk'" :valuePercent="true"
			:value="(riskreport.data.bpstroke * 100).toFixed(2)" :ticks="[0,1.5,3,4.5,6,7.5]"
			:adv="riskreport.explanation.bpstroke.advicesList[0]?riskreport.explanation.bpstroke.advicesList[0].valuesList.join(''):''"
			:ranking="riskreport.explanation.bpstroke.ranking"
			:aiDesc="riskreport.explanation.bpstroke.introductionList.join('')"
			:desc="riskreport.explanation.bpstroke.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 心血管病风险 -->
		<border-view :title="'心血管病风险'" :icon="'icon-xxgrisk'" :valuePercent="true"
			:value="(riskreport.data.bpcvd * 100).toFixed(2)" :ticks="[0,3,6,9,12,15]"
			:adv="riskreport.explanation.bpcvd.advicesList[0]?riskreport.explanation.bpcvd.advicesList[0].valuesList.join(''):'无'"
			:ranking="riskreport.explanation.bpcvd.ranking"
			:aiDesc="riskreport.explanation.bpcvd.introductionList.join('')"
			:desc="riskreport.explanation.bpcvd.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 心脏压力 -->
		<border-view :title="'心脏压力'" :icon="'icon-xxylrisk'" :value="(riskreport.data.bppp).toFixed(2)"
			:ticks="[3.5,3.8,4.1,4.4,4.7]"
			:adv="riskreport.explanation.bppp.advicesList[0]?riskreport.explanation.bppp.advicesList[0].valuesList.join(''):'无'"
			:ranking="riskreport.explanation.bppp.ranking"
			:aiDesc="riskreport.explanation.bppp.introductionList.join('')"
			:desc="riskreport.explanation.bppp.detailsList[0].valuesList.join('')">
		</border-view>

		<!-- 血管功能 -->
		<border-view :title="'血管功能'" :icon="'icon-xgrisk'" :value="(riskreport.data.bptau).toFixed(2)"
			:ticks="[0,0.4,0.8,1.2,1.6,2,2.4,3]"
			:adv="riskreport.explanation.bptau.advicesList[0]?riskreport.explanation.bptau.advicesList[0].valuesList.join(''):'无'"
			:ranking="riskreport.explanation.bptau.ranking"
			:aiDesc="riskreport.explanation.bptau.introductionList.join('')"
			:desc="riskreport.explanation.bptau.detailsList[0].valuesList.join('')">
		</border-view>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import progressBar from '@/pages/comp/progressBar.vue';
	import moreDesc from '@/pages/comp/moreDesc.vue';
	import borderView from './borderView.vue';
	export default {
		components: {
			borderView,
			progressBar,
			moreDesc
		},
		props: {
			result: {
				type: Object,
				default: {}
			}
		},
		watch: {
			result(val) {
				console.log('resulllt:', val)
			}
		},
		data() {
			return {
				skinDesc: '如果皮肤年龄低于实际年龄：说明您看上去比本年龄的人年轻，保养较好。如果皮肤年龄大于实际年龄：说明您看上去比本年龄的人显老，需要考虑皮肤保养。',
				showInfo: false,
				riskToopTipLeft: 0,
				riskTips: '轻度风险',
				riskColor: '#f2b329',
				hrreport: {},
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
					grid: {
						top: 0,
						left: 0,
					},
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
							padding: [0, 0, 0, 0],
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
				}
			}
		},
		mounted() {
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
			} = this.result
			this.hrreport = hrreport
			this.afreport = afreport
			this.bpreport = bpreport
			this.spo2hreport = spo2hreport
			this.riskreport = riskreport
			this.essentialreport = essentialreport
			this.physiologyscorereport = physiologyscorereport
			this.showInfo = true;

			let riskValue = this.physiologyscorereport.data
			if (riskValue >= 100) {
				riskValue = 100
				this.riskTips = '低风险'
				this.riskColor = '#7cc4c8'
			} else if (riskValue >= 90) {
				this.riskTips = '低风险'
				this.riskColor = '#7cc4c8'
			} else if (riskValue >= 80) {
				this.riskTips = '中低风险'
				this.riskColor = '#acea6f'
			} else if (riskValue >= 70) {
				this.riskTips = '中风险'
				this.riskColor = '#e2c93e'
			} else if (riskValue >= 60) {
				this.riskTips = '中高风险'
				this.riskColor = '#f2b329'
			} else {
				this.riskTips = '高风险'
				this.riskColor = '#f26f29'

			}
			this.riskToopTipLeft = riskValue + '%'
			console.log('this.riskc1:', this.riskColor)


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
</script>


<style lang="scss" scoped>
	.container {
		background-color: #f1f5f7;
		font-family: "YouYuan";
		color: #333;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
		font-weight: 500;

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

		.icon-shake {
			width: 58rpx;
			height: 39rpx;
		}

		.icon {
			width: 40rpx;
			height: 46rpx;
		}

		.heartbpsIcon {
			width: 40rpx;
			height: 48rpx;
		}

		.icon-risk {
			width: 50rpx;
			height: 45rpx;
		}

		.icon-age {
			width: 42rpx;
			height: 43rpx;
		}

		.icon-explan {
			width: 39rpx;
			height: 43rpx;
		}

		.icon-add {
			width: 45rpx;
			height: 48rpx;
		}

		.icon-ai {
			width: 49rpx;
			height: 58rpx;
		}

		.icon-title {
			padding-left: 10rpx;
			font-size: 30rpx;
		}

		.icon-weight {
			width: 47rpx;
			height: 50rpx;
		}

		.subtitle {
			line-height: 46rpx;
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
			border-radius: 30rpx;
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
				text-align: center;
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
				width: 60%;
				background-color: rgb(242, 111, 41);
			}

			.second {
				width: 10%;
				background-color: rgb(242, 179, 41);
			}

			.third {
				width: 10%;
				background-color: rgb(226, 201, 62);
			}

			.forth {
				width: 10%;
				background-color: rgb(172, 234, 111);
			}

			.fifth {
				width: 10%;
				background-color: rgb(124, 196, 200);

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