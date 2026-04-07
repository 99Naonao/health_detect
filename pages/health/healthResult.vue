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

		<!-- 报告页常驻入口：固定在视口右侧，不随报告滚动消失 -->
		<view
			v-if="showFloatingRecommendEntry"
			class="recommend-float-entry"
			@click="openRecommendModalManual"
		>
			<text class="recommend-float-text">为你推荐</text>
		</view>
		<!-- 情绪推荐弹窗（最多展示2个商品） -->
		<view class="recommend-modal" v-if="showRecommendModal" @click="closeRecommendModal">
			<view class="recommend-content" @click.stop>
				<view class="recommend-title">为你推荐</view>
				<view class="recommend-talk" v-if="recommendTalkText">{{ recommendTalkText }}</view>
				<view class="recommend-metrics" v-if="recommendMetricCards.length">
					<view class="metric-card" v-for="(m, i) in recommendMetricCards" :key="m.key + i">
						<text class="metric-key">{{ m.key }}</text>
						<text class="metric-val">{{ m.value }}</text>
						<text class="metric-tag" :class="m.trend === '偏低' ? 'is-low' : 'is-high'">{{ m.trend }}</text>
					</view>
				</view>
				<view class="recommend-list">
					<view class="recommend-item" v-for="(g, idx) in recommendGoods" :key="g.id || idx">
						<view class="recommend-card">
							<image class="recommend-img" :src="g.image" mode="aspectFill"></image>
							<view class="recommend-name-wrap">
								<text class="recommend-name">{{ g.description }}</text>
							</view>
							<view class="recommend-card-actions">
								<template v-if="isWechat && !isMiniProgramWebview">
									<wx-open-launch-weapp
										:id="'launch-reco-btn-' + idx"
										class="recommend-launch-block"
										appid="wx041bde7c633d4ec0"
										username="gh_e2eb98762ddf"
										:path="buildGoodsPath(g)"
									>
										<component :is="'script'" type="text/wxtag-template">
											<style>
												.reco-btn {
													height: 56rpx;
													line-height: 56rpx;
													text-align: center;
													border-radius: 999rpx;
													background: linear-gradient(90deg, #ff9f4a, #ff6a3a);
													color: #fff;
													font-size: 26rpx;
													font-weight: 500;
												}
											</style>
											<view class="reco-btn">去看看</view>
										</component>
									</wx-open-launch-weapp>
								</template>
								<view
									v-else
									class="reco-btn-normal"
									@click="goToGoods(g)"
								>
									去看看
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="recommend-actions">
					<view class="recommend-close" @click="closeRecommendModal">关闭</view>
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
	import {
		lastReport,
		addReport,
		getJsonResult,
		getresultLists,
		getAllGoodlists
	} from '@/utils/h5app.js'
	import { isWechatMiniProgramWebview, isInMiniProgramWebView, goToMall as goToMallFn, MALL_GUIDE_PREPARE_EVENT } from '@/utils/launchMall.js'
	import { buildDualReportRecommendSelection, pickFirstAvailableGoodsExcluding } from '@/utils/recommendReportPick.js'

	const RECOMMEND_TALKS = [
		'我们留意到你近期状态有点疲惫，活力也稍显不足啦，是不是最近太累啦？',
		'发现你的身体在悄悄喊“休息”啦！别硬扛哦～',
		'注意到你最近精神有点不振，整个人也没什么劲头，是不是熬夜太多啦？',
		'察觉到你最近可能没休息好？整个人略显疲惫，要多爱自己一点呀',
		'我们观察到你的身体有点“累”，活力也差了些，快给自己放个小假吧！',
		'捕捉到你最近状态有点 down，别让疲惫影响你的好心情',
		'看出你最近压力可能有点大？整个人略显乏力，记得劳逸结合呀',
		'留意到你最近精神头不太足，快停下脚步歇一歇',
		'我们发现你最近是不是没睡好？整个人有点疲惫，要注意休息哦',
		'察觉到你的xxxxx最近状态有点欠佳，别忽略身体的小信号呀'
	]

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
				showPupoBtn:false,

				// 情绪推荐弹窗（最多2个商品）
				showRecommendModal: false,
				hasShownRecommend: false,
				recommendGoods: [],
				recommendTalkText: '',
				recommendMetricCards: [],
				isWechat: false,
				isMiniProgramWebview: false,
				/** Tab 切换后短时间内忽略滚动触发推荐，避免误弹窗 */
				recommendScrollIgnoreUntil: 0
			}
		},
		computed: {
			showFloatingRecommendEntry() {
				return (
					this.showInfo &&
					!this.showRecommendModal &&
					Array.isArray(this.recommendGoods) &&
					this.recommendGoods.length > 0
				)
			}
		},
		onShow() {
			uni.showLoading({
				title: '请求中'
			})
			this.resultLists()

		},
		mounted() {
			// #ifdef H5
			if (typeof window !== 'undefined') {
				this._mallGuidePrepareHandler = () => {
					this.closeRecommendModal()
				}
				window.addEventListener(MALL_GUIDE_PREPARE_EVENT, this._mallGuidePrepareHandler)
				this.isWechat = !!window.__IS_WECHAT__
				this.isMiniProgramWebview = !!window.__IS_MINIPROGRAM_WEBVIEW__
			}
			// #endif
		},
		onUnload() {
			// #ifdef H5
			if (typeof window !== 'undefined' && this._mallGuidePrepareHandler) {
				window.removeEventListener(MALL_GUIDE_PREPARE_EVENT, this._mallGuidePrepareHandler)
				this._mallGuidePrepareHandler = null
			}
			// #endif
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
					this.prepareEmotionRecommend(this.data__)

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
					const el = this.$refs['resultView']
					if (!el) return
					try {
						if (typeof el.scrollTo === 'function') {
							el.scrollTo({ top: 0, left: 0, behavior: 'auto' })
						}
						if ('scrollTop' in el) el.scrollTop = 0
					} catch (err) { /* noop */ }
					this.recommendScrollIgnoreUntil = Date.now() + 450
				})
			},

			closeRecommendModal() {
				this.showRecommendModal = false
			},
			openRecommendIfNeeded() {
				if (this.hasShownRecommend) return
				if (!this.recommendGoods || this.recommendGoods.length === 0) return
				this.hasShownRecommend = true
				this.showRecommendModal = true
			},
			openRecommendModalManual() {
				if (!this.recommendGoods || this.recommendGoods.length === 0) return
				this.showRecommendModal = true
			},
			buildGoodsPath(goods) {
				const inviteCode = uni.getStorageSync('invite_code') || ''
				const id = goods && goods.id != null ? String(goods.id) : ''
				return `/pages/goods_detail/goods_detail?scene=invite_code%3D${encodeURIComponent(inviteCode)}%26id%3D${encodeURIComponent(id)}`
			},
			goToGoods(goods) {
				if (!goods || goods.id == null) return
				goToMallFn({
					inviteCode: uni.getStorageSync('invite_code') || '',
					goodsId: goods.id
				})
			},
			async prepareEmotionRecommend(report) {
				try {
					this.recommendTalkText = ''
					this.recommendMetricCards = []
					this.recommendGoods = []
					if (!report) return

					const selection = buildDualReportRecommendSelection(report, {
						minWorsePhys: 0,
						minWorseEmotion: 60
					})
					if (!selection.displayMetrics.length) return

					const goodsData = await getAllGoodlists({})
					const goodsList = (goodsData && goodsData.lists) ? goodsData.lists : []
					if (!Array.isArray(goodsList) || goodsList.length === 0) return

					const pickedGoods = []
					const pickedIds = new Set()
					for (let i = 0; i < selection.productHints.length; i++) {
						if (pickedGoods.length >= 2) break
						const h = selection.productHints[i]
						const ids = h.candidateProductIds || []
						if (!ids.length) continue
						const { productId, goods: g } = pickFirstAvailableGoodsExcluding(ids, goodsList, pickedIds)
						if (productId == null || !g) continue
						pickedIds.add(String(productId))
						pickedGoods.push({
							...g,
							image: g.image || g.img || g.cover || '',
							description: String(g.description != null ? g.description : '').trim()
						})
					}
					this.recommendGoods = pickedGoods
					this.recommendMetricCards = selection.displayMetrics

					const topLabel = selection.displayMetrics.map(m => m.key).join('、') || '状态'
					const idx = Math.floor(Math.random() * RECOMMEND_TALKS.length)
					this.recommendTalkText = (RECOMMEND_TALKS[idx] || '').replace(/xxxxx/g, topLabel)
				} catch (e) {
					console.error('[healthResult.vue] prepareEmotionRecommend error', e)
				}
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
				this.prepareEmotionRecommend(this.data__)

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
				const target = e && (e.target || e.currentTarget)
				if (target) {
					const st = target.scrollTop || 0
					const ch = target.clientHeight || 0
					const sh = target.scrollHeight || 0
					if (st + ch >= sh - 10) {
						this.showFloatBtn = true
					} else {
						this.showFloatBtn = false
					}
				}
				// 情绪报告触底自动推荐（与 func 页一致）
				if (this.current !== 1) return
				if (this.hasShownRecommend) return
				if (Date.now() < this.recommendScrollIgnoreUntil) return
				if (!target) return
				const scrollTop = target.scrollTop || 0
				const clientHeight = target.clientHeight || 0
				const scrollHeight = target.scrollHeight || 0
				if (scrollHeight <= clientHeight + 2) return
				if (scrollTop + clientHeight + 20 >= scrollHeight) {
					this.openRecommendIfNeeded()
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

<style lang="scss" scoped>
	/* 商品推荐：与 func.vue 保持一致 */
	.container {
		.recommend-float-entry {
			position: fixed;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1500;
			width: 56rpx;
			padding: 28rpx 10rpx;
			padding-right: calc(10rpx + env(safe-area-inset-right));
			background: linear-gradient(180deg, #ff9f4a 0%, #ff6a3a 100%);
			border-radius: 20rpx 0 0 20rpx;
			box-shadow: -6rpx 6rpx 20rpx rgba(26, 42, 92, 0.18);
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.recommend-float-text {
			font-size: 22rpx;
			line-height: 1.35;
			color: #fff;
			font-weight: 600;
			writing-mode: vertical-rl;
			letter-spacing: 0.12em;
			text-orientation: upright;
		}

		.recommend-modal {
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.55);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2000;
			padding: 24rpx;
		}

		.recommend-content {
			width: 92%;
			max-width: 640rpx;
			max-height: 85vh;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
			background: #fff;
			border-radius: 18rpx;
			padding: 28rpx 24rpx 20rpx 24rpx;
			box-shadow: 0 10rpx 40rpx rgba(0, 0, 0, 0.18);
		}

		.recommend-title {
			text-align: center;
			font-weight: 700;
			font-size: 34rpx;
			color: #1a2a5c;
			margin-bottom: 10rpx;
		}

		.recommend-talk {
			font-size: 26rpx;
			line-height: 1.6;
			color: #2c3e67;
			background: #f4f7ff;
			border-radius: 12rpx;
			padding: 16rpx;
			margin-bottom: 14rpx;
		}

		.recommend-metrics {
			display: flex;
			gap: 12rpx;
			margin-bottom: 14rpx;
		}

		.metric-card {
			flex: 1;
			min-width: 0;
			border: 1px solid #e7ecf8;
			background: #fbfcff;
			border-radius: 12rpx;
			padding: 12rpx;
			display: flex;
			align-items: center;
			gap: 8rpx;
		}

		.metric-key {
			font-size: 22rpx;
			color: #52607a;
		}

		.metric-val {
			font-size: 28rpx;
			font-weight: 600;
			color: #1a2a5c;
		}

		.metric-tag {
			margin-left: auto;
			font-size: 20rpx;
			padding: 2rpx 10rpx;
			border-radius: 999rpx;
			color: #fff;
			background: #ff8a5a;
		}

		.metric-tag.is-low {
			background: #4f7cff;
		}

		.recommend-list {
			display: flex;
			gap: 18rpx;
			justify-content: center;
			align-items: stretch;
		}

		.recommend-item {
			flex: 1;
			min-width: 0;
		}

		.recommend-card {
			border: 1px solid rgba(26, 42, 92, 0.12);
			border-radius: 14rpx;
			overflow: hidden;
			background: #fff;
			box-shadow: 0 8rpx 18rpx rgba(0, 0, 0, 0.08);
			position: relative;
			display: flex;
			flex-direction: column;
			height: 100%;
			min-height: 0;
		}

		.recommend-img {
			width: 100%;
			height: 240rpx;
			flex-shrink: 0;
			display: block;
			background: #f5f6f7;
		}

		.recommend-name-wrap {
			flex: 1 1 auto;
			min-height: 72rpx;
			max-height: 280rpx;
			padding: 14rpx 12rpx 8rpx;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
		}

		.recommend-name {
			display: block;
			font-size: 24rpx;
			color: #333;
			line-height: 1.45;
			word-break: break-word;
			overflow-wrap: break-word;
		}

		.recommend-card-actions {
			flex-shrink: 0;
			margin-top: auto;
		}

		.recommend-launch-block {
			display: block;
			margin: 10rpx 12rpx 14rpx;
		}

		.reco-btn-normal {
			margin: 10rpx 12rpx 14rpx;
			height: 56rpx;
			line-height: 56rpx;
			text-align: center;
			border-radius: 999rpx;
			background: linear-gradient(90deg, #ff9f4a, #ff6a3a);
			color: #fff;
			font-size: 26rpx;
			font-weight: 500;
		}

		.recommend-actions {
			margin-top: 18rpx;
			display: flex;
			justify-content: center;
		}

		.recommend-close {
			padding: 14rpx 40rpx;
			background: #1a2a5c;
			color: #fff;
			border-radius: 999rpx;
			font-size: 28rpx;
		}
	}
</style>