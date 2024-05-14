<template>
	<view class="">
		<view v-if='spo2hreport_detailsList' class="content">
			{{ descValue }}
		</view>
		<view v-else class="virturecontent">
			{{ descValue }}
		</view>
		<view v-if='spo2hreport_detailsList' class="morebtn" @click="showMore('spo2hreport_detailsList')">
			更多
		</view>
	</view>
</template>

<script>
	import {
		watch
	} from 'vue';
	export default {
		setup(props) {
			console.log('props:', props.descValue)
		},
		data() {
			return {
				spo2hreport_detailsList: true
			}
		},
		props: {
			descValue: {
				type: String,
				default: ''
			}
		},
		mounted() {
			this.checkMore('spo2hreport_detailsList', this.descValue)
		},
		methods: {
			checkMore(kkey, value) {
				console.log('checkMore comp:', kkey, value.length)
				if (value.length > 60) {
					this[kkey] = true
				} else {
					this[kkey] = false
				}
			},
			showMore(kkey) {
				this[kkey] = false
			},
		}
	}
</script>

<style scoped>
	.morebtn {
		display: flex;
		align-items: right;
		justify-content: right;
		text-decoration: underline;
		color: #46647d;
		font-size: 25rpx;
		text-underline-offset: 5rpx;
		margin: 20rpx;
	}

	.content {
		padding-top: 20rpx;
		padding-left: 50rpx;
		padding-bottom: 20rpx;
		max-height: 60rpx;
		line-height: 38rpx;

		text-overflow: ellipsis;
		display: -webkit-box;
		overflow-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.virturecontent {
		padding-top: 20rpx;
		padding-left: 50rpx;
		padding-bottom: 20rpx;
		line-height: 38rpx;
	}
</style>