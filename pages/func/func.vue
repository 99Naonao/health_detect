<template>
	<view>
		<tabbar current='1'></tabbar>
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
			<div class="result" v-if="showInfo" ref="resultView">
				<view class="" v-if="1==current">
					<happy-result :result="data__"></happy-result>
				</view>
				<view class="" v-else>
					<physical-result :result="data__"></physical-result>
				</view>
			</div>
		</view>
	</view>
</template>

<script>
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
	import tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			tabbar,
			physicalResult,
			happyResult,
			progressBar,
			moreDesc
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
			// 	this.riskColor = '#acea6f'
			// } else if (riskValue >= 90) {
			// 	this.riskTips = '低风险'
			// 	this.riskColor = '#acea6f'
			// } else if (riskValue >= 80) {
			// 	this.riskTips = '中低风险'
			// 	this.riskColor = '#7cc4c8'
			// } else if (riskValue >= 70) {
			// 	this.riskTips = '中风险'
			// 	this.riskColor = '#e2c93e'
			// } else if (riskValue >= 60) {
			// 	this.riskTips = '中高风险'
			// 	this.riskColor = '#f2b329'
			// } else {
			// 	this.riskTips = '高风险'
			// 	this.riskColor = '#f26f29'
			// }
			// this.riskToopTipLeft = riskValue + '%'
			// console.log('this.riskc:', this.riskColor)
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
		onLoad() {
			uni.hideTabBar()
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
		methods: {
			swipeTab(index) {
				this.current = index
				this.$nextTick(() => {
					this.$refs['resultView'].scrollTo({
						top: 0,
						behavior: 'smooth'
					})
				})
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
	@import url("../health/healthResult.scss");
</style>
<style lang="scss" scoped>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);

		.result {
			padding-bottom: 160rpx;
			overflow: scroll;
			position: absolute;
			top: 150rpx;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
</style>