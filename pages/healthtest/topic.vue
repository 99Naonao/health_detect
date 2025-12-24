<template>
  <view class="topic-container">
    <!-- 介绍弹窗 -->
  <!--  <view class="intro-modal" v-if="showIntro">
      <view class="intro-content">
        <view class="intro-title">问卷说明</view>
        <view class="intro-text">
          <text>匹兹堡睡眠质量指数（Pittsburgh Sleep Quality Index, PSQI） 是一个广泛使用、经过充分验证的自评问卷，专门用于评估成年人在过去一个月内的睡眠质量和睡眠障碍，由美国匹兹堡大学医学中心的 Daniel J. Buysse 博士及其同事于 1989 年开发。
			其主要用途是在临床研究和实践中辅助诊断睡眠障碍，评估睡眠干预措施的效果，并在睡眠医学的研究中作为常规评估工具。</text>
        </view>
        <view class="intro-btn" @click="startTest">开始测试</view>
      </view>
    </view> -->
    
    <!-- 问卷内容 -->
    <view>
     
      <!-- <view class="score-bar">
        睡眠质量得分：<text class="score-value">{{ sleepScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        入睡时间得分：<text class="score-value">{{ sleepTimeScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        睡眠时间得分：<text class="score-value">{{ sleepDurationScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        睡眠效率得分：<text class="score-value">{{ sleepEfficiencyScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        睡眠障碍得分：<text class="score-value">{{ sleepDisorderScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        催眠药物得分：<text class="score-value">{{ hypnoticScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px;">
        日间功能障碍得分：<text class="score-value">{{ daytimeDysfunctionScore }}</text>
      </view>
      <view class="score-bar" style="margin-top: 8px; background: #153b70; color: #fff;">
        PSQI总分：<text class="score-value" style="color: #fff;">{{ psqiTotalScore }}</text>
      </view> -->
	  <div class="conttt" ref="resultView" @scroll="handleResultScroll">
		  <!-- 添加进度显示 -->
		  <view class="progress-bar">
		    <text class="progress-text">第 {{page + 1}}/{{totalPages}} 页</text>
		    <view class="progress-line">
		      <view class="progress-inner" :style="{width: ((page + 1)/totalPages*100) + '%'}"></view>
		    </view>
		  </view>
      <view v-for="(q, idx) in currentQuestions" :key="q.id" class="question-block">
		  
		  	<!-- <view class="question-title">{{q.index}}. {{q.title}}</view> -->
		  	<view class="question-title">{{q.index}}、{{q.questionContent}}</view>
		  	<!-- 填空题 -->
		  	<view v-if="q.type === 'input'">
		  	  <input v-if="q.id === 2 || q.id === 4" class="input-answer" 
		  	    v-model="answers[q.id]" 
		  	    :placeholder="getPlaceholder(q.id)"
		  	    type="number"
		  	    @input="validateInput($event, q.id)"
		  	  />
		  	  <picker v-else-if="q.id === 1 || q.id === 3" mode="time" :value="answers[q.id]" @change="onTimeChange($event, q.id)" class="input-answer">
		  	    <view class="picker-text">{{answers[q.id] || getPlaceholder(q.id)}}</view>
		  	  </picker>
		  	  <input v-else-if="q.id === 14" class="input-answer" 
		  	    v-model="answers[q.id]" 
		  	    :placeholder="getPlaceholder(q.id)"
		  	    type="text"
		  	  />
		  	  <text class="input-tip" v-if="q.id === 1 || q.id === 3">请选择时间</text>
		  	  <text class="input-tip" v-if="q.id === 2">请输入分钟数</text>
		  	  <text class="input-tip" v-if="q.id === 4">请输入小时数</text>
		  	  <text class="input-tip" v-if="q.id === 14">选填，如无其他情况可不填</text>
		  	</view>
		  	<!-- 选择题 -->
		  	<view v-else-if="q.type === 'choice'">
		  	  <view class="choice-list">
		  	    <view v-for="(opt, oidx) in q.options" :key="oidx" class="choice-item"
		  	      :class="{selected: answers[q.id] === oidx}" @click="selectChoice(q.id, oidx)">
		  	      {{opt}}
		  	    </view>
		  	  </view>
		  	  <!-- 14题选非“无”时显示说明输入框 -->
		  	  <view v-if="q.id === 14 && answers[14] !== 0 && answers[14] !== undefined" style="margin-top:10px;">
		  	    <input class="input-answer" v-model="otherSleepDesc" placeholder="请填写具体情况" type="text" />
		  	  </view>
		  	</view>
		  
       
      </view>
	  </div>
      <!-- 分页按钮 -->
      <view class="page-btn-row">
        <view v-if="page > 0" class="page-btn" @click="prevPage">上一页</view>
        <view v-if="page < totalPages - 1" class="page-btn main" @click="nextPage">下一页</view>
        <view v-else class="page-btn main" @click="submit">提交</view>
      </view>
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
		getUsercentre
	} from '../../utils/h5app.js'
	// #endif
export default {
  data() {
    return {
		userInfoT:{},
      showIntro: true, // 控制介绍弹窗显示
      // 题目数据
      questions: [
        // 1-4 填空题
        {id: 1, index: 1,userId:'',pch:0, type: 'input', questionContent: '近1个月，晚上上床睡觉通常(   )点钟'},
        {id: 2, index: 2,userId:'',pch:0, type: 'input', questionContent: '近1个月，从上床到入睡通常需要(   )分钟'},
        {id: 3, index: 3,userId:'',pch:0, type: 'input', questionContent: '近1个月，通常早上(   )点起床'},
        {id: 4, index: 4,userId:'',pch:0, type: 'input', questionContent: '近1个月，每夜通常实际睡眠(   )小时（不等于卧床时间）'},
        // 第5题 10小题（前9选择，最后1填空）
        {id: 5, index: 5,userId:'',pch:0, type: 'choice', questionContent: '入睡困难(30分钟内不能入睡)', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 6, index: 6,userId:'',pch:0, type: 'choice', questionContent: '夜间易醒或早醒', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 7, index: 7,userId:'',pch:0, type: 'choice', questionContent: '夜间去厕所', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 8, index: 8,userId:'',pch:0, type: 'choice', questionContent: '呼吸不畅', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 9, index: 9,userId:'',pch:0, type: 'choice', questionContent: '咳嗽或鼾声高', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 10, index: 10,userId:'',pch:0, type: 'choice', questionContent: '感觉冷', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 11, index: 11,userId:'',pch:0, type: 'choice', questionContent: '感觉热', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 12, index: 12,userId:'',pch:0, type: 'choice', questionContent: '做噩梦', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 13, index: 13,userId:'',pch:0, type: 'choice', questionContent: '疼痛不适', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 14, index: 14,userId:'',pch:0, type: 'choice', questionContent: '其他影响睡眠的事情', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        // 6-9题，每题题目和选项都不同
        {id: 15, index: 15,userId:'',pch:0, type: 'choice', questionContent: '近1个月，总的来说，您认为自己的睡眠质量', options: ['A.很好', 'B.较好', 'C.较差', 'D.很差']},
        {id: 16, index: 16,userId:'',pch:0, type: 'choice', questionContent: '近1个月，您用药物催眠的情况', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 17, index: 17,userId:'',pch:0, type: 'choice', questionContent: '近1个月，您常感到困倦吗', options: ['A.无', 'B.<1次/周', 'C.1~2次/周', 'D.≥3次/周']},
        {id: 18, index: 18,userId:'',pch:0, type: 'choice', questionContent: '近1个月，您做事情的精力不足吗', options: ['A.没有', 'B.偶尔有', 'C.有时有', 'D.经常有']}
      ],
      answers: {},
      userScaleConclusionDto:{
		  pch:0,
		  userId:'',
		  score:'',
		  conclusion:''
	  },
      page: 0,
      pageSize: 4,
      conclusion:[
        {
          Content:'恭喜您！您的睡眠质量为1度，就像小天使一样完美，请继续保持！可以使用我们眠加AI活力健康检测，对身心健康进行更全面的检测哦！'
        },
        {
          Content:'还不错！您的睡眠质量为2度，但可以更甜哦～建议使用我们的翼合枕和蚕丝被（待定），帮你提升睡眠舒适度哦！'
        },
        {
          Content:'很一般，您的睡眠质量为3度，需要一点点关爱啦！建议使用我们的甜睡保健贴和天然助眠精油（待定），帮您睡得更甜哦！'
        },
        {
          Content:'有点糟糕，您的睡眠质量为4度，快给睡眠充充电吧！建议使用我们的古法舒睡仪，来专业改善睡眠质量。如果您有想咨询专业医师的需要，可以添加下方的专属睡眠管家，我们可以免费帮您精准找到适合您睡眠状况的医疗资源哦！'
        },
      ],
      otherSleepDesc: '',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.questions.length / this.pageSize)
    },
    currentQuestions() {
      const start = this.page * this.pageSize
      return this.questions.slice(start, start + this.pageSize)
    },
    sleepScore() {
      // 第六题id为15，选项A=0，B=1，C=2，D=3
      const val = this.answers[15]
      if (val === 0) return 0
      if (val === 1) return 1
      if (val === 2) return 2
      if (val === 3) return 3
      return '-'
    },
    sleepTimeScore() {
      // 第二题（id:2）
      let q2 = this.answers[2]
      let q2Score = null
      if (q2 !== undefined && q2 !== null && q2 !== '') {
        let min = parseInt(q2)
        if (!isNaN(min)) {
          if (min <= 15) q2Score = 0
          else if (min <= 30) q2Score = 1
          else if (min <= 60) q2Score = 2
          else q2Score = 3
        }
      }
      // 第五A题（id:5）
      let q5 = this.answers[5]
      let q5Score = null
      if (q5 === 0) q5Score = 0
      else if (q5 === 1) q5Score = 1
      else if (q5 === 2) q5Score = 2
      else if (q5 === 3) q5Score = 3
      // 累加
      if (q2Score === null || q5Score === null) return '-'
      let sum = q2Score + q5Score
      if (sum === 0) return 0
      if (sum >= 1 && sum <= 2) return 1
      if (sum >= 3 && sum <= 4) return 2
      if (sum >= 5 && sum <= 6) return 3
      return '-'
    },
    sleepDurationScore() {
      // 第四题（id:4）小时数
      let q4 = this.answers[4]
      if (q4 !== undefined && q4 !== null && q4 !== '') {
        let hour = parseFloat(q4)
        if (!isNaN(hour)) {
          if (hour > 7) return 0
          if (hour >= 6 && hour <= 7) return 1
          if (hour >= 5 && hour < 6) return 2
          if (hour < 5) return 3
        }
      }
      return '-'
    },
    sleepEfficiencyScore() {
      // 睡眠效率 = 第4题 ÷ (第3题-第1题) × 100%
      let q1 = this.answers[1]
      let q3 = this.answers[3]
      let q4 = this.answers[4]
      if (!q1 || !q3 || !q4) return '-'
      // 时间字符串转小时数
      function timeStrToHour(str) {
        if (!str) return null
        let parts = str.split(':')
        if (parts.length < 2) return null
        let h = parseInt(parts[0])
        let m = parseInt(parts[1])
        if (isNaN(h) || isNaN(m)) return null
        return h + m/60
      }
      let bed = timeStrToHour(q1)
      let up = timeStrToHour(q3)
      let sleep = parseFloat(q4)
      if (bed === null || up === null || isNaN(sleep)) return '-'
      // 跨天处理
      let inBed = up - bed
      if (inBed <= 0) inBed += 24
      if (inBed <= 0) return '-'
      let eff = sleep / inBed * 100
      if (isNaN(eff)) return '-'
      if (eff > 85) return 0
      if (eff >= 75 && eff <= 84) return 1
      if (eff >= 65 && eff < 75) return 2
      if (eff < 65) return 3
      return '-'
    },
    sleepDisorderScore() {
      // 第5B~5I题（id:6~13）选择题，A=0,B=1,C=2,D=3；第5J题（id:14）有内容1分，无内容0分
      let sum = 0
      for(let i=6;i<=13;i++){
        let v = this.answers[i]
        if(v === 0) sum += 0
        else if(v === 1) sum += 1
        else if(v === 2) sum += 2
        else if(v === 3) sum += 3
      }
      let v14 = this.answers[14]
      if(v14 && String(v14).trim() !== '') sum += 1
      // 分段
      if(sum === 0) return 0
      if(sum >= 1 && sum <= 9) return 1
      if(sum >= 10 && sum <= 18) return 2
      if(sum >= 19 && sum <= 27) return 3
      return '-'
    },
    hypnoticScore() {
      // 第7题（id:16）A=0,B=1,C=2,D=3
      let v = this.answers[16]
      if(v === 0) return 0
      if(v === 1) return 1
      if(v === 2) return 2
      if(v === 3) return 3
      return '-'
    },
    daytimeDysfunctionScore() {
      // 第八题（id:17）A=0,B=1,C=2,D=3
      let q8 = this.answers[17]
      let q8Score = null
      if(q8 === 0) q8Score = 0
      else if(q8 === 1) q8Score = 1
      else if(q8 === 2) q8Score = 2
      else if(q8 === 3) q8Score = 3
      
      // 第九题（id:18）A=0,B=1,C=2,D=3
      let q9 = this.answers[18]
      let q9Score = null
      if(q9 === 0) q9Score = 0
      else if(q9 === 1) q9Score = 1
      else if(q9 === 2) q9Score = 2
      else if(q9 === 3) q9Score = 3
      
      // 累加
      if(q8Score === null || q9Score === null) return '-'
      let sum = q8Score + q9Score
      if(sum === 0) return 0
      if(sum >= 1 && sum <= 2) return 1
      if(sum >= 3 && sum <= 4) return 2
      if(sum >= 5 && sum <= 6) return 3
      return '-'
    },
    psqiTotalScore() {
      // 获取所有分量得分
      const scores = [
        this.sleepScore,
        this.sleepTimeScore,
        this.sleepDurationScore,
        this.sleepEfficiencyScore,
        this.sleepDisorderScore,
        this.hypnoticScore,
        this.daytimeDysfunctionScore
      ]
      
      // 检查是否有未作答的题目
      if(scores.includes('-')) return '-'
      
      // 计算总分
      return scores.reduce((sum, score) => sum + score, 0)
    },
    completedCount() {
      return this.questions.filter(q => {
        const answer = this.answers[q.id];
        if (q.id === 14) {
          return true; // 第14题是选填的，不计入进度
        }
        return answer !== undefined && answer !== null && answer !== '';
      }).length;
    },
  },
  onLoad() {
  	this.Usercentre()
  },
  methods: {
    startTest() {
      this.showIntro = false
    },
    selectChoice(qid, oidx) {
      this.$set(this.answers, qid, oidx)
    },
	Usercentre(){
		getUsercentre({}).then(res => {
			console.log("res.999",res)
			this.userInfoT = res
		})
	},
    nextPage() {
      if (this.page < this.totalPages - 1) this.page++
	  this.$nextTick(() => {
	  	this.$refs['resultView'].scrollTo({
	  		top: 0,
	  		behavior: 'smooth'
	  	})
	  })
    },
    prevPage() {
      if (this.page > 0) this.page--
	  this.$nextTick(() => {
	  	this.$refs['resultView'].scrollTo({
	  		top: 0,
	  		behavior: 'smooth'
	  	})
	  })
    },
    submit() {
      // 检查所有题目是否都已作答
      const unansweredQuestions = []
      this.questions.forEach(question => {
        const answer = this.answers[question.id]
        // 跳过第14题的必填检查
        // if (question.id === 14) {
        //   if (answer === undefined || answer === null || answer === '') {
        //     this.answers[question.id] = '无'
        //   }
        //   return
        // }
        if (answer === undefined || answer === null || answer === '') {
          unansweredQuestions.push(question.index)
        }
      })

      // 新增：第14题如选非“无”时，说明必填
      if (this.answers[14] !== undefined && this.answers[14] !== 0) {
        if (!this.otherSleepDesc || this.otherSleepDesc.trim() === '') {
          uni.showModal({
            title: '提示',
            content: '第14题，请填写具体说明',
            showCancel: false
          })
          return
        }
      }

      if (unansweredQuestions.length > 0) {
        uni.showModal({
          title: '提示',
          content: `第${unansweredQuestions.join('、')}题尚未作答，请完成所有题目后再提交`,
          showCancel: false
        })
        return
      }

      // 将答案添加到questions数组中
      this.questions.forEach(question => {
        const answer = this.answers[question.id]
        if (answer !== undefined) {
          if (question.type === 'choice') {
            question.answer = question.options[answer]
          } else {
            question.answer = answer
          }
        }
        question.userId = this.userInfoT.id
      })
      
      // 计算PSQI总分并匹配结论
      let score = this.psqiTotalScore
      let idx = -1
      if (typeof score === 'number') {
        if (score >= 0 && score <= 5) idx = 0
        else if (score >= 6 && score <= 10) idx = 1
        else if (score >= 11 && score <= 15) idx = 2
        else if (score >= 16 && score <= 21) idx = 3
      }
      if (idx !== -1) {
        this.userScaleConclusionDto.conclusion = this.conclusion[idx].Content
      } else {
        this.userScaleConclusionDto.conclusion = ''
      }
      this.userScaleConclusionDto.userId = this.userInfoT.id
      this.userScaleConclusionDto.score = this.psqiTotalScore
      
      // 去除id字段
      const questionsWithoutId = this.questions.map(({ id, ...rest }) => rest)
      let test_id = uni.getStorageSync("test_id");
	  
	  this.userScaleConclusionDto.result_id = test_id
      Userscaledetail({
        userScaleDetailDtos: questionsWithoutId,
        userScaleConclusionDto: this.userScaleConclusionDto,
      }).then((res) => {
        console.log("res.res:11",res)
        if(res){
          // uni.navigateTo({
          //   url: '/pages/healthtest/conclusion?numb='+ this.psqiTotalScore + '&conclusionid=' + res.data.id
          // })
		  uni.navigateTo({
		    url: '/pages/healthtest/Newconclusion?numtolt='+ this.psqiTotalScore + '&conclusionid=' + res.data.id
		  })
        }else{
          uni.showToast({
            title: res.msg || '请重试',
            icon: 'none'
          })
        }
      })
      // console.log("questions with answers:", this.questions)
      // console.log("userScaleConclusionDto:", this.userScaleConclusionDto)
    },
    getPlaceholder(qid) {
      if (qid === 1) return '请选择时间'
      if (qid === 2) return '请输入分钟数'
      if (qid === 3) return '请选择时间'
      if (qid === 4) return '请输入小时数'
      if (qid === 14) return '选填，如无其他情况可不填'
      return '请输入答案'
    },
    onTimeChange(e, qid) {
      this.answers[qid] = e.detail.value
    },
    validateInput(event, qid) {
      const value = event.detail.value
      if (qid === 2 || qid === 4) {
        // 数字验证
        this.answers[qid] = value.replace(/[^\d]/g, '')
      }
    },
  }
}
</script>

<style>
.topic-container {
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 80px;
}
.score-bar {
  font-size: 16px;
  color: #153b70;
  font-weight: bold;
  margin-bottom: 18px;
  background: #eaf0fa;
  border-radius: 8px;
  padding: 10px 16px;
  display: inline-block;
}
.score-value {
  color: #ff4d4f;
  font-size: 20px;
  margin-left: 6px;
}
.question-block {
  background: #fff;
  border-radius: 12px;
  margin-bottom: 18px;
  padding: 18px 16px 16px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.question-title {
  font-size: 14px;
  /* color: #153b70; */
  color: #000;
  font-weight: bold;
  margin-bottom: 12px;
}

.input-answer {
  /* width: 100%; */
  width: 90%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;
  color: #333;
  background: #f8f9fa;
}
.choice-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.choice-item {
  flex: 1 1 40%;
  background: #f3f6fa;
  color: #153b70;
  border-radius: 8px;
  padding: 10px 0;
  text-align: center;
  font-size: 15px;
  margin-bottom: 8px;
  border: 1px solid #e0e0e0;
  transition: background 0.2s, color 0.2s;
}
.choice-item.selected {
  /* background: #153b70; */
  background: #3575f6;
  color: #fff;
  border: 1px solid #3575f6;
}
.page-btn-row {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 12px 20px 20px 20px;
  z-index: 10;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.04);
}
.page-btn {
  flex: 1;
  background: #153b70;
  color: #fff;
  border-radius: 30px;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 0;
  text-align: center;
  margin: 0 8px;
}
.page-btn.main {
  background: #3575f6;
}

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
}

.intro-content {
  width: 90%;
  max-width: 320px;
  background: #fff;
  border-radius: 14px;
  padding: 22px 18px 18px 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ede6f7;
  color: #6f4fc7;
  font-size: 16px;
  font-weight: bold;
  border-radius: 16px;
  padding: 6px 18px;
  margin-bottom: 18px;
  /* margin-top: -30px; */
  box-shadow: 0 2px 8px rgba(111,79,199,0.06);
}

.intro-text {
  font-size: 13px;
  color: #333;
  line-height: 1.7;
  margin-bottom: 24px;
  text-align: left;
  word-break: break-all;
}

.intro-btn {
  background: #b39ddb;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(111,79,199,0.08);
  letter-spacing: 2px;
}

.input-tip {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  display: block;
}

.picker-text {
  color: #333;
  font-size: 15px;
}

.progress-bar {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.progress-text {
  font-size: 14px;
  color: #153b70;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
  text-align: center;
}

.progress-line {
  height: 6px;
  background: #eaf0fa;
  border-radius: 3px;
  overflow: hidden;
}

.progress-inner {
  height: 100%;
  background: #3575f6;
  border-radius: 3px;
  transition: width 0.3s ease;
}


.conttt {
	overflow: scroll;
	padding-bottom: 160rpx;
	position: absolute;
	top: 10rpx;
	bottom: 0;
	left: 0;
	right: 0;
}
</style>