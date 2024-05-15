<template>
	<view class="">
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
			return {}
		},
		onShow() {
			getHistoryData({
				type: 1
			})

		},
		methods: {
			init() {

			}
		}
	}
</script>

<style>
</style>