<template>
	<view>
		<tabbar current='1'></tabbar>
		<view>我的3</view>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			tabbar
		},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {

		}
	}
</script>

<style>
</style>