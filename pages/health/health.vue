<template>
	<view class="container">
		<tabbar current='0'></tabbar>
		<view class="main">
			<view class='kv' ref="cccc">
				<image class="kv-img" src='@/static/JK_02_Bg01.jpg' mode="widthFix"></image>
			</view>
		</view>
		<view class="opt-part">
			<view class="opt1 flex just-align-center">
				<view class="opt" @click="checkHandler">
					<text>开始测量</text>
					<view class="flex align-items" style="margin-top: 10rpx;">
						<image mode="widthFix" class="icon" src="../../static/JK_02_IconJF1.png"></image><text
							class="cost-c">{{cost}}积分/次</text>
					</view>
				</view>
			</view>
			<view class="law flex just-align-center align-center">
				<checkbox-group ref="ggg" @change="groupChange">
					<view class="flex just-align-center align-center">
						<checkbox class="" style="transform: scale(0.9);" activeBackgroundColor="#F77913"
							iconColor="#ffffff" :checked="sure" value="sure" />
						<text>我已经阅读同意</text>
					</view>
				</checkbox-group><text class="line" @click="navLink">用户使用条款</text>
			</view>
			<!-- 			<view class="opt1 flex just-align-center" @click="checkPortHandler">
				<view class="opt">
					<text>查看报告</text>
				</view>
			</view> -->
			<view class="my-score flex just-align-center align-center">
				<view class="my-left flex align-center">
					<view class="flex align-items">我的积分<image mode="widthFix" class="icon1"
							src="../../static/JK_02_IconJF2.png"></image>
					</view>
					<view class="score">{{userInfo.score?userInfo.score:0}}</view>
				</view>
				<view class="score-more" @click="navMoreLink">获取更多</view>
			</view>
			<view class="tips">
				我们会严格守护您的隐私，也请您务必注意保护个人隐私。拍照时保持良好光线并留意周边环境，独立的个人面部拍摄更有利于隐私保护与数据准确。
			</view>

		</view>
		<view class="firs-blood" v-if="showFirstBlood">
			<view class="not-enough-mask" @click="hideFirstBlood"></view>
			<view class="first-blood-back">

			</view>
			<view class="not-button" @click="hideFirstBlood">收下</view>
		</view>
		<view class="not-enough" v-if="showEnouth">
			<view class="not-enough-mask" @click="hideEnouth"></view>
			<view class="not-enough-back">

			</view>
			<view class="not-button" style="margin-top: 70rpx;" @click="navMoreLink">获得积分</view>
		</view>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import {
		storeToRefs
	} from 'pinia'
	import userInfoStore from '../../store/user.js'
	import {
		Measurement,
		MeasurementCategory
	} from 'xy-health-measurement'
	// #ifdef H5

	import {
		autoLogin,
		getToken,
		addReport
	} from '../../utils/h5app.js'
	// #endif
	export default {
		components: {
			tabbar
		},
		setup(props, context) {
			const getUserInfo = userInfoStore()
			const {
				userInfo,
				measureToken
			} = storeToRefs(getUserInfo)
			console.log('health setup:::', getUserInfo)
			return {
				userInfo,
				getUserInfo
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
		mounted() {
			// uni.clearStorageSync('userInfo');
			var code = window.getCode()
			if (code) {
				this.login()
			} else {
				this.getMeasureToken()
			}
		},
		data() {
			return {
				showEnouth: false,
				showFirstBlood: false,
				cost: 20,
				sure: false,
				measureIns: null,
				video: null,
			}
		},
		onShow() {
			this.sure = uni.getStorageSync('checkP') ? true : false
			// this.login()

			// let user = {
			// 	address: "",
			// 	authAt: null,
			// 	avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eop8EWu5X9uMZ8BErjVkjiagMpRKtkWczIMpIFSibrkHjA7icdgN6DJ93a7qcHiacZPQ27URnNBCicE8Bg/132",
			// 	birthDay: "",
			// 	code: "",
			// 	createIp: null,
			// 	createTime: "2024-04-26 15:00:28",
			// 	createUser: "-1",
			// 	fenxiaoId: "0",
			// 	frozen: 0,
			// 	identityCard: "",
			// 	isAuth: 1,
			// 	lastLoginAt: null,
			// 	lastLoginIp: null,
			// 	lastMobileToken: null,
			// 	lastSignAt: null,
			// 	lastSignTime: null,
			// 	lev: 1,
			// 	mobile: "",
			// 	msgRead: 0,
			// 	nickName: "大白牙",
			// 	realName: "",
			// 	recommendCode: "",
			// 	registerAt: "2024-04-26 15:00:28",
			// 	registerIp: null,
			// 	remain: 0,
			// 	score: 999,
			// 	sex: "M",
			// 	smsCode: "",
			// 	statusFlag: 1,
			// 	token: "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjMyLCJhY2NvdW50Ijoib1d2Vno2Y19UTDhzWXJ0RWxLU18ycVM2UjFfdyIsInV1aWQiOiI5MzQ2NDY3MC0yZTYwLTRlNTktOWQxNS03ZTE4NDBmYzNkNTEiLCJyZW1lbWJlck1lIjp0cnVlLCJleHBpcmF0aW9uRGF0ZSI6MTcxNjg5OTE4ODg2OCwiY2FUb2tlbiI6bnVsbCwib3RoZXJzIjpudWxsLCJzdWIiOiIzMiIsImlhdCI6MTcxNjI5NDM4OCwiZXhwIjoxNzE2ODk5MTg4fQ.dUDUpVfSQCtR31fzXMO1s_rV7-UTMAZcFXV4BqhGbOslFM_qbUabQOezxzGi-UuzXLJ06JoAgUFFGDEhbhMurw",
			// 	tokenExpireAt: "1716899188868",
			// 	totalConsume: 0,
			// 	tradingPassword: "",
			// 	updateTime: "2024-05-21 20:26:28",
			// 	updateUser: "-1",
			// 	userId: "32",
			// 	userName: "oWvVz6c_TL8sYrtElKS_2qS6R1_w",
			// 	userPassword: "",
			// 	userType: null,
			// 	withdraw: 0,
			// 	yongjin: 0,
			// }



			// setTimeout(() => {
			// 	const teuserInfoStore = userInfoStore()
			// 	teuserInfoStore.$patch({
			// 		'userInfo': user
			// 	})
			// 	console.log('scor:', teuserInfoStore.userInfo)
			// }, 3000)

			// let userInfo = uni.getStorageSync('userInfo')
			// if (!userInfo) {
			// this.login()
			// } else {
			// 	console.log('登录2成功')
			// 	this.$login().then((res) => {
			// 		console.log('获取token2成功')
			// 	})
			// }
		},
		methods: {
			hideFirstBlood() {
				this.showFirstBlood = false;
			},
			hideEnouth() {
				this.showEnouth = false;
			},
			getMeasureToken() {
				const getUserInfo = userInfoStore()
				getUserInfo.$login()
			},
			login() {
				autoLogin((res) => {
					this.getMeasureToken()
				})
			},
			// 获取更多
			navMoreLink() {
				uni.navigateTo({
					url: '/pages/health/healthScoreMore'
				})
			},
			navLink() {
				uni.navigateTo({
					url: '/pages/health/userProtocal'
				})
			},
			checkPortHandler() {
				uni.navigateTo({
					url: '/pages/health/healthResult'
				})
			},
			async startCamera() {
				// 获取设备媒体的设置，通常就video和audio
				// ....
				// 将宽高设置成容器大小
				const pageSize = document.width
				let constraints = {
					video: {
						height: 500,
						width: 500,
						// facingMode: {
						// 	exact: "environment"
						// },
					},
					audio: false
				};
				this.video = document.getElementById("video");
				console.log('window.navigator:', window.navigator.mediaDevices)
				// 使用getUserMedia获取媒体流
				// 媒体流赋值给srcObject
				this.video.srcObject = await window.navigator.mediaDevices.getUserMedia(constraints);
				// 直接播放就行了
				this.video.play();
			},
			// 截图拍照
			takePhoto() {
				const video = document.getElementById("video");
				// 借助canvas绘制视频的一帧
				const canvas = document.getElementById("canvas");
				const ctx = canvas.getContext('2d');
				ctx.drawImage(this.video, 0, 0, 500, 500);
				let base64 = canvas.toDataUrl("image/jpeg")

				let base64_new = 'data:image/jpeg;base64,' + base64;
				//打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
				console.log(base64);
				return base64
			},
			// 停止
			stopMedia() {
				// 获取媒体流
				const stream = this.video.srcObject;
				const tracks = stream.getTracks();
				// 停止所有轨道
				tracks.forEach(function(track) {
					track.stop();
				})
				this.video.srcObject = null;
			},
			groupChange(e) {
				if (e.detail.value.length > 0) {
					this.sure = true

				} else {
					this.sure = false
				}
				this.updateCheckStatus()
			},
			updateCheckStatus() {
				uni.setStorageSync('checkP', this.sure)
			},
			goCheck() {
				console.log(this.userInfo)
				if (this.userInfo.score >= this.cost) {
					uni.navigateTo({
						url: '/pages/health/healthRunning'
					})
				} else {
					this.showEnouth = true;
					// uni.showToast({
					// 	title: '当前积分不够',
					// 	icon: 'error'
					// })
				}
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
								this.updateCheckStatus()
								this.goCheck()
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.kv-img {
		width: 750rpx;
	}

	.tips {
		text-align: center;
		word-wrap: break-word;
		word-break: break-all;
		font-size: 24rpx;
		line-height: 36rpx;
		color: white;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.not-enough-mask {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.not-enough {}

	.not-button {
		background-color: rgb(21, 59, 112);
		padding: 15rpx 95rpx 15rpx 95rpx;
		color: white;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 50%;
		margin-top: 80rpx;
		border-radius: 45rpx;
		font-size: 42rpx;
	}

	.not-enough-back {
		width: 489rpx;
		height: 609rpx;
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		top: 25%;
		background: url('../../static/JK_02_Panel02.png');
		background-size: 100% 100%;
	}

	.first-blood-back {
		width: 489rpx;
		height: 617rpx;
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		top: 25%;
		background: url('../../static/JK_02_Panel01.png');
		background-size: 100% 100%;
	}

	.container {
		color: white;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);

		.main {
			padding-bottom: 10rpx;
			text-align: center;
			position: absolute;
			left: 0px;
			right: 0px;
			top: 0px;
		}

		.check-label {
			line-height: 30rpx;
		}

		.law {
			text-align: center;
			padding-top: 20rpx;
			line-height: 30rpx;
			font-size: 24rpx;

			.line {
				color: #F77913;
			}
		}


		.icon1 {
			width: 38rpx;
			height: 34rpx;
			/* 			padding-right: 10rpx;
			padding-left: 10rpx; */
		}


		.my-score {
			margin: 0 auto;
			padding: 20rpx;
			text-align: center;
			line-height: 34rpx;
			padding-top: 15rpx;
			font-size: 24rpx;
		}

		.my-left {
			background-color: rgba(21, 59, 112, 0.5);
			padding: 1rpx 25rpx 1rpx 25rpx;
			border-radius: 30rpx;
		}

		.score {
			/* background-color: rgba(21, 59, 112, 0.5); */
			padding: 10rpx 25rpx 10rpx 25rpx;
			width: 200rpx;
			margin-left: 14rpx;
			border-radius: 30rpx;
			font-size: 30rpx;
		}

		.score-more {
			color: white;
			background-color: rgba(21, 59, 112, 1);
			padding: 10rpx 20rpx;
			font-size: 24rpx;
			border-radius: 30rpx;
		}
	}

	.opt-part {
		position: absolute;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
		margin: 0 auto;
		bottom: 158rpx;
	}

	.opt {
		min-width: 200rpx;
		background-color: rgba(21, 59, 112, 1);
		border-radius: 80rpx;
		text-align: center;
		color: white;
		padding: 18rpx;
		padding-left: 150rpx;
		padding-right: 150rpx;
		font-size: 32rpx;
		word-break: keep-all;

		.cost-c {
			font-size: 24rpx;
			padding-left: 14rpx;
			line-height: 30rpx;
			word-break: keep-all;
		}

		.icon {
			width: 38rpx;
			height: 34rpx;
			display: inline-block;
		}
	}
</style>