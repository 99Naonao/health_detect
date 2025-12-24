<template>
  <view class="conclusion-container">
    <!-- 顶部标题和分数 -->
    <view class="score-section">
      <text class="title">睡眠得分</text>
      <view class="score-wrapper">
		  <div ref="charts1" style="width: 168px;height: 168px;"></div>
       <!-- <text class="score">20</text>
        <text class="score-unit">分</text> -->
      </view>
      <view class="btn-row">
        <!-- <view class="main-btn" style="background-color: #153b70;" @click="handleShare">分享海报</view> -->
		<!-- <view class="main-btn" style="background-color: #153b70;" @click="handleRetestT">查看最终报告</view> -->
        <!-- <view class="main-btn" style="background-color: #153b70;" @click="handleRetest">再测一次</view> -->
      </view>
    </view>

    <!-- 报告结论 -->
    <view class="conclusion-section">
      <text class="section-title"><text style="font-size: 14px;color: #666;font-weight: 500;margin-right: 10px;">报告结论</text>{{quality}}</text>
      <text class="conclusion-text">{{conclusion}}</text>
    </view>
	
	<view>
		<view class="section-title" style="margin-bottom: 5px;">睡眠等级与得分说明</view>
		<view class="conclusion-text">睡眠总分为21分，分数越低表示睡眠质量越好，并以分数分为4个等级，具体如下所示：</view>
		<view class="conclusion-text">0~5分睡眠质量很好</view>
		<view class="conclusion-text">6~10分睡眠质量还行</view>
		<view class="conclusion-text">11~15分睡眠质量一般</view>
		<view class="conclusion-text">16~21分睡眠质量很差</view>
	</view>

    <!-- 推荐产品 -->
  <!--  <view class="products-section">
      <text class="section-title">推荐产品</text>
      <view class="product-list">
        <view class="product-item" v-for="(item, index) in recommendedProducts" :key="index">
          <image :src="item.image" mode="aspectFill" class="product-image"></image>
          <view class="product-info">
            <text class="product-name">{{item.name}}</text>
            <text class="product-desc">{{item.description}}</text>
          </view>
        </view>
      </view>
    </view> -->

    <!-- 底部悬浮按钮 -->
    <view class="footer-btn-wrapper">
      <view class="footer-btn" @click="handleRetestT">查看AI分析报告</view>
    </view>
  </view>
</template>

<script>
	import * as echarts from 'echarts';
	// #ifdef H5
	
	import {
		autoLogin,
		getToken,
		addReport,
		Userscaledetail,
		getUsercentre,
		getdeepseekchat,
		getDetectionsection
	} from '../../utils/h5app.js'
	// #endif
	
export default {
  data() {
    return {
      recommendedProducts: [
        {
          name: '【翼合枕】',
          description: '护颈助眠 90D慢回弹记忆棉',
          image: '/static/images/product1.jpg'
        },
        {
          name: '【翼合枕】',
          description: '护颈助眠 90D慢回弹记忆棉',
          image: '/static/images/product1.jpg'
        },
        {
          name: '【翼合枕】',
          description: '护颈助眠 90D慢回弹记忆棉',
          image: '/static/images/product1.jpg'
        },
        {
          name: '【翼合枕】',
          description: '护颈助眠 90D慢回弹记忆棉',
          image: '/static/images/product1.jpg'
        }
      ],
	  gaugeData: [{
	  	value: 60,
	  	name: 'score',
	  	title: {
	  		offsetCenter: ['00%', '30%']
	  	},
	  	detail: {
	  		valueAnimation: true,
	  		offsetCenter: ['0%', '00%']
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
	  conclusion:'',
	  numb:'',
	  quality:'',
	  conclusionid:''
    }
  },
  onLoad(option) {
    this.numb = option.numb
	this.conclusionid = option.conclusionid
    // 根据分数设置睡眠质量等级
    if(this.numb >= 0 && this.numb <= 5){
      this.quality = '睡眠质量很好'
    } else if(this.numb >= 6 && this.numb <= 10){
      this.quality = '睡眠质量还行'
    } else if(this.numb >= 11 && this.numb <= 15){
      this.quality = '睡眠质量一般'
    } else if(this.numb >= 16 && this.numb <= 21){
      this.quality = '睡眠质量很差'
    }
    this.Detectionsection()
    console.log("1234",option)
  },
  mounted() {
  	this.$nextTick(() => {
  		// 使用 Canvas 渲染器（默认）
  		var chart = echarts.init(this.$refs.charts1);
  		this.totalOption.series[0].data = this.gaugeData
  		// this.gaugeData[0].value = 20
		this.gaugeData[0].value = this.numb
		
  		chart.setOption(this.totalOption);
  		// console.log('chart:', chart)
  		// uni.hideLoading()
  	})
  },
  methods: {
	  
	Detectionsection(){
		getDetectionsection({
			score:this.numb
		}).then(res => {
			this.conclusion = res.detail.remarks
			this.recommendedProducts = res.goods_lists
			console.log("res.999",res)
		})
	},
	  
    handleShare() {
      uni.showToast({
        title: '分享功能开发中',
        icon: 'none'
      })
    },
    handleRetest() {
		uni.switchTab({
			url: '/pages/health/health'
		})
      // uni.showToast({
      //   title: '再测一次功能开发中',
      //   icon: 'none'
      // })
    },
	handleRetestT() {
		uni.navigateTo({
			url: '/pages/healthtest/Newconclusion?context=' + this.conclusion + "&numtolt=" + this.numb + "&conclusionid=" + this.conclusionid
		})
	  // uni.showToast({
	  //   title: '再测一次功能开发中',
	  //   icon: 'none'
	  // })
	},
    goShop() {
      uni.showToast({
        title: '跳转商城开发中',
        icon: 'none'
      })
    }
  }
}
</script>

<style>
.conclusion-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 80px; /* 给底部按钮留空间 */
}
.score-section {
  text-align: center;
  padding: 30px 0 20px 0;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 20px;
}
.title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}
.score-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 20px 0 10px 0;
}
.score {
  font-size: 48px;
  color: #153b70;
  font-weight: bold;
}
.score-unit {
  font-size: 16px;
  color: #333;
  margin-left: 4px;
}
.btn-row {
  display: flex;
  justify-content: center;
  /* gap: 16px; */
  margin-top: 10px;
}
.main-btn {
  /* flex: 1; */
  background: #3575f6;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  padding: 10px 20px;
  margin: 0 4px;
  font-weight: bold;
}
.conclusion-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}
.section-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
  display: block;
}
.conclusion-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}
.products-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
}
.product-list {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}
.product-item {
  width: calc(50% - 20px);
  margin: 10px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.product-image {
  width: 100%;
  height: 120px;
  border-radius: 8px 8px 0 0;
}
.product-info {
  padding: 12px;
}
.product-name {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
}
.product-desc {
  font-size: 12px;
  color: #666;
  display: block;
  line-height: 1.4;
}
.footer-btn-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 100;
  display: flex;
  justify-content: center;
  pointer-events: none;
}
.footer-btn {
  width: 70%;
  margin: 0 auto 20px auto;
  background: #153b70;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  /* box-shadow: 0 4px 16px rgba(255,77,79,0.12); */
  pointer-events: auto;
}
</style>