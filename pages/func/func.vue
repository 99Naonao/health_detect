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

					<!-- 微信内置浏览器：使用开放标签；小程序 WebView：使用普通 view 按钮 -->
					<template v-if="showLaunchTag">
						<wx-open-launch-weapp id="launch-btn"
							style="width: 685rpx;height: 70rpx;position: relative;left: 50%;margin-left: -343rpx;margin-top: 30rpx;"
							appid="wx041bde7c633d4ec0" username='gh_e511f8f79ddd'>
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
									<text class="txt" style="line-height: 60rpx;">眠加商城</text>
								</view>
							</component>
						</wx-open-launch-weapp>
					</template>
					<view v-else class="jump-btn" @click="goToMall">
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
										box-shadow: 0rpx 0rpx 35rpx 35rpx rgba(0, 0, 0, 0.1);">
							<image style="width: 68rpx;
											height: 68rpx;
											margin-right: 10rpx;
											margin-top: -5rpx;" src="https://sleep.zsyl.cc/sleeph5/assets/JK_08_butSCIcon-BFn7SZmL.png" mode="widthFix" />
							<text class="txt" style="line-height: 60rpx;">眠加商城</text>
						</view>
					</view>

				</div>
			</div>
			<!-- 报告页常驻入口：固定在视口右侧，不随报告滚动消失；可随时再次打开推荐 -->
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
								<!-- 每个商品底部单独的“去看看”按钮 -->
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
		getuserScaleLists,
		getAllGoodlists
	} from '@/utils/h5app.js'
import { isWechatMiniProgramWebview, isInMiniProgramWebView, goToMall as goToMallFn, MALL_GUIDE_PREPARE_EVENT } from '@/utils/launchMall.js'
import { buildDualReportRecommendSelection, pickFirstAvailableGoodsExcluding } from '@/utils/recommendReportPick.js'
	import tabbar from '@/components/tabbar/tabbar.vue'

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
			tabbar,
			physicalResult,
			happyResult,
			progressBar,
			moreDesc,
			shuishangResult
		},
		mounted() {
			// H5 下：微信内置浏览器使用开放标签；小程序 WebView 使用普通 view 跳转
			// #ifdef H5
			this.showLaunchTag = !(isWechatMiniProgramWebview() || isInMiniProgramWebView())
			if (typeof window !== 'undefined') {
				this._mallGuidePrepareHandler = () => {
					this.closeRecommendModal()
				}
				window.addEventListener(MALL_GUIDE_PREPARE_EVENT, this._mallGuidePrepareHandler)
			}
			// #endif
			// 读取全局环境标记（main.js 已初始化）
			if (typeof window !== 'undefined') {
				this.isWechat = !!window.__IS_WECHAT__
				this.isMiniProgramWebview = !!window.__IS_MINIPROGRAM_WEBVIEW__
			}
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
				showPupoBtn:false,
				showLaunchTag: true,

				// 情绪推荐弹窗（最多2个商品；仅通过右侧「为你推荐」打开）
				showRecommendModal: false,
				recommendGoods: [],
				recommendTalkText: '',
				recommendMetricCards: [],
				isWechat: false,
				isMiniProgramWebview: false
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
		onLoad() {
			uni.hideTabBar()
		},
		onUnload() {
			// #ifdef H5
			if (typeof window !== 'undefined' && this._mallGuidePrepareHandler) {
				window.removeEventListener(MALL_GUIDE_PREPARE_EVENT, this._mallGuidePrepareHandler)
				this._mallGuidePrepareHandler = null
			}
			// #endif
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
					this.prepareEmotionRecommend(this.data__)
					
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
			goToMall() {
				goToMallFn()
			},
			swipeTab(index) {
				this.current = index
				if(index == 2 && this.conclusion_id == 0){
					this.showPupoBtn = true
				}
				// 切换报告后立即置顶，避免沿用上一 Tab 的滚动位置
				this.$nextTick(() => {
					const el = this.$refs['resultView']
					if (!el) return
					try {
						if (typeof el.scrollTo === 'function') {
							el.scrollTo({ top: 0, left: 0, behavior: 'auto' })
						}
						if ('scrollTop' in el) el.scrollTop = 0
					} catch (err) { /* noop */ }
				})
			},
			closeRecommendModal() {
				this.showRecommendModal = false
			},
			/** 点击右侧「为你推荐」打开 */
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
							// 僅展示後端 description；勿用 describe_text 兜底（數據為空時由後台補全）
							description: String(g.description != null ? g.description : '').trim()
						})
					}
					this.recommendGoods = pickedGoods
					this.recommendMetricCards = selection.displayMetrics

					const topLabel = selection.displayMetrics.map(m => m.key).join('、') || '状态'
					const idx = Math.floor(Math.random() * RECOMMEND_TALKS.length)
					this.recommendTalkText = (RECOMMEND_TALKS[idx] || '').replace(/xxxxx/g, topLabel)
				} catch (e) {
					console.error('[func.vue] prepareEmotionRecommend error', e)
				}
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

		/* 低于推荐蒙层 2000，高于底部 tabbar 99 */
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

			.result-item {
				display: block;
			}

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

		.recommend-launch-overlay {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
		}

		.recommend-img {
			width: 100%;
			height: 240rpx;
			flex-shrink: 0;
			display: block;
			background: #f5f6f7;
		}

		/* 描述区：占满两卡对齐后的剩余高度，过长时在区域内滚动，避免被裁切或盖住按钮 */
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