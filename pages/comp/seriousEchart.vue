<template>
	<view class="border">
		<image :class="sccs" :src="iconUrl" mode="widthFix"></image><text class="title">{{title}}</text><text
			class="tip">{{tip}}</text>
		<div ref="charts1" style="width: 375px;height: 200px;"></div>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import {
		markRaw
	} from 'vue'
	export default {
		props: {
			ticks: { // y轴的值
				type: Array,
				default: [150, 230, 224, 218, 135, 147, 160, 300, 350],
			},
			xAxis: {
				type: Array,
				default: ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
			},
			yAxis: {
				type: Array,
				default: [0, 400]
			},
			title: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: 'icon-weight'
			},
		},
		watch: {
			ticks(value) {
				// console.log('fuck ticks', value)
				if (value.length > 0) {
					this.option.series[0].data = this.ticks
					this.option.yAxis.min = this.yAxis[0]
					this.option.yAxis.max = this.yAxis[1]
					this.chart.setOption(this.option);
				}
			},
			xAxis(value) {
				this.option.xAxis.data = this.xAxis
				this.chart.setOption(this.option);
			}
		},
		data() {
			return {
				sccs: '',
				iconUrl: '',
				chart: {},
				tip: '参考数值18.5-25 之间表示体型匀称健康',
				tips: {
					'icon-age': '',
					'icon-weight': '参考数值18.5-25 之间表示体型匀称健康',
					'icon-skin': '',
					'icon-heart': '参考数值：60-100 之间为正常',
					'icon-heart-change': '参考数值：50-200 之间交感和副交感神经张力适中，身体状态平衡.  ',
					'icon-press': '参考数值：60-80 之间为正常',
					'icon-up': '参考数值：30-130 之间为正常',
					'icon-ox': '参考数值：93-100 之间为正常',
					'icon-risk': '参考数值：3.0以下为风险较低 ',
					'icon-zrisk': '参考数值：3.0以下为风险较低',
					'icon-xxgrisk': '参考数值：6.0以下为风险较低',
					'icon-xxylrisk': '参考数值：3.5-3.9之间为正常',
					'icon-xgrisk': '参考数值：1.6-3.0之间为血管弹性好',
					'icon-attack': '参考数值：0-40 之间说明您心态平和',
					'icon-jiaolv': '参考数值：0-20 之间说明您乐观放松',
					'icon-huoli': '参考数值：40-100 之间说明您精神状态良好，精力充沛',
					'icon-yiyu': '参考数值：20-40 之间说明您情绪良好，没有明显的抑郁症状',
					'icon-pilao': '参考数值：0-20 之间说明您的精神饱满，精力充沛',
					'icon-yali': '参考数值：20-40 之间说明您的心态良好，轻微压力有助于提高注意力和工作效率',
				},
				icons: {
					'icon-age': '/static/icon/SY_IconTZZS_Y.png',
					'icon-weight': '/static/icon/SY_IconTZZS_Y.png',
					'icon-skin': '/static/icon/SY_IconPFNL_Y.png',
					'icon-heart': '/static/icon/SY_IconXL_Y.png',
					'icon-heart-change': '/static/icon/SY_IconXZBY_Y.png',
					'icon-press': '/static/icon/SY_IconXY_Y.png',
					'icon-up': '/static/icon/SY_IconXY_Y.png',
					'icon-ox': '/static/icon/SY_IconXYBHD_Y.png',
					'icon-risk': '/static/icon/SY_IconXZBFX_Y.png',
					'icon-zrisk': '/static/icon/SY_IconZFFX_Y.png',
					'icon-xxgrisk': '/static/icon/SY_IconXGGN_Y.png',
					'icon-xxylrisk': '/static/icon/SY_IconXZYL_Y.png',
					'icon-xgrisk': '/static/icon/SY_IconXL_Y.png',
					'icon-attack': '/static/icon/SY_IconGJX_Y.png',
					'icon-jiaolv': '/static/icon/SY_IconJLX_Y.png',
					'icon-huoli': '/static/icon/SY_IconHLD_Y.png',
					'icon-yiyu': '/static/icon/SY_IconYYD_Y.png',
					'icon-pilao': '/static/icon/SY_IconPLD_Y.png',
					'icon-yali': '/static/icon/SY_IconYLD_Y.png',
				},
				option: {
					grid: {
						left: 60,
						top: 20,
						right: 30,
						bottom: 30,
					},
					xAxis: {
						type: 'category',
						position: "bottom",
						data: ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
					},
					yAxis: {
						type: 'value',
						min: 0,
						max: 450,
						axisLine: {
							show: true
						}
					},
					dataZoom: [{
						type: 'inside',
						throttle: 50,
						show: true,
						showDetail: false,
						xAxisIndex: [0],
						startValue: 0,
						endValue: 7,
						minSpan: 1,
						preventDefaultMouseMove: false,
						zoomOnMouseWheel: false,
						bottom: 0
					}],
					series: [{
						data: [],
						coordinateSystem: 'cartesian2d',
						type: 'line'
					}]
				},
			}
		},
		mounted() {
			echarts.env.touchEventsSupported = true;
			echarts.env.wxa = false;
			echarts.env.canvasSupported = false;
			echarts.env.svgSupported = true;
			echarts.env.domSupported = true;

			this.init()
		},
		methods: {
			init() {
				this.iconUrl = this.icons[this.icon]
				this.tip = this.tips[this.icon] ? this.tips[this.icon] : '无'
				this.sccs = this.icon

				// this.chart = markRaw(echarts.init(document.getElementById(this.id)))

				this.$nextTick(() => {
					// 使用 Canvas 渲染器（默认）
					// 你可以有选择地退出默认的深度响应式/只读转换模式，并将原始的，未被代理的对象嵌入状态图中。它们可以根据情况灵活运用：
					// 有些值不应该是响应式的，例如复杂的第三方类实例或 Vue 组件对象。
					// 当渲染具有不可变数据源的大列表时，跳过 proxy 转换可以提高性能。
					// 所以在实例化echart时，将其指定为非响应式的即可。
					this.chart = markRaw(echarts.init(this.$refs.charts1));

					this.option.series[0].data = this.ticks
					this.option.yAxis.min = this.yAxis[0]
					this.option.yAxis.max = this.yAxis[1]
					this.chart.setOption(this.option);
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.border {
		background-color: white;
		margin: 30rpx;
		padding: 30rpx;
		border-radius: 50rpx !important;
		box-shadow: 0px 0px 5px 5px #eee;
	}

	.tip {
		font-size: 22rpx;
		color: #333;
		padding-left: 10rpx;
	}

	.title {
		font-size: 30rpx;
		color: black;
		color: #333;
		padding-left: 10rpx;
	}

	.heartIcon {
		width: 50rpx;
		height: 45rpx;
	}


	.icon-heart {
		width: 50rpx;
		height: 45rpx;
	}

	.icon-ox {
		width: 45rpx;
		height: 46rpx;
	}

	.icon-xxylrisk {
		width: 52rpx;
		height: 48rpx;
	}

	.icon-attack {
		width: 56rpx;
		height: 41rpx;
	}

	.icon-xgrisk {
		width: 50rpx;
		height: 45rpx;
	}

	.icon-skin {
		width: 50rpx;
		height: 45rpx;
	}



	.icon-heart-change {
		width: 50rpx;
		height: 45rpx;
	}

	.valueNum {
		font-weight: bold;
		color: #ffaa00;
		padding-left: 20rpx;
		font-size: 30rpx;
		letter-spacing: 2rpx;
	}

	.focusnum {
		color: #ffaa00;
		letter-spacing: 2rpx;
	}

	.content {
		padding-top: 20rpx;
		padding-left: 50rpx;
		padding-bottom: 20rpx;
		line-height: 38rpx;
	}

	.border-line {
		border-bottom: #f5f5f5 solid 1px;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.border {
		background-color: white;
		margin: 30rpx;
		padding: 30rpx;
		border-radius: 30rpx;
		box-shadow: 0px 0px 13px 13px #f0f3fc;
	}

	.icon-explan {
		width: 39rpx;
		height: 43rpx;
	}

	.icon-title {
		padding-left: 10rpx;
		font-size: 30rpx;
	}

	.icon-press {
		width: 53rpx;
		height: 42rpx;
	}



	.icon-up {
		width: 53rpx;
		height: 42rpx;
	}

	.icon-xxgrisk {
		width: 48rpx;
		height: 50rpx;
	}

	.icon-weight {
		width: 47rpx;
		height: 50rpx;
	}

	.icon-risk {
		width: 50rpx;
		height: 45rpx;
	}

	.icon-zrisk {
		width: 40rpx;
		height: 48rpx;
	}


	.icon-age {
		width: 42rpx;
		height: 43rpx;
	}

	.icon-explan {
		width: 39rpx;
		height: 43rpx;
	}

	.icon-add {
		width: 45rpx;
		height: 48rpx;
	}

	.icon-ai {
		width: 49rpx;
		height: 58rpx;
	}

	.icon-jiaolv {
		width: 46rpx;
		height: 44rpx;
	}

	.icon-huoli {
		width: 45rpx;
		height: 44rpx;
	}

	.icon-yiyu {
		width: 46rpx;
		height: 44rpx;
	}

	.icon-pilao {
		width: 45rpx;
		height: 45rpx;
	}

	.icon-yali {
		width: 46rpx;
		height: 44rpx;
	}
</style>