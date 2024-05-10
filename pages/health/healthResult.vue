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
			<view class="topkv flex just-align-center">
				<view class="">
					综合心健康风险
				</view>
				<view>{{physiologyscorereport.data}}</view>
				<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
			</view>
			<view class="heart">
				<view class="title">心率</view>
				<view>{{hrreport.data.hrbpm}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{hrreport.explanation.hrbpm.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(hrreport.explanation.hrbpm.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>{{hrreport.explanation.hrbpm.advicesList[0].valuesList.join('')}}</view>
				<view>概念解释</view>
				<view>{{hrreport.explanation.hrbpm.detailsList[0].valuesList.join('')}}</view>
			</view>
			<view class="heartRV">
				<view class="title">心率变异性</view>
				<view>{{hrreport.data.hrv}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{hrreport.explanation.hrv.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(hrreport.explanation.hrv.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{hrreport.explanation.hrv.advicesList[0]?hrreport.explanation.hrv.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{hrreport.explanation.hrv.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 房颤 -->
			<view class="heartAfReport">
				<view class="title">房颤</view>
				<view>{{afreport.data == 0? '未发作':'发作'}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{afreport.explanation.introductionList.join('')}}
				</view>
				<view>健康建议</view>
				<view>{{afreport.explanation.advicesList[0].valuesList.join('')}}</view>
				<view>概念解释</view>
				<view>{{afreport.explanation.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 舒张压 -->
			<view class="heartBPReport">
				<view class="title">舒张压</view>
				<view>{{bpreport.data.bpdiastolic}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{bpreport.explanation.bpdiastolic.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(bpreport.explanation.bpdiastolic.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>{{bpreport.explanation.bpdiastolic.advicesList[0].valuesList.join('')}}</view>
				<view>概念解释</view>
				<view>{{bpreport.explanation.bpdiastolic.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 收缩压 -->
			<view class="heartBPReport">
				<view class="title">收缩压</view>
				<view>{{bpreport.data.bpsystolic}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{bpreport.explanation.bpsystolic.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(bpreport.explanation.bpsystolic.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>{{bpreport.explanation.bpsystolic.advicesList[0].valuesList.join('')}}</view>
				<view>概念解释</view>
				<view>{{bpreport.explanation.bpsystolic.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 血氧饱和度 -->
			<view class="heartspo2hreport">
				<view class="title">血氧饱和度</view>
				<view>{{spo2hreport.data}}%</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{spo2hreport.explanation.introductionList.join('')}}
				</view>
				<view>健康建议</view>
				<view>
					{{spo2hreport.explanation.advicesList[0]?spo2hreport.explanation.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{spo2hreport.explanation.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心脏病风险 -->
			<view class="heartspo2hreport">
				<view class="title">心脏病风险</view>
				<view>{{riskreport.data.bpheartattack}}%</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{riskreport.explanation.bpheartattack.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(riskreport.explanation.bpheartattack.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{riskreport.explanation.bpheartattack.advicesList[0]?riskreport.explanation.bpheartattack.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 中风风险 -->
			<view class="heartspo2hreport">
				<view class="title">中风风险</view>
				<view>{{riskreport.data.bpstroke * 100}}%</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{riskreport.explanation.bpstroke.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(riskreport.explanation.bpstroke.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{riskreport.explanation.bpstroke.advicesList[0]?riskreport.explanation.bpstroke.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{riskreport.explanation.bpstroke.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心血管病风险 -->
			<view class="heartspo2hreport">
				<view class="title">心血管病风险</view>
				<view>{{riskreport.data.bpcvd * 100}}%</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{riskreport.explanation.bpcvd.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(riskreport.explanation.bpcvd.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{riskreport.explanation.bpcvd.advicesList[0]?riskreport.explanation.bpcvd.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{riskreport.explanation.bpcvd.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 心脏压力 -->
			<view class="heartspo2hreport">
				<view class="title">心脏压力</view>
				<view>{{riskreport.data.bppp}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{riskreport.explanation.bppp.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(riskreport.explanation.bppp.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{riskreport.explanation.bppp.advicesList[0]?riskreport.explanation.bppp.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{riskreport.explanation.bppp.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 血管功能 -->
			<view class="heartspo2hreport">
				<view class="title">血管功能</view>
				<view>{{riskreport.data.bptau}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{riskreport.explanation.bptau.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(riskreport.explanation.bptau.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{riskreport.explanation.bptau.advicesList[0]?riskreport.explanation.bptau.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{riskreport.explanation.bptau.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 皮肤年龄 -->
			<view class="heartspo2hreport">
				<view class="title">皮肤年龄</view>
				<view>{{essentialreport.data.age}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{essentialreport.explanation.age.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(essentialreport.explanation.age.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{essentialreport.explanation.age.advicesList[0]?essentialreport.explanation.age.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{essentialreport.explanation.age.detailsList[0].valuesList.join('')}}</view>
			</view>
			<!-- 体重指数 -->
			<view class="heartspo2hreport">
				<view class="title">体重指数</view>
				<view>{{essentialreport.data.bmi}}</view>
				<view class="subtitle">AI专家解读</view>
				<view class="explanation">
					{{essentialreport.explanation.bmi.introductionList.join('')}}
				</view>
				<view class="age">
					超越{{(essentialreport.explanation.bmi.ranking * 100).toFixed(2) + '%'}}同龄人
				</view>
				<view>健康建议</view>
				<view>
					{{essentialreport.explanation.bmi.advicesList[0]?essentialreport.explanation.bmi.advicesList[0].valuesList.join(''):''}}
				</view>
				<view>概念解释</view>
				<view>{{essentialreport.explanation.bmi.detailsList[0].valuesList.join('')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import data_ from '@/static/xy.json'
	export default {
		data() {
			return {
				current: 0,
				showInfo: false,
				hrreport: {}
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
			} = data_
			this.hrreport = hrreport
			this.afreport = afreport
			this.bpreport = bpreport
			this.spo2hreport = spo2hreport
			this.riskreport = riskreport
			this.essentialreport = essentialreport
			this.physiologyscorereport = physiologyscorereport
			this.showInfo = true;
			console.log('wholeReportGenerated', this.essentialreport)
			console.log('wholeReportGenerated', this.physiologyscorereport)
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
		background-color: #547896;

		.topkv {
			background-color: white;

			.topimg {
				width: 399rpx;
				height: 397rpx;
			}
		}
	}


	.tab {
		padding-top: 108rpx;

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