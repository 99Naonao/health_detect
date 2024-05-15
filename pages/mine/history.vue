<template>
	<view class="">
		<view class="flex just-align-center align-center" style="justify-content: space-around;">
			<view :class="active==0?'item active':'item'" @click="itemChange(0)">
				周
			</view>
			<view :class="active==1?'item active':'item'" @click="itemChange(1)">
				月
			</view>
		</view>
		<serious-echart :icon="'icon-heart'" :title="'心率'"></serious-echart>
		<serious-echart :icon="'icon-press'" :title="'血压'"></serious-echart>
	</view>
</template>

<script>
	import seriousEchart from '../comp/seriousEchart.vue'
	import {
		getHistoryData
	} from '@/utils/h5app.js'
	export default {
		components: {
			seriousEchart
		},
		data() {
			return {
				active: 0
			}
		},
		onShow() {
			getHistoryData({
				type: 1
			})

		},
		methods: {
			init() {

			},
			itemChange(index) {
				this.active = index;
			}
		}
	}
</script>

<style scoped>
	.item {
		background-color: #eee;
		color: #333;
		font-size: 40rpx;
		padding: 20rpx;
		margin: 10rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		border-radius: 30rpx;
	}

	.active {
		background-color: #5a7795;
		color: white;
	}
</style>