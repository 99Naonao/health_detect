<template>
    <view class="poster-container">
        <l-painter
            ref="painter"
            :css="{
                width: '750rpx',
                height: '1334rpx',
                'border-radius': '20rpx',
                overflow: 'hidden',
                background: '#ffffff'
            }"
            custom-style="position: fixed; left: 200%"
        >
            <!-- 背景图 -->
            <l-painter-image
                :src="options.backgroundImage"
                :css="{
                    position: 'absolute',
                    width: '750rpx',
                    height: '1334rpx',
                }"
            />
            
            <!-- 顶部标题 -->
            <l-painter-view
                :css="{
                    position: 'absolute',
                    top: '60rpx',
                    left: '0',
                    width: '100%',
                    'text-align': 'center'
                }"
            >
                <l-painter-text
                    :css="{
                        'font-size': '48rpx',
                        'font-weight': 'bold',
                        color: '#333333',
                        'line-height': '1.5'
                    }"
                    :text="options.title"
                />
            </l-painter-view>

            <!-- 分数展示 -->
            <l-painter-view
                :css="{
                    position: 'absolute',
                    top: '180rpx',
                    left: '0',
                    width: '100%',
                    'text-align': 'center'
                }"
            >
                <l-painter-text
                    :css="{
                        'font-size': '120rpx',
                        'font-weight': 'bold',
                        color: '#153b70',
                        'line-height': '1.5'
                    }"
                    :text="options.score"
                />
                <l-painter-text
                    :css="{
                        'font-size': '32rpx',
                        color: '#666666',
                        'line-height': '1.5',
                        'margin-top': '20rpx'
                    }"
                    :text="'分'"
                />
            </l-painter-view>

            <!-- 结论文本 -->
            <l-painter-view
                :css="{
                    position: 'absolute',
                    top: '400rpx',
                    left: '60rpx',
                    width: '630rpx',
                    'text-align': 'left'
                }"
            >
                <l-painter-text
                    :css="{
                        'font-size': '28rpx',
                        color: '#666666',
                        'line-height': '1.6'
                    }"
                    :text="options.conclusion"
                />
            </l-painter-view>

            <!-- 底部二维码 -->
            <l-painter-view
                :css="{
                    position: 'absolute',
                    bottom: '60rpx',
                    left: '0',
                    width: '100%',
                    'text-align': 'center'
                }"
            >
                <!-- #ifdef H5 || APP-PLUS -->
                <l-painter-qrcode
                    css="width: 200rpx; height: 200rpx;"
                    :text="options.qrCodeUrl"
                />
                <!-- #endif -->
                <!-- #ifdef MP -->
                <l-painter-image
                    :src="options.qrCodeImage"
                    css="width: 200rpx; height: 200rpx;"
                />
                <!-- #endif -->
                <l-painter-text
                    :css="{
                        'font-size': '24rpx',
                        color: '#999999',
                        'line-height': '1.5',
                        'margin-top': '20rpx'
                    }"
                    :text="'长按识别二维码查看详情'"
                />
            </l-painter-view>
        </l-painter>

        <!-- 预览和保存按钮 -->
        <view class="action-buttons">
            <button class="preview-btn" @tap="previewImage">预览海报</button>
            <button class="save-btn" @tap="saveImage">保存海报</button>
        </view>
    </view>
</template>

<script>
export default {
    name: "share-poster",
    props: {
        options: {
            type: Object,
            default: () => ({
                backgroundImage: '', // 背景图片
                title: '睡商测评报告', // 标题
                score: '85', // 分数
                conclusion: '', // 结论文本
                qrCodeUrl: '', // 二维码链接
                qrCodeImage: '' // 二维码图片（小程序用）
            })
        }
    },
    data() {
        return {
            tempFilePath: ''
        };
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
        // 生成海报
        async generatePoster() {
            try {
                const painter = this.$refs.painter;
                if (!painter) {
                    throw new Error('painter ref not found');
                }
                
                // 等待组件加载完成
                await new Promise(resolve => setTimeout(resolve, 100));
                
                // 使用render方法
                const res = await painter.render({
                    success: (res) => {
                        this.tempFilePath = res.tempFilePath;
                        this.$emit('success', res.tempFilePath);
                    },
                    fail: (err) => {
                        console.error('生成海报失败:', err);
                        uni.showToast({
                            title: '生成海报失败',
                            icon: 'none'
                        });
                    }
                });
            } catch (error) {
                console.error('生成海报错误:', error);
                uni.showToast({
                    title: '生成海报失败',
                    icon: 'none'
                });
            }
        },

        // 预览海报
        previewImage() {
            if (!this.tempFilePath) {
                uni.showToast({
                    title: '请先生成海报',
                    icon: 'none'
                });
                return;
            }
            uni.previewImage({
                urls: [this.tempFilePath],
                current: this.tempFilePath
            });
        },

        // 保存海报
        saveImage() {
            if (!this.tempFilePath) {
                uni.showToast({
                    title: '请先生成海报',
                    icon: 'none'
                });
                return;
            }
            // #ifdef H5
            uni.showToast({
                title: '请长按图片保存',
                icon: 'none'
            });
            // #endif
            // #ifndef H5
            uni.saveImageToPhotosAlbum({
                filePath: this.tempFilePath,
                success: () => {
                    uni.showToast({
                        title: '保存成功'
                    });
                },
                fail: () => {
                    uni.showToast({
                        title: '保存失败',
                        icon: 'none'
                    });
                }
            });
            // #endif
        }
    },
    mounted() {
        this.generatePoster();
    }
};
</script>

<style lang="scss">
.poster-container {
    min-height: 100vh;
    background: #f5f5f5;
    padding: 20rpx;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.action-buttons {
    position: fixed;
    bottom: 40rpx;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 30rpx;
    padding: 0 40rpx;
    z-index: 100;

    button {
        flex: 1;
        height: 88rpx;
        line-height: 88rpx;
        border-radius: 44rpx;
        font-size: 32rpx;
        font-weight: bold;
        border: none;

        &.preview-btn {
            background: #ffffff;
            color: #153b70;
            border: 2rpx solid #153b70;
        }

        &.save-btn {
            background: #153b70;
            color: #ffffff;
        }
    }
}

l-painter {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>
