<template>
    <view>
        <l-painter
            ref="painter"
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
    </view>
</template>

<script>
	
export default {
    name: "share-poster",
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {};
    },
    computed: {
        getConfig() {
			
            return (
                this.options 
            );
        },
        getBgImgSrc() {
			return require("@/static/images/睡商海报-02.jpg")
			// if(this.options.totlnum){
				
			// }
			
            // const { background_url, background_type } = this.getConfig;
            // return background_type == 1
            //     ? require("@/bundle/static/images/invitation_poster.png")
            //     : background_url;
        },
        showPosterCon() {
            const { show } = this.getConfig
			console.log("show::88",show)
            return Object.keys(show).some((key) => show[key]);
        },
    },
    methods: {
        drawCanvas() {
			console.log("show::8998",show)
            this.$refs.painter.canvasToTempFilePathSync({
                fileType: "png",
                // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
                pathType: "url",
                quality: 1,
                success: (res) => {
                    this.$emit("success", res.tempFilePath);
                },
            });
        },
    },
};
</script>

<style></style>
