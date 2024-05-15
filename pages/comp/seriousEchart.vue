<template>
	<view class="border">
		<image :class="sccs" :src="iconUrl" mode="widthFix"></image><text class="title">{{title}}</text>
		<div ref="charts1" style="width: 375px;height: 200px;"></div>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: 'icon-weight'
			},
		},
		data() {
			return {
				sccs: '',
				iconUrl: '',
				icons: {
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
						data: ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
					},
					yAxis: {
						type: 'value',
						axisLine: {
							show: true
						}
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				},
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.iconUrl = this.icons[this.icon]
				this.sccs = this.icon

				this.$nextTick(() => {
					// 使用 Canvas 渲染器（默认）
					var chart = echarts.init(this.$refs.charts1);
					// this.totalOption.series[0].data = this.gaugeData
					// this.gaugeData[0].value = riskValue
					chart.setOption(this.option);
					// console.log('chart:', chart)
					// uni.hideLoading()
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

	.title {
		font-size: 30rpx;
		color: black;
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
		box-shadow: 0px 0px 5px 5px #eee;
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