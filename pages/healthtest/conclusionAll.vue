<template>
  <view class="conclusion-container">
    <!-- 顶部标题和分数 -->
    <view class="score-section">
      <!-- <text class="title">睡商</text> -->
	  <view class="title">{{title}}</view>
	  <view class="" style="text-align: center;font-size: 14px;color: #000;margin-top: 5px;padding: 0 15px;">{{explain_guide}}</view>
      <view class="score-wrapper">
		  <div ref="charts1" style="width: 168px;height: 168px;"></div>
       <!-- <text class="score">20</text>
        <text class="score-unit">分</text> -->
      </view>
      <view class="btn-row">
        <view class="main-btn" style="background-color: #F77913;" @click="handleShare">分享海报</view>
        <view class="main-btn" style="background-color: #153b70;" @click="handleRetest">再测一次</view>
      </view>
    </view>

    <!-- 报告结论 -->
    <view class="conclusion-section">
      <text class="section-title">报告结论</text>
      <view v-if="loading" class="loading-wrapper">
        <view class="loading-spinner"></view>
        <text class="loading-text">正在生成报告...</text>
      </view>
      <view v-else>
        <view class="conclusion-text" style="line-height: 1.8;">{{conclusionText}}</view>
        <view class="more-btn" @click="showFullConclusion">查看更多</view>
      </view>
    </view>
	
	<!-- 介绍弹窗 -->
	<view class="intro-modal" v-if="showIntro">
	  <view class="intro-content">
	    <view class="intro-title">详细报告</view>
	    <view class="intro-text">
	      <view style="text-align: left;color: #333;">
			  {{conclusionText}}
		  </view>
	    </view>
	    <view class="intro-btn" @click="showIntro = false">关闭</view>
	  </view>
    </view>

    <!-- 推荐产品 -->
    <view class="products-section">
      <text class="section-title">推荐产品</text>
      <view class="product-list">
        <view class="product-item" v-for="(item, index) in recommendedProducts" :key="index">
			  <wx-open-launch-weapp id="launch-btn" class="conclusion-img" style="" appid="wx041bde7c633d4ec0"
			    	username='gh_e511f8f79ddd' :path="'/pages/goods_detail/goods_detail?scene=invite_code%3D'+ getInviteCode() +'%26id%3D' + item.id">
			  	<component :is="'script'" type="text/wxtag-template">
					<img style="width: 290rpx;
							height: 300rpx;
							margin-right: 10rpx;
							" :src="item.image" />
			  	</component>
			  </wx-open-launch-weapp>
		 <wx-open-launch-weapp id="launch-btn" class="conclusion-textTT" style="width: 150px;height: 90px;" appid="wx041bde7c633d4ec0"
		  	username='gh_e511f8f79ddd' :path="'/pages/goods_detail/goods_detail?scene=invite_code%3D'+ getInviteCode() +'%26id%3D' + item.id">
			<component :is="'script'" type="text/wxtag-template">
          <view class="product-info">
		  		  <text class="product-name" style="font-size: 12px;">{{item.name}}</text>
          </view>
			
			</component>
		</wx-open-launch-weapp>
        </view>
      </view>
    </view>

    <!-- 底部悬浮按钮 -->
    <view class="footer-btn-wrapper bottom-part flex align-items">
		<wx-open-launch-weapp id="launch-btn" style="width: 100%;" appid="wx041bde7c633d4ec0"
			username='gh_e511f8f79ddd'>
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
		getuserScaleUpdate
	} from '../../utils/h5app.js'
	// #endif
export default {
  data() {
    return {
      loading: true,
      recommendedProducts: [
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
	  conclusion:'',
	  numb:'',
	  conclusionText:'',
	  numtolt:'',
	  data__:{},
	  fang:0,
	  conclusionid:"",
	  explain_guide:'',
	  title:'',
	  showIntro: false, // 控制介绍弹窗显示
	  userScaleConclusionDto:{
		  id:'',
		  deepseek_conclusion:''
	  },
    }
  },
  onLoad(option) {
	// this.gaugeData[0].value = option.numb
	// this.conclusion = option.context
	this.numb = Number(100 - option.numtolt*5) 
	this.numtolt = option.numtolt
	this.conclusionid = option.conclusionid
	this.Detectionsection()
	
	
	// if(option.fang){
	// 	this.resultLists()
	// }else{
	// 	this.StorageSync()
	// }
	
	// this.deepseekchat()
	
  },
  onShow() {
  	//获取最后一条记录
	this.resultLists()
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
  	this.$nextTick(() => {
  		// 使用 Canvas 渲染器（默认）
  		var chart = echarts.init(this.$refs.charts1);
  		this.totalOption.series[0].data = this.gaugeData
  		// this.gaugeData[0].value = 20
		this.gaugeData[0].value = this.numb
		
  		chart.setOption(this.totalOption);
  		// console.log('chart:', chart)
  		// uni.hideLoading()
  	})
  },
  methods: {
	  
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
	  		// this.hrreport = hrreport
	  		// this.afreport = afreport
	  		// this.bpreport = bpreport
	  		// this.spo2hreport = spo2hreport
	  		// this.riskreport = riskreport
	  		// this.essentialreport = essentialreport
	  		// this.physiologyscorereport = physiologyscorereport
	  		
	  		// this.lastCreateTime = res.lists[0].create_time;
	  		// this.showInfo = true;
	  		this.data__ = res.lists[0].result
	  		
	  		this.deepseekchat(res.lists[0].result)
			
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
	  		
	  		// this.$nextTick(() => {
	  		// 	// 使用 Canvas 渲染器（默认）
	  		// 	var chart = echarts.init(this.$refs.charts1);
	  		// 	this.totalOption.series[0].data = this.gaugeData
	  		// 	this.gaugeData[0].value = this.physiologyscorereport.data
	  		// 	chart.setOption(this.totalOption);
	  		// 	console.log('chart:', chart)
	  		// 	uni.hideLoading()
	  		// })
	  		
	  	})
	  },
	  
	  Detectionsection(){
	  	getDetectionsection({
			score:this.numtolt
		}).then(res => {
			this.recommendedProducts = res.goods_lists
			this.conclusion = res.detail.remarks
			this.title = res.detail.title
			this.explain_guide = res.detail.explain_guide
	  		console.log("res.999",res)
	  	})
	  },
	  deepseekchat(report){
		  
		  console.log('report:report',report)
		  
		  let hrvtext = ""
		  if(report.afreport.data == 0){
			  hrvtext = '未发生'
		  }else{
			  hrvtext = '已发生'
		  }
		  
		  console.log('hrvtext:hrvtext',hrvtext)
		  
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
		  
		  
		  console.log('bpheartattack:bpheartattack',bpheartattack)
		  
		  
		  const reportText = '(结论包括综合心健康风险(分值越低风险越高，100分制)'+ report.physiologyscorereport +'皮肤年龄'+ report.essentialreport.data.age + 'BMI'+ report.essentialreport.data.bmi + '心率'+ report.hrreport.data.hrbpm + '心率变异性'+ report.hrreport.data.hrv+ '房颤'+ hrvtext + '舒张压' + report.bpreport.data.bpdiastolic + '收缩压'+ report.bpreport.data.bpsystolic + '血氧饱和度' + report.spo2hreport.data + '心脏病风险'+ bpheartattack + '中风风险'+ bpstroke + '心血管风险'+ bpcvd + '心脏压力' + bppp + '血管功能'+ bptau + '情绪综合分(分值越低情绪越差，100分制)'+ report.emotionscorereport + '进取性' + aggressivityreport + '焦虑度'+ anxietyreport + '活力度'+ vitalityreport + '抑郁度'+ suppressionreport + '疲劳度'+ fatiguereport + '压力度'+ msireport + ')'
			
		console.log('reportText:88',reportText)	
			
		  const messagetext = '你是一位专业且敏锐的睡眠健康顾问，凭借深厚的专业知识与精准的分析能力，深度、全面地综合分析已有健康检测结论('+ reportText +')和匹兹堡睡眠质量问卷结论('+ this.conclusion +')。其中睡商评分着重依据匹兹堡睡眠质量问卷结论，健康检测辅助评分。给出简洁直观、类似 MBTI 性格的小标题。'
		  
			console.log('messagetext:88',messagetext)	
			
		  getdeepseekchat({
			  message:messagetext
		  }).then(res => {
			console.log("res.999",res)
			console.log("res.this.conclusionid",this.conclusionid)
			this.conclusionText = res
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
		// uni.navigateTo({
		// 	url: '/pages/invite_poster/invite_poster?numtolt=' + this.numb
		// })
		uni.navigateTo({
			url: '/pages/invite_poster/invite_poster?numtolt=' + this.numb + "&shuishan=" + this.numtolt
		})
      // uni.showToast({
      //   title: '分享功能开发中',
      //   icon: 'none'
      // })
    },
    handleRetest() {
		uni.switchTab({
			url: '/pages/health/health'
		})
      // uni.showToast({
      //   title: '再测一次功能开发中',
      //   icon: 'none'
      // })
    },
	jumpHandler(ids) {
		const inviteCode = uni.getStorageSync('invite_code')
		// 判断是否在微信环境中
		if (window.wx) {
			// 使用微信JSSDK的launchMiniProgram方法
			window.wx.launchMiniProgram({
				appId: 'wx041bde7c633d4ec0', // 要打开的小程序 appId
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
      // uni.showModal({
      //   title: '完整报告',
      //   content: this.conclusionText,
      //   showCancel: false,
      //   confirmText: '关闭',
      //   success: function(res) {
      //     if (res.confirm) {
      //       // 添加自定义样式
      //       setTimeout(() => {
      //         const modal = document.querySelector('.uni-modal__bd');
      //         if (modal) {
      //           modal.style.textAlign = 'left';
      //           modal.style.color = '#333';
      //         }
      //       }, 100);
      //     }
      //   }
      // })
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
::v-deep(.uni-modal__bd) {
  // text-align: left !important;
  // color: #333 !important;
}

.conclusion-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px; /* 给底部按钮留空间 */
}
.score-section {
  text-align: center;
  padding: 30px 0 20px 0;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}
.score-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 20px 0 10px 0;
}
.score {
  font-size: 48px;
  color: #153b70;
  font-weight: bold;
}
.score-unit {
  font-size: 16px;
  color: #333;
  margin-left: 4px;
}
.btn-row {
  display: flex;
  justify-content: center;
  /* gap: 16px; */
  margin-top: 10px;
}
.main-btn {
  /* flex: 1; */
  background: #3575f6;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  padding: 12px 24px;
  margin: 0 4px;
  font-weight: bold;
}
.conclusion-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  position: relative;
}
.section-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
  display: block;
}
.conclusion-text {
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

.more-btn {
  text-align: center;
  color: #3575f6;
  font-size: 14px;
  margin-top: 10px;
  padding: 5px 0;
  cursor: pointer;
}

/* 自定义滚动条样式 */
.conclusion-text::-webkit-scrollbar {
  width: 4px;
}

.conclusion-text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.conclusion-text::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.conclusion-text::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.conclusion-img img{
	
}
.products-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
}
.product-list {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}
.product-item {
  position: relative;
  width: calc(50% - 20px);
  margin: 10px;
  background: #fff;
  border-radius: 8px;
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.product-image {
  width: 100%;
  height: 120px;
  border-radius: 8px 8px 0 0;
}
.product-info {
  padding: 12px;
}
.product-name {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
}
.product-desc {
  font-size: 12px;
  color: #666;
  display: block;
  line-height: 1.4;
}
.footer-btn-wrapper {
  // position: fixed;
  // left: 0;
  // right: 0;
  // /* bottom: 0; */
  // bottom: 10px;
  // background: transparent;
  // z-index: 100;
  // display: flex;
  // justify-content: center;
  // pointer-events: none;
}
.footer-btn {
  width: 70%;
  margin: 0 auto 20px auto;
  background: #153b70;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  /* box-shadow: 0 4px 16px rgba(255,77,79,0.12); */
  pointer-events: auto;
  margin-top: 5px;
}
.loading-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
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

.wx-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #153b70;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;
  
}
	.bottom-part {
		position: fixed;
		bottom: 10px;
		height: 135rpx;
		margin-left: -20px;
		// background-color: white;
		// box-shadow: 0rpx 0rpx 18rpx 18rpx rgba(0, 0, 0, 0.1);
		width: 100%;
		align-items: center;
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