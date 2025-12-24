<template>
	<view class="container">
		<view v-if="puposhow == true" class="pup-mask">
		  <image
		    :src="pupimage[pupIndex].image"
		    class="pup-img"
		    @click="nextPupImage"
		    mode="widthFix"
		  ></image>
		  <view
		    class="pup-skip-btn"
		    @click.stop="skipPup"
		  >
		    {{ pupIndex === pupimage.length - 1 ? '完成' : '跳过' }}
		  </view>
		</view>
		<view v-if="puposhow == false">
			<tabbar current='0'></tabbar>
			<view class="main">
				<view class='kv' ref="cccc">
					<image class="kv-img" src='@/static/images/JK_02_Bg01_cy.png' mode="widthFix"></image>
				</view>
			</view>
			<view class="opt-part">
				<view class="opt1 flex just-align-center">
					<view class="opt" @click="checkHandler">
						<text>开始测量</text>
						<view class="flex align-items" style="">
							<image mode="widthFix" class="icon" src="../../static/JK_02_IconJF1.png"></image><text
								class="cost-c">{{config.detection_deduct}}积分/次</text>
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
						<view class="score">{{userInfoT.user_integral?userInfoT.user_integral:0}}</view>
					</view>
					<view class="score-more" @click="navMoreLink">获取积分</view>
					<!-- <view class="score-more" @click="navMoreLinkTo">报告</view> -->
					<!-- <view class="score-more" @click="navMoreLinkToT">报告2</view> -->
					
					
				</view>
				<view class="tips" style="text-align: left;font-weight: bold;font-size: 12px;padding-bottom: 60px;">
					人脸拍摄仅用于您的健康检测，我们将对您的隐私信息采取严格保密措施。为保障检测效果并保护您的隐私，请您在拍照时注意：在光线良好的私密环境下独立完成面部拍摄。
					<!-- <view>
						人脸拍摄仅用于您的健康检测，我们将对您的隐私信息采取严格保密措施。为保障检测效果并保护您的隐私，请您在拍照时注意：
					</view>
					<view style="margin-top: 5px;">
						-在光线良好的私密环境下
					</view>
					<view style="margin-top: 5px;">
						-独立完成面部拍摄
					</view>
					<view style="margin-top: 5px;">
						感谢您的理解与配合！
					</view> -->
				</view>
			
			</view>
			<view class="firs-blood up-icon-effect" v-if="showFirstBlood">
				<view class="not-enough-mask" @click="hideFirstBlood"></view>
				<view class="first-blood-back">
			
				</view>
				<view class="not-button" @click="hideFirstBlood">关注公众号并领取</view>
			</view>
			<view class="not-enough up-icon-effect" v-if="showEnouth">
				<view class="not-enough-mask" @click="hideEnouth"></view>
				<view class="not-enough-back">
			
				</view>
				<view class="not-button" style="margin-top: 70rpx;" @click="navMoreLink">获得积分</view>
			</view>
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
		addReport,
		getUsercentre,
		getgift,
		getdeduct,
		getresultLists,
		getconfgn
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
		onLoad(req) {
			uni.hideTabBar()
		},
		mounted() {
			// uni.clearStorageSync('userInfo');
			var code = window.getCode()
			if (code) {
				this.login();
				// code存在表示是页面A2
				window.history.pushState({
					page: 1
				}, null, window.location.href);
				let that = this;
				window.addEventListener("popstate", function(e) {
					console.log("i am from popstate", e)
					that.goBack()
				}, false);

				// let firstBlood = uni.getStorageSync('firstBlood') ? false : true;
				// this.showFirstBlood = firstBlood;
				// uni.setStorageSync('firstBlood', true)
			} else {
				// const url =
				// 	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ac2da77b1e55f42&redirect_uri=https://sleep.zsyl.cc/sleeph5&response_type=code&scope=snsapi_base&state=STATE';

				// window.location.href = url
				// this.getMeasureToken()
			}
			console.log("start123456:", code, window.history)
			// if (window.history && window.history.pushState) {
			// 	history.pushState(null, null, document.URL)
			// 	window.addEventListener('popstate', this.goBack, false)
			// }
		},
		data() {
			return {
				showEnouth: false,
				showFirstBlood: false,
				cost: 60,
				sure: false,
				measureIns: null,
				video: null,
				code:'',
				userInfoT:{},
				config:{},
				puposhow:false,
				pupimage:[
					{
						image:'https://oss.zsyl.cc/uploads/images/20250718/202507181700036aaef5320.png'
					},
					{
						image:'https://oss.zsyl.cc/uploads/images/20250718/202507181700033865f6716.png'
					},
					{
						image:'https://oss.zsyl.cc/uploads/images/20250718/20250718170003b7b597850.png'
					}
				],
				 pupIndex: 0,
			}
		},
		onShow() {
			this.sure = uni.getStorageSync('checkP') ? true : false
			this.Usercentre()
			this.confgn()
			
		},
		methods: {
			confgn(){
				getconfgn({}).then(res => {
					this.config = res
					this.cost = res.detection_deduct
				})
			},
			Usercentre(){
				
				getUsercentre({}).then(res => {
					console.log("res.999",res)
					this.userInfoT = res
					if(res.is_new_user == 1){
						this.puposhow = true
					}else{
						this.puposhow = false
					}
					uni.setStorageSync('nickname', res.nickname)
					// const teuserInfoStore = userInfoStore()
					// teuserInfoStore.$patch({
					// 	'userInfo': userInfo
					// })
					// uni.setStorageSync("userInfo", userInfo);
				})
			},
			gift(){
				getgift({}).then(res => {
					this.Usercentre()
				})
			},
			
			goBack() {
				console.log("goback", window.WeixinJSBridge)
				let timer = setTimeout(function() {
					document.addEventListener(
						"WeixinJSBridgeReady",
						function() {
							window.WeixinJSBridge.invoke("closeWindow");
						},
						false
					);
					//这个可以关闭ios系统的手机
					window.WeixinJSBridge.invoke("closeWindow");
					clearInterval(timer)
					//这个可以关闭安卓系统的手机
				}, 300)
				// this.$router.go(-2)
			},
			hideFirstBlood() {
				this.showFirstBlood = false;
				// uni.setStorageSync('firstBlood', true)

				window.location.href =
					"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkyMDQ5NTk0OQ==&scene=110#wechat_redirect"
			},
			hideEnouth() {
				this.showEnouth = false;
			},
			getMeasureToken() {
				const getUserInfo = userInfoStore()

				getUserInfo.$login()
				if (getUserInfo.userInfo.isFollow == 0) {
					this.showFirstBlood = true;
				}
			},
			login() {
				autoLogin((res) => {
					this.Usercentre()
					this.getMeasureToken()
					// this.gift()
					
					// getdeduct({}).then(res => {
						
					// })
					// getresultLists({
					// 	page_no:1,
					// 	page_size:1
					// }).then(res => {
					// 	console.log('res.res:res', res)
					// })
				})
			},
			// 获取更多
			navMoreLink() {
				uni.navigateTo({
					url: '/pages/health/healthScoreMore'
				})
			},
			// 获取更多
			navMoreLinkTo() {
				// uni.navigateTo({
				// 	url: '/pages/healthtest/topic'
				// })
				// uni.navigateTo({
				// 	url: '/pages/health/healthResult'
				// })
				uni.navigateTo({
					url: '/pages/invite_poster/invite_poster'
				})
				
			},
			// 获取更多
			navMoreLinkToT() {
				uni.navigateTo({
					url: '/pages/healthtest/Newconclusion?numtolt=5'
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
				console.log(this.userInfoT)
				console.log(this.userInfoT.user_integral >= this.cost)
				if (this.userInfoT.user_integral >= this.cost) {
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
			},
			nextPupImage() {
			    if (this.pupIndex < this.pupimage.length - 1) {
			      this.pupIndex++;
			    } else {
			      this.puposhow = false;
				  this.gift()
			    }
			  },
			  skipPup() {
			    this.puposhow = false;
				this.gift()
			  },
		}
	}
</script>

<style lang='scss' scoped>
	.kv-img {
		width: 750rpx;
	}

	.kv {
		height: 100%;
		overflow: hidden;
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
		top: 54%;
		word-break: keep-all;
		margin-top: 80rpx;
		border-radius: 45rpx;
		font-size: 30rpx;
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
		/* transform: translate(-50%); */
		top: 25%;
		background: url('../../static/JK_02_Panel01.png');
		background-size: 100% 100%;
		transform: scale(1) translate(-50%);
	}

	@keyframes upEffect {
		0% {
			opacity: 0.3;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}

	.up-icon-effect {
		animation: 0.5s linear 0s 1 upEffect;
		-webkit-animation: 0.5s linear 0s 1 upEffect;
	}

	.container {
		color: white;
		overflow: hidden;
		/* height: 100%; */

		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);

		.main {
			padding-bottom: 10rpx;
			text-align: center;
			position: absolute;
			left: 0px;
			right: 0px;
			top: 0px;
			bottom: 0px;
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
			/* background-color: rgba(21, 59, 112, 0.5); */
			background-color:rgba(77, 112, 147, 1);
			/* padding: 1rpx 25rpx 1rpx 25rpx; */
			padding: 8rpx 25rpx 8rpx 25rpx;
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
		width: 750rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.opt {
		min-width: 200rpx;
		/* background-color: rgba(21, 59, 112, 1); */
		background-color:#FBAC0C;
		
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
	
	.pup-mask {
	  position: fixed;
	  left: 0; top: 0; right: 0; bottom: 0;
	  background: rgba(0,0,0,0.7);
	  z-index: 9999;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.pup-img {
		width: 100%;
	  max-width: 100vw;
	  max-height: 100vh;
	  border-radius: 12px;
	  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
	}
	.pup-skip-btn {
	  position: absolute;
	  right: 30rpx;
	  top: 30rpx;
	  /* background: #fff; */
	  background: rgba(0,0,0,0.1);
	  border: 1px solid #fff;
	  color: #fff;
	  font-size: 16px;
	  border-radius: 20px;
	  padding: 8rpx 40rpx;
	  font-weight: bold;
	  /* box-shadow: 0 2px 8px rgba(21,59,112,0.08); */
	  z-index: 10000;
	}
</style>