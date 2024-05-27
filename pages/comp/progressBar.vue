<template>
	<view class="barcontainer">
		<view class="bar flex">
			<view :class="ticks[index+1]?class_list[index]:'last-one'" v-for="(item ,index) in ticks"
				:style="{left:((item- ticks[0])/(ticks[ticks.length-1] - ticks[0])) * 100+'%',width:((ticks[index+1] - item) / (ticks[ticks.length-1] - ticks[0])) * 100+'%'}">
			</view>
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
			},
			class_list: {
				type: Array,
				require: true,
				default: ['fifth', 'forth', 'third', 'second', 'first']
			}
		},
		data() {
			return {

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
			overflow: hidden;
		}

		.last-one {
			display: none;
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

		.first {
			width: 60%;
			background-color: rgb(172, 234, 111);
		}

		.second {
			width: 10%;
			background-color: rgb(124, 196, 200);
		}

		.third {
			width: 10%;
			background-color: rgb(226, 201, 62);
		}

		.forth {
			width: 10%;
			background-color: rgb(242, 111, 41);
		}


		.fifth {
			width: 10%;
			height: 100%;
			background-color: rgb(255, 0, 0);
		}
	}
</style>