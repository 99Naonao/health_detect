<template>
	<view class="container">
		<view class="tab flex">
			<view class="tabitem" :class="{'active':0==current}" @click="swipeTab(0)">

				<view class="">
					生理测量报告
				</view>
				<view class="timestamp" v-if="0==current">
					2024
				</view>
			</view>
			<view class="tabitem" :class="{'active':1==current}" @click="swipeTab(1)">
				<view class="">情绪测量报告</view>
				<view class="timestamp" v-if="1==current">
					2024
				</view>
			</view>
		</view>
		<view class="topkv flex just-align-center">
			<view class="">
				综合心健康风险
			</view>
			<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
			}
		},
		methods: {
			swipeTab(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #547896;

		.topkv {
			background-color: white;

			.topimg {
				width: 399rpx;
				height: 397rpx;
			}
		}
	}


	.tab {
		padding-top: 108rpx;

		.tabitem {
			text-align: center;
			margin-top: 30rpx;
			padding-bottom: 10rpx;
			height: 68rpx;
			color: white;
			background-color: #46647d;
			border-top-right-radius: 20rpx;
			border-top-left-radius: 20rpx;
			line-height: 36rpx;
			font-size: 30rpx;
			width: 260rpx;
		}

		.timestamp {
			color: #547896;
			font-size: 22rpx;
			line-height: 30rpx;
		}

		.active {
			font-weight: bold;
			color: #616169;
			height: 88rpx;
			margin-top: 0rpx;
			padding-top: 10rpx;
			background-color: white;
			border-bottom: solid 1rpx skyblue;
		}
	}
</style>