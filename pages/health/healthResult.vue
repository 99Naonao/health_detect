<template>
	<view class="container">
		<!-- 介绍弹窗 -->
	<!-- 	<view class="intro-modal" v-if="showIntro">
		  <view class="intro-content">
		    <view class="intro-title">页面说明</view>
		    <view class="intro-text">
		      <text>当前页面为AI健康检测报告页面，如需了解睡商分数，请点击屏幕正下方的'前往睡商测试'按钮前往睡商测试</text>
		    </view>
		    <view class="intro-btn" @click="startTest">确定</view>
		  </view>
		</view> -->
		
		
		<view class="tab flex"  style="position: relative;">
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
			<view style="position: absolute;right: 0px;top: 5px;z-index: 99;">
				<image src="https://oss.zsyl.cc/uploads/images/20250613/20250613091656241580458.png" style="width: 80px;height: 80px;"></image>
			</view>
		</view>
		<view class="result" v-if="showInfo" >
			<div class="conttt" ref="resultView" @scroll="handleResultScroll">
				<view class="" v-if="1==current">
					<happy-result :result="data__"></happy-result>
					<view class="" style="letter-spacing: 9px;box-shadow: none;background: none;margin: 30rpx;border-radius: 40rpx;" >
						<view style="width: 100%;margin: 0 auto;" v-if="showIntro">
							<view style="width: 100%;">
								<image src="https://oss.zsyl.cc/uploads/images/20250630/202506301447555072a5144.png" style="width: 100%;height: 100%;" mode="widthFix"> 
								</image>
							</view>
						</view>
					</view>
					<view style="display: flex;margin: 30rpx;">
						<view class="float-btn"  style="bottom: 70px;width: 49%;" @click="goToSave">
								放弃评估，保存结果
						</view>
						<view class="float-btn"  style="bottom: 70px;width: 49%;margin-left: auto;" @click="goToScale">
								填写匹兹堡睡眠质量问卷
						</view>
					</view>
					
				</view>
				<view class="" style="" v-else>
					<physical-result :result="data__"></physical-result>
					<view class="" style="letter-spacing: 9px;box-shadow: none;background: none;margin: 30rpx;border-radius: 40rpx;" >
						<view style="width: 100%;margin: 0 auto;" @click.stop="current = 1" v-if="showIntro">
							<view style="width: 100%;height: 400rpx;">
								<image src="https://oss.zsyl.cc/uploads/images/20250623/20250623105209307d16280.png" style="width: 100%;height: 100%;" mode="widthFix"> 
								</image>
							</view>
						</view>
					</view>
				</view>
			</div>
			
		</view>
		
<!-- 		<view class="" style="position: fixed;bottom: 20%;right: -10px;" v-if="showRightBtn && 0==current" @click="showRightBtn = false">
			<view style="width: 100%;margin: 0 auto;">
				<view style="width: 40rpx;height: 40rpx;position: absolute;right: 30rpx;z-index: 99;" @click="showRightBtn = false">
					<image src="https://oss.zsyl.cc/uploads/images/20250624/20250624174557ac2709385.png" style="width: 100%;height: 100%;" mode="widthFix">
					</image>
				</view>
				<view style="width: 250rpx;height: 250rpx;" @click.stop="goToScale">
					<image src="https://oss.zsyl.cc/uploads/images/20250625/202506251427405a6f53299.png" style="width: 100%;height: 100%;" mode="widthFix"> 
					</image>
				</view>
			</view>
		</view> -->
<!-- 		<view class="float-btn" v-if="showFloatBtn && 1==current" @click="goToScale" style="bottom: 70px;width: 50%;">
			真实填问卷，获得睡商报告
			<view style="width: 420px;height: 420px;position: absolute;bottom: -120px;left: -20px;" @click.stop="showIntro = false" v-if="showIntro">
				<view style="width: 420px;height: 420px;">
					<image src="https://oss.zsyl.cc/uploads/images/20250619/202506191011129c34d6505.png" style="width: 100%;height: 100%;">
					</image>
				</view>
			</view>
		</view> -->
		
		<!-- 介绍弹窗 -->
<!-- 		<view class="intro-modal" v-if="showPupoBtn && 1==current">
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
				  您的健康画像已完成70%，可点击马上测睡商立即进行专业睡商检测。
			  </view>
		    </view>
			<view style="display: flex;width: 100%;">
				<view class="intro-btn" @click="showPupoBtn = false" style="background-color: #FFFFFF;color: #000;border: 1px solid #000;">取消</view>
				<view class="intro-btn" @click="goToScale" style="background-color: #0F4EF0;color: #fff;border: 1px solid #0F4EF0;margin-left: 20rpx;">确定</view>
			</view>
		    
		  </view>
		</view> -->
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
		getJsonResult,
		getresultLists
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
				},
				text:'',
				text2:'',
				showIntro: true, // 控制介绍弹窗显示
				showFloatBtn: false,
				showRightBtn:true,
				showPupoBtn:false
			}
		},
		onShow() {
			uni.showLoading({
				title: '请求中'
			})
			this.resultLists()
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
			startTest() {
			  this.showIntro = false
			},
			resultLists(){
				this.text = '123456'
				getresultLists({
					page_no:1,
					page_size:1
				}).then(res => {
					console.log('res.res:res', res)
					this.text2 = res
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
				if(index == 1){
					this.showPupoBtn = true
				}
				
				this.current = index
				this.$nextTick(() => {
					this.$refs['resultView'].scrollTo({
						top: 0,
						behavior: 'smooth'
					})
				})
			},
			goToScale() {
				uni.navigateTo({
					url: '/pages/healthtest/topic'
				})
			},
			goToSave() {
				uni.showLoading({
					title: '保存中'
				})
				setTimeout(() => {
					uni.hideLoading()
					uni.navigateTo({
						url: '/pages/health/health'
					})
				}, 1500);
				
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
			},
			handleResultScroll(e) {
				const el = e.target;
				if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
					this.showFloatBtn = true;
				} else {
					this.showFloatBtn = false;
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import url("./healthResult.scss");
	
	.float-btn {
		// position: fixed;
		bottom: 30px;
		left: 50%;
		// transform: translateX(-50%);
		background: #153b70;
		color: #fff;
		text-align: center;
		padding: 15px 0;
		// padding: 12px 30px;
		border-radius: 25px;
		font-size: 14px;
		box-shadow: 0 4px 12px rgba(21, 59, 112, 0.2);
		z-index: 100;
		
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
	
	// .result {
	// 	overflow: auto;
	// 	// max-height: 70vh;
	// }
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
</style>