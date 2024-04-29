<template>
	<view>
		<tabbar current='2'></tabbar>
		<view>我的1</view>
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