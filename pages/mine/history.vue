<template>
	<view class="container">
		<view class="flex just-align-center align-center" style="justify-content: space-around;">
			<view :class="active==0?'item active':'item'" @click="itemChange(0)">
				周
			</view>
			<view :class="active==1?'item active':'item'" @click="itemChange(1)">
				月
			</view>
		</view>
		<serious-echart :icon="'icon-weight'" :title="'体重指数'"></serious-echart>
		<serious-echart :icon="'icon-heart'" :title="'心率'"></serious-echart>
		<serious-echart :icon="'icon-heart-change'" :title="'心率变异性'"></serious-echart>
		<serious-echart :icon="'icon-press'" :title="'舒张压'"></serious-echart>
		<serious-echart :icon="'icon-up'" :title="'收缩压'"></serious-echart>
		<serious-echart :icon="'icon-ox'" :title="'血氧饱和度'"></serious-echart>
		<serious-echart :icon="'icon-risk'" :title="'心脏病风险'"></serious-echart>
		<serious-echart :icon="'icon-zrisk'" :title="'中风风险'"></serious-echart>
		<serious-echart :icon="'icon-xxgrisk'" :title="'心血管病风险'"></serious-echart>
		<serious-echart :icon="'icon-xxylrisk'" :title="'心脏压力'"></serious-echart>
		<serious-echart :icon="'icon-xgrisk'" :title="'血管功能'"></serious-echart>
		<serious-echart :icon="'icon-attack'" :title="'攻击性'"></serious-echart>
		<serious-echart :icon="'icon-jiaolv'" :title="'焦虑度'"></serious-echart>
		<serious-echart :icon="'icon-huoli'" :title="'活力度'"></serious-echart>
		<serious-echart :icon="'icon-yiyu'" :title="'抑郁度'"></serious-echart>
		<serious-echart :icon="'icon-pilao'" :title="'疲劳度'"></serious-echart>
		<serious-echart :ticks="[59.3,62.1,45.9,48.1,0,0,0]" :icon="'icon-yali'" :title="'压力度'"></serious-echart>
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

<style scoped lang="scss">
	.container {
		font-family: "YouYuan";
		color: #333;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
	}

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