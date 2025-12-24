<template>
	<view>
		<tabbar current='1'></tabbar>
		<view class="container">
			<view class="tab flex">
				<view class="tabitemS" :class="{'active':0==current}" @click="swipeTab(0)">
					<view class="">
						生理测量报告
					</view>
					<view class="timestamp" v-if="0==current">
						{{lastCreateTime}}
					</view>
				</view>
				<view class="tabitemS" :class="{'active':1==current}" @click="swipeTab(1)">
					<view class="">情绪测量报告</view>
					<view class="timestamp" v-if="1==current">
						{{lastCreateTime}}
					</view>
				</view>
				<view class="tabitemS" :class="{'active':2==current}" @click="swipeTab(2)">
					<view class="">睡商报告</view>
					<view class="timestamp" v-if="2==current">
						{{lastCreateTimeT}}
					</view>
				</view>
			</view>
			<div class="result" v-if="showInfo">
				<div class="conttt" ref="resultView" style="margin: 5rpx;">

					<view class="result-item" v-if="1==current">
						<view v-if="data__">
						  <happy-result :result="data__"></happy-result>
						</view>
						<view v-else style="display: flex;justify-content: center;margin-top: 50px;">
							<image src="https://oss.zsyl.cc/uploads/images/20250613/202506131839258dfd32146.png" style="width: 120px;height: 120px;"></image>
						</view>
					</view>
					<view class="result-item" v-if="0==current" >
						<view v-if="data__">
						  <physical-result :result="data__"></physical-result>
						</view>
						<view v-else style="display: flex;justify-content: center;margin-top: 50px;">
							<image src="https://oss.zsyl.cc/uploads/images/20250613/202506131839258dfd32146.png" style="width: 120px;height: 120px;"></image>
						</view>
					</view>
					<view class="result-item" v-if="2==current" >
						<view v-if="ScaleLists">
						  <shuishang-result :result="ScaleLists"></shuishang-result>
						</view>
						<view v-else style="display: flex;justify-content: center;margin-top: 50px;">
							<image src="https://oss.zsyl.cc/uploads/images/20250613/202506131839258dfd32146.png" style="width: 120px;height: 120px;"></image>
						</view>
					</view>
					
					<view class="switch-tab" @click="swipeTab(current == 0?1:0)">
						<image class="nav-item" src="../../static/JK_04_butCLa.png"></image>
						<div class="inner-tips">{{current == 0?'前往情绪检测报告':'前往生理检测报告'}}</div>
					</view>
					<view class="tips" style="line-height: 2.1;padding: 30px;">如果您检测出异常信息，表明您的身体可能正处于亚健康状态。专业研究证明，通过改善睡眠质量，能够有效缓解亚健康症状。
						让我们的优质睡眠产品和服务，助你睡得更好，养出好身体！
					</view>

					<wx-open-launch-weapp id="launch-btn"
						style="width: 685rpx;height: 70rpx;position: relative;left: 50%;margin-left: -343rpx;margin-top: 30rpx;"
						appid="wxadc17399e1b28d8b" username='gh_e511f8f79ddd'>
						<component :is="'script'" type="text/wxtag-template">
							<style>
								.jump {
									color: white;
									background-color: #F77913;
									padding: 10rpx 20rpx;
									font-size: 32rpx;
									border-radius: 30rpx;
									justify-content: center;
									display: flex;
									width: 485rpx;
									height: 60rpx;
									margin: 0 auto;
									text-align: center;
									box-shadow: 0rpx 0rpx 35rpx 35rpx rgba(0, 0, 0, 0.1);


									.txt {
										line-height: 60rpx;
									}

									.icon {
										width: 68rpx;
										height: 68rpx;
										margin-right: 10rpx;
										margin-top: -5rpx;
									}
								}
							</style>
							<view class="jump" style="color: white;
											background-color: #F77913;
											padding: 10rpx 20rpx;
											font-size: 32rpx;
											border-radius: 30rpx;
											justify-content: center;
											display: flex;
											width: 485rpx;
											height: 60rpx;
											margin: 0 auto;
											text-align: center;
											">
								<img style="width: 68rpx;
												height: 68rpx;
												margin-right: 10rpx;
												margin-top: -5rpx;" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png" />
								<!-- <image mode="widthFix" class="icon" style="width: 68rpx;
												height: 68rpx;
												margin-right: 10rpx;
												margin-top: -5rpx;" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png"></image> -->
								<text class="txt" style="line-height: 60rpx;">眠加商城</text>
							</view>
						</component>
					</wx-open-launch-weapp>

				</div>
			</div>
			<!-- <view class="bottom-part flex align-items"> -->
			<!-- <text class="txt" style="line-height: 60rpx;">眠加商城</text> -->
			<!-- </view> -->
		</view>
		<!-- 介绍弹窗 -->
				<view class="intro-modal" v-if="showPupoBtn">
				  <view class="intro-content" style="position: relative;">
				    <view class="intro-title">温馨提示</view>
					<view style="width: 100rpx;height: 100rpx;position: absolute;right: 0rpx;z-index: 99;top: 0;">
						<image src="https://oss.zsyl.cc/uploads/images/20250624/20250624174613d5ec39575.png" style="width: 100%;height: 100%;" mode="widthFix">
						</image>
					</view>
					<view style="width: 100rpx;height: 100rpx;position: absolute;left: 0rpx;z-index: 99;top: 0;">
						<image src="https://oss.zsyl.cc/uploads/images/20250624/20250624174613d5ec39575.png" style="width: 100%;height: 100%;" mode="widthFix">
						</image>
					</view>
				    <view class="intro-text">
				      <view style="text-align: left;color: #333;">
						  花1分钟完成匹兹堡问卷后可以生成睡商报告，是否继续参与？
					  </view>
				    </view>
					<view style="display: flex;width: 100%;">
						<view class="intro-btn" @click="showPupoBtn = false" style="background-color: #FFFFFF;color: #000;border: 1px solid #000;">下次参与</view>
						<view class="intro-btn" @click="goToScale" style="background-color: #0F4EF0;color: #fff;border: 1px solid #0F4EF0;margin-left: 20rpx;">立即参与</view>
					</view>
				    
				  </view>
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
	import shuishangResult from '../comp/shuishangResult.vue';
	
	import {
		lastReport,
		addReport,
		getJsonResult,
		getresultLists,
		getuserScaleLists
	} from '@/utils/h5app.js'
	import tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			tabbar,
			physicalResult,
			happyResult,
			progressBar,
			moreDesc,
			shuishangResult
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
				lastCreateTime: '2025', // 上次检测时间
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
				},
				ScaleLists:{},
				lastCreateTimeT:'',
				conclusion_id:'',
				showPupoBtn:false
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			uni.showLoading({
				title: '请求中'
			})
			this.resultLists()
			this.userScaleUpdate()
			//获取最后一条记录
			// lastReport().then(data => {
			// 	console.log('data', data)
			// 	this.initLastData(data)
			// }).catch((data) => {
			// 	console.log('catch:', data)
			// 	uni.hideLoading()
			// 	// this.initLastData()
			// })
		},
		methods: {
			goToScale() {
				uni.navigateTo({
					url: '/pages/healthtest/topic'
				})
			},
			userScaleUpdate(){
				getuserScaleLists({
					page_no:1,
					page_size:1
				}).then(res => {
					console.log('console:res', res)
					this.ScaleLists = res.lists[0]
					this.showInfo = true;
					this.lastCreateTimeT = res.lists[0].userScaleConclusionDto.update_time;
					console.log("123456:ScaleLists",this.ScaleLists)
				})
			},
			resultLists(){
				getresultLists({
					page_no:1,
					page_size:1
				}).then(res => {
					console.log('res.res:res', res)
					
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
					} = res.lists[0].result
					this.hrreport = hrreport
					this.afreport = afreport
					this.bpreport = bpreport
					this.spo2hreport = spo2hreport
					this.riskreport = riskreport
					this.essentialreport = essentialreport
					this.physiologyscorereport = physiologyscorereport
					
					this.lastCreateTime = res.lists[0].create_time;
					this.showInfo = true;
					this.data__ = res.lists[0].result
					
					this.conclusion_id = res.lists[0].conclusion_id
					if(this.conclusion_id == 0){
						this.showPupoBtn = true
					}else{
						this.showPupoBtn = false
					}
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
					
					// console.log('report:', report)
					
					this.$nextTick(() => {
						// 使用 Canvas 渲染器（默认）
						var chart = echarts.init(this.$refs.charts1);
						this.totalOption.series[0].data = this.gaugeData
						this.gaugeData[0].value = this.physiologyscorereport.data
						chart.setOption(this.totalOption);
						console.log('chart:', chart)
						uni.hideLoading()
					})
					
				})
			},
			swipeTab(index) {
				this.current = index
				if(index == 2 && this.conclusion_id == 0){
					this.showPupoBtn = true
				}
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

		.open-btn {
			display: block;
			margin: 0 auto;
			padding: 8px 24px;
			width: 200px;
			height: 45px;
			border: none;
			border-radius: 4px;
			background-color: #07c160;
			color: #fff;
			font-size: 18px;
			text-align: center;
		}

		.bottom-part {
			height: 135rpx;
			background-color: wheat;
			box-shadow: 0rpx 0rpx 18rpx 18rpx rgba(0, 0, 0, 0.1);
			width: 100%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			z-index: 100;
			bottom: 0rpx;

		}

		.result {
			padding-bottom: 160rpx;
			overflow: scroll;
			position: absolute;
			// top: 150rpx;
			top: 200rpx;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: #f5f6f7;

			.result-item {}

			.conttt {
				overflow: scroll;
				padding-bottom: 160rpx;
				position: absolute;
				top: 8rpx;
				bottom: 0;
				left: 0;
				right: 0;
			}

			.tips {
				text-align: center;
				padding: 10rpx;
				color: #46647d;
				font-size: 25rpx;
			}

			.switch-tab {
				position: relative;
				width: 312rpx;
				height: 70rpx;
				left: 50%;
				margin-left: -156rpx;
				margin-top: 20rpx;
			}

			.inner-tips {
				position: absolute;
				left: 28rpx;
				font-size: 24rpx;
				top: 18rpx;
			}

			.nav-item {
				width: 312rpx;
				height: 70rpx;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
	
	.intro-modal {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background: rgba(0, 0, 0, 0.6);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  z-index: 1000;
	}
	
	.intro-content {
	  width: 90%;
	  max-width: 320px;
	  background: #fff;
	  border-radius: 14px;
	  padding: 22px 18px 18px 18px;
	  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	
	.intro-title {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background: #ede6f7;
	  color: #6f4fc7;
	  font-size: 16px;
	  font-weight: bold;
	  border-radius: 16px;
	  padding: 6px 18px;
	  margin-bottom: 18px;
	  /* margin-top: -30px; */
	  box-shadow: 0 2px 8px rgba(111,79,199,0.06);
	}
	
	.intro-text {
	  font-size: 13px;
	  color: #333;
	  line-height: 1.7;
	  margin-bottom: 24px;
	  text-align: left;
	  word-break: break-all;
	}
	
	.intro-btn {
	  background: #b39ddb;
	  color: #fff;
	  text-align: center;
	  padding: 8px 0;
	  border-radius: 10px;
	  font-size: 15px;
	  font-weight: bold;
	  width: 70%;
	  margin: 0 auto;
	  box-shadow: 0 2px 8px rgba(111,79,199,0.08);
	  letter-spacing: 2px;
	}
	
	.input-tip {
	  font-size: 12px;
	  color: #999;
	  margin-top: 4px;
	  display: block;
	}
	
	.picker-text {
	  color: #333;
	  font-size: 15px;
	}
</style>