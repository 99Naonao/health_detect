<template>
	<view class="barcontainer">
		<view class="bar">
		</view>
		<view class="arrowcon" :style="{left:((tick-ticks[0])/(ticks[ticks.length-1]- ticks[0])) * 100+'%'}">
			<image class="arrow" src="@/static/icon/JK_04b_bar02.png"></image>
		</view>
		<view class="tick-item" v-for="(item ,index) in ticks"
			:style="{left:((item- ticks[0])/(ticks[ticks.length-1] - ticks[0])) * 100+'%'}">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tt: {
				type: String,
				default: 'fuck'
			},
			tick: {
				type: Number,
				require: true,
				default: 10,
			},
			ticks: {
				type: Array,
				default: [0, 50, 100, 150]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.barcontainer {
		color: black;
		height: 25rpx;
		padding-bottom: 60rpx;
		background-color: white;
		position: relative;
		width: 90%;
		margin: 0 auto;
		margin-top: 60rpx;

		.bar {
			height: 17rpx;
			background-color: rgb(124, 196, 235);
			border-radius: 10rpx;
		}

		.arrowcon {
			position: absolute;
			top: -5rpx;
			transform: translateX(-50%);
		}

		.arrow {
			width: 25rpx;
			height: 34rpx;
		}

		.tick-item {
			position: absolute;
			text-align: center;
			color: #333;
			padding-top: 5rpx;
			font-size: 24rpx;
			font-family: 'Arial';
			transform: translateX(-50%);
		}
	}
</style>