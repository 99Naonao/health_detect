<template>
	<view class="tabbar flex align-center">
		<view class="tabbar-item" v-for="(item,index) in list" :key="index" @click="changeTab(index)">
			<view class="select" v-if="current== index">
				<view class="info flex align-center">
					<image class="img imgactive" :src="item.selectedIconPath" mode="widthFix"></image>
					<text class="text">{{item.text}}</text>
				</view>
			</view>
			<view class="" v-else>
				<image class="img" :src="item.iconPath" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tabbar',
		props: ['current'],
		data() {
			return {
				list: [{
					"pagePath": "pages/health/health",
					"iconPath": "/static/JK_02_but01bIcon.png",
					"selectedIconPath": "/static/JK_02_but01bIcon.png",
					"text": "健康检测"
				}, {
					"pagePath": "pages/func/func",
					"iconPath": "/static/JK_02_but02Icon.png",
					"selectedIconPath": "/static/JK_02_but02bIcon.png",
					"text": "功能说明"
				}, {
					"pagePath": "pages/mine/mine",
					"iconPath": "/static/JK_02_but03Icon.png",
					"selectedIconPath": "/static/JK_02_but03bIcon.png",
					"text": "我的数据"
				}, ]
			}
		},
		created() {
			uni.hideTabBar()
		},
		methods: {
			changeTab(e) {
				let url = '/' + this.list[e].pagePath;
				uni.switchTab({
					url: url
				})
			}
		},
	}
</script>

<style lang="scss">
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 160rpx;
		background: rgba(90, 119, 149, 1);
		display: flex;
		z-index: 99;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tabbar-item {
		flex: 1;
		justify-content: center;
		align-items: center;
		text-align: center;
		display: flex;

		.info {
			background-color: rgba(78, 113, 152, 1.0);
			border-radius: 50rpx;
			padding: 18rpx;
			padding-left: 30rpx;
			padding-right: 30rpx;
		}


		.img {
			width: 40rpx;
			height: 40rpx;
		}

		.imgactive {}

		.text {
			text-align: center;
			color: #fff;
			padding: 15rpx;
			font-size: 28rpx;
		}
	}
</style>