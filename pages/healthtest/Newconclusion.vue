<template>
	<view class="report-bg">
		<view class="top-bg">
			<view class="report-title">睡眠检测报告</view>
		</view>
		<!-- 等级与分数卡片 -->
		<view class="card-row">
			<view class="card card-left">
				<view class="card-label">睡眠等级 {{LBgrade}} 级</view>
				<view class="card-value">{{levelname}}</view>
				<view class="card-desc">(总共4级，数字越大，睡眠越差)</view>
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
		<view class="conclusion-card" style="position:relative;">
			<view class="conclusion-title">
				睡眠等级报告结论
				<!-- <image class="planet-img" src="https://sleep.zsyl.cc/sleeph5/assets/planet.png" mode="widthFix" /> -->
			</view>
			<view style="width: 70px;height: 70px;position: absolute;top: -26px;right: 30px;">
				<image src="https://oss.zsyl.cc/uploads/images/20250613/20250613171243afdce0618.png" style="width: 100%;height: 100%;"></image>
			</view>
			<view class="conclusion-text">
				{{conclusion}}
			</view>
		</view>

		<!-- 报告结论卡片2 -->
		<view class="conclusion-card">
			<view class="conclusion-title">睡商报告结论</view>
			<view class="conclusion-text">
				<view class="unlock-desc">
					<view v-if="loading" class="loading-wrapper">
					  <view class="loading-spinner"></view>
					  <text class="loading-text">预计需要30s生成报告...</text>
					</view>
					<view v-else>
					  <view class="conclusion-textT" style="line-height: 1.8;" v-html="conclusionText"></view>
					  <view class="more-btn" @click="showFullConclusion">查看更多</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 解锁更多 -->
		<view class="unlock-more conclusion-card" style="margin-bottom: 20px;">
			<view class="unlock-btn" style="text-align: center;">解锁更多…</view>
			<view class="unlock-desc" style="margin-top: 20px;">
				想解锁更精准的睡眠"黑科技"？眠加优选脑电检测仪！通过专业生物电信号深度剖析，为你生成进阶版睡眠报告，助你一键获取改善建议！
			</view>
		</view>
		<view style="color: #333;font-size: 12px;padding: 0 20px;">!!本报告仅作健康参考,不用于医学诊断治疗,如有睡眠问题请遵医嘱就医。</view>
		<!-- 底部按钮 -->
		<view class="bottom-btns">
			<view>
				<wx-open-launch-weapp id="launch-btn" style="" appid="wxadc17399e1b28d8b"
					username='gh_e511f8f79ddd'>
					<component :is="'script'" type="text/wxtag-template">
						<style>
							.jump {
								color: white;
								background-color: #1a2a5c;
								padding: 10rpx 20rpx;
								font-size: 32rpx;
								border-radius: 50rpx;
								justify-content: center;
								display: flex;
								width: 300rpx;
								margin: 0 auto;
								text-align: center;
								box-shadow: 0rpx 0rpx 35rpx 35rpx rgba(0, 0, 0, 0.1);
				
				
								.txt {
									line-height: 60rpx;
								}
				
								.icon {
									width: 34rpx;
									height: 34rpx;
									margin-right: 10rpx;
									margin-top: -5rpx;
								}
							}
						</style>
						<view class="jump" style="color: white;
								background-color: #1a2a5c;
								padding: 20rpx 40rpx;
								font-size: 32rpx;
								border-radius: 50rpx;
								justify-content: center;
								display: flex;
								width: 300rpx;
								margin: 0 auto;
								text-align: center;
								">
							<img style="width: 16px;
									height: 16px;
									margin-right: 10rpx;
									margin-top: 5px;" src="https://oss.zsyl.cc/uploads/images/20250613/202506131138540a4916404.png" />
							<text class="txt" style="line-height: 60rpx;color: #fff;">去商城看看</text>
						</view>
					</component>
				</wx-open-launch-weapp>
			</view>
			<!-- <button class="main-btn shop-btn">去商城看看</button> -->
			<view style="min-width: 48%;">
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
	import { marked } from 'marked';

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
		getuserScaleUpdate,
		getuserScaleLists
	} from '../../utils/h5app.js'
	// #endif

	export default {
		name: 'Newconclusion',
		data() {
			return {
				loading: true,
				recommendedProducts: [],
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
								color: '#1e5183',
								borderWidth: 1,
								borderColor: '#1e5183',
							},
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
				LBnumb: '',
				Totalscore:'',
				conclusionText: '',
				num: '',
				data__: {},
				fang: 0,
				conclusionid: "",
				explain_guide: '',
				title: '',
				showIntro: false, // 控制介绍弹窗显示
				userScaleConclusionDto: {
					id: '',
					deepseek_conclusion: ''
				},
				LBgrade:"1",
				LBWidth:"10%",
				levelname:'',
				ALLuserScaleDetailDtos:''
			}
		},
		
		onLoad(option) {
			if(option.numtolt == undefined){
				option.numtolt = 0
			}
			this.userScaleUpdate()
			this.Totalscore = Number(100 - option.numtolt*5) 
			
			
			this.LBnumb = option.numtolt
			this.conclusionid = option.conclusionid
			console.log("option:option",option.fang)
			
			this.Detectionsection()
			
			if(option.fang != undefined){
				this.loading = false
				this.StorageSync()
			}else{
				this.resultLists()
			}
			
			
		},
		onShow() {
			
		},
		mounted() {
			this.$nextTick(() => {
				var chart = echarts.init(this.$refs.charts1);
				this.totalOption.series[0].data = this.gaugeData
				this.gaugeData[0].value = this.Totalscore
				chart.setOption(this.totalOption);
			})
		},
		methods: {
			  userScaleUpdate(){
			  	getuserScaleLists({
			  		page_no:1,
			  		page_size:1
			  	}).then(res => {
					this.ALLuserScaleDetailDtos = res.lists[0].userScaleDetailDtos.map(item => `${item+1}:${item.answer}`).join('，');
					console.log('this.ALLuserScaleDetailDtos',this.ALLuserScaleDetailDtos)
			  	})
			  },
			  StorageSync(){
				  this.conclusionText = uni.getStorageSync('conclusion_Text')
			  },
			  resultLists(){
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
					
			  		this.data__ = res.lists[0].result
			  		
			  		this.deepseekchat(res.lists[0].result)
			  		
			  	})
			  },
			  
			  Detectionsection(){
			  	getDetectionsection({
					score:this.LBnumb
				}).then(res => {
					this.recommendedProducts = res.goods_lists
					this.conclusion = res.detail.remarks
					this.title = res.detail.title
					this.explain_guide = res.detail.explain_guide
					this.levelname = res.detail.name
					// this.conclusionText = res.detail.explain_guide
					let detection = res.detection
					for(let i =0;i<detection.length;i++){
						if(this.LBnumb >= detection[i].start && this.LBnumb <= detection[i].end){
							this.LBgrade = detection[i].level_name
							
							const indicator = Number(detection[i].degree_indicator) || 0;
							this.LBWidth = indicator + '%';
						}
					}
			  	})
			  },
			  deepseekchat(report){
				  
				  let hrvtext = ""
				  if(report.afreport.data == 0){
					  hrvtext = '未发生'
				  }else{
					  hrvtext = '已发生'
				  }
				  
				  const bpheartattack = (report.riskreport.data.bpheartattack * 100).toFixed(2)
				  const bpstroke = (report.riskreport.data.bpstroke * 100).toFixed(2)
				  const bpcvd = (report.riskreport.data.bpcvd * 100).toFixed(2)
				  const bppp = (report.riskreport.data.bppp).toFixed(2)
				  const bptau = (report.riskreport.data.bptau).toFixed(2)
				  const aggressivityreport = (report.aggressivityreport.data).toFixed(2)
				  const anxietyreport = (report.anxietyreport.data).toFixed(2)
				  const vitalityreport = (report.vitalityreport.data).toFixed(2)
				  const suppressionreport = (report.suppressionreport.data).toFixed(2)
				  const fatiguereport = (report.fatiguereport.data).toFixed(2)
				  const msireport = (report.msireport.data).toFixed(2)
				  
				  const reportText = '(结论包括综合心健康风险(分值越低风险越高，100分制)'+ report.physiologyscorereport.data +'皮肤年龄'+ report.essentialreport.data.age + 'BMI'+ report.essentialreport.data.bmi + '心率'+ report.hrreport.data.hrbpm + '心率变异性'+ report.hrreport.data.hrv+ '房颤'+ hrvtext + '舒张压' + report.bpreport.data.bpdiastolic + '收缩压'+ report.bpreport.data.bpsystolic + '血氧饱和度' + report.spo2hreport.data + '心脏病风险'+ bpheartattack + '中风风险'+ bpstroke + '心血管风险'+ bpcvd + '心脏压力' + bppp + '血管功能'+ bptau + '情绪综合分(分值越低情绪越差，100分制)'+ report.emotionscorereport.data + '进取性' + aggressivityreport + '焦虑度'+ anxietyreport + '活力度'+ vitalityreport + '抑郁度'+ suppressionreport + '疲劳度'+ fatiguereport + '压力度'+ msireport + ')'
					
				  const messagetext = '你是一位专业且敏锐的睡眠健康顾问，凭借深厚的专业知识与精准的分析能力，深度、全面地综合分析已有健康检测结论('+ reportText +')和匹兹堡睡眠质量问卷结论('+ this.conclusion +'),再结合做题对应答案('+this.ALLuserScaleDetailDtos+')情况进行分析。其中睡商评分着重依据匹兹堡睡眠质量问卷结论，健康检测辅助评分。给出简洁直观、类似 MBTI 性格的小标题,得出的结论中不要出现类似综合睡商评分的内容。'
				  
				  getdeepseekchat({
					  message:messagetext
				  }).then(res => {
					// try {
					// 	// 尝试使用 marked 解析 Markdown 格式
					// 	this.conclusionText = marked(res);
					// } catch (error) {
					// 	console.log('marked 解析失败，使用正则处理:', error);
					// 	// 备用方案：使用正则表达式处理基本的 Markdown 格式
					// 	let cleanText = res;
					// 	// 处理 **粗体**
					// 	cleanText = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
					// 	// 处理 ### 标题
					// 	cleanText = cleanText.replace(/###\s*(.*?)(?=\n|$)/g, '<h3>$1</h3>');
					// 	// 处理 ## 标题
					// 	cleanText = cleanText.replace(/##\s*(.*?)(?=\n|$)/g, '<h2>$1</h2>');
					// 	// 处理 # 标题
					// 	cleanText = cleanText.replace(/#\s*(.*?)(?=\n|$)/g, '<h1>$1</h1>');
					// 	// 处理换行
					// 	cleanText = cleanText.replace(/\n/g, '<br>');
					// 	this.conclusionText = cleanText;
					// }
					
					let cleanText = res;
					// 处理 **粗体**
					cleanText = cleanText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
					// 处理 ### 标题
					cleanText = cleanText.replace(/###\s*(.*?)(?=\n|$)/g, '<h3>$1</h3>');
					// 处理 ## 标题
					cleanText = cleanText.replace(/##\s*(.*?)(?=\n|$)/g, '<h2>$1</h2>');
					// 处理 # 标题
					cleanText = cleanText.replace(/#\s*(.*?)(?=\n|$)/g, '<h1>$1</h1>');
					// 处理换行
					// cleanText = cleanText.replace(/\n/g, '<br>');
					this.conclusionText = cleanText;
					
					uni.setStorageSync('conclusion_Text', this.conclusionText)
					this.userScaleConclusionDto.id = this.conclusionid
					this.userScaleConclusionDto.deepseek_conclusion = this.conclusionText
					if(this.conclusionText != ''){
						getuserScaleUpdate({
							userScaleConclusionDto:this.userScaleConclusionDto,
						}).then(resT => {
							
						})
					}
					
					this.loading = false
				})
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
			  	this.data__ = report
			  
				this.deepseekchat(report)
			  },
			  
			  
		  handleShare() {
				uni.navigateTo({
					url: '/pages/invite_poster/invite_poster?numtolt=' + this.Totalscore + "&shuishan=" + this.LBnumb
				})
		  },
		  handleRetest() {
				uni.switchTab({
					url: '/pages/health/health'
				})
		  },
			jumpHandler(ids) {
				const inviteCode = uni.getStorageSync('invite_code')
				// 判断是否在微信环境中
				if (window.wx) {
					// 使用微信JSSDK的launchMiniProgram方法
					window.wx.launchMiniProgram({
						appId: 'wxadc17399e1b28d8b', // 要打开的小程序 appId
						path: '/pages/goods_detail/goods_detail?scene=invite_code%3D'+ inviteCode +'%26id%3D' + ids, // 打开的页面路径
						success: function(res) {
							console.log('跳转成功', res)
						},
						fail: function(err) {
							console.log('跳转失败', err)
							uni.showToast({
								title: '跳转失败，请稍后重试',
								icon: 'none'
							})
						}
					})
				} else {
					uni.showToast({
						title: '请在微信中打开',
						icon: 'none'
					})
				}
			},
		  goShop() {
		    uni.showToast({
		      title: '跳转商城开发中',
		      icon: 'none'
		    })
		  },
		  showFullConclusion() {
				this.showIntro = true
		  },
		  getInviteCode() {
		    return uni.getStorageSync('invite_code') || ''
		  },
		  handleLaunch(e) {
		    console.log('跳转成功', e)
		  },
		  handleError(e) {
		    console.log('跳转失败', e)
		    uni.showToast({
		      title: '跳转失败，请稍后重试',
		      icon: 'none'
		    })
		  }
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
		margin-top: -30px;
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
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 12px 0 18px 0;
		box-shadow: 0 -2px 12px rgba(26, 42, 92, 0.04);
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
	  // max-height: 70vh; /* 限制弹窗最大高度 */
	  overflow: hidden;  /* 保证内容不会溢出弹窗 */
	  height: 90vh;
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
	  // max-height: 45vh;   /* 内容最大高度 */
	  max-height: 75vh;   /* 内容最大高度 */
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