<template>
    <view class="pages">
        <view class="invite-fans flex-col col-center" style="position: relative;">
            <image :src="imgPath" mode="widthFix" class="poster"></image>
			<l-painter
				isCanvasToTempFilePath
			    ref="painter"
				@success="imgPath = $event"
				hidden
			    :css="{
			        width: '750rpx',
			        height: '1300rpx',
			        overflow: 'hidden'
			    }"
			    custom-style="position: relative;"
			>
				<!-- <image :src="options.getBgImgSrc"></image> -->
			    <l-painter-image
			        :src="options.getBgImgSrc"
			        :css="{
			            position: 'absolute',
			            width: '100%',
						height: '1300rpx',
			        }"
			    />
				
				<l-painter-view
					:css="{
					    position: 'absolute',
					    top: '120rpx',
						left:options.totlnum_left,
					    width: '100%',
					    height: '290rpx',
						color: '#FF825C',
						fontSize: '45rpx',
						fontWeight: 'bold',
						lineHeight: '45rpx',
					}">
				    <l-painter-text
				      :text="options.totlnum"
				    />
				</l-painter-view>
				<l-painter-view 
					:css="{
					    position: 'absolute',
					    top: '70rpx',
						left:options.name_left,
					    width: '100%',
					    height: '290rpx',
						color: '#FF825C',
						fontSize: '35rpx',
						fontWeight: 'bold',
						lineHeight: '55rpx',
					}">
				    <l-painter-text
				      :text="options.name"
				    />
				</l-painter-view>
			    <l-painter-view
			        :css="{
			            position: 'absolute',
			            bottom: 0,
			            width: '100%',
			            height: '290rpx',
			            'border-radius': '20rpx'
			        }"
			    >
			        <l-painter-view
			            :css="{
			                position: 'absolute',
			                top: '88rpx',
			                left: '500rpx',
			            }"
			            v-if="options.qr_code"
			        >
			            <l-painter-view css="padding-left: 30rpx;">
			                <!-- #ifdef H5 || APP-PLUS -->
			                <l-painter-qrcode
			                    css="width: 160rpx; height: 160rpx;"
			                    :text="options.qr_code"
			                >
			                </l-painter-qrcode>
			                <!--  #endif -->
			                <!-- #ifdef MP -->
			                <l-painter-image
			                    :src="options.qr_code"
			                    css="width: 160rpx; height: 160rpx;"
			                />
			                <!--  #endif -->
			            </l-painter-view>
			        </l-painter-view>
			    </l-painter-view>
			</l-painter>
			
			<view class="footer-btn" style="position: absolute;bottom: 0rpx;padding: 10px 0px;width: 100%;left: 0;display: flex;">
				<view class="save" style="margin:0 auto;padding: 10px;border-radius: 10px;background-color: #F77913;border:none;" @click="saveImageToAlbum">
					分享海报领积分
				</view>
				<view class="save" style="margin:0 auto;padding: 10px;border-radius: 10px;background-color: #ccc;border:none;" @click="handleShare">
					返回 
				</view>
			</view>
			
			
            <!-- <invite-poster ref="poster" :options="options" @success="handleSuccess" /> -->
			<!-- <lime-painter /> -->
			
            <!-- <view class="bg-white footer flex-1"> -->
                <!-- #ifndef H5  -->
                <!-- <button class="save-btn br60" size="lg" @tap="saveImageToAlbum">保存到相册</button> -->
                <!-- #endif -->
                <!-- #ifdef H5 -->
                <!-- <button class="save-btn br60" size="lg" @tap="saveImageToAlbum">长按保存到相册</button> -->
                <!-- #endif -->
            <!-- </view> -->
        </view>
        <view v-show="loading" class="loading-view">
            <view class="loading-spinner"></view>
            <text class="loading-text">加载中...</text>
        </view>
    </view>
</template>

<script>
	// #ifdef H5
	import {
		autoLogin,
		getToken,
		addReport,
		Userscaledetail,
		getUsercentre,
		getdeepseekchat,
		getcontactqrcode,
		getDetectionsection,
		getcreateContactQrCode
	} from '../../utils/h5app.js'
	// #endif
import invitePoster from '@/components/invite-poster/invite-poster.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        invitePoster
    },
    data() {
        return {
            imgPath: '',
            loading: false,
            options: {
				totlnum:'',
				qr_code:'/static/images/qr.png',
				getBgImgSrc:'/static/images/Shui_fine.png',
				name:'',
				name_left:'',
				totlnum_left:''
			},
			conclusion:'',
			numb:'',
			ALLnumb:'',
			
        }
    },

  //   async onLoad(option) {
		// this.options.totlnum = option.numtolt
		// this.Detectionsection()
  //       this.getPoster()
  //   },
	
	async onLoad(option) {
		this.getPoster()
		this.options.totlnum = option.numtolt 
		this.ALLnumb = Number(100 - option.numtolt)
		this.numb = Number(option.shuishan)  
		
		// this.posterObj.views[2].src = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
		// this.posterObj.views[1].text = this.options.totlnum
		if(this.options.totlnum == undefined){
			this.options.totlnum = 100
		}
		
		// this.posterObj.views[2].src = '/static/images/qr.png'
		// this.posterObj.views[0].src = '/static/images/shui_res.png'
		let nickname = uni.getStorageSync("nickname");
		if(nickname){
			// 截取前8位
			let shortName = nickname.length > 8 ? nickname.slice(0, 8) : nickname;
			this.options.name = shortName
			
			if (shortName.length === 8) {
			    this.options.name_left = '260rpx';
			} else if (shortName.length === 7) {
			    this.options.name_left = '268rpx';
			} else if (shortName.length === 6) {
			    this.options.name_left = '280rpx';
			} else if (shortName.length === 5) {
			    this.options.name_left = '298rpx';
			} else if (shortName.length === 4) {
			    this.options.name_left = '310rpx';
			} else if (shortName.length === 3) {
			    this.options.name_left = '320rpx';
			} else if (shortName.length === 2) {
			    this.options.name_left = '340rpx';
			} else {
			    this.options.name_left = '350rpx';
			}
			
		}else{
			let nicknamett = '归海边的少年'
			// 截取前8位
			let shortName = nicknamett.length > 8 ? nicknamett.slice(0, 8) : nicknamett;
			this.options.name = shortName
			// this.posterObj.views[3].text = shortName;
			if (shortName.length === 8) {
			    this.options.name_left = '260rpx';
			} else if (shortName.length === 7) {
			    this.options.name_left = '268rpx';
			} else if (shortName.length === 6) {
			    this.options.name_left = '280rpx';
			} else if (shortName.length === 5) {
			    this.options.name_left = '298rpx';
			} else if (shortName.length === 4) {
			    this.options.name_left = '310rpx';
			} else if (shortName.length === 3) {
			    this.options.name_left = '320rpx';
			} else if (shortName.length === 2) {
			    this.options.name_left = '340rpx';
			} else {
			    this.options.name_left = '350rpx';
			}
		}
		// this.posterObj.views[4].text = '睡商爆表 睡神驾到'
		if (this.options.totlnum >= 0 && this.options.totlnum <= 9) {
			this.options.totlnum_left = '424rpx'
		} else if (this.options.totlnum >= 10 && this.options.totlnum <= 99) {
			this.options.totlnum_left = '406rpx'
		} else if (this.options.totlnum >= 100 && this.options.totlnum <= 999) {
			this.options.totlnum_left = '392rpx'
			// this.posterObj.views[1].css.fontSize = '42rpx'
			// this.posterObj.views[1].css.lineHeight = '65rpx'
		}
		this.Detectionsection()
		this.createContactQrCode()
		
		// this.resultLists()
	},

    computed: {
        // ...mapGetters(['userInfo', 'appConfig', 'shareConfig'])
    },

    methods: {
		async getPoster() {
		    try {
				// this.options.qr_code = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
				// getcontactqrcode({
				// 	remark:'1'
				// }).then(res => {
					
				// })
		        // this.options = res[0]
		        // // #ifdef MP-WEIXIN
		        // this.options.qr_code = res[1]?.qr_code
		        // // #endif
		        // this.options.link = `${baseURL}${basePath}?invite_code=${this.options.code}`
				getcreateContactQrCode({}).then(res => {
					this.options.qr_code = res.qr_code
				})
		        this.$refs.poster.drawCanvas()
		    } catch (e) {
				console.log("eee",e)
		    }
		},
		createContactQrCode(){
			getcreateContactQrCode({}).then(res => {
				// this.posterObj.views[2].src = res.qr_code
				this.options.qr_code = res.qr_code
				// this.posterObj.views[2].src = '/static/images/qr.png'
				
			})
		},
		handleShare() {
			uni.navigateTo({
				url: '/pages/healthtest/Newconclusion?context=' + this.conclusion + "&numtolt=" + this.numb +"&fang=1"
			})
		},
		
		Detectionsection(){
			getDetectionsection({
				score:this.options.totlnum
			}).then(res => {
				// this.options.qr_code = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
				
				this.conclusion = res.detail.remarks
				this.posterObj.views[1].text = this.options.totlnum
				
				if(this.numb<=5){
					// this.posterObj.views[0].src = res.detail.poster[0]
					this.posterObj.views[0].src = '/static/images/Shui_fine.png'
					// this.posterObj.views[0].src = '/static/images/shui_res.png'
					this.options.getBgImgSrc = '/static/images/nice.png'
					// this.posterObj.views[4].text = '睡商爆表 睡神驾到'
				}else if(this.numb >= 6 && this.numb<=15){
					// this.posterObj.views[0].src = res.detail.poster[0]
					this.posterObj.views[0].src = '/static/images/Shui_feneral.png'
					// this.posterObj.views[0].src = '/static/images/shui_res.png'
					this.options.getBgImgSrc = '/static/images/ni.png'
				}else if(this.numb > 15){
					// this.posterObj.views[0].src = res.detail.poster[0]
					this.posterObj.views[0].src = '/static/images/Shui_bad.png'
					// this.posterObj.views[0].src = '/static/images/shui_res.png'
					this.options.getBgImgSrc = '/static/images/nic.png'
				}
				this.loading = false
			})
		},
        saveImageToAlbum() {
            // #ifndef H5
            uni.saveImageToPhotosAlbum({
                filePath: this.imgPath,
                success: (res) => {
                    // this.$toast({
                    //     title: '保存成功'
                    // })
					uni.showToast({
						title: '保存成功',
						icon: 'none'
					})
                },
                fail: (err) => {
                    // this.$toast({
                    //     title: '保存失败'
                    // })
					uni.showToast({
						title: '保存失败',
						icon: 'none'
					})
                }
            })
            // #endif
            // #ifdef H5
            // this.$toast({
            //     title: '请长按图片保存'
            // })
			uni.showToast({
				title: '请长按图片保存',
				icon: 'none'
			})
            // #endif
        },
        handleSuccess(val) {
			console.log("val9::9val",val)
            this.imgPath = val
            this.loading = false
        }
    }
}
</script>
<style lang="scss">
page {
    padding: 0;
}

.invite-fans {
    min-height: 100vh;
    overflow: hidden;

    .poster {
        width: 100%;
        // margin: 40rpx 0;
    }

    .footer {
        padding: 30rpx;
        // width: 100%;
    }

    
}

.loading-view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.loading-spinner {
    width: 30px;
    height: 30px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #153b70;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

.loading-text {
    font-size: 14px;
    color: #666;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
