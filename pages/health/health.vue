<template>
	<view class="container">
		<tabbar current='0'></tabbar>
		<view>
			<view class='kv' ref="cccc">
				<image class="kv-img" src='@/static/JK_02_Bg01.png' mode="widthFix"></image>
			</view>
			<view class="law">
				<checkbox-group ref="ggg" @change="groupChange">
					<label>
						<checkbox :checked="sure" value="sure" />我已经阅读同意<text class="line">用户使用条款</text>
					</label>
				</checkbox-group>
			</view>
			<view class="opt1 flex just-align-center" @click="checkHandler">
				<view class="opt">
					<text>开始测量</text>
					<view>
						<image mode="widthFix" class="icon" src="../../static/JK_02_IconJF1.png"></image>{{cost}} /次
					</view>
				</view>
			</view>
			<view class="my-score flex just-align-center align-center">
				<view>我的积分<image mode="widthFix" class="icon1" src="../../static/JK_02_IconJF2.png"></image>
				</view>
				<view class="score">{{userInfo.score}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import {
		mapActions,
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'


	export default {
		components: {
			tabbar
		},
		computed: {
			...mapGetters(['userInfo'])
		},
		onLoad() {
			uni.hideTabBar()
		},
		data() {
			return {
				cost: 100,
				sure: false,
			}
		},
		onShow() {
			this.sure = false
			// this.$refs.ppp.open('bottom')
		},
		setup() {

		},
		methods: {
			groupChange(e) {
				if (e.detail.value.length > 0) {
					this.sure = true
				} else {
					this.sure = false
				}
			},
			goCheck() {

			},
			checkHandler() {
				if (this.sure) {
					this.goCheck()
				} else {
					uni.showModal({
						content: '未勾选同意，是否确定自动勾选?',
						showCancel: true,
						success: (res) => {
							console.log(res)
							if (res.confirm) {
								this.sure = true
								this.goCheck()
							}
						}
					});
					console.log('123:', this.sure)
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.kv-img {
		width: 750rpx;
	}

	.container {
		.law {
			text-align: center;
			padding-top: 50rpx;
			line-height: 40rpx;

			.line {
				color: #F77913;
			}
		}


		.icon1 {
			width: 44rpx;
			height: 30rpx;
			padding-right: 10rpx;
			padding-left: 10rpx;
		}


		.my-score {
			margin: 0 auto;
			padding: 20rpx;
			text-align: center;
			line-height: 30rpx;
			padding-top: 50rpx;
		}

		.score {
			background-color: #EEE;
			padding: 10rpx;
			width: 200rpx;
			border-radius: 20rpx;
		}
	}

	.opt1 {
		padding-top: 50rpx;
	}

	.opt {
		background-color: rgba(90, 119, 149, 1);
		border-radius: 50rpx;
		text-align: center;
		color: white;
		padding: 20rpx;
		padding-left: 150rpx;
		padding-right: 150rpx;

		.icon {
			width: 35rpx;
			height: 25rpx;
			padding-right: 20rpx;
		}
	}
</style>