<template>
	<view class="container">
		<view class="tab flex">
			<view class="tabitem" :class="{'active':0==current}" @click="swipeTab(0)">
				<view class="">
					生理测量报告
				</view>
				<view class="timestamp" v-if="0==current">
					2024
				</view>
			</view>
			<view class="tabitem" :class="{'active':1==current}" @click="swipeTab(1)">
				<view class="">情绪测量报告</view>
				<view class="timestamp" v-if="1==current">
					2024
				</view>
			</view>
		</view>
		<view class="result" v-if="showInfo">
			<view class="topkv">
				<view class=" flex just-align-center">
					<view>
						<view class="bigtitle">
							综合心健康风险
						</view>
						<div ref="charts1" style="width: 200px;height: 200px;"></div>
						<!-- <view class="circle">{{physiologyscorereport.data}}</view> -->
					</view>
					<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
				</view>
				<view class="subtitle flex">
					<image class="icon" src="../../static/icon/SY_IconZFFX.png"></image><text>AI专家解读</text>
				</view>
				<view class="desc">{{physiologyscorereport.explanation.introductionList.join('')}}</view>
			</view>
			<view class="heart border">
				<view class="title">心率</view>
				<view>{{hrreport.data.hrbpm}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{hrreport.explanation.hrbpm.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="content">超越<text
						class="focusnum">{{(hrreport.explanation.hrbpm.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{hrreport.explanation.hrbpm.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{hrreport.explanation.hrbpm.detailsList[0].valuesList.join('')}}</view>
			</view>
			<view class="heartRV border">
				<view class="title">心率变异性</view>
				<view>{{hrreport.data.hrv}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{hrreport.explanation.hrv.introductionList.join('')}}
				</view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(hrreport.explanation.hrv.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{hrreport.explanation.hrv.advicesList[0]?hrreport.explanation.hrv.advicesList[0].valuesList.join(''):'无'}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{hrreport.explanation.hrv.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 房颤 -->
			<view class="heartAfReport border">
				<view class="title">房颤</view>
				<view class="content">{{afreport.data == 0? '未发作':'发作'}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{afreport.explanation.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{afreport.explanation.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{afreport.explanation.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 舒张压 -->
			<view class="heartBPReport border">
				<view class="title">舒张压</view>
				<view>{{bpreport.data.bpdiastolic}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{bpreport.explanation.bpdiastolic.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(bpreport.explanation.bpdiastolic.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{bpreport.explanation.bpdiastolic.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{bpreport.explanation.bpdiastolic.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 收缩压 -->
			<view class="heartBPReport border">
				<view class="title">收缩压</view>
				<view>{{bpreport.data.bpsystolic}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{bpreport.explanation.bpsystolic.introductionList.join('')}}
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(bpreport.explanation.bpsystolic.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{bpreport.explanation.bpsystolic.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{bpreport.explanation.bpsystolic.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 血氧饱和度 -->
			<view class="heartspo2hreport border">
				<view class="title">血氧饱和度</view>
				<view>{{spo2hreport.data}}%</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{spo2hreport.explanation.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{spo2hreport.explanation.advicesList[0]?spo2hreport.explanation.advicesList[0].valuesList.join(''):'无'}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{spo2hreport.explanation.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心脏病风险 -->
			<view class="heartspo2hreport border">
				<view class="title">心脏病风险</view>
				<view>{{riskreport.data.bpheartattack}}%</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpheartattack.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(riskreport.explanation.bpheartattack.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpheartattack.advicesList[0]?riskreport.explanation.bpheartattack.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 中风风险 -->
			<view class="heartspo2hreport border">
				<view class="title">中风风险</view>
				<view>{{riskreport.data.bpstroke * 100}}%</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpstroke.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(riskreport.explanation.bpstroke.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpstroke.advicesList[0]?riskreport.explanation.bpstroke.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{riskreport.explanation.bpstroke.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心血管病风险 -->
			<view class="heartspo2hreport border">
				<view class="title">心血管病风险</view>
				<view>{{riskreport.data.bpcvd * 100}}%</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpcvd.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bpcvd.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpcvd.advicesList[0]?riskreport.explanation.bpcvd.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{riskreport.explanation.bpcvd.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心脏压力 -->
			<view class="heartspo2hreport border">
				<view class="title">心脏压力</view>
				<view>{{riskreport.data.bppp}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bppp.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bppp.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bppp.advicesList[0]?riskreport.explanation.bppp.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{riskreport.explanation.bppp.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 血管功能 -->
			<view class="heartspo2hreport border">
				<view class="title">血管功能</view>
				<view>{{riskreport.data.bptau}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bptau.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bptau.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bptau.advicesList[0]?riskreport.explanation.bptau.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{riskreport.explanation.bptau.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 皮肤年龄 -->
			<view class="heartspo2hreport border">
				<view class="title">皮肤年龄</view>
				<view>{{essentialreport.data.age}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{essentialreport.explanation.age.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(essentialreport.explanation.age.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{essentialreport.explanation.age.advicesList[0]?essentialreport.explanation.age.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{essentialreport.explanation.age.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 体重指数 -->
			<view class="heartspo2hreport border">
				<view class="title">体重指数</view>
				<view>{{essentialreport.data.bmi}}</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{essentialreport.explanation.bmi.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(essentialreport.explanation.bmi.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{essentialreport.explanation.bmi.advicesList[0]?essentialreport.explanation.bmi.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<view class="content">{{essentialreport.explanation.bmi.detailsList[0].valuesList.join('')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	import * as echarts from 'echarts';
	import data_ from '@/static/xy.json'
	export default {
		data() {
			return {
				current: 0,
				showInfo: false,
				hrreport: {},
				gaugeData: [{
					value: 60,
					name: '',
					title: {
						offsetCenter: ['0%', '10%']
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
			this.$nextTick(() => {
				// 使用 Canvas 渲染器（默认）
				var chart = echarts.init(this.$refs.charts1);
				this.totalOption.series[0].data = this.gaugeData
				this.gaugeData[0].value = this.physiologyscorereport.data
				// this.totalOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
				// chart.setOption({
				// 	series: [{
				// 		data: this.gaugeData,
				// 		pointer: {
				// 			show: false
				// 		}
				// 	}]
				// }, true);
				chart.setOption(this.totalOption);
				console.log('chart:', chart)
			})
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
			} = data_
			this.hrreport = hrreport
			this.afreport = afreport
			this.bpreport = bpreport
			this.spo2hreport = spo2hreport
			this.riskreport = riskreport
			this.essentialreport = essentialreport
			this.physiologyscorereport = physiologyscorereport
			this.showInfo = true;
		},
		methods: {
			swipeTab(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f1f5f7;
		font-family: "YouYuan";
		color: #333;
		font-weight: 500;

		.content {
			padding-top: 20rpx;
			padding-left: 50rpx;
			padding-bottom: 20rpx;
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


	.tab {
		padding-top: 108rpx;
		background-color: #547896;

		.tabitem {
			text-align: center;
			margin-top: 30rpx;
			padding-bottom: 10rpx;
			height: 68rpx;
			color: white;
			background-color: #46647d;
			border-top-right-radius: 20rpx;
			border-top-left-radius: 20rpx;
			line-height: 36rpx;
			font-size: 30rpx;
			width: 260rpx;
		}

		.timestamp {
			color: #547896;
			font-size: 22rpx;
			line-height: 30rpx;
		}

		.active {
			font-weight: bold;
			color: #616169;
			height: 88rpx;
			margin-top: 0rpx;
			padding-top: 10rpx;
			background-color: white;
			border-bottom: solid 1rpx skyblue;
		}
	}
</style>