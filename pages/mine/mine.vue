<template>
	<view>
		<tabbar current='2'></tabbar>
		<view class="container">
			<view class="info">
				<view class="t_c">
					<view class="user_info">
						<view class="top_info">
							<view class="avatar_bg flex align-center just-align-center">
								<image v-if="hasLogin" class="avatar"
									:src="userInfo.avatar || '/static/default-avatar.png'"></image>
								<image v-else class="avatar"
									:src="userInfo&&userInfo.avatar || '/static/default-avatar.png'"
									@click="clickWxLogin">
								</image>
							</view>
							<view class="usernameInfo">
								<view class="username">
									<!-- <text class="username">{{ userInfo.nickName || '未知用户' }}</text> -->
									<text>{{ '未知用户' }}</text>
									<!-- <image src="../../static/icon/edit.png"></image> -->
								</view>
								<view class="username">

								</view>
							</view>
						</view>
					</view>
					<view class="score_part">
						<view class="score_info">
							<view class="sub_score_info">
								<view><text class="score-tip">我的积分</text>
									<image mode="widthFix" class="icon1" src="../../static/JK_02_IconJF2.png">
									</image>
								</view>
							</view>
							<view class="score_txt">{{userInfo.score}}</view>
						</view>
					</view>
					<view class="">
						<view class="title">
							<image class="icon123" src="/static/icon/JK_05_IconLSJL2.png"></image><text>历史检测记录</text>
						</view>
						<view class="flex just-align-center align-center" style="justify-content: space-around;">
							<view :class="active==0?'item active':'item'" @click="itemChange(0)">
								周
							</view>
							<view :class="active==1?'item active':'item'" @click="itemChange(1)">
								月
							</view>
							<view :class="active==2?'item active':'item'" @click="itemChange(2)">
								年
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="" style="padding-bottom: 160rpx;">
				<serious-echart :xAxis="xAxis" :ticks="source.bmi" :icon="'icon-weight'"
					:title="'体重指数'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.hrbpm" :icon="'icon-heart'"
					:title="'心率'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.hrv" :icon="'icon-heart-change'"
					:title="'心率变异性'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bpsystolic" :icon="'icon-press'"
					:title="'舒张压'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bpdiastolic" :icon="'icon-up'"
					:title="'收缩压'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.spo2hreport" :icon="'icon-ox'"
					:title="'血氧饱和度'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bpheartattack" :icon="'icon-risk'"
					:title="'心脏病风险'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bpstroke" :icon="'icon-zrisk'"
					:title="'中风风险'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bpcvd" :icon="'icon-xxgrisk'"
					:title="'心血管病风险'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bppp" :icon="'icon-xxylrisk'"
					:title="'心脏压力'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.bptau" :icon="'icon-xgrisk'"
					:title="'血管功能'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.aggressivityreport" :icon="'icon-attack'"
					:title="'攻击性'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.anxietyreport" :icon="'icon-jiaolv'"
					:title="'焦虑度'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.vitalityreport" :icon="'icon-huoli'"
					:title="'活力度'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.suppressionreport" :icon="'icon-yiyu'"
					:title="'抑郁度'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.fatiguereport" :icon="'icon-pilao'"
					:title="'疲劳度'"></serious-echart>
				<serious-echart :xAxis="xAxis" :ticks="source.msireport" :icon="'icon-yali'"
					:title="'压力度'"></serious-echart>
			</view>
		</view>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import seriousEchart from '../comp/seriousEchart.vue'
	import {
		getHistoryData
	} from '@/utils/h5app.js'
	import {
		mapActions,
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'

	// #ifdef MP-WEIXIN

	import {
		autoLogin
	} from '@/utils/miniapp.js'
	// #endif
	// #ifdef H5
	import {
		autoLogin
	} from '@/utils/h5app.js'
	// #endif

	export default {
		data() {
			return {
				xAxis: [],
				active: 0,

				temp: {

				},
				source: {

				},
				hasLogin: false,
				measurement: '',
				measurementId: 0,
				score: 0,
			}
		},
		computed: {
			...mapGetters(['measureToken', 'userInfo'])
		},
		components: {
			tabbar,
			seriousEchart
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			// this.$login()
			this.updateData(this.active + 1)
		},
		methods: {
			...mapActions(['$login']),
			measureHandler() {
				uni.navigateTo({
					url: '/pages/mine/history'
				})
			},
			clickWxLogin() {
				// autoLogin((res) => {
				// 	console.log('success')
				// })
			},
			go2Use() {

			},
			itemChange(index) {
				this.active = index;
				uni.showLoading({
					title: '请求中'
				})
				this.updateData(this.active + 1)
			},
			updateData(type) {
				getHistoryData({
					type: type
				}).then(res => {
					uni.hideLoading()
					console.log('12345getHistoryData:', res)
					let item;
					let obj;
					// switch (this.active) {
					// 	case 0:
					// 		this.xAxis = ['周1', '周2', '周3', '周4', '周5', '周6', '周日'];
					// 		break
					// 	case 1:
					// 		break;
					// }
					this.xAxis = []
					this.reset()
					for (var index in res) {
						item = res[index]
						this.xAxis.push(item.localDate)
						if (item.content) {
							obj = JSON.parse(item.content)
							try {
								this.filter(obj)
							} catch (e) {
								//TODO handle the exception
								console.log('eee:', e)
							}
						} else {
							this.allAddZero()
						}
					}
					this.$nextTick(() => {
						// 赋值数据
						this.setData()
					})
				}).catch(e => {

				})
			},
			allAddZero() {
				// 造数据
				this.temp.hrbpm.push(0)
				this.temp.hrv.push(0)
				this.temp.bmi.push(0)
				this.temp.age.push(0)
				this.temp.bpsystolic.push(0)
				this.temp.bpdiastolic.push(0)
				this.temp.spo2hreport.push(0)
				this.temp.bpheartattack.push(0)
				this.temp.bpstroke.push(0)
				this.temp.bpcvd.push(0)
				this.temp.bppp.push(0)
				this.temp.bptau.push(0)
				this.temp.aggressivityreport.push(0)
				this.temp.anxietyreport.push(0)
				this.temp.vitalityreport.push(0)
				this.temp.suppressionreport.push(0)
				this.temp.fatiguereport.push(0)
				this.temp.msireport.push(0)
			},
			setData() {
				Object.assign(this.source, this.temp)
			},
			reset() {
				this.temp = {}
				this.temp.hrbpm = []
				this.temp.hrv = []
				this.temp.bmi = []
				this.temp.age = []
				this.temp.bpsystolic = []
				this.temp.bpdiastolic = []
				this.temp.spo2hreport = []
				this.temp.bpheartattack = []
				this.temp.bpstroke = []
				this.temp.bpcvd = []
				this.temp.bppp = []
				this.temp.bptau = []
				this.temp.aggressivityreport = []
				this.temp.anxietyreport = []
				this.temp.vitalityreport = []
				this.temp.suppressionreport = []
				this.temp.fatiguereport = []
				this.temp.msireport = []
				this.source = {}
				Object.assign(this.source, this.temp)
			},
			filter(result) {
				console.log('filter:', result)
				const {
					physiologyscorereport, // 综合
					afreport,
					bpreport,
					essentialreport,
					healthScoreReport,
					hrreport,
					riskreport,
					emotionscorereport, // 综合
					fatiguereport,
					suppressionreport,
					vitalityreport,
					anxietyreport,
					aggressivityreport,
					msireport,
					spo2hreport,
					calculatedReport
				} = result

				if (hrreport) {
					// 缓存数据
					this.temp.hrbpm.push(hrreport.data.hrbpm ? hrreport.data.hrbpm : 0) // 心率
					this.temp.hrv.push(hrreport.data.hrv ? hrreport.data.hrv : 0) // 心率
				}

				if (essentialreport) {
					this.temp.bmi.push(essentialreport.data.bmi ? essentialreport.data.bmi : 0) // 体重
					this.temp.age.push(essentialreport.data.age ? essentialreport.data.age : 0) // 年龄
				}

				if (bpreport) {
					this.temp.bpdiastolic.push(bpreport.data.bpdiastolic ? bpreport.data.bpdiastolic : 0) // 舒张压
					this.temp.bpsystolic.push(bpreport.data.bpsystolic ? bpreport.data.bpsystolic : 0) // 收缩压
				}

				if (spo2hreport) {
					this.temp.spo2hreport.push(spo2hreport.data ? spo2hreport.data : 0) // 血氧
				}

				if (riskreport) {
					this.temp.bpheartattack.push(riskreport.data.bpheartattack ? riskreport.data.bpheartattack :
						0) // 心脏病风险
					this.temp.bpstroke.push(riskreport.data.bpstroke ? riskreport.data.bpstroke : 0) // 中风风险
					this.temp.bpcvd.push(riskreport.data.bpcvd ? riskreport.data.bpcvd : 0) // 心血管风险
					this.temp.bppp.push(riskreport.data.bppp ? riskreport.data.bppp : 0) // 心血管风险
					this.temp.bptau.push(riskreport.data.bptau ? riskreport.data.bptau : 0) // 心血管风险

				}

				if (aggressivityreport) {
					this.temp.aggressivityreport.push(aggressivityreport.data ? aggressivityreport.data : 0) // 攻击性
				}

				if (anxietyreport) {
					this.temp.anxietyreport.push(anxietyreport.data ? anxietyreport.data : 0)
				}

				if (vitalityreport) {
					this.temp.vitalityreport.push(vitalityreport.data ? vitalityreport.data : 0)
				}

				if (suppressionreport) {
					this.temp.suppressionreport.push(suppressionreport.data ? suppressionreport.data : 0)
				}

				if (fatiguereport) {
					this.temp.fatiguereport.push(fatiguereport.data ? fatiguereport.data : 0)
				}
				if (msireport) {
					this.temp.msireport.push(msireport.data ? msireport.data : 0)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		font-family: "YouYuan";
		color: #333;
		background-color: #f2f2f2;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);

		.title {
			text-align: center;
			padding: 10rpx;
			font-size: 28rpx;
			padding-top: 50rpx;
		}

		.icon123 {
			width: 31rpx;
			height: 36rpx;
			padding-right: 20rpx;
		}

		.item {
			background-color: #eee;
			color: #333;
			font-size: 40rpx;
			padding: 20rpx;
			margin: 10rpx;
			padding-left: 50rpx;
			padding-right: 50rpx;
			border-radius: 60rpx;
		}

		.active {
			background-color: #ffaa00;
			color: white;
		}

		.info {
			margin: 0 auto;
			background-color: white;
			// margin-top: 50rpx;
			position: relative;
			border-bottom-right-radius: 45rpx;
			border-bottom-left-radius: 45rpx;
			box-shadow: 0px 0px 10px 10px #f0f3fc;


			.t_c {
				padding-bottom: 20rpx;
				margin-bottom: 20rpx;
				border-radius: 20rpx;
			}


			.avatar_bg {
				width: 114upx;
				height: 114upx;
				border-radius: 100%;
				margin: 0 auto;
				border: 5px solid #eee;
				background-color: #FFF4EA;

				.avatar {
					flex-shrink: 0;
					width: 87upx;
					height: 87upx;
					border-radius: 100%;
					background-color: #FFF4EA;
				}
			}

			.username {
				color: #333;
				padding: 10rpx;
				font-size: 35rpx;
				text-align: center;
				margin: 0 auto;
			}

			.score_part {
				height: 50rpx;
				border-radius: 20rpx;
				margin: 0 auto;
				display: flex;
				line-height: 50rpx;
				font-size: 30rpx;
				color: #5B7897;
				justify-content: center;
				align-items: center;

				.score-tip {
					font-size: 28rpx;
				}

				.icon1 {
					width: 44rpx;
					height: 30rpx;
				}

				.sub_score_info {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.score_txt {
					border-radius: 10rpx;
					padding: 10rpx;
					text-align: center;
					line-height: 47rpx;
					border-radius: 30rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					font-size: 30rpx;
					min-width: 170rpx;
					letter-spacing: 2rpx;
					height: 47rpx;
					background-color: #dadada;
				}

				.icon {
					width: 54rpx;
					height: 49rpx;
					padding: 10rpx;
				}

				.score_info {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}

				.btn {
					width: 202rpx;
					height: 68rpx;
					line-height: 68rpx;
					text-align: center;
					font-size: 36rpx;
					background-color: rgb(238, 126, 39);
					border-radius: 10rpx;
					color: white;
					margin-right: 20rpx;
				}
			}

			.desc {
				font-size: 32rpx;
				color: #5B7897;
				line-height: 40rpx;
				padding-left: 66rpx;
				padding-right: 66rpx;
				padding-top: 60rpx;

				.subtitle {
					padding-top: 20rpx;
					padding-bottom: 20rpx;
				}

				.title {
					font-size: 40rpx;
					padding-top: 20rpx;
					padding-bottom: 20rpx;
				}
			}
		}
	}
</style>