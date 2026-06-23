<template>
	<view class="page">
		<view class="header-card">
			<view class="header-left">
				<view class="title-cn">匹兹堡质量调查问卷</view>
				<view class="title-en">Pittsburgh Sleep Quality Index (PSQI)</view>
				<!-- <view class="result-title">您的测试结果</view> -->
				<!-- <view class="sub-line">测试日期：{{ resultInfo.date }}</view> -->
				<view class="sub-line">问卷版本：{{ resultInfo.version }}</view>
			</view>
		</view>

		<view class="card score-card">
			<view class="score-left">
				<view class="score-label">总分</view>
				<view class="score-value">{{ totalScore }}</view>
				<view class="score-tag">{{ scoreDesc }}</view>
			</view>
			<view class="score-right">
				<view class="score-tip">
					总分范围 0-21 分，分数越高表示睡眠质量越差。
				</view>
				<view class="legend-list">
					<view class="legend-item">
						<text class="dot dot-green"></text>
						<text>0-5 分</text>
						<text class="legend-right">睡眠很好</text>
					</view>
					<view class="legend-item">
						<text class="dot dot-yellow"></text>
						<text>6-10 分</text>
						<text class="legend-right">睡眠较好</text>
					</view>
					<view class="legend-item">
						<text class="dot dot-red"></text>
						<text>11-15 分</text>
						<text class="legend-right">睡眠一般</text>
					</view>
					<view class="legend-item">
						<text class="dot dot-red"></text>
						<text>16-21 分</text>
						<text class="legend-right">睡眠较差</text>
					</view>
				</view>
			</view>
		</view>

		<view class="section-title">各组成部分得分</view>
		<view class="card part-card">
			<view class="part-content">
				<view class="chart-mock">
					<svg class="radar-svg" :viewBox="`0 0 ${radarSize} ${radarSize}`">
						<polygon
							v-for="(ring, idx) in ringPolygons"
							:key="`ring-${idx}`"
							:points="ring"
							class="ring-polygon"
						/>
						<line
							v-for="(line, idx) in axisLines"
							:key="`axis-${idx}`"
							:x1="line.x1"
							:y1="line.y1"
							:x2="line.x2"
							:y2="line.y2"
							class="axis-line"
						/>
						<polygon :points="valuePolygon" class="value-polygon" />
						<circle
							v-for="(point, idx) in valuePoints"
							:key="`point-${idx}`"
							:cx="point.x"
							:cy="point.y"
							r="3"
							class="value-point"
						/>
					</svg>
					<view
						v-for="(label, idx) in radarLabels"
						:key="`label-${idx}`"
						class="radar-label"
						:style="{
							left: `${label.left}%`,
							top: `${label.top}%`,
							transform: label.transform
						}"
					>
						{{ label.text }}
					</view>
				</view>
				<view class="part-list">
					<view class="part-item" v-for="item in partScores" :key="item.name">
						<text class="part-name">{{ item.name }}</text>
						<text class="part-score">{{ item.score }}</text>
					</view>
				</view>
			</view>
			<view class="part-note">注：雷达图按 0-{{ radarScaleMax }} 动态刻度显示，分数越高表示该方面问题越严重。</view>
		</view>

		<view class="section-title">结果解读与推荐</view>
		<view class="result-tabs">
			<view
				class="result-tab-item"
				:class="{ active: activeResultTab === 'ai' }"
				@click="activeResultTab = 'ai'"
			>
				<text class="tab-icon">🤖</text>AI解读
			</view>
			<view
				class="result-tab-item"
				:class="{ active: activeResultTab === 'goods' }"
				@click="activeResultTab = 'goods'"
			>
				<text class="tab-icon">🛍️</text>商品推荐
			</view>
		</view>

		<view v-if="activeResultTab === 'ai'" class="card suggest-card">
			<view class="suggest-main">
				<view class="suggest-title">{{ suggestionTitle }}</view>
				<view v-if="isAiLoading" class="ai-loading">
					<view class="ai-loading-icon"></view>
					<text class="ai-loading-text">AI报告生成中...</text>
				</view>
				<view v-else class="suggest-text" v-html="suggestionText"></view>
			</view>
		</view>

		<view v-else class="products-section">
			<view v-if="isProductsLoading" class="products-loading">商品加载中...</view>
			<view v-else-if="recommendedProducts.length === 0" class="products-empty">暂无推荐商品</view>
			<view class="product-list">
				<view class="product-item" v-for="(item, index) in recommendedProducts" :key="index">
					<template v-if="isWechat && !isMiniProgramWebview">
						<wx-open-launch-weapp
							:id="'launch-reco-img-' + index"
							class="conclusion-img"
							appid="wx041bde7c633d4ec0"
							username="gh_e2eb98762ddf"
							:path="'/pages/goods_detail/goods_detail?scene=invite_code%3D'+ getInviteCode() +'%26id%3D' + item.id"
						>
							<component :is="'script'" type="text/wxtag-template">
								<img style="width: 290rpx;height: 300rpx;margin-right: 10rpx;" :src="item.image" />
							</component>
						</wx-open-launch-weapp>
						<wx-open-launch-weapp
							:id="'launch-reco-text-' + index"
							class="conclusion-textTT"
							style="width: 150px;height: 90px;"
							appid="wx041bde7c633d4ec0"
							username="gh_e2eb98762ddf"
							:path="'/pages/goods_detail/goods_detail?scene=invite_code%3D'+ getInviteCode() +'%26id%3D' + item.id"
						>
							<component :is="'script'" type="text/wxtag-template">
								<view class="product-info">
									<text class="product-name" style="font-size: 12px;">{{ item.name }}</text>
								</view>
							</component>
						</wx-open-launch-weapp>
					</template>
					<template v-else>
						<view class="conclusion-img" @click="goToMallProduct(item)">
							<image :src="item.image" style="width: 290rpx;height: 300rpx;margin-right: 10rpx;" mode="widthFix" />
						</view>
						<view class="conclusion-textTT" style="width: 150px;height: 90px;" @click="goToMallProduct(item)">
							<view class="product-info">
								<text class="product-name" style="font-size: 12px;">{{ item.name }}</text>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>

		<view class="notice">本问卷结果仅供参考，不能替代专业医学诊断。</view>

		<!-- <view class="download-btn" @click="downloadReport">下载结果报告</view> -->
	</view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

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
	getuserScaleLists,
	getReportDetail
} from '../../utils/h5app.js'
import { isWechatMiniProgramWebview, isInMiniProgramWebView, goToMall as goToMallFn } from '@/utils/launchMall.js'

const resultInfo = ref({
	date: '2024-05-20',
	version: '匹兹堡质量调查问卷（PSQI）'
})

const partScores = ref([
	{ name: '主观睡眠质量', score: 1 },
	{ name: '入睡时间', score: 2},
	{ name: '睡眠时间', score: 1 },
	{ name: '睡眠效率', score: 1 },
	{ name: '睡眠障碍', score: 2 },
	{ name: '催眠药物', score: 0 },
	{ name: '日间功能障碍', score: 1 }
])
const aiSuggestionText = ref('')
const isAiLoading = ref(true)
const recommendedProducts = ref([])
const isProductsLoading = ref(true)
const isWechat = ref(false)
const isMiniProgramWebview = ref(false)
const activeResultTab = ref('ai')

const totalScore = computed(() => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	return list.reduce((sum, item) => sum + (Number(item?.score) || 0), 0)
})

const scoreDesc = computed(() => {
	if (totalScore.value <= 5) return '睡眠很好'
	if (totalScore.value <= 10) return '睡眠较好'
	if (totalScore.value <= 15) return '睡眠一般'
	return '睡眠较差'
})

const suggestionTitle = computed(() => {
	if (totalScore.value <= 5) return '您的睡眠质量很好'
	if (totalScore.value <= 10) return '您的睡眠质量较好'
	if (totalScore.value <= 15) return '您的睡眠质量一般'
	return '您的睡眠质量较差'
})

const suggestionText = computed(() => {
	if (aiSuggestionText.value) return aiSuggestionText.value
	if (totalScore.value <= 5) {
		return '您的 PSQI 总分处于较低水平，说明当前睡眠状况良好。建议继续保持规律作息和健康的睡眠习惯。'
	}
	if (totalScore.value <= 10) {
		return '您的 PSQI 总分提示整体睡眠情况较好，但仍可关注作息规律、入睡环境和压力管理，进一步提升睡眠质量。'
	}
	if (totalScore.value <= 15) {
		return '您的 PSQI 总分提示已出现一定程度的睡眠困扰，建议关注入睡时长、夜间觉醒和白天精神状态，及时进行调整。'
	}
	return '您的 PSQI 总分较高，提示存在较明显的睡眠问题，建议尽快调整作息并在必要时寻求专业帮助。'
})

const radarBaseMax = 3
const radarSize = 280
const radarCenter = radarSize / 2
const radarRadius = 120
const radarLevels = 4

const radarScaleMax = computed(() => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	const maxScore = Math.max(...list.map((item) => Number(item?.score) || 0), radarBaseMax)
	if (maxScore <= radarBaseMax) return radarBaseMax
	if (maxScore <= 10) return 10
	if (maxScore <= 20) return 20
	return Math.ceil(maxScore / 10) * 10
})

const getPoint = (index, ratio = 1) => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	const count = list.length || 1
	const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / count
	return {
		x: radarCenter + Math.cos(angle) * radarRadius * ratio,
		y: radarCenter + Math.sin(angle) * radarRadius * ratio
	}
}

const buildPolygonPoints = (ratio) => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	return list
		.map((_, index) => {
			const point = getPoint(index, ratio)
			return `${point.x},${point.y}`
		})
		.join(' ')
}

const ringPolygons = computed(() => {
	const rings = []
	for (let level = 1; level <= radarLevels; level += 1) {
		rings.push(buildPolygonPoints(level / radarLevels))
	}
	return rings
})

const axisLines = computed(() => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	return list.map((_, index) => {
		const point = getPoint(index, 1)
		return {
			x1: radarCenter,
			y1: radarCenter,
			x2: point.x,
			y2: point.y
		}
	})
})

const valuePoints = computed(() => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	return list.map((item, index) => {
		const score = Number(item.score) || 0
		const ratio = Math.max(0, Math.min(score / radarScaleMax.value, 1))
		return getPoint(index, ratio)
	})
})

const valuePolygon = computed(() => {
	return valuePoints.value.map((point) => `${point.x},${point.y}`).join(' ')
})

const radarLabels = computed(() => {
	const list = Array.isArray(partScores.value) ? partScores.value : []
	return list.map((item, index) => {
		const basePoint = getPoint(index, 1.12)
		const dx = basePoint.x - radarCenter
		const dy = basePoint.y - radarCenter
		let transform = 'translate(-50%, -50%)'

		if (Math.abs(dx) > 10 && Math.abs(dy) <= 12) {
			transform = dx > 0 ? 'translate(0, -50%)' : 'translate(-100%, -50%)'
		} else if (dy < 0) {
			transform = 'translate(-50%, -100%)'
		}

		return {
			text: item.name,
			left: (basePoint.x / radarSize) * 100,
			top: (basePoint.y / radarSize) * 100,
			transform
		}
	})
})

const downloadReport = () => {
	uni.showToast({
		title: '下载功能开发中',
		icon: 'none'
	})
}

const getInviteCode = () => {
	return uni.getStorageSync('invite_code') || ''
}

const goToMallProduct = (item) => {
	if (!item?.id) return
	goToMallFn({
		inviteCode: getInviteCode(),
		goodsId: item.id
	})
}

const ReportDetail = (number)=>{
	isAiLoading.value = true
	isProductsLoading.value = true
	getReportDetail({
		report_id:number
	}).then(res => {
		console.log("res.999",res)
		
		resultInfo.value = {
			// date: storedData.date || resultInfo.value.date,
			version: '匹兹堡质量调查问卷（PSQI）'
		}
		
		partScores.value = Array.isArray(res?.detail.part_scores) ? res.detail.part_scores : [],
		
		getDetectionsection({
			report_id:res.detail.id
		}).then(res => {
			recommendedProducts.value = Array.isArray(res?.goods_lists) ? res.goods_lists : []
			isProductsLoading.value = false
		}).catch(() => {
			recommendedProducts.value = []
			isProductsLoading.value = false
		})
		
		
		const messagetext = '你是一位专业且敏锐的睡眠健康顾问，凭借深厚的专业知识与精准的分析能力，根据匹兹堡睡眠质量问卷最终分数('+ res.detail.score +')给出对应结论'
		getdeepseekchat({
			  message:messagetext
		  }).then(res => {
			
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
			aiSuggestionText.value = cleanText;
			isAiLoading.value = false
		}).catch(() => {
			isAiLoading.value = false
		})
		
	
		
		
	}).catch(() => {
		isAiLoading.value = false
		isProductsLoading.value = false
	})
}

onLoad((options) => {
	isWechat.value = typeof window !== 'undefined' ? !!window.__IS_WECHAT__ : false
	isMiniProgramWebview.value = typeof window !== 'undefined' ? !!window.__IS_MINIPROGRAM_WEBVIEW__ : false
	const report_id = options?.reportid || ''
	ReportDetail(report_id)
})

// onLoad(() => {
// 	const storedData = uni.getStorageSync('surveyResultData')
// 	if (!storedData) return

// 	if (storedData.date || storedData.version) {
// 		resultInfo.value = {
// 			date: storedData.date || resultInfo.value.date,
// 			version: storedData.version || resultInfo.value.version
// 		}
// 	}

// 	if (Array.isArray(storedData.partScores) && storedData.partScores.length) {
// 		partScores.value = storedData.partScores
// 	}
// })
</script>

<style scoped lang="scss">
.page {
	min-height: 100vh;
	padding: 26rpx;
	background: #f4f7ff;
}

.header-card {
	// height: 240rpx;
	height: 180rpx;
	border-radius: 24rpx;
	padding: 28rpx 30rpx;
	background: linear-gradient(90deg, #ffffff 15%, #deebff 70%, #c8dcff 100%);
	margin-bottom: 20rpx;
}

.title-cn {
	font-size: 50rpx;
	line-height: 1.2;
	font-weight: 700;
	color: #153b70;
}

.title-en {
	margin-top: 6rpx;
	font-size: 28rpx;
	color: #5c6f87;
}

.result-title {
	margin-top: 16rpx;
	font-size: 44rpx;
	font-weight: 700;
	color: #2f65bd;
}

.sub-line {
	margin-top: 8rpx;
	font-size: 24rpx;
	color: #4d5f77;
}

.card {
	background: #ffffff;
	border-radius: 18rpx;
	padding: 24rpx;
	box-shadow: 0 8rpx 20rpx rgba(59, 105, 181, 0.08);
}

.score-card {
	display: flex;
	margin-bottom: 20rpx;
}

.score-left {
	width: 34%;
	border-right: 1rpx solid #e9eef8;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.score-label {
	font-size: 30rpx;
	color: #1d2f4e;
}

.score-value {
	margin-top: 8rpx;
	font-size: 96rpx;
	line-height: 1;
	font-weight: 700;
	color: #2a67c9;
}

.score-tag {
	margin-top: 14rpx;
	padding: 10rpx 28rpx;
	border-radius: 24rpx;
	background: #3b86f0;
	color: #fff;
	font-size: 24rpx;
}

.score-right {
	flex: 1;
	padding-left: 24rpx;
}

.score-tip {
	color: #1f2e47;
	font-size: 28rpx;
	line-height: 1.5;
}

.legend-list {
	margin-top: 16rpx;
}

.legend-item {
	display: flex;
	align-items: center;
	font-size: 26rpx;
	color: #243653;
	margin-bottom: 10rpx;
}

.legend-right {
	margin-left: auto;
}

.dot {
	width: 14rpx;
	height: 14rpx;
	border-radius: 50%;
	margin-right: 12rpx;
}

.dot-green { background: #36c87b; }
.dot-yellow { background: #f8be31; }
.dot-red { background: #ff5d5d; }

.section-title {
	margin: 16rpx 4rpx;
	font-size: 36rpx;
	font-weight: 700;
	color: #2a67c9;
}

.result-tabs {
	display: flex;
	background: #ffffff;
	border-radius: 14rpx;
	padding: 8rpx;
	margin-bottom: 16rpx;
}

.result-tab-item {
	flex: 1;
	text-align: center;
	font-size: 28rpx;
	color: #5a6d89;
	line-height: 60rpx;
	border-radius: 10rpx;
}

.tab-icon {
	margin-right: 8rpx;
}

.result-tab-item.active {
	background: #edf3ff;
	color: #2a67c9;
	font-weight: 700;
}

.part-content {
	display: flex;
	align-items: center;
}

.chart-mock {
	position: relative;
	width: 280rpx;
	height: 280rpx;
	margin-right: 24rpx;
	overflow: visible;
}

.radar-svg {
	width: 280rpx;
	height: 280rpx;
}

.ring-polygon {
	fill: none;
	stroke: #d8e1f0;
	stroke-width: 1;
}

.axis-line {
	stroke: #d8e1f0;
	stroke-width: 1;
}

.value-polygon {
	fill: rgba(59, 134, 240, 0.28);
	stroke: #3b86f0;
	stroke-width: 2;
}

.value-point {
	fill: #3b86f0;
}

.radar-label {
	position: absolute;
	font-size: 20rpx;
	line-height: 1.2;
	color: #1f2e47;
	white-space: nowrap;
	pointer-events: none;
}

.part-list {
	flex: 1;
}

.part-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8rpx 0;
	font-size: 28rpx;
	border-bottom: 1rpx solid #edf2fb;
}

.part-item:last-child {
	border-bottom: none;
}

.part-name {
	color: #2a3957;
}

.part-score {
	font-weight: 700;
	color: #2a67c9;
}

.part-note {
	margin-top: 12rpx;
	font-size: 22rpx;
	color: #6d7e96;
}

.suggest-card {
	display: flex;
	align-items: flex-start;
	background: #edf3ff;
	border: 1rpx solid #edf3ff;
}

.suggest-icon {
	width: 60rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	border-radius: 50%;
	background: #ff6b7a;
	color: #fff;
	font-size: 32rpx;
	margin-right: 16rpx;
}

.suggest-title {
	font-size: 34rpx;
	font-weight: 700;
	color: #e14558;
	margin-bottom: 8rpx;
}

.suggest-text {
	font-size: 26rpx;
	color: #4c5f79;
	line-height: 1.6;
}

.ai-loading {
	display: flex;
	align-items: center;
	padding: 16rpx 0;
}

.ai-loading-icon {
	width: 34rpx;
	height: 34rpx;
	border-radius: 50%;
	border: 4rpx solid #ffb5bf;
	border-top-color: #e14558;
	animation: spin 0.9s linear infinite;
	margin-right: 14rpx;
}

.ai-loading-text {
	font-size: 26rpx;
	color: #e14558;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.notice {
	margin-top: 20rpx;
	padding: 20rpx 24rpx;
	background: #eaf2ff;
	color: #4f6385;
	font-size: 24rpx;
	border-radius: 12rpx;
}

.download-btn {
	margin-top: 20rpx;
	height: 82rpx;
	line-height: 82rpx;
	text-align: center;
	border-radius: 14rpx;
	font-size: 30rpx;
	font-weight: 600;
	color: #fff;
	background: linear-gradient(180deg, #3d7df1 0%, #245ec7 100%);
}

.products-section {
	  background-color: #ffffff;
	  padding: 20px;
	  border-radius: 12px;
	}
	.products-loading,
	.products-empty {
	  margin-top: 12px;
	  font-size: 14px;
	  color: #7b8ba5;
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
</style>
