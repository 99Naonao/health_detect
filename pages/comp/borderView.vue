<template>
	<view class="border">
		<view class="title">
			<image :class='sccc' :src="iconUrl"></image><text class="icon-title">{{title}}</text><text
				class="valueNum">{{valuePercent?value+'%':value}}
			</text>
		</view>
		<progress-bar :tick="value" :ticks="ticks"></progress-bar>
		<view class="">
			<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
				class="icon-title">AI专家解读</text>
		</view>
		<view class="explanation content">
			{{aiDesc}}
		</view>
		<view class="border-line"></view>
		<view class="age">
			<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
			<text class="icon-title">同龄人对比</text>
		</view>
		<view class="age content">
			超越<text class="focusnum">{{(ranking * 100).toFixed(2) + '%'}}</text>同龄人
		</view>
		<view class="border-line"></view>
		<view class="">
			<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
				class="icon-title">健康建议</text>
		</view>
		<view class="content">
			{{adv}}
		</view>
		<view class="border-line"></view>
		<view class="">
			<image class="icon-explan" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
				class="icon-title">概念解释</text>
		</view>
		<more-desc :descValue="desc"></more-desc>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import progressBar from '@/pages/comp/progressBar.vue';
	import moreDesc from '@/pages/comp/moreDesc.vue';
	import icon1 from '@/static/icon/SY_IconTZZS_Y.png';
	export default {
		components: {
			progressBar,
			moreDesc
		},
		props: {
			valuePercent: {
				type: Boolean,
				default: false,
			},
			ticks: {
				type: Array,
				default: [0, 30, 60, 90, 120, 150]
			},
			title: {
				type: String,
				default: ''
			},
			adv: {
				type: String,
				default: ''
			},
			value: {
				type: Number,
				default: 0
			},
			ranking: {
				type: Number,
				default: 0
			},
			icon: {
				type: String,
				default: 'icon-weight'
			},
			aiDesc: {
				type: String,
				default: '',
			},
			desc: {
				type: String,
				default: ''
			},
			essentialreport: {
				type: Object,
				default: {}
			}
		},
		mounted() {
			// this.iconUrl = require(this.icons['icon-weight'])
			console.log('icon:', this.icon)
			this.sccc = this.icon
			this.iconUrl = this.getImageUrl(this.icons[this.icon]);
		},
		data() {
			return {
				iconUrl: '',
				sccc: 'icon-weight',
				icons: {
					'icon-weight': '../../static/icon/SY_IconTZZS_Y.png',
					'icon-skin': '../../static/icon/SY_IconPFNL_Y.png',
					'icon-heart': '../../static/icon/SY_IconXL_Y.png',
					'icon-heart-change': '../../static/icon/SY_IconXZBY_Y.png',
					'icon-press': '../../static/icon/SY_IconXY_Y.png',
					'icon-up': '../../static/icon/SY_IconXY_Y.png',
					'icon-ox': '../../static/icon/SY_IconXYBHD_Y.png',
					'icon-risk': '../../static/icon/SY_IconXZBFX_Y.png',
					'icon-zrisk': '../../static/icon/SY_IconZFFX_Y.png',
					'icon-xxgrisk': '../../static/icon/SY_IconXGGN_Y.png',
					'icon-xxylrisk': '../../static/icon/SY_IconXZYL_Y.png',
					'icon-xgrisk': '../../static/icon/SY_IconXL_Y.png',
				}
			}
		},
		methods: {
			getImageUrl(path) {
				console.log(new URL(path, import.meta.url))
				return new URL(path, import.meta.url).href
			}
		}
	}
</script>

<style scoped lang="scss">
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
		padding-left: 10rpx;
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
</style>