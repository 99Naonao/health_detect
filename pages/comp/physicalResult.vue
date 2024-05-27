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
		<view class="data_container">


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
				<view class="age" v-if="false">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="content" v-if="false">超越<text
						class="focusnum">{{(physiologyscorereport.explanation.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line" v-if="false"></view>
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
				<more-desc
					:descValue="physiologyscorereport.explanation.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 皮肤年龄 -->
			<border-view :title="'皮肤年龄'" :icon="'icon-skin'" :ticks="[1, 30, 60, 90, 120, 150]"
				:class_list="['second','second','second','second','second']"
				:adv="essentialreport.explanation.age.advicesList[0]?essentialreport.explanation.age.advicesList[0].valuesList.join(''):''"
				:aiDesc="skinDesc" :desc="essentialreport.explanation.age.detailsList[0].valuesList.join('')"
				:value="essentialreport.data.age" :essentialreport="essentialreport"></border-view>
			<!-- 体重指数 -->
			<border-view :title="'体重指数'" :icon="'icon-weight'" :ticks="[15, 18.5, 25, 30, 35, 40]"
				:class_list="['first', 'third', 'third','forth', 'fifth']"
				:adv="essentialreport.explanation.bmi.advicesList[0]?essentialreport.explanation.bmi.advicesList[0].valuesList.join(''):''"
				:aiDesc="essentialreport.explanation.bmi.introductionList.join('')"
				:desc="essentialreport.explanation.bmi.detailsList[0].valuesList.join('')"
				:value="essentialreport.data.bmi" :essentialreport="essentialreport">
			</border-view>
			<!-- 心率 -->
			<border-view :title="'心率'" :icon="'icon-heart'" :value="hrreport.data.hrbpm" :ticks="[40, 60, 100, 160]"
				:class_list="['third', 'first', 'third','third', 'third']"
				:adv="hrreport.explanation.hrbpm.advicesList[0].valuesList.join('')"
				:aiDesc="hrreport.explanation.hrbpm.introductionList.join('')"
				:desc="hrreport.explanation.hrbpm.detailsList[0].valuesList.join('')">
			</border-view>
			<!-- 心率变异性 -->
			<border-view :title="'心率变异性'" :icon="'icon-heart-change'" :valuePercent="true" :value="hrreport.data.hrv"
				:ticks="[0,50,200,300]" :class_list="['third', 'first', 'third','third']"
				:adv="hrreport.explanation.hrv.advicesList[0]?hrreport.explanation.hrv.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="hrreport.explanation.hrv.introductionList.join('')"
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
			<border-view :title="'舒张压'" :icon="'icon-press'" :value="bpreport.data.bpdiastolic"
				:class_list="['third', 'first', 'third', 'fifth']" :ticks="[50,60,80,90,100]"
				:adv="bpreport.explanation.bpdiastolic.advicesList[0].valuesList.join('')"
				:aiDesc="bpreport.explanation.bpdiastolic.introductionList.join('')"
				:desc="bpreport.explanation.bpdiastolic.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 收缩压 -->
			<border-view :title="'收缩压'" :icon="'icon-up'" :value="bpreport.data.bpsystolic" :ticks="[70,90,130,140,170]"
				:class_list="['third', 'first', 'third', 'fifth']"
				:adv="bpreport.explanation.bpsystolic.advicesList[0].valuesList.join('')"
				:aiDesc="bpreport.explanation.bpsystolic.introductionList.join('')"
				:desc="bpreport.explanation.bpsystolic.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 血氧饱和度 -->
			<border-view :title="'血氧饱和度'" :icon="'icon-ox'" :valuePercent="true" :value="spo2hreport.data"
				:class_list="['fifth', 'first']" :ticks="[60,93,100]"
				:adv="spo2hreport.explanation.advicesList[0]?spo2hreport.explanation.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="spo2hreport.explanation.introductionList.join('')"
				:desc="spo2hreport.explanation.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 心脏病风险 -->
			<border-view :title="'心脏病风险'" :icon="'icon-risk'" :valuePercent="true"
				:value="(riskreport.data.bpheartattack * 100).toFixed(2)" :ticks="[0,1.5,3,4.5,6,7.5]"
				:class_list="['first', 'second', 'third','forth', 'fifth']"
				:adv="riskreport.explanation.bpheartattack.advicesList[0]?riskreport.explanation.bpheartattack.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="riskreport.explanation.bpheartattack.introductionList.join('')"
				:desc="riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 中风风险 -->
			<border-view :title="'中风风险'" :icon="'icon-zrisk'" :valuePercent="true"
				:value="(riskreport.data.bpstroke * 100).toFixed(2)" :ticks="[0,1.5,3,4.5,6,7.5]"
				:class_list="['first', 'second', 'third','forth', 'fifth']"
				:adv="riskreport.explanation.bpstroke.advicesList[0]?riskreport.explanation.bpstroke.advicesList[0].valuesList.join(''):''"
				:aiDesc="riskreport.explanation.bpstroke.introductionList.join('')"
				:desc="riskreport.explanation.bpstroke.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 心血管病风险 -->
			<border-view :title="'心血管病风险'" :icon="'icon-xxgrisk'" :valuePercent="true"
				:value="(riskreport.data.bpcvd * 100).toFixed(2)" :ticks="[0,3,6,9,12,15]"
				:class_list="['first', 'second', 'third','forth', 'fifth']"
				:adv="riskreport.explanation.bpcvd.advicesList[0]?riskreport.explanation.bpcvd.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="riskreport.explanation.bpcvd.introductionList.join('')"
				:desc="riskreport.explanation.bpcvd.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 心脏压力 -->
			<border-view :title="'心脏压力'" :icon="'icon-xxylrisk'" :value="(riskreport.data.bppp).toFixed(2)"
				:ticks="[3.5,3.9,4.1,4.2,4.5]" :class_list="['first', 'second', 'third','forth', 'fifth']"
				:adv="riskreport.explanation.bppp.advicesList[0]?riskreport.explanation.bppp.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="riskreport.explanation.bppp.introductionList.join('')"
				:desc="riskreport.explanation.bppp.detailsList[0].valuesList.join('')">
			</border-view>

			<!-- 血管功能 -->
			<border-view :title="'血管功能'" :icon="'icon-xgrisk'" :value="(riskreport.data.bptau).toFixed(2)"
				:ticks="[0,0.8,1.2,1.6,2.2,3.0]" :class_list="['first', 'second', 'third','forth', 'fifth']"
				:adv="riskreport.explanation.bptau.advicesList[0]?riskreport.explanation.bptau.advicesList[0].valuesList.join(''):'无'"
				:aiDesc="riskreport.explanation.bptau.introductionList.join('')"
				:desc="riskreport.explanation.bptau.detailsList[0].valuesList.join('')">
			</border-view>
		</view>
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
				this.riskColor = '#acea6f'
			} else if (riskValue >= 90) {
				this.riskTips = '低风险'
				this.riskColor = '#acea6f'
			} else if (riskValue >= 80) {
				this.riskTips = '中低风险'
				this.riskColor = '#7cc4c8'
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
	@import url("./result.scss");
</style>