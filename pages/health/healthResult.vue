<template>
	<view class="container">
		<view class="tab flex">
			<view class="tabitem" :class="{'active':0==current}" @click="swipeTab(0)">
				<view class="">
					生理测量报告
				</view>
				<view class="timestamp" v-if="0==current">
					{{lastCreateTime}}
				</view>
			</view>
			<view class="tabitem" :class="{'active':1==current}" @click="swipeTab(1)">
				<view class="">情绪测量报告</view>
				<view class="timestamp" v-if="1==current">
					{{lastCreateTime}}
				</view>
			</view>
		</view>
		<view class="result" v-if="showInfo">
			<view class="topkv">
				<view class=" flex just-align-center">
					<view>
						<view class="bigtitle">
							综合心健康风险
						</view>
						<div ref="charts1" style="width: 200px;height: 200px;"></div>
						<!-- <view class="circle">{{physiologyscorereport.data}}</view> -->
					</view>
					<image class="topimg" src="../../static/SY_04_Pic01.png" mode="widthFix"></image>
				</view>
				<view class="subtitle flex">
					<image class="icon" src="../../static/icon/SY_IconZFFX.png"></image><text>AI专家解读</text>
				</view>
				<view class="desc">{{physiologyscorereport.explanation.introductionList.join('')}}</view>
			</view>
			<view class="border">
				<view class="age flex">
					<image class="icon-risk" src="../../static/icon/JK_04_IconFXQJ_Y.png"></image>
					<text class="icon-title">风险区间</text>
				</view>
				<view class="progress-container">
					<view class="tooltip" :style="{'left':riskToopTipLeft}">
						<view class="tooltip-text" :style="{'background-color':riskColor}">
							{{riskTips}}
						</view>
						<view class="tooltip-triangle"
							:style="{'border-color':riskColor+' transparent transparent transparent'}"></view>
					</view>
					<view class="progress-bar flex">
						<view class="progress-layer first">

						</view>
						<view class="progress-layer second">

						</view>
						<view class="progress-layer third">

						</view>
						<view class="progress-layer forth">

						</view>
						<view class="progress-layer fifth">

						</view>
					</view>
					<view class="tick">
						<view class="tick-item" style="width: 20px;">
							0
						</view>
						<view class="tick-item" style="width: 20px;left: 58%;">
							60
						</view>
						<view class="tick-item" style="width: 20px;left: 68%;">
							70
						</view>
						<view class="tick-item" style="width: 20px;left: 78%;">
							80
						</view>
						<view class="tick-item" style="width: 20px;left: 87%;text-align: center;">
							90
						</view>
						<view class="tick-item" style="width: 20px;left: 95%;text-align: center;">
							100
						</view>
					</view>
				</view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="content">超越<text
						class="focusnum">{{(physiologyscorereport.explanation.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{physiologyscorereport.explanation.advicesList[0].valuesList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc
					:descValue="physiologyscorereport.explanation.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<view class="heart border">
				<view class="title">
					<image class="heartIcon" src="@/static/icon/SY_IconXL_Y.png"></image>心率<text
						class="valueNum">{{hrreport.data.hrbpm}}</text>
				</view>
				<progress-bar :tick="hrreport.data.hrbpm"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{hrreport.explanation.hrbpm.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="content">超越<text
						class="focusnum">{{(hrreport.explanation.hrbpm.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{hrreport.explanation.hrbpm.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="hrreport.explanation.hrbpm.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<view class="heartRV border">
				<view class="title">
					<image class="heartIcon" src="@/static/icon/SY_IconXZBY_Y.png"></image>心率变异性<text
						class="valueNum">{{hrreport.data.hrv}}</text>
				</view>

				<progress-bar :tick="hrreport.data.hrv" :ticks="[0,50,200,300]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{hrreport.explanation.hrv.introductionList.join('')}}
				</view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(hrreport.explanation.hrv.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{hrreport.explanation.hrv.advicesList[0]?hrreport.explanation.hrv.advicesList[0].valuesList.join(''):'无'}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="hrreport.explanation.hrv.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 房颤 -->
			<view class="heartAfReport border">
				<view class="title">
					<image class="heartafIcon" src="@/static/icon/SY_IconFC_Y.png"></image>房颤
				</view>
				<view class="content">
					<view class="desc-ccc">{{afreport.data == 0? '未发作':'发作'}}</view>
				</view>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{afreport.explanation.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{afreport.explanation.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="afreport.explanation.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 舒张压 -->
			<view class="heartBPReport border">
				<view class="title">
					<image class="heartpressIcon" src="@/static/icon/SY_IconXY_Y.png"></image>舒张压<text
						class="valueNum">{{bpreport.data.bpdiastolic}}</text>
				</view>
				<progress-bar :tick="bpreport.data.bpdiastolic" :ticks="[50,60,80,90,100]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{bpreport.explanation.bpdiastolic.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(bpreport.explanation.bpdiastolic.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{bpreport.explanation.bpdiastolic.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="bpreport.explanation.bpdiastolic.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 收缩压 -->
			<view class="heartBPReport border">
				<view class="title">
					<image class="heartpressIcon" src="@/static/icon/SY_IconXY_Y.png"></image>收缩压<text
						class="valueNum">{{bpreport.data.bpsystolic}}</text>
				</view>
				<progress-bar :tick="bpreport.data.bpsystolic" :ticks="[70,90,110,140,170]"></progress-bar>

				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{bpreport.explanation.bpsystolic.introductionList.join('')}}
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(bpreport.explanation.bpsystolic.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">{{bpreport.explanation.bpsystolic.advicesList[0].valuesList.join('')}}</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="bpreport.explanation.bpsystolic.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 血氧饱和度 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="hearto2Icon" src="@/static/icon/SY_IconXYBHD_Y.png"></image>血氧饱和度<text
						class="valueNum">{{spo2hreport.data}}%</text>
				</view>

				<progress-bar :tick="spo2hreport.data" :ticks="[60,90,100]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{spo2hreport.explanation.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{spo2hreport.explanation.advicesList[0]?spo2hreport.explanation.advicesList[0].valuesList.join(''):'无'}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="spo2hreport.explanation.detailsList[0].valuesList.join('')"></more-desc>
				<!-- <view class="content">{{spo2hreport.explanation.detailsList[0].valuesList.join('')}}</view> -->
			</view>
			<!-- 心脏病风险 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartbreakIcon" src="@/static/icon/SY_IconXZBFX_Y.png"></image>心脏病风险<text
						class="valueNum">{{(riskreport.data.bpheartattack * 100).toFixed(2)}}%</text>
				</view>

				<progress-bar :tick="riskreport.data.bpheartattack * 100" :ticks="[0,1.5,3,4.5,6,7.5]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpheartattack.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(riskreport.explanation.bpheartattack.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpheartattack.advicesList[0]?riskreport.explanation.bpheartattack.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc
					:descValue="riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')"></more-desc>
				<!-- <view class="content">{{riskreport.explanation.bpheartattack.detailsList[0].valuesList.join('')}}</view> -->
			</view>
			<!-- 中风风险 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartbpsIcon" src="@/static/icon/SY_IconZFFX_Y.png"></image>中风风险<text
						class="valueNum">{{riskreport.data.bpstroke * 100}}%</text>
				</view>
				<progress-bar :tick="riskreport.data.bpstroke * 100" :ticks="[0,1.5,3,4.5,6,7.5]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpstroke.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(riskreport.explanation.bpstroke.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpstroke.advicesList[0]?riskreport.explanation.bpstroke.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="riskreport.explanation.bpstroke.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 心血管病风险 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartriskIcon" src="@/static/icon/SY_IconXGGN_Y.png"></image>心血管病风险<text
						class="valueNum">{{riskreport.data.bpcvd * 100}}%</text>
				</view>
				<progress-bar :tick="riskreport.data.bpcvd * 100" :ticks="[0,3,6,9,12,15]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bpcvd.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bpcvd.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bpcvd.advicesList[0]?riskreport.explanation.bpcvd.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="riskreport.explanation.bpcvd.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 心脏压力 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartbpppIcon" src="@/static/icon/SY_IconXZYL_Y.png"></image>心脏压力<text
						class="valueNum">{{riskreport.data.bppp}}</text>
				</view>
				<progress-bar :tick="riskreport.data.bppp" :ticks="[3.5,3.8,4.1,4.4,4.7]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bppp.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bppp.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bppp.advicesList[0]?riskreport.explanation.bppp.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="riskreport.explanation.bppp.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 血管功能 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartIcon" src="@/static/icon/SY_IconXL_Y.png"></image>血管功能<text
						class="valueNum">{{riskreport.data.bptau}}</text>
				</view>
				<progress-bar :tick="riskreport.data.bptau" :ticks="[0,0.4,0.8,1.2,1.6,2,2.4,3]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{riskreport.explanation.bptau.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text class="focusnum">{{(riskreport.explanation.bptau.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{riskreport.explanation.bptau.advicesList[0]?riskreport.explanation.bptau.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="riskreport.explanation.bptau.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 皮肤年龄 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartIcon" src="@/static/icon/SY_IconPFNL_Y.png"></image>皮肤年龄<text
						class="valueNum">{{essentialreport.data.age}}</text>
				</view>
				<progress-bar :tick="essentialreport.data.age" :ticks="[0,30,60,90,120,150]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{essentialreport.explanation.age.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(essentialreport.explanation.age.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{essentialreport.explanation.age.advicesList[0]?essentialreport.explanation.age.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="essentialreport.explanation.age.detailsList[0].valuesList.join('')"></more-desc>
			</view>
			<!-- 体重指数 -->
			<view class="heartspo2hreport border">
				<view class="title">
					<image class="heartIcon" src="@/static/icon/SY_IconTZZS_Y.png"></image>体重指数<text
						class="valueNum">{{essentialreport.data.bmi}}</text>
				</view>
				<progress-bar :tick="essentialreport.data.bmi" :ticks="[15,18.5,25,30,35,40]"></progress-bar>
				<view class="flex align-center">
					<image class="icon-ai" src="../../static/icon/JK_04_IconAI.png"></image><text
						class="icon-title">AI专家解读</text>
				</view>
				<view class="explanation content">
					{{essentialreport.explanation.bmi.introductionList.join('')}}
				</view>
				<view class="border-line"></view>
				<view class="age flex">
					<image class="icon-age" src="../../static/icon/JK_04_IconTLR.png"></image>
					<text class="icon-title">同龄人对比</text>
				</view>
				<view class="age content">
					超越<text
						class="focusnum">{{(essentialreport.explanation.bmi.ranking * 100).toFixed(2) + '%'}}</text>同龄人
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconJKJY.png"></image><text
						class="icon-title">健康建议</text>
				</view>
				<view class="content">
					{{essentialreport.explanation.bmi.advicesList[0]?essentialreport.explanation.bmi.advicesList[0].valuesList.join(''):''}}
				</view>
				<view class="border-line"></view>
				<view class="flex">
					<image class="icon-add" src="../../static/icon/JK_04_IconGNJX_B.png"></image><text
						class="icon-title">概念解释</text>
				</view>
				<more-desc :descValue="essentialreport.explanation.bmi.detailsList[0].valuesList.join('')"></more-desc>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref
	} from 'vue';
	import progressBar from '../comp/progressBar.vue';
	import * as echarts from 'echarts';
	import data_ from '@/static/xy.json'
	import progressData from '@/utils/progrossData.js'
	import moreDesc from '../comp/moreDesc.vue';
	import {
		lastReport,
		addReport,
		getJsonResult
	} from '@/utils/h5app.js'
	export default {
		components: {
			progressBar,
			moreDesc
		},
		data() {
			return {
				lastCreateTime: '2024', // 上次检测时间
				current: 0,
				showInfo: false,
				riskToopTipLeft: 0,
				riskTips: '轻度风险',
				riskColor: '#f2b329',
				hrreport: {},
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
								width: 15
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
				}

			}
		},
		onShow() {
			// uni.showLoading({
			// 	title: '请求中'
			// })
			// //获取最后一条记录
			// lastReport().then(data => {
			// 	console.log('data', data)
			// 	this.initLastData(data)
			// }).catch((data) => {
			// 	console.log('catch:', data)
			// 	uni.hideLoading()
			// 	// this.initLastData()
			// })
		},
		mounted() {
			const {
				physiologyscorereport, // 综合
				afreport,
				bpreport,
				essentialreport,
				healthScoreReport,
				hrreport,
				riskreport,
				spo2hreport,
				calculatedReport
			} = data_
			this.hrreport = hrreport
			this.afreport = afreport
			this.bpreport = bpreport
			this.spo2hreport = spo2hreport
			this.riskreport = riskreport
			this.essentialreport = essentialreport
			this.physiologyscorereport = physiologyscorereport
			this.showInfo = true;

			let riskValue = this.physiologyscorereport.data
			if (riskValue >= 100) {
				riskValue = 100
				this.riskTips = '低风险'
				this.riskColor = '#f26f29'
			} else if (riskValue >= 90) {
				this.riskTips = '低风险'
				this.riskColor = '#f26f29'
			} else if (riskValue >= 80) {
				this.riskTips = '中低风险'
				this.riskColor = '#f2b329'
			} else if (riskValue >= 70) {
				this.riskTips = '中风险'
				this.riskColor = '#e2c93e'
			} else if (riskValue >= 60) {
				this.riskTips = '中高风险'
				this.riskColor = '#acea6f'
			} else {
				this.riskTips = '高风险'
				this.riskColor = '#7cc4c8'
			}
			this.riskToopTipLeft = riskValue + '%'
			console.log('this.riskc:', this.riskColor)

			// this.checkMoreManage(data_)

			this.$nextTick(() => {
				// 使用 Canvas 渲染器（默认）
				var chart = echarts.init(this.$refs.charts1);
				this.totalOption.series[0].data = this.gaugeData
				this.gaugeData[0].value = this.physiologyscorereport.data
				chart.setOption(this.totalOption);
				console.log('chart:', chart)
				uni.hideLoading()
			})
		},
		methods: {
			swipeTab(index) {
				this.current = index
			},
			async initLastData(data) {
				let data_url = (data.contentDetail)
				let report = await getJsonResult(data_url)
				const {
					physiologyscorereport, // 综合
					afreport,
					bpreport,
					essentialreport,
					healthScoreReport,
					hrreport,
					riskreport,
					spo2hreport,
					calculatedReport
				} = report
				this.hrreport = hrreport
				this.afreport = afreport
				this.bpreport = bpreport
				this.spo2hreport = spo2hreport
				this.riskreport = riskreport
				this.essentialreport = essentialreport
				this.physiologyscorereport = physiologyscorereport

				this.lastCreateTime = data.createAt;

				this.showInfo = true;

				this.checkMoreManage(report)

				let riskValue = this.physiologyscorereport.data
				if (riskValue >= 100) {
					riskValue = 100
					this.riskTips = '低风险'
					this.riskColor = '#f26f29'
				} else if (riskValue >= 90) {
					this.riskTips = '低风险'
					this.riskColor = '#f26f29'
				} else if (riskValue >= 80) {
					this.riskTips = '中低风险'
					this.riskColor = '#f2b329'
				} else if (riskValue >= 70) {
					this.riskTips = '中风险'
					this.riskColor = '#e2c93e'
				} else if (riskValue >= 60) {
					this.riskTips = '中高风险'
					this.riskColor = '#acea6f'
				} else {
					this.riskTips = '高风险'
					this.riskColor = '#7cc4c8'
				}
				this.riskToopTipLeft = riskValue + '%'
				console.log('this.riskc:', this.riskColor)

				console.log('report:', report)

				this.$nextTick(() => {
					// 使用 Canvas 渲染器（默认）
					var chart = echarts.init(this.$refs.charts1);
					this.totalOption.series[0].data = this.gaugeData
					this.gaugeData[0].value = this.physiologyscorereport.data
					chart.setOption(this.totalOption);
					console.log('chart:', chart)
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f1f5f7;
		font-family: "YouYuan";
		color: #333;
		padding-bottom: env(safe-area-inset-bottom);
		padding-bottom: constant(safe-area-inset-bottom);
		font-weight: 500;

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

		.valueNum {
			font-weight: bold;
			color: #ffaa00;
			padding-left: 10rpx;
			font-size: 30rpx;
			letter-spacing: 2rpx;
		}

		.focusnum {
			color: #ffaa00;
			letter-spacing: 2rpx;
		}

		.topkv {
			background-color: white;
			padding: 30rpx;

			.topimg {
				width: 399rpx;
				height: 397rpx;
			}
		}

		.bigtitle {
			font-size: 30rpx;
			padding-bottom: 30rpx;
		}

		.circle {
			background-color: white;
			box-shadow: 0px 0px 5px 5px #46647d;
			width: 220rpx;
			height: 220rpx;
			border-radius: 200rpx;
			line-height: 220rpx;
			text-align: center;
			font-size: 40rpx;
			letter-spacing: 2rpx;
			color: #46647d;
		}

		.icon {
			width: 105rpx;
			height: 116rpx;
			display: block;
		}

		.heartbpsIcon {
			width: 40rpx;
			height: 48rpx;
		}

		.icon-risk {
			width: 50rpx;
			height: 45rpx;
			display: block;
		}

		.icon-age {
			width: 42rpx;
			height: 43rpx;
			display: block;
		}

		.icon-add {
			width: 45rpx;
			height: 48rpx;
			display: block;
		}

		.icon-ai {
			width: 49rpx;
			height: 58rpx;
			display: block;
		}

		.icon-title {
			padding-left: 10rpx;
			font-size: 35rpx;
		}

		.subtitle {
			line-height: 116rpx;
			font-size: 35rpx;
		}

		.heartIcon {
			width: 50rpx;
			height: 45rpx;
		}

		.hearto2Icon {
			width: 45rpx;
			height: 46rpx;
		}

		.heartbreakIcon {
			width: 50rpx;
			height: 45rpx;
		}

		.heartafIcon {
			width: 58rpx;
			height: 39rpx;
		}

		.heartbpppIcon {
			width: 52rpx;
			height: 48rpx;
		}

		.heartpressIcon {
			width: 53rpx;
			height: 42rpx;
		}

		.heartriskIcon {
			width: 48rpx;
			height: 50rpx;
		}

		.desc-ccc {
			background-color: #249631;
			border-radius: 15rpx;
			color: white;
			display: block;
			padding: 10rpx;
			width: fit-content;
		}

		.desc {
			font-size: 28rpx;
			line-height: 35rpx;
			text-indent: 60rpx;
			text-align: justify;
			color: #616169;
		}

		.border {
			background-color: white;
			margin: 30rpx;
			padding: 30rpx;
			border-radius: 20rpx;
			box-shadow: 0px 0px 5px 5px #eee;
		}

		.border-line {
			border-bottom: #f5f5f5 solid 1px;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
		}

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
	}


	.tab {
		padding-top: 108rpx;
		background-color: #547896;

		.tabitem {
			text-align: center;
			margin-top: 30rpx;
			padding-bottom: 10rpx;
			height: 68rpx;
			color: white;
			background-color: #46647d;
			border-top-right-radius: 20rpx;
			border-top-left-radius: 20rpx;
			line-height: 36rpx;
			font-size: 30rpx;
			width: 260rpx;
		}

		.timestamp {
			color: #547896;
			font-size: 22rpx;
			line-height: 30rpx;
		}

		.active {
			font-weight: bold;
			color: #616169;
			height: 88rpx;
			margin-top: 0rpx;
			padding-top: 10rpx;
			background-color: white;
			border-bottom: solid 1rpx skyblue;
		}
	}

	.progress-container {
		width: 100%;
		height: 25rpx;
		color: #333;
		position: relative;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;

		.tick {
			position: relative;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			font-family: 'YouYuan';

			.tick-item {
				position: absolute;
			}
		}

		.progress-bar {
			height: 100%;
			border-radius: 10rpx;
			background-color: #eee;
			overflow: hidden;
			position: relative;

			.progress-layer {
				height: 100%;
			}

			.first {
				width: 60%;
				background-color: rgb(124, 196, 200);
			}

			.second {
				width: 10%;
				background-color: rgb(172, 234, 111);
			}

			.third {
				width: 10%;
				background-color: rgb(226, 201, 62);
			}

			.forth {
				width: 10%;
				background-color: rgb(242, 179, 41);
			}


			.fifth {
				width: 10%;
				background-color: rgb(242, 111, 41);
			}
		}
	}

	.tooltip {
		position: absolute;
		left: 100px;
		top: -25px;

		.tooltip-text {
			padding: 10rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			word-wrap: normal;
			word-break: keep-all;
			color: #fff;
			border-radius: 10rpx;
			text-align: center;
			transform: translateX(-50%);
			top: -20px;
		}

		.tooltip-triangle {
			border-width: 20rpx;
			border-color: #000 transparent transparent transparent;
			border-style: solid;
			width: 0px;
			height: 0px;
			margin-top: -2rpx;
			transform: translateX(-50%);
		}
	}
</style>