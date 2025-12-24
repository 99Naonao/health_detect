<template>
	<view class="report-bg">
		<!-- 顶部标题 -->
		<!-- <view class="report-title">睡眠检测报告</view> -->
	
		<!-- 等级与分数卡片 -->
		<view class="card-row">
			<view class="card card-left">
				<view class="card-label">睡眠等级 {{LBgrade}} 级</view>
				<view class="card-value">{{levelname}}</view>
				<view class="card-desc">(共IV级，等级越高睡眠越差)</view>
				<view class="progress-bar">
					<view class="progress-inner" :style="{width: LBWidth}"></view>
				</view>
			</view>
			<view class="card card-right">
				<view class="card-label">睡商 <text style="color: #1e5183;">{{Totalscore}}</text> 分</view>
				<view class="score-wrapper" >
					<div ref="charts1" style="width: 135px;height: 135px;margin-left: -0px;"></div>
				</view>
			</view>
		</view>
	
		<!-- 报告结论卡片1 -->
		<view class="conclusion-card">
			<view class="conclusion-title">
				睡眠等级报告结论
				<image class="planet-img" src="https://sleep.zsyl.cc/sleeph5/assets/planet.png" mode="widthFix" />
			</view>
			<view class="conclusion-text">
				{{conclusion}}
			</view>
		</view>
	
		<!-- 报告结论卡片2 -->
		<view class="conclusion-card">
			<view class="conclusion-title">睡商等级报告结论</view>
			<view class="conclusion-text">
				<view class="unlock-desc">
					<view >
					  <view class="conclusion-textT" style="line-height: 1.8;" v-html="conclusionText"></view>
					  <view class="more-btn" @click="showIntro = true">查看更多</view>
					</view>
				</view>
			</view>
		</view>
	
		<!-- 解锁更多 -->
		<view class="unlock-more conclusion-card" style="margin-bottom: 20px;">
			<view class="unlock-btn" style="text-align: center;">解锁更多…</view>
			<view class="unlock-desc" style="margin-top: 20px;">
				想解锁更精准的睡眠“黑科技”？眠加优选脑电检测仪通过专业生物电信号深度剖析，为你生成进阶版睡眠报告，助你一键获取改善建议！
			</view>
		</view>
		
		<!-- 底部按钮 -->
		<view class="bottom-btns">
			<!-- <button class="main-btn shop-btn">去商城看看</button> -->
			<view style="min-width: 90%;">
				<button class="main-btn share-btn" style="display: flex;justify-content: center;align-items: center;" @click="handleShare">
					<image src="https://oss.zsyl.cc/uploads/images/20250613/202506131138547ab320995.png" style="width: 16px;height: 16px;margin-right: 8px;"></image>
					<view>分享海报得积分</view>
				</button>
			</view>
			
		</view>
	
		<!-- 介绍弹窗 -->
		<view class="intro-modal" v-if="showIntro">
		  <view class="intro-content">
		    <view class="intro-title">详细报告</view>
		    <view class="intro-text">
		      <view style="text-align: left;color: #333;" v-html="conclusionText">
			  </view>
		    </view>
		    <view class="intro-btn" @click="showIntro = false">关闭</view>
		  </view>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts';

	// #ifdef H5

	import {
		autoLogin,
		getToken,
		addReport,
		Userscaledetail,
		getUsercentre,
		getdeepseekchat,
		getDetectionsection,
		lastReport,
		getresultLists,
		getuserScaleLists
	} from '../../utils/h5app.js'
	// #endif
	export default {
		props: {
			result: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				loading: true,
				recommendedProducts: [{
						name: '【翼合枕】',
						description: '护颈助眠 90D慢回弹记忆棉',
						image: '/static/images/product1.jpg'
					},
					{
						name: '【翼合枕】',
						description: '护颈助眠 90D慢回弹记忆棉',
						image: '/static/images/product1.jpg'
					},
					{
						name: '【翼合枕】',
						description: '护颈助眠 90D慢回弹记忆棉',
						image: '/static/images/product1.jpg'
					},
					{
						name: '【翼合枕】',
						description: '护颈助眠 90D慢回弹记忆棉',
						image: '/static/images/product1.jpg'
					}
				],
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
				conclusion: '',
				numb: '',
				conclusionText: '',
				numtolt: '',
				data__: {},
				fang: 0,
				conclusionid: "",
				explain_guide: '',
				title: '',
				showIntro: false, // 控制介绍弹窗显示
				LBgrade:"Ⅰ",
				LBWidth:"10%",
				Totalscore:'',
				LBnumb:"",
				levelname:''
			}
		},
		mounted() {
			const {
				userInfo, // 综合
				userScaleConclusionDto,
				userScaleDetailDtos,
			} = this.result
			
			this.LBnumb = Number(userScaleConclusionDto.score) 
			this.Totalscore = Number(100 - this.LBnumb*5) 
			this.conclusionText = userScaleConclusionDto.deepseek_conclusion
			
				getDetectionsection({
						score:this.LBnumb
					}).then(res => {
						
						
						this.recommendedProducts = res.goods_lists
						this.conclusion = res.detail.remarks
						this.title = res.detail.title
						this.explain_guide = res.detail.explain_guide
						this.levelname = res.detail.name
						let detection = res.detection
						for(let i =0;i<detection.length;i++){
							if(this.LBnumb >= detection[i].start && this.LBnumb <= detection[i].end){
								this.LBgrade = detection[i].level_name
								
								const indicator = Number(detection[i].degree_indicator) || 0;
								console.log("indicator.indicator",indicator)
								this.LBWidth = indicator + '%';
							}
						}
					console.log("res.999",res)
				})
			
			this.$nextTick(() => {
				// 使用 Canvas 渲染器（默认）
				// 使用 Canvas 渲染器（默认）
				var chart = echarts.init(this.$refs.charts1);
				this.totalOption.series[0].data = this.gaugeData
				// this.gaugeData[0].value = 20
				this.gaugeData[0].value = this.Totalscore
				
				chart.setOption(this.totalOption);
				
			})
		},
		methods:{
			handleShare() {
				uni.navigateTo({
					url: '/pages/invite_poster/invite_poster?numtolt=' + this.Totalscore + "&shuishan=" + this.LBnumb
				})
			},
		}
	}
	
	
</script>

<style scoped lang="scss">
	.report-bg {
		min-height: 100vh;
		// background: #f5f5f5;
		// background: linear-gradient(180deg, #0c032d 0%, #fff 120px);
		// background-image: url('https://oss.zsyl.cc/uploads/images/20250613/20250613162556f579e8779.png');
		background-size: 100% 200px;
		padding-bottom: 80px;
	}
	.top-bg {
		margin-top: -30px;
		width: 100%;
		height: 160px;
		background-image: url('https://oss.zsyl.cc/uploads/images/20250613/20250613162556f579e8779.png');
		background-size: 100% 100%;
		// background-position: center;
		// position: relative;
	}
	.report-title {
		color: #fff;
		font-size: 26px;
		font-weight: bold;
		text-align: center;
		padding: 38px 0 18px 0;
		letter-spacing: 2px;
		position: absolute;
		left: 0; right: 0; top: 0;
	}
	
	.card-row {
		display: flex;
		justify-content: space-between;
		margin: 0 18px;
		margin-top: 10px;
	}
	
	.card {
		background: #fff;
		border-radius: 18px;
		box-shadow: 0px 0px 18px rgba(236, 229, 243,1);
		padding: 18px 16px 18px 16px;
		width: 38%;
		display: flex;
		flex-direction: column;
		border:1px solid #ece5f3
		// align-items: center;
	}
	
	.card-label {
		color: #333;
		font-size: 15px;
		margin-bottom: 8px;
	}
	
	.card-value {
		font-size: 28px;
		color: #1a2a5c;
		font-weight: bold;
		margin-bottom: 2px;
	}
	
	.card-desc {
		font-size: 13px;
		color: #888;
		margin-bottom: 10px;
	}
	
	.progress-bar {
		width: 100%;
		height: 20px;
		background: #a6a6a6;
		border-radius: 12px;
		overflow: hidden;
		margin-top: 20px;
		border: 3px solid #e5e5e5;
		box-shadow: 4px 4px 12px rgba(229, 229, 229,0.5);
	}
	
	.progress-inner {
		height: 100%;
		// background: #71ace8; #0e3f71;
		// background: linear-gradient(direction, #71ace8, #0e3f71);
		background: linear-gradient(90deg, #6ad1ff  0%, #4e7fff 100%);
		border-radius: 12px;
		
		width: 66%;
		transition: width 0.3s;
	}
	
	.card-right {
		// align-items: center;
		justify-content: center;
	}
	
	.score-circle {
		position: relative;
		width: 90px;
		height: 90px;
		margin-top: 8px;
		margin-bottom: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.score-num {
		font-size: 32px;
		color: #1a2a5c;
		font-weight: bold;
	}
	
	.score-unit {
		font-size: 14px;
		color: #888;
		margin-left: 2px;
		position: absolute;
		right: 18px;
		top: 38px;
	}
	
	.circle-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		border: 6px solid #eaf0fa;
		box-sizing: border-box;
		z-index: -1;
	}
	
	.conclusion-card {
		background: #f7fbff;
		border-radius: 16px;
		margin: 18px 18px 0 18px;
		padding: 18px 16px 16px 16px;
		// box-shadow: 0px 0px 20px rgba(229, 229, 229,1);
		box-shadow: 0 0px 10px rgba(16, 66, 115, 0.2);
		position: relative;
		border: 2px solid #e5e5e5;
	}
	
	.conclusion-title {
		font-size: 16px;
		color: #000;
		font-weight: bold;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
	
	.planet-img {
		width: 32px;
		height: 32px;
		margin-left: 8px;
	}
	
	.conclusion-text {
		font-size: 14px;
		color: #333;
		line-height: 1.7;
	}
	
	.unlock-more {
		margin: 30px 18px 0 18px;
		background: #fff;
		border-radius: 16px;
		padding: 16px 16px 12px 16px;
		box-shadow: 0 0px 10px rgba(16, 66, 115, 0.6);
		position: relative;
		// border: 1px solid #104273;
		// text-align: center;
	}
	
	.unlock-btn {
		// background: linear-gradient(90deg, #4e7fff 0%, #6ad1ff 100%);
		color: #fff;
		border-radius: 16px;
		padding: 5px 0;
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 8px;
		width: 120px;
		margin: 0 auto 8px auto;
		display: inline-block;
		background: url('https://oss.zsyl.cc/uploads/images/20250613/202506131138543ff101015.png');
		 background: 
		    url('https://oss.zsyl.cc/uploads/images/20250613/202506131138543ff101015.png'),
		    linear-gradient(90deg, #104273 0%, #104273 100%);
		position: absolute;
		top: -15px;
		left: calc(50% - 60px);
	}
	
	.unlock-desc {
		font-size: 13px;
		color: #666;
		line-height: 1.6;
	}
	
	.bottom-btns {
		// position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		// background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 12px 0 18px 0;
		// box-shadow: 0 -2px 12px rgba(26, 42, 92, 0.04);
		z-index: 10;
	}
	
	.main-btn {
		flex: 1;
		margin: 0 10px;
		background: #1a2a5c;
		color: #fff;
		border-radius: 30px;
		font-size: 16px;
		font-weight: bold;
		padding: 2px 0;
		text-align: center;
		border: none;
	}
	
	.shop-btn {
		background: #1a2a5c;
	}
	
	.share-btn {
		background: #1a2a5c;
		color: #fff;
		border: 1.5px solid #1a2a5c;
	}
	.conclusion-textT {
	  font-size: 14px;
	  color: #333;
	  line-height: 1.6;
	  text-align: left;
	  height: 120px; /* 固定高度，约5行文字 */
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 5; /* 限制5行 */
	  -webkit-box-orient: vertical;
	  padding-right: 10px;
	}
	.loading-wrapper {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  padding: 10px 0 0;
	}
	
	.loading-spinner {
	  width: 30px;
	  height: 30px;
	  border: 3px solid #f3f3f3;
	  border-top: 3px solid #153b70;
	  border-radius: 50%;
	  animation: spin 1s linear infinite;
	  margin-bottom: 10px;
	}
	
	.loading-text {
	  font-size: 14px;
	  color: #666;
	}
	
	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  100% { transform: rotate(360deg); }
	}
	
	.more-btn {
	  text-align: center;
	  color: #3575f6;
	  font-size: 14px;
	  margin-top: 10px;
	  padding: 5px 0;
	  cursor: pointer;
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
	  max-height: 70vh; /* 限制弹窗最大高度 */
	  overflow: hidden;  /* 保证内容不会溢出弹窗 */
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
	  max-height: 45vh;   /* 内容最大高度 */
	  overflow: auto;     /* 超出可滚动 */
	  width: 100%;
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