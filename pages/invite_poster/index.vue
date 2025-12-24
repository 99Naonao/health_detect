<template>
	<view class="page" style="position: relative;">
		<view class="poster" style="position: relative;" v-if="!show_poster">
			<lPainter :board="posterObj" ref="painter"></lPainter>
			
		</view>
		<view class="footer-btn" style="position: absolute;bottom: -50px;padding: 10px 0px;width: 100%;left: 0;display: flex;">
			<view class="save" style="margin:0 auto;padding: 10px;border-radius: 10px;background-color: #F77913;border:none;" @click="toSave">
				分享海报领积分
			</view>
			<view class="save" style="margin:0 auto;padding: 10px;border-radius: 10px;background-color: #ccc;border:none;" @click="handleShare">
				返回 
			</view>
		</view>
	<!-- 	<view class="radar-section">
		  <div ref="radarChart" class="radar-chart"></div>
		</view> -->
		<!-- 生成的图片 -->
		<uni-popup type="center" ref="posterImg" :maskClick="false">
			<view class="poster-img">
				<text @click="closePopup"></text>
				<image :src="path" mode="" @click="previewImg"></image>
				<!-- #ifdef H5 -->
				<view class="">
					长按图片保存到手机
				</view>
				<!-- #endif -->
				<!-- #ifndef H5 -->
				<view class="">
					点击图片保存到手机
				</view>
				<!-- #endif -->
			</view>
		</uni-popup>
	<!-- 	<view v-show="loading" class="loading-view">
		    <view class="loading-spinner"></view>
		    <text class="loading-text">加载中...</text>
		</view> -->
	</view>
</template>

<script>
	import * as echarts from 'echarts';
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	import lPainter from '../../components/lime-painter/index.vue'
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
		getresultLists,
		getcreateContactQrCode
	} from '../../utils/h5app.js'
	// #endif
	export default {
		components: {
			lPainter,
			uniPopup
		},
		data() {
			return {
				show_poster:false,//显示海报
				loading: true,
				path: '', //生成的图片地址
				posterObj: {
					width: '710rpx',
					height: '1300rpx',
					background: '#fff',
					borderRadius: '16rpx',
					views: [
						{
							type: 'image',
							src: 'https://oss.zsyl.cc/uploads/images/20250613/202506131448330f54c2812.png',
							css: {
								left: '0rpx',
								top: '0rpx',
								width: '710rpx',
								height: '1300rpx',
								borderRadius: '16rpx'
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								fontSize: '60rpx',
								color: '#FF825C',
								fontWeight: 'bold',
								lineHeight: '55rpx',
								left: '10rpx',
								top: '110rpx',
								width: '606rpx'
							}
						},
						{
							type: 'image',
							src: '',
							css: {
								left: '490rpx',
								top: '1090rpx',
								width: '178rpx',
								height: '178rpx',
								borderRadius: '0rpx'
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								fontSize: '30rpx',
								color: '#FF825C',
								fontWeight: 'bold',
								lineHeight: '55rpx',
								left: '30rpx',
								top: '70rpx',
								width: '600rpx'
							}
						},
						// {
						// 	type: 'image',
						// 	src: '',
						// 	css: {
						// 		left: '100rpx',
						// 		top: '560rpx',
						// 		width: '500rpx',
						// 		height: '300rpx',
						// 		borderRadius: '10rpx',
						// 	}
						// },
						// {
						// 	type: 'text',
						// 	text: '',
						// 	css: {
						// 		fontSize: '42rpx',
						// 		color: '#4298DD',
						// 		fontWeight: '400',
						// 		lineHeight: '45rpx',
						// 		left: '188rpx',
						// 		top: '450rpx',
						// 		width: '606rpx'
						// 	}
						// },
						
					]
				}, //画板数据
				footer_arr: [
					'https://s.yun-live.com/images/20210201/d502979c734077930cee837739ee9285.png',
					'https://s.yun-live.com/images/20210201/0289000561415e1f9f6e542a3553906d.png',
					'https://s.yun-live.com/images/20210201/5d2e237728e1dd8727835ca95084721e.png',
					'https://s.yun-live.com/images/20210201/15075d31c26cc446333d569b0d2346e8.png',
					'https://s.yun-live.com/images/20210201/8f4bbf78cab7a20079992c69e997e30b.png',
					'https://s.yun-live.com/images/20210201/6e716c556d1a80e90ecb0260e0990add.png'
				], //底部选项
				check_idx: 0, //底部选中的下标
				options: {
					totlnum:'',
					qr_code:'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png',
					getBgImgSrc:''
				},
				conclusion:'',
				numb:"",
				ALLnumb:0,
				radarData: [80, 60, 90, 70, 85, 75], // 示例数据
				radarIndicators: [
				  { name: '皮肤年龄', max: 200 },
				  { name: '心率', max: 200 },
				  { name: '血氧饱和度', max: 200 },
				  { name: '进取性', max: 200 },
				  { name: '活力度', max: 200 },
				  { name: '焦虑度', max: 200 }
				],
				radarBase64:''
			}
		},
		onLoad(option) {
			this.options.totlnum = option.numtolt 
			this.ALLnumb = Number(100 - option.numtolt)
			this.numb = Number(option.shuishan)  
			
			// this.posterObj.views[2].src = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
			this.posterObj.views[1].text = this.options.totlnum
			if(this.options.totlnum == undefined){
				this.options.totlnum = 0
			}
			// this.posterObj.views[2].src = '/static/images/qr.png'
			// this.posterObj.views[0].src = '/static/images/shui_res.png'
			this.posterObj.views[0].src = '/static/images/Shui_fine.png'
			let nickname = uni.getStorageSync("nickname");
			if(nickname){
				// 截取前8位
				let shortName = nickname.length > 8 ? nickname.slice(0, 8) : nickname;
				this.posterObj.views[3].text = shortName;
				
				if (shortName.length === 8) {
				    this.posterObj.views[3].css.left = '260rpx';
				} else if (shortName.length === 7) {
				    this.posterObj.views[3].css.left = '268rpx';
				} else if (shortName.length === 6) {
				    this.posterObj.views[3].css.left = '280rpx';
				} else if (shortName.length === 5) {
				    this.posterObj.views[3].css.left = '298rpx';
				} else if (shortName.length === 4) {
				    this.posterObj.views[3].css.left = '310rpx';
				} else if (shortName.length === 3) {
				    this.posterObj.views[3].css.left = '320rpx';
				} else if (shortName.length === 2) {
				    this.posterObj.views[3].css.left = '340rpx';
				} else {
				    this.posterObj.views[3].css.left = '350rpx';
				}
				// this.posterObj.views[3].text = nickname
				
			}else{
				let nicknamett = '归海边的少年'
				// 截取前8位
				let shortName = nicknamett.length > 8 ? nicknamett.slice(0, 8) : nicknamett;
				this.posterObj.views[3].text = shortName;
				
				if (shortName.length === 8) {
				    this.posterObj.views[3].css.left = '260rpx';
				} else if (shortName.length === 7) {
				    this.posterObj.views[3].css.left = '268rpx';
				} else if (shortName.length === 6) {
				    this.posterObj.views[3].css.left = '280rpx';
				} else if (shortName.length === 5) {
				    this.posterObj.views[3].css.left = '298rpx';
				} else if (shortName.length === 4) {
				    this.posterObj.views[3].css.left = '310rpx';
				} else if (shortName.length === 3) {
				    this.posterObj.views[3].css.left = '320rpx';
				} else if (shortName.length === 2) {
				    this.posterObj.views[3].css.left = '340rpx';
				} else {
				    this.posterObj.views[3].css.left = '350rpx';
				}
			}
			// this.posterObj.views[4].text = '睡商爆表 睡神驾到'
			if (this.options.totlnum >= 0 && this.options.totlnum <= 9) {
				this.posterObj.views[1].css.left = '394rpx'
			} else if (this.options.totlnum >= 10 && this.options.totlnum <= 99) {
				this.posterObj.views[1].css.left = '374rpx'
			} else if (this.options.totlnum >= 100 && this.options.totlnum <= 999) {
				this.posterObj.views[1].css.left = '372rpx'
				this.posterObj.views[1].css.fontSize = '42rpx'
				this.posterObj.views[1].css.lineHeight = '65rpx'
			}
			this.Detectionsection()
			this.resultLists()
			this.createContactQrCode()
		},
		watch: {
			// check_idx(newVal,oldVal){
			// 	console.log(111,newVal);
			// 	console.log(222,oldVal);
			// }
		},
		mounted() {
		  this.$nextTick(() => {
		    this.initRadarChart();
			this.updateRadarToPoster()
		  });
		},
		methods: {
			createContactQrCode(){
				getcreateContactQrCode({}).then(res => {
					this.posterObj.views[2].src = res.qr_code
					// this.posterObj.views[2].src = '/static/images/qr.png'
					
				})
			},
			
			resultLists(){
				getresultLists({
					page_no:1,
					page_size:1
				}).then(res => {
					console.log('res.res:res', res)
					this.text2 = res
					const {
						physiologyscorereport, // 综合
						afreport,
						bpreport,
						essentialreport,
						healthScoreReport,
						hrreport,
						riskreport,
						spo2hreport,
						calculatedReport,
						aggressivityreport,
						vitalityreport,
						anxietyreport
					} = res.lists[0].result
								
					this.radarData[0] = essentialreport.data.age
					this.radarData[1] = hrreport.data.hrbpm
					this.radarData[2] = spo2hreport.data
					this.radarData[3] = (aggressivityreport.data).toFixed(2)
					this.radarData[4] = (vitalityreport.data).toFixed(2)
					this.radarData[5] = (anxietyreport.data).toFixed(2)
					
					console.log("123,radarData:",this.radarData)
					
					this.updateRadarToPoster()
					
				})
			},
			initRadarChart() {
			    const chartDom = this.$refs.radarChart;
			    if (!chartDom) return;
			    const myChart = echarts.init(chartDom);
				console.log("myChart:myChart",myChart)
			    const option = {
			      tooltip: {},
			      radar: {
			        indicator: this.radarIndicators,
			        radius: 60
			      },
			      series: [{
			        name: '睡眠六维',
			        type: 'radar',
			        data: [
			          {
			            value: this.radarData,
			            name: '本次得分',
			            areaStyle: { color: 'rgba(78,127,255,0.3)' },
			            lineStyle: { color: '#4e7fff' }
			          }
			        ]
			      }]
			    };
			    myChart.setOption(option);
			  },
			  
			async updateRadarToPoster() {
			    // 生成base64并赋值到 posterObj.views
				
			    const radarBase64 = await this.generateRadarBase64();
				// console.log("测试你一定,",radarBase64)
			    this.radarBase64 = radarBase64;
			    // 直接赋值到 posterObj.views[3].src
			    if (this.posterObj.views[3]) {
			      this.posterObj.views[3].src = radarBase64;
			    }
			  },
			Detectionsection(){
				getDetectionsection({
					score:this.numb
				}).then(res => {
					// this.posterObj.views[2].src = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
					// this.options.qr_code = 'https://oss.banmask.cn/40/image/2025/06/68358a45b9c54ed9e4c751c7394b02da.png'
					this.conclusion = res.detail.remarks
					this.posterObj.views[1].text = this.options.totlnum
					// this.posterObj.views[2].src = '/static/images/qr.png'
					
					if(this.numb<=5){
						// this.posterObj.views[0].src = res.detail.poster[0]
						this.posterObj.views[0].src = '/static/images/Shui_fine.png'
						// this.posterObj.views[0].src = '/static/images/shui_res.png'
						this.options.getBgImgSrc = '/static/images/nice.png'
						// this.posterObj.views[4].text = '睡商爆表 睡神驾到'
						// this.posterObj.views[4].css.color = '#4298DD'
					}else if(this.numb >= 6 && this.numb<=15){
						// this.posterObj.views[0].src = res.detail.poster[0]
						this.posterObj.views[0].src = '/static/images/Shui_feneral.png'
						// this.posterObj.views[0].src = '/static/images/shui_res.png'
						this.options.getBgImgSrc = '/static/images/ni.png'
						// this.posterObj.views[4].text = '睡商在线 状态不错'
						// this.posterObj.views[4].css.color = '#3287A4'
					}else if(this.numb > 15){
						// this.posterObj.views[0].src = res.detail.poster[0]
						this.posterObj.views[0].src = '/static/images/Shui_bad.png'
						// this.posterObj.views[0].src = '/static/images/shui_res.png'
						this.options.getBgImgSrc = '/static/images/nic.png'
						// this.posterObj.views[4].text = '睡商欠费 急需充值'
						// this.posterObj.views[4].css.color = '#FFAA90 '
					}
					this.loading = false
					
				})
			},
			previewImg(){
				// #ifdef H5
				return;
				// #endif
				uni.previewImage({
					current:this.path,
					urls: [this.path]
				});
			},
			closePopup(){
				this.$refs.posterImg.close();
				this.show_poster=false;
			},
			handleShare() {
				uni.navigateTo({
					url: '/pages/healthtest/Newconclusion?context=' + this.conclusion + "&numtolt=" + this.numb +"&fang=1"
				})
			},
			generateRadarBase64() {
				return new Promise((resolve) => {
					// 创建一个离屏canvas
					const chartDom = document.createElement('div');
					chartDom.style.width = '300px';
					chartDom.style.height = '220px';
					document.body.appendChild(chartDom);
					const myChart = echarts.init(chartDom);
					const option = {
						radar: {
							indicator: this.radarIndicators,
							radius:60
						},
						series: [{
							type: 'radar',
							data: [
								{
									value: this.radarData,
									areaStyle: { color: 'rgba(78,127,255,0.3)' },
									lineStyle: { color: '#4e7fff' }
								}
							]
						}]
					};
					myChart.setOption(option);
					// console.log("雷达图：",myChart.getDataURL())
					setTimeout(() => {
						
						const base64 = myChart.getDataURL({
							pixelRatio: 1,
							backgroundColor: 'rgba(255, 255, 255, 1)',
							border:'none'
						});
						myChart.dispose();
						document.body.removeChild(chartDom);
						resolve(base64);
					}, 500);
				});
			},
			async toSave() {
				uni.showLoading({
					title:'海报生成中',
				});
				// #ifdef H5
				// 1. 先生成雷达图base64
				// const radarBase64 = await this.generateRadarBase64();
				// 2. 移除旧的雷达图（如有）
				// this.posterObj.views = this.posterObj.views.filter(v => v._type !== 'radar');
				// 3. 动态插入到 posterObj.views（如第3个元素）
				// this.posterObj.views.splice(3, 0, {
				// 	type: 'image',
				// 	src: radarBase64,
				// 	css: {
				// 		left: '100rpx',
				// 		top: '500rpx',
				// 		width: '300rpx',
				// 		height: '220rpx',
				// 		borderRadius: '16rpx'
				// 	},
				// 	_type: 'radar' // 标记类型，方便后续移除
				// });
				// #endif
				// 4. 继续原有保存逻辑
				console.log("123",456)
				const painter = this.$refs.painter;
				painter.canvasToTempFilePath().then(res => {
					this.path = res.tempFilePath;
					this.$refs.posterImg.open();
					this.show_poster=true;
					uni.hideLoading();
				});
			},
			getImg(r) {

			},
			toChoose(index) {
				if (index == 5) return;
				this.check_idx = index;
				switch (index) {
					case 0:
					this.posterObj.background='#fff';
						this.posterObj.views = [{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/9a4e7df322dc5c9f30ea9b126d3269a6.png',
								css: {
									width: '128rpx',
									height: '50rpx',
									left: '542rpx',
									top: '0rpx',
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
								css: {
									left: '32rpx',
									top: '32rpx',
									borderRadius: '50%',
									width: '80rpx',
									height: '80rpx'
								}
							},
							{
								type: 'text',
								text: '厦门吴彦祖',
								css: {
									fontSize: '28rpx',
									fontWeight: 'bold',
									color: '#1A2033',
									lineHeight: '28rpx',
									left: '136rpx',
									top: '39rpx'
								}
							},
							{
								type: 'text',
								text: '邀请您一起扫码看直播',
								css: {
									fontSize: '24rpx',
									color: '#4070FF',
									lineHeight: '24rpx',
									left: '136rpx',
									top: '80rpx'
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
								css: {
									left: '32rpx',
									top: '144rpx',
									width: '606rpx',
									height: '341rpx',
									borderRadius: '16rpx'
								}
							},
							{
								type: 'text',
								text: '云现场 | 2020年 麓客城市 WO-LUNTEER创想礼·麓客共创之夜',
								css: {
									fontSize: '32rpx',
									color: '#1A2033',
									fontWeight: 'bold',
									lineHeight: '45rpx',
									left: '32rpx',
									top: '509rpx',
									width: '606rpx'
								}
							},
							{
								type: 'qrcode',
								text: 'https://www.yun-live.com/',
								css: {
									left: '235rpx',
									top: '631rpx',
									width: '200rpx',
									height: '200rpx',
								}
							},
							{
								type: 'text',
								text: '————  由云现场提供技术支持  ————',
								css: {
									left: '0',
									top: '863rpx',
									width: '100%',
									textAlign: 'center',
									fontSize: '24rpx',
									color: '#989FB3',
									lineHeight: '33rpx'
								}
							}
						]
						break;
					case 1:
						this.posterObj.views = [{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/39ae4d9d8ad0b1acac7c224e845c641f.png',
								css: {
									left: '0',
									top: '0',
									width: '100%',
									height: '100%'
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/a887643c62a1748fe5f71a5fccfcacaa.png',
								css: {
									width: '128rpx',
									height: '50rpx',
									left: '542rpx',
									top: '0rpx',
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
								css: {
									left: '32rpx',
									top: '32rpx',
									borderRadius: '50%',
									width: '80rpx',
									height: '80rpx'
								}
							},
							{
								type: 'text',
								text: '厦门吴彦祖',
								css: {
									fontSize: '28rpx',
									fontWeight: 'bold',
									color: '#D8AB87',
									lineHeight: '28rpx',
									left: '136rpx',
									top: '39rpx'
								}
							},
							{
								type: 'text',
								text: '邀请您一起扫码看直播',
								css: {
									fontSize: '24rpx',
									color: '#FFFFFF',
									lineHeight: '24rpx',
									left: '136rpx',
									top: '80rpx'
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
								css: {
									left: '50%',
									top: '188rpx',
									transform: 'translate(-50%,0)',
									width: '539rpx',
									height: '303rpx',
									borderRadius: '16rpx',
									border:'3rpx solid #B3A498'
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/d88d56843d43b917e2a28550b2a62723.png',
								css: {
									left: '551rpx',
									top: '111rpx',
									width: '103rpx',
									height: '103rpx',
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/247736ffd279276b891ec14db8ed0fd0.png',
								css: {
									left: '43rpx',
									top: '432rpx',
									width: '56.4rpx',
									height: '56.4rpx',
								}
							},
							{
								type: 'text',
								text: '云现场 | 2020年 麓客城市 WO-LUNTEER创想礼·麓客共创之夜',
								css: {
									fontSize: '32rpx',
									color: '#fff',
									fontWeight: 'bold',
									lineHeight: '45rpx',
									left: '71rpx',
									top: '492rpx',
									width: '528rpx'
								}
							},
							{
								type: 'image',
								src: 'https://s.yun-live.com/images/20210201/63a9b504fb745b43b9fe5c0adef8fddb.png',
								css: {
									left: '50%',
									top: '750rpx',
									transform: 'translate(-50%,0)',
									width: '192rpx',
									height: '78rpx',
								}
							},
							{
								type: 'view',
								css: {
									left: '50%',
									top: '630rpx',
									transform: 'translate(-50%,0)',
									width: '160rpx',
									height: '160rpx',
									background: '#fff',
								}
							},
							{
								type: 'qrcode',
								text: 'https://www.yun-live.com/',
								css: {
									left: '50%',
									top: '638rpx',
									transform: 'translate(-50%,0)',
									width: '144rpx',
									height: '144rpx',
								}
							},
							{
								type: 'text',
								text: '————  由云现场提供技术支持  ————',
								css: {
									left: '0',
									top: '863rpx',
									width: '100%',
									textAlign: 'center',
									fontSize: '24rpx',
									color: '#B3A498',
									lineHeight: '33rpx'
								}
							},
						]
						break;
						case 2:
							this.posterObj.views = [{
									type: 'image',
									src: 'https://s.yun-live.com/images/20210201/78f227bd701da20676c9da9166ce3144.png',
									css: {
										left: '0',
										top: '0',
										width: '100%',
										height: '100%'
									}
								},
								{
									type: 'image',
									src: 'https://s.yun-live.com/images/20210201/cf86cf793964d1b2ded6dd9a0c5fdd5e.png',
									css: {
										width: '128rpx',
										height: '50rpx',
										left: '542rpx',
										top: '0rpx',
									}
								},
								{
									type: 'image',
									src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
									css: {
										left: '56rpx',
										top: '72rpx',
										borderRadius: '50%',
										width: '80rpx',
										height: '80rpx'
									}
								},
								{
									type: 'text',
									text: '厦门吴彦祖',
									css: {
										fontSize: '28rpx',
										fontWeight: 'bold',
										color: '#1D1D25',
										lineHeight: '28rpx',
										left: '160rpx',
										top: '80rpx'
									}
								},
								{
									type: 'text',
									text: '邀请您一起扫码看直播',
									css: {
										fontSize: '24rpx',
										color: '#6CB37A',
										lineHeight: '24rpx',
										left: '160rpx',
										top: '121rpx'
									}
								},
								{
									type: 'image',
									src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
									css: {
										left: '50%',
										top: '188rpx',
										transform: 'translate(-50%,0)',
										width: '540rpx',
										height: '303rpx',
										borderRadius: '16rpx',
										border:'3rpx solid rgba(255,255,255,0.5)'
									}
								},
								{
									type: 'text',
									text: '云现场 | 2020年 麓客城市 WO-LUNTEER创想礼·麓客共创之夜',
									css: {
										fontSize: '32rpx',
										color: '#1D1D25',
										fontWeight: 'bold',
										lineHeight: '45rpx',
										left: '71rpx',
										top: '508rpx',
										width: '530rpx'
									}
								},
								{
									type: 'view',
									css: {
										left: '50%',
										top: '630rpx',
										transform: 'translate(-50%,0)',
										width: '160rpx',
										height: '160rpx',
										background: '#fff',
									}
								},
								{
									type: 'qrcode',
									text: 'https://www.yun-live.com/',
									css: {
										left: '50%',
										top: '638rpx',
										transform: 'translate(-50%,0)',
										width: '144rpx',
										height: '144rpx',
									}
								},
								{
									type: 'text',
									text: '————  由云现场提供技术支持  ————',
									css: {
										left: '0',
										top: '819rpx',
										width: '100%',
										textAlign: 'center',
										fontSize: '24rpx',
										color: '#E5F0F4',
										lineHeight: '33rpx'
									}
								},
							]
							break;
							case 3:
								this.posterObj.views = [{
										type: 'image',
										src: 'https://s.yun-live.com/images/20210201/524ab6a41fe8c7eb57b35df9a547d388.png',
										css: {
											left: '0',
											top: '0',
											width: '100%',
											height: '100%'
										}
									},
									{
										type: 'image',
										src: 'https://s.yun-live.com/images/20210201/c40e25e13d91b275b274ccea8576a0e0.png',
										css: {
											width: '128rpx',
											height: '50rpx',
											left: '542rpx',
											top: '0rpx',
										}
									},
									{
										type: 'image',
										src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
										css: {
											left: '56rpx',
											top: '72rpx',
											borderRadius: '50%',
											width: '80rpx',
											height: '80rpx'
										}
									},
									{
										type: 'text',
										text: '厦门吴彦祖',
										css: {
											fontSize: '28rpx',
											fontWeight: 'bold',
											color: '#1D1D25',
											lineHeight: '28rpx',
											left: '160rpx',
											top: '80rpx'
										}
									},
									{
										type: 'text',
										text: '邀请您一起扫码看直播',
										css: {
											fontSize: '24rpx',
											color: '#6CB37A',
											lineHeight: '24rpx',
											left: '160rpx',
											top: '121rpx'
										}
									},
									{
										type: 'image',
										src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
										css: {
											left: '50%',
											top: '188rpx',
											transform: 'translate(-50%,0)',
											width: '540rpx',
											height: '303rpx',
											borderRadius: '16rpx',
											border:'3rpx solid rgba(255,255,255,0.5)'
										}
									},
									{
										type: 'text',
										text: '云现场 | 2020年 麓客城市 WO-LUNTEER创想礼·麓客共创之夜',
										css: {
											fontSize: '32rpx',
											color: '#1D1D25',
											fontWeight: 'bold',
											lineHeight: '45rpx',
											left: '71rpx',
											top: '508rpx',
											width: '530rpx'
										}
									},
									{
										type: 'view',
										css: {
											left: '50%',
											top: '630rpx',
											transform: 'translate(-50%,0)',
											width: '160rpx',
											height: '160rpx',
											background: '#fff',
										}
									},
									{
										type: 'qrcode',
										text: 'https://www.yun-live.com/',
										css: {
											left: '50%',
											top: '638rpx',
											transform: 'translate(-50%,0)',
											width: '144rpx',
											height: '144rpx',
										}
									},
									{
										type: 'text',
										text: '————  由云现场提供技术支持  ————',
										css: {
											left: '0',
											top: '819rpx',
											width: '100%',
											textAlign: 'center',
											fontSize: '24rpx',
											color: '#E5F0F4',
											lineHeight: '33rpx'
										}
									},
								]
								break;
								case 4:
									this.posterObj.background='linear-gradient(153deg, #EFF7FE 0%, #E6F0FA 100%)'							
									this.posterObj.views = [{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/9befed22f44df68a27044ca8a84a39b6.png',
											css: {
												left: '0',
												top: '0',
												width: '150rpx',
												height: '150rpx'
											}
										},
										{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/ac22a4d279076116e1e9bea7f5a325e1.png',
											css: {
												width: '128rpx',
												height: '50rpx',
												left: '542rpx',
												top: '0rpx',
											}
										},
										{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
											css: {
												left: '35rpx',
												top: '35rpx',
												borderRadius: '50%',
												width: '80rpx',
												height: '80rpx'
											}
										},
										{
											type: 'text',
											text: '厦门吴彦祖',
											css: {
												fontSize: '28rpx',
												fontWeight: 'bold',
												color: '#1D1D25',
												lineHeight: '28rpx',
												left: '152rpx',
												top: '40rpx'
											}
										},
										{
											type: 'text',
											text: '邀请您一起扫码看直播',
											css: {
												fontSize: '24rpx',
												color: '#FF8931',
												lineHeight: '24rpx',
												left: '152rpx',
												top: '80rpx'
											}
										},
										{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/4afd6a85e7469ecb61c7377062c5f42c.png',
											css: {
												left: '0',
												top: '94rpx',
												width: '100%',
												height: '473rpx',
											}
										},
										{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/eb694718fa6c7b90d60a2c250847a192.jpg',
											css: {
												left: '50%',
												top: '167rpx',
												transform: 'translate(-50%,0)',
												width: '580rpx',
												height: '326rpx',
												borderRadius: '16rpx',
											}
										},
										{
											type: 'text',
											text: '云现场 | 2020年 麓客城市 WO-LUNTEER创想礼·麓客共创之夜',
											css: {
												fontSize: '32rpx',
												color: '#3F4770',
												fontWeight: 'bold',
												lineHeight: '45rpx',
												left: '48rpx',
												top: '534rpx',
												width: '574rpx'
											}
										},
										{
											type: 'image',
											src: 'https://s.yun-live.com/images/20210201/583a28f485b9967d61b71d35ac652e29.png',
											css: {
												left: '50%',
												top: '634rpx',
												transform: 'translate(-50%,0)',
												width: '218rpx',
												height: '218rpx',
											}
										},
										{
											type: 'view',
											css: {
												left: '50%',
												top: '671rpx',
												transform: 'translate(-50%,0)',
												width: '144rpx',
												height: '144rpx',
												background: '#fff',
											}
										},
										{
											type: 'qrcode',
											text: 'https://www.yun-live.com/',
											css: {
												left: '50%',
												top: '678rpx',
												transform: 'translate(-50%,0)',
												width: '130rpx',
												height: '130rpx',
											}
										},
										{
											type: 'text',
											text: '————  由云现场提供技术支持  ————',
											css: {
												left: '0',
												top: '859rpx',
												width: '100%',
												textAlign: 'center',
												fontSize: '24rpx',
												color: '#A4ADC3',
												lineHeight: '33rpx'
											}
										},
									]
									break;
					default:
						break;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import './style.scss';
	::v-deep uni-canvas {
		// height: 750px !important;
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
	.radar-section {
	  margin: 30px 0 10px 0;
	  display: flex;
	  justify-content: center;
	}
	.radar-chart {
	  width: 300px;
	  height: 220px;
	  background: #fff;
	  border-radius: 16px;
	  box-shadow: 0 2px 8px rgba(26,42,92,0.04);
	}
</style>
