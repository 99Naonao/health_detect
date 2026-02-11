<template>
	<view class="report-bg">
		<!-- 顶部标题 -->
		<view class="top-bg"></view>
		<view class="report-title">睡眠检测报告</view>

		<!-- 等级与分数卡片 -->
		<view class="card-row">
			<view class="card card-left">
				<view class="card-label">睡眠等级 {{LBgrade}} 级</view>
				<view class="card-value">{{levelname}}</view>
				<view class="card-desc">(共IV级，等级越高睡眠越差)</view>
				<view class="progress-bar">
					<view class="progress-inner" :style="{width: LBWidth}"></view>
				</view>
			</view>
			<view class="card card-right">
				<view class="card-label">睡商 <text style="color: #1e5183;">{{Totalscore}}</text> 分</view>
				<view class="score-wrapper">
					<div ref="charts1" style="width: 135px;height: 135px;margin-left: 0px;"></div>
				</view>
			</view>
		</view>

		<!-- 报告结论卡片1 -->
		<view class="conclusion-card">
			<view class="conclusion-title">
				睡眠等级报告结论
				<image class="planet-img" src="https://sleep.zsyl.cc/sleeph5/assets/planet.png" mode="widthFix" />
			</view>
			<view class="conclusion-text">
				{{conclusion}}
			</view>
		</view>

		<!-- 报告结论卡片2 -->
		<view class="conclusion-card">
			<view class="conclusion-title">睡商报告结论</view>
			<view class="conclusion-text">
				<view class="unlock-desc">
					<view>
						<view class="conclusion-textT" style="line-height: 1.8;" v-html="conclusionText"></view>
						<view class="more-btn" @click="showIntro = true">查看更多</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 解锁更多 -->
		<view class="unlock-more conclusion-card" style="margin-bottom: 20px;">
			<view class="unlock-btn" style="text-align: center;">解锁更多…</view>
			<view class="unlock-desc" style="margin-top: 20px;">
				想解锁更精准的睡眠“黑科技”？眠加优选脑电检测仪通过专业生物电信号深度剖析，为你生成进阶版睡眠报告，助你一键获取改善建议！
			</view>
		</view>

		<!-- 底部按钮 -->
		<view class="bottom-btns">
			<view style="min-width: 90%;">
				<button class="main-btn share-btn" style="display: flex;justify-content: center;align-items: center;" @click="handleShare">
					<image src="https://oss.zsyl.cc/uploads/images/20250613/202506131138547ab320995.png" style="width: 16px;height: 16px;margin-right: 8px;"></image>
					<view>分享海报得积分</view>
				</button>
			</view>
		</view>

		<!-- 左右两侧保存提示（移到预览层外部，避免被overflow:hidden影响） -->
		<view class="save-tip-left" v-if="showSaveTips && showImagePreview">长按图片保存到相册</view>
		<view class="save-tip-right" v-if="showSaveTips && showImagePreview">长按图片保存到相册</view>

		<!-- 自定义图片预览层（新增缩放+滑动功能） -->
		<view 
			class="image-preview-modal" 
			v-if="showImagePreview" 
			@click="closeImagePreview"
		>
			<image 
				class="preview-image" 
				:src="previewImageUrl" 
				mode="aspectFit"
				:style="{
					maxHeight: '80vh', 
					maxWidth: '90vw',
					transform: `scale(${scale}) translateY(${translateY}px)`,
					transformOrigin: 'center center',
					transition: 'transform 0.2s ease'
				}"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@wheel="handleMouseWheel"
				@click.stop
				@load="onPreviewImageLoad"
			/>
			<view class="preview-close-btn" @click.stop="closeImagePreview"  @touchstart.stop @touchend.stop>×</view>
			<view class="preview-scale-tip">滚轮/双指缩放 ({{(scale * 100).toFixed(0)}}%)</view>
		</view>

		<!-- 介绍弹窗 -->
		<view class="intro-modal" v-if="showIntro">
			<view class="intro-content">
				<view class="intro-title">详细报告</view>
				<view class="intro-scroll-content">
					<view class="intro-text" v-html="conclusionText"></view>
					<!-- PDF导出专用隐藏容器（优化样式，避免文字压缩） -->
					<view class="pdf-source" ref="pdfContent" id="pdfContent">
						<view class="pdf-header">睡商详细报告</view>
						<view class="pdf-body" v-html="conclusionText"></view>
						<view class="pdf-save-tip">长按图片可保存到相册</view>
					</view>
				</view>
				
				<!-- 生成图片 + 关闭按钮 行布局 -->
				<view class="intro-btn-row">
					<view class="intro-btn intro-btn-export" @click="exportToImage" :class="{disabled: exportLoading}">
						<text v-if="exportLoading">生成中...</text>
						<text v-else>生成图片</text>
					</view>
					<view class="intro-btn" @click="showIntro = false">关闭</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	// #ifdef H5
	import html2canvas from 'html2canvas';
	import {
		autoLogin,
		getToken,
		addReport,
		Userscaledetail,
		getUsercentre,
		getdeepseekchat,
		getDetectionsection,
		lastReport,
		getresultLists,
		getuserScaleLists
	} from '../../utils/h5app.js'
	// #endif

	export default {
		props: {
			result: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				loading: true,
				recommendedProducts: [{
					name: '【翼合枕】',
					description: '护颈助眠 90D慢回弹记忆棉',
					image: '/static/images/product1.jpg'
				}, {
					name: '【翼合枕】',
					description: '护颈助眠 90D慢回弹记忆棉',
					image: '/static/images/product1.jpg'
				}, {
					name: '【翼合枕】',
					description: '护颈助眠 90D慢回弹记忆棉',
					image: '/static/images/product1.jpg'
				}, {
					name: '【翼合枕】',
					description: '护颈助眠 90D慢回弹记忆棉',
					image: '/static/images/product1.jpg'
				}],
				gaugeData: [{
					value: 60,
					name: 'score',
					title: {
						offsetCenter: ['0%', '30%']
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '0%']
					}
				}],
				totalOption: {
					series: [{
						type: 'gauge',
						startAngle: 0,
						endAngle: -360,
						pointer: {
							show: false
						},
						progress: {
							show: true,
							overlap: false,
							roundCap: true,
							clip: false,
							itemStyle: {
								color: '#ffaa00',
								borderWidth: 1,
								borderColor: '#ffaa00'
							}
						},
						axisLine: {
							lineStyle: {
								width: 10
							}
						},
						splitLine: {
							show: false,
							distance: 0,
							length: 10
						},
						axisTick: {
							show: true
						},
						axisLabel: {
							show: false,
							distance: 50
						},
						data: {},
						title: {
							fontSize: 14
						},
						detail: {
							width: 50,
							height: 14,
							fontSize: 34,
							color: 'inherit',
							borderColor: 'inherit',
							borderRadius: 20,
							borderWidth: 0,
							formatter: '{value}'
						}
					}]
				},
				conclusion: '',
				numb: '',
				conclusionText: '',
				numtolt: '',
				data__: {},
				fang: 0,
				conclusionid: "",
				explain_guide: '',
				title: '',
				LBgrade: "Ⅰ",
				LBWidth: "10%",
				Totalscore: '',
				LBnumb: "",
				levelname: '',
				// 弹窗控制
				showIntro: false,
				// 图片导出相关
				exportLoading: false,
				_isDestroyed: false,
				// 图片预览相关
				showImagePreview: false,
				previewImageUrl: '',
				showSaveTips: false,
				// 缩放相关变量
				scale: 1.0,
				minScale: 0.5,
				maxScale: 10.0,
				startDistance: 0,
				lastScale: 1.0,
				// 滑动相关变量
				startY: 0,
				translateY: 0,
				lastY: 0,
				// 图片实际尺寸（解决H5尺寸不准）
				previewImageRealHeight: 0,
				previewImageRealWidth: 0
			}
		},
		mounted() {
			this.initData();
			this.initEcharts();
		},
		beforeDestroy() {
			this._isDestroyed = true;
		},
		methods: {
			/**
			 * 初始化页面数据
			 */
			async initData() {
				try {
					const { userInfo, userScaleConclusionDto = {}, userScaleDetailDtos = [] } = this.result;
					this.LBnumb = Number(userScaleConclusionDto.score) || 0;
					this.Totalscore = Number(100 - this.LBnumb * 5) || 0;
					this.conclusionText = userScaleConclusionDto.deepseek_conclusion || '暂无详细报告内容';

					// 获取检测分段数据
					const res = await getDetectionsection({ score: this.LBnumb });
					if (res && res.code !== -1) {
						this.recommendedProducts = res.goods_lists || [];
						this.conclusion = res.detail?.remarks || '暂无报告结论';
						this.title = res.detail?.title || '';
						this.explain_guide = res.detail?.explain_guide || '';
						this.levelname = res.detail?.name || '';

						// 计算睡眠等级进度条宽度
						const detection = res.detection || [];
						for (let i = 0; i < detection.length; i++) {
							const item = detection[i];
							if (this.LBnumb >= item.start && this.LBnumb <= item.end) {
								this.LBgrade = item.level_name || "Ⅰ";
								const indicator = Number(item.degree_indicator) || 0;
								this.LBWidth = `${indicator}%`;
								break;
							}
						}
					}
				} catch (err) {
					console.error('初始化数据失败：', err);
					uni.showToast({ title: '数据加载失败', icon: 'none' });
				} finally {
					this.loading = false;
				}
			},

			/**
			 * 初始化Echarts仪表盘
			 */
			initEcharts() {
				this.$nextTick(() => {
					if (!this.$refs.charts1 || this._isDestroyed) return;
					const chart = echarts.init(this.$refs.charts1);
					this.gaugeData[0].value = this.Totalscore;
					this.totalOption.series[0].data = this.gaugeData;
					chart.setOption(this.totalOption);

					window.addEventListener('resize', () => chart.resize());
					this.$once('hook:beforeDestroy', () => {
						chart.dispose();
					});
				});
			},

			/**
			 * 分享按钮点击事件
			 */
			handleShare() {
				uni.navigateTo({
					url: `/pages/invite_poster/invite_poster?numtolt=${this.Totalscore}&shuishan=${this.LBnumb}`
				});
			},

			/**
			 * 生成报告图片（核心修复：解决文字压缩/拉伸）
			 */
			exportToImage() {
				// #ifdef H5
				if (!this.conclusionText) {
					uni.showToast({ title: '报告内容为空，无法生成', icon: 'none' });
					return;
				}
				if (this.exportLoading) return;

				this.exportLoading = true;

				setTimeout(async () => {
					if (this._isDestroyed) {
						this.exportLoading = false;
						return;
					}

					try {
						await new Promise(resolve => setTimeout(resolve, 200));

						// 1. 获取原始容器
						let originalContainer = this.$refs.pdfContent;
						if (originalContainer && originalContainer.$el) {
							originalContainer = originalContainer.$el;
						}
						if (!originalContainer) {
							originalContainer = document.getElementById('pdfContent');
						}
						if (!originalContainer || !(originalContainer instanceof HTMLElement)) {
							throw new Error('未找到报告内容容器');
						}

						// 2. 创建临时渲染容器
						const tempContainer = document.createElement('div');
						tempContainer.style.cssText = `
							${window.getComputedStyle(originalContainer).cssText}
							position: absolute !important;
							top: -9999px !important;
							left: -9999px !important;
							z-index: -9999 !important;
							visibility: visible !important;
							opacity: 1 !important;
							overflow: auto !important;
							white-space: normal !important;
							word-wrap: break-word !important;
							word-break: break-all !important;
							width: ${originalContainer.offsetWidth || 375}px !important;
							height: auto !important;
							background: #ffffff !important;
							padding: 15px !important;
							box-sizing: border-box !important;
							font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Arial, sans-serif !important;
							font-size: 14px !important;
							line-height: 1.8 !important;
							letter-spacing: 0.5px !important;
							color: #333 !important;
						`;

						tempContainer.innerHTML = `
							<div class="pdf-header" style="font-size: 18px !important; font-weight: bold !important; text-align: center !important; margin-bottom: 15px !important; padding-bottom: 10px !important; border-bottom: 1px solid #eee !important;">睡商详细报告</div>
							<div class="pdf-body" style="font-size: 14px !important; line-height: 1.8 !important; color: #333 !important; text-align: left !important;">${this.conclusionText}</div>
							<div class="pdf-save-tip" style="font-size: 12px !important; color: #999 !important; text-align: center !important; margin-top: 15px !important; padding-top: 10px !important; border-top: 1px solid #eee !important;">长按图片可保存到相册</div>
						`;
						document.body.appendChild(tempContainer);
						tempContainer.offsetHeight;

						// 3. html2canvas配置
						const canvas = await html2canvas(tempContainer, {
							scale: window.devicePixelRatio || 2,
							useCORS: true,
							logging: false,
							backgroundColor: '#ffffff',
							scrollX: 0,
							scrollY: 0,
							width: tempContainer.offsetWidth,
							height: tempContainer.scrollHeight,
							allowTaint: true,
							taintTest: false,
							ignoreElements: (el) => false,
							imageTimeout: 20000,
							removeContainer: false,
							letterRendering: true,
							useFontLoading: true,
							windowWidth: document.documentElement.clientWidth,
							windowHeight: document.documentElement.clientHeight,
							scaleRatio: 1
						});

						// 4. 生成图片并清理临时容器
						const imgUrl = canvas.toDataURL('image/png', 1.0); 
						if (tempContainer && tempContainer.parentNode) {
							document.body.removeChild(tempContainer);
						}

						// 5. 调用统一的预览方法打开图片
						this.openImagePreview(imgUrl);

						this.$nextTick(() => {
							uni.showToast({
								title: '图片生成成功，长按可保存',
								icon: 'success',
								duration: 3000
							});
						});

					} catch (err) {
						console.error('生成图片失败：', err);
						uni.showToast({
							title: `生成失败：${err.message || '未知错误'}`,
							icon: 'none',
							duration: 3000
						});
					} finally {
						this.exportLoading = false;
					}
				}, 800);
				// #endif

				// #ifndef H5
				uni.showToast({ title: '请在浏览器（H5）环境下生成', icon: 'none' });
				// #endif
			},

			/**
			 * 打开图片预览（统一初始化逻辑）
			 */
			openImagePreview(imgUrl) {
				// 初始化预览参数
				this.previewImageUrl = imgUrl;
				this.showImagePreview = true;
				this.showSaveTips = true;
				// 重置缩放和滑动
				this.scale = 1.0;
				this.lastScale = 1.0;
				this.translateY = 0;
				this.previewImageRealHeight = 0;
				this.previewImageRealWidth = 0;
				// 锁定页面滚动
				document.body.style.overflow = 'hidden';
				document.body.style.touchAction = 'none';
				document.body.style.webkitOverflowScrolling = 'none';
			},

			/**
			 * 关闭图片预览
			 */
			closeImagePreview() {
				this.showImagePreview = false;
				this.showSaveTips = false;
				this.previewImageUrl = ''; 
				this.scale = 1.0;
				this.lastScale = 1.0;
				this.translateY = 0;
				this.previewImageRealHeight = 0;
				this.previewImageRealWidth = 0;
				// 恢复页面滚动
				document.body.style.overflow = '';
				document.body.style.touchAction = '';
				document.body.style.webkitOverflowScrolling = 'touch';
			},

			/**
			 * 计算双指之间的距离
			 */
			getDistance(touches) {
				const x = touches[0].clientX - touches[1].clientX;
				const y = touches[0].clientY - touches[1].clientY;
				return Math.sqrt(x * x + y * y);
			},

			/**
			 * 图片加载完成事件（记录实际尺寸）
			 */
			onPreviewImageLoad(e) {
				this.previewImageRealHeight = e.detail.height;
				this.previewImageRealWidth = e.detail.width;
			},

			/**
			 * 触摸开始事件
			 */
			handleTouchStart(e) {
				const touches = e.touches;
				// 双指缩放初始化
				if (touches.length === 2) {
					this.startDistance = this.getDistance(touches);
					this.lastScale = this.scale;
				} 
				// 单指滑动初始化
				else if (touches.length === 1) {
					this.startY = touches[0].clientY;
					this.lastY = this.translateY;
					e.stopPropagation();
				}
			},

			/**
			 * 触摸移动事件
			 */
			handleTouchMove(e) {
				const touches = e.touches;
				
				// 仅双指缩放时阻止默认行为
				if (touches.length === 2) {
					e.preventDefault();
					e.stopPropagation();
				} else {
					e.stopPropagation();
				}
				
				// 双指缩放逻辑
				if (touches.length === 2) {
					const currentDistance = this.getDistance(touches);
					const scaleRatio = currentDistance / this.startDistance;
					let newScale = this.lastScale * scaleRatio;
					newScale = Math.max(this.minScale, Math.min(this.maxScale, newScale));
					this.scale = newScale;
				} 
				// 单指滑动逻辑
				else if (touches.length === 1) {
					const moveY = touches[0].clientY - this.startY;
					let newY = this.lastY + moveY;
					
					// 计算图片高度
					let imgHeight = 0;
					const viewportHeight = window.innerHeight * 0.8;
					
					if (this.previewImageRealHeight > 0) {
						imgHeight = this.previewImageRealHeight * this.scale;
					} else {
						imgHeight = viewportHeight * this.scale;
					}
					
					// 计算滑动边界
					let maxY = 0;
					let minY = 0;
					if (this.scale > 1.0) {
						maxY = (imgHeight - viewportHeight) / 2;
						minY = -maxY;
					}
					
					newY = Math.max(minY, Math.min(maxY, newY));
					this.translateY = newY;
				}
			},

			/**
			 * 鼠标滚轮事件（H5端缩放）
			 */
			handleMouseWheel(e) {
				e.preventDefault();
				const delta = e.deltaY > 0 ? -0.1 : 0.1;
				let newScale = this.scale + delta;
				newScale = Math.max(this.minScale, Math.min(this.maxScale, newScale));
				this.scale = newScale;
			}
		}
	}
</script>

<style scoped lang="scss">
	.report-bg {
		min-height: 100vh;
		background-size: 100% 200px;
		padding-bottom: 20px;
		background-color: #f5f7fa;
	}


	.top-bg {
		margin-top: -30px;
		width: 100%;
		height: 160px;
		background-image: url('https://oss.zsyl.cc/uploads/images/20250613/20250613162556f579e8779.png');
		background-size: 100% 100%;
	}

	.report-title {
		color: #fff;
		font-size: 26px;
		font-weight: bold;
		text-align: center;
		padding: 38px 0 18px 0;
		letter-spacing: 2px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.card-row {
		display: flex;
		justify-content: space-between;
		margin: 0 18px;
		margin-top: 10px;
	}

	.card {
		background: #fff;
		border-radius: 18px;
		box-shadow: 0px 0px 18px rgba(236, 229, 243, 1);
		padding: 18px 16px 18px 16px;
		width: 38%;
		display: flex;
		flex-direction: column;
		border: 1px solid #ece5f3;
	}

	.card-label {
		color: #333;
		font-size: 15px;
		margin-bottom: 8px;
	}

	.card-value {
		font-size: 28px;
		color: #1a2a5c;
		font-weight: bold;
		margin-bottom: 2px;
	}

	.card-desc {
		font-size: 13px;
		color: #888;
		margin-bottom: 10px;
	}

	.progress-bar {
		width: 100%;
		height: 20px;
		background: #a6a6a6;
		border-radius: 12px;
		overflow: hidden;
		margin-top: 20px;
		border: 3px solid #e5e5e5;
		box-shadow: 4px 4px 12px rgba(229, 229, 229, 0.5);
	}

	.progress-inner {
		height: 100%;
		background: linear-gradient(90deg, #6ad1ff 0%, #4e7fff 100%);
		border-radius: 12px;
		width: 66%;
		transition: width 0.3s ease;
	}

	.card-right {
		justify-content: center;
	}

	.score-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
	}

	.conclusion-card {
		background: #f7fbff;
		border-radius: 16px;
		margin: 18px 18px 0 18px;
		padding: 18px 16px 16px 16px;
		box-shadow: 0 0px 10px rgba(16, 66, 115, 0.2);
		position: relative;
		border: 2px solid #e5e5e5;
	}

	.conclusion-title {
		font-size: 16px;
		color: #000;
		font-weight: bold;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}

	.planet-img {
		width: 32px;
		height: 32px;
		margin-left: 8px;
	}

	.conclusion-text {
		font-size: 14px;
		color: #333;
		line-height: 1.7;
	}

	.unlock-more {
		margin: 30px 18px 0 18px;
		background: #fff;
		border-radius: 16px;
		padding: 16px 16px 12px 16px;
		box-shadow: 0 0px 10px rgba(16, 66, 115, 0.6);
		position: relative;
	}

	.unlock-btn {
		color: #fff;
		border-radius: 16px;
		padding: 5px 0;
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 8px;
		width: 120px;
		margin: 0 auto 8px auto;
		display: inline-block;
		background: url('https://oss.zsyl.cc/uploads/images/20250613/202506131138543ff101015.png'),
			linear-gradient(90deg, #104273 0%, #104273 100%);
		position: absolute;
		top: -15px;
		left: calc(50% - 60px);
	}

	.unlock-desc {
		font-size: 13px;
		color: #666;
		line-height: 1.6;
	}

	.bottom-btns {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 12px 0 18px 0;
		background-color: #f5f7fa;
		z-index: 10;
	}

	.main-btn {
		flex: 1;
		margin: 0 10px;
		background: #1a2a5c;
		color: #fff;
		border-radius: 30px;
		font-size: 16px;
		font-weight: bold;
		padding: 12px 0;
		text-align: center;
		border: none;
	}

	.share-btn {
		background: #1a2a5c;
		color: #fff;
		border: 1.5px solid #1a2a5c;
	}

	.conclusion-textT {
		font-size: 14px;
		color: #333;
		line-height: 1.6;
		text-align: left;
		height: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		padding-right: 10px;
	}

	.more-btn {
		text-align: center;
		color: #3575f6;
		font-size: 14px;
		margin-top: 10px;
		padding: 5px 0;
		cursor: pointer;
	}

	/* 弹窗样式 - 终极兼容iOS+Android（解决内容多导致的挤压+按钮样式/尺寸优化） */
	.intro-modal {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background: rgba(0, 0, 0, 0.6);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  z-index: 1000;
	  -webkit-overflow-scrolling: touch;
	  touch-action: auto;
	  /* Android直接用0，iOS通过@supports单独加安全区 */
	  padding: 0;
	}

	.intro-content {
	  width: 90%;
	  max-width: 320px;
	  background: #fff;
	  border-radius: 14px;
	  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
	  /* 核心：Android兼容的固定高度（放弃vh嵌套calc） */
	  height: 85%; /* 占屏幕85%，比vh更稳定 */
	  max-height: 500px; /* 最大高度兜底，避免大屏拉伸 */
	  min-height: 300px; /* 最小高度，确保标题/按钮能显示 */
	  /* 相对定位：为内部绝对元素做参考 */
	  position: relative;
	  overflow: hidden; /* 严格限制溢出 */
	  /* 基础padding（Android直接用固定值） */
	  padding: 22px 18px;
	}

	/* 标题：绝对固定在顶部，彻底不被挤压 */
	.intro-title {
	  position: absolute;
	  top: 22px; /* 和容器padding-top对齐 */
	  left: 50%;
	  transform: translateX(-50%);
	  /* 强制固定尺寸，确保文字完整显示 */
	  min-width: 120px; /* 至少能装下“详细报告”4个字 */
	  min-height: 32px; /* 强制高度，避免被压缩 */
	  height: auto;
	  display: flex !important;
	  align-items: center;
	  justify-content: center;
	  background: #ede6f7;
	  color: #6f4fc7;
	  font-size: 16px;
	  font-weight: bold;
	  border-radius: 16px;
	  padding: 6px 18px;
	  box-shadow: 0 2px 8px rgba(111, 79, 199, 0.06);
	  z-index: 10; /* 确保在最上层显示 */
	  /* 强制文字不换行、不截断 */
	  white-space: nowrap;
	  overflow: visible;
	}

	/* 滚动内容容器：限定在标题下、按钮上的中间区域 */
	.intro-scroll-content {
	  position: absolute;
	  top: 66px; /* 标题高度+间距（22px padding + 32px标题 + 12px间距） */
	  left: 18px;
	  right: 18px;
	  bottom: 70px; /* 按钮行高度+间距 */
	  overflow-y: auto;
	  -webkit-overflow-scrolling: touch;
	  /* Android滚动优化 */
	  scrollbar-width: thin;
	  /* 避免文字贴边 */
	  padding: 0 2px;
	}

	.intro-text {
	  font-size: 13px;
	  color: #333;
	  line-height: 1.7;
	  text-align: left;
	  width: 100%;
	}

	/* 按钮行：绝对固定在底部，彻底不被挤压 + 优化内边距适配白色区域 */
	.intro-btn-row {
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  /* 强制固定高度，确保按钮完整（适度降低高度） */
	  height: 60px;
	  display: flex;
	  align-items: center; /* 垂直居中按钮，避免截断 */
	  justify-content: space-between;
	  /* 优化padding，适配白色区域，减少左右边距 */
	  padding: 8px 15px 10px;
	  box-sizing: border-box; /* 确保padding不超出高度 */
	  z-index: 10;
	  /* 确保按钮行在白色区域内，不超出圆角 */
	  border-bottom-left-radius: 14px;
	  border-bottom-right-radius: 14px;
	}

	/* 基础按钮样式 + 缩小尺寸 */
	.intro-btn {
	  flex: 1;
	  text-align: center;
	  /* 缩小内边距，降低按钮高度 */
	  padding: 8px 0;
	  /* 增大左右间距，减少按钮宽度占比 */
	  margin: 0 5px;
	  border-radius: 8px;
	  font-size: 13px; /* 缩小字体 */
	  font-weight: 500;
	  cursor: pointer;
	  /* 降低最小高度，缩小按钮整体尺寸 */
	  min-height: 36px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}

	/* 生成图片按钮：补充专属样式 */
	.intro-btn-export {
	  background-color: #6f4fc7;
	  color: #ffffff;
	}

	/* 关闭按钮：补充专属样式（区分生成图片按钮） */
	.intro-btn:not(.intro-btn-export) {
	  background-color: #f5f5f5;
	  color: #666666;
	  border: 1px solid #eeeeee;
	}

	/* 禁用状态样式（生成图片按钮） */
	.intro-btn-export.disabled {
	  background-color: #c2b2e0;
	  cursor: not-allowed;
	}

	/* iOS单独适配（不影响Android） */
	@supports (padding: env(safe-area-inset-bottom)) {
	  .intro-modal {
		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
	  }
	  .intro-content {
		/* iOS调整高度，兼容安全区 */
		height: calc(85% - env(safe-area-inset-top) - env(safe-area-inset-bottom));
		margin: env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0;
	  }
	  .intro-btn-row {
		/* iOS按钮行适配底部安全区 */
		padding-bottom: calc(10px + env(safe-area-inset-bottom));
		height: calc(60px + env(safe-area-inset-bottom));
	  }
	}

	.intro-btn-export {
		background: #1a2a5c;
		color: #fff;
	}

	.intro-btn-export.disabled {
		background: #cccccc;
		color: #999;
		cursor: not-allowed;
	}

	/* 隐藏的PDF/图片生成源容器 */
	.pdf-source {
		position: absolute;
		top: -9999px;
		left: -9999px;
		z-index: -9999;
		visibility: hidden;
		width: 375px;
		background: #ffffff;
		padding: 15px;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Arial, sans-serif;
		font-size: 14px;
		line-height: 1.8;
		letter-spacing: 0.5px;
	}

	.pdf-header {
		font-size: 18px;
		font-weight: bold;
		color: #1a2a5c;
		text-align: center;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
	}

	.pdf-body {
		font-size: 14px;
		color: #333;
		line-height: 1.8;
		text-align: left;
		word-wrap: break-word;
		word-break: break-all;
	}

	.pdf-save-tip {
		font-size: 12px;
		color: #999;
		text-align: center;
		margin-top: 15px;
		padding-top: 10px;
		border-top: 1px solid #eee;
	}

	/* 保存提示样式 */
	.save-tip-left,
	.save-tip-right {
		position: fixed;
		top: 50%;
		color: #fff;
		font-size: 14px;
		background: rgba(0, 0, 0, 0.7);
		padding: 8px 12px;
		border-radius: 6px;
		z-index: 10000 !important;
		transform: translateY(-50%);
		box-sizing: border-box;
		max-width: 120px;
		text-align: center;
		pointer-events: none;
	}

	.save-tip-left {
		left: 20px;
	}

	.save-tip-right {
		right: 20px;
	}

	/* 图片预览层样式 */
	.image-preview-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 20px;
		overflow: hidden !important;
		// touch-action: none !important;
		-webkit-overflow-scrolling: touch;
	}

	.preview-image {
		max-width: 90vw !important;
		max-height: 80vh !important;
		border-radius: 8px;
		object-fit: contain !important;
		touch-action: pan-y !important;
		-webkit-touch-callout: none;
		user-select: none;
		-webkit-overflow-scrolling: touch;
	}

	.preview-close-btn {
		position: absolute;
		top: 20px;
		right: 20px;	
		width: 36px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background: rgba(255, 255, 255, 0.7);
		color: #fff;
		border-radius: 50%;
		font-size: 20px;
		cursor: pointer;
		pointer-events: auto !important;
		z-index: 10000 !important;
	}

	/* 增加hover/active状态，提升交互体验 */
	.preview-close-btn:hover {
		background: rgba(255, 255, 255, 0.5);
	}

	.preview-close-btn:active {
		background: rgba(255, 255, 255, 0.7);
	}

	.preview-scale-tip {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		color: #fff;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.5);
		padding: 4px 12px;
		border-radius: 12px;
	}

	/* 加载动画 */
	.loading-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0 0;
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
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
