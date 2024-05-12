import * as echarts from 'echarts';
const category = [{
	"typeName": "综合图书",
	"bnum": 30

}];
const lineData = [{
	"typeName": "综合图书",
	"bnum": 20
}];
let colorList = {
	first: ["#F179C4", "#26AEFB", "#CDAD92", "#ED65BA", "#989FBB", "#E86A6A", "#6718CF"],
	second: ["#E33AA3", "#056FAB", "#FFAA62", "#E33AA3", "#28B1FF", "#FFAA62", "#F47384"]
};
let chartConfig = { //配置信息为，chart中横坐标第一项索引，最后一项索引，规定列表长度
	first: 0,
	second: 1,
	max: 10
};
const progressData = {
	grid: [{ //设置边距
		left: 0,
		bottom: 0,
		top: 0,
		right: 0
	}],
	yAxis: { //Y轴配置
		show: false,
		axisLine: {
			show: false,
			lineStyle: { //隐藏Y轴
				opacity: 0
			}
		},
		axisTick: { //隐藏刻度
			show: false,
		},
		splitLine: { //隐藏刻度
			show: false,
		},
		axisLabel: { //Y轴文字
			color: '#fff',
			fontSize: 12
		},
	},
	xAxis: { //X轴配置
		data: category, //X轴数据
		show: false,
		axisLabel: { //X轴文字样式
			color: '#a9aabc',
			fontSize: 12,
			interval: 0,
			padding: [10, 0, 0, 0]
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false,
		}
	},
	series: [{
		name: '123',
		type: 'pictorialBar', //设置类型为象形柱状图
		symbol: 'roundRect', //图形类型，带圆角的矩形
		barWidth: '11%', //柱图宽度
		barMaxWidth: '20%', //最大宽度
		symbolMargin: '0', //图形垂直间隔
		animationDelay: (dataIndex, params) => { //每个图形动画持续时间
			return params.index * 50;
		},
		itemStyle: {
			normal: {
				color: params => { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
					return new echarts.graphic.LinearGradient(
						1, 1, 0, 0, [{
								offset: 0,
								color: colorList.first[params.dataIndex]
							},
							{
								offset: 1,
								color: colorList.second[params.dataIndex]
							}
						])
				}
			}
		},
		z: 1,
		symbolRepeat: true, //图形是否重复
		symbolSize: [25, 6], //图形元素的尺寸
		data: lineData, //Y轴数据
		animationEasing: 'elasticOut' //动画效果
	}]
}
// let setOption = () => { //重置数据
//     _option.xAxis.data = category.slice(chartConfig.first, chartConfig.second)
//     _option.series[0].data = lineData.slice(chartConfig.first, chartConfig.second)
//     _myChart.setOption(_option, true)
// }
// let timeTick = () => { //定时器,最好用延时加递归，如果用setInterval，容易造成堵塞
//     if (timeTickId) {
//         clearTimeout(timeTickId)
//         timeTickId = 0
//     }
//     autoChangeData()
//     timeTickId = setTimeout(timeTick, 1000 * timer || 5000)
// }
// let autoChangeData = () => { //偏移数组，切换数据
//     if (!chartConfig.max) {
//         return
//     }
//     if (chartConfig.second >= chartConfig.max) {
//         chartConfig.second = chartConfig.second - chartConfig.first
//         chartConfig.first = 0
//     } else {
//         chartConfig.first++
//         chartConfig.second++
//     }
//     setOption()
// }
// let filterData = (data, category = [], lineData = []) => { //过滤后端数据，分别变成X轴数组和Y轴数组
//     data.forEach(item => {
//         item.typeName = item.typeName.length > 2 ? item.typeName.substring(0, 2) : item.typeName
//         category.push(item.typeName || '')
//         lineData.push(item.bnum || 0)
//     })
//     return {
//         category,
//         lineData
//     }
// }

var data = [100, 200];
var titlename = ["苹果", "香蕉"];
var option = {
	backgroundColor: "", //如果设置图片背景，在外层div设置css样式
	grid: {
		left: "10",
		top: "10",
		right: "0",
		bottom: "10",
		containLabel: true,
	},
	xAxis: {
		type: "value",
		splitLine: {
			show: false
		},
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
	},
	yAxis: [{
			type: "category",
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				color: "black",
				fontSize: 12,
				textStyle: {
					color: "#fff",
				},
			},
			data: titlename,
			// max:10, 设置y刻度最大值，相当于设置总体行高
			inverse: true, //横向进度条的关键
		},
		{
			type: "category",
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				color: "black",
				fontSize: 12,
				textStyle: {
					color: "#fff",
				},
			},
			data: data,
			// max:10,
			inverse: true,
		},
	],
	series: [{
			name: "条",
			type: "pictorialBar",
			symbolRepeat: "fixed",
			symbolMargin: 1,
			symbol: "rect", //内部类型（方块，圆，svg，base64图片）
			symbolClip: true,
			symbolSize: [16, 8], //进度条的宽高
			symbolOffset: [5, 0], //柱子的位置偏移
			data: data,
			z: 2,
			// barCategoryGap:0,

			itemStyle: {
				normal: {
					barBorderRadius: 7,
					//柱体的颜色
					//右，下，左，上（1，0，0，0）表示从正右开始向左渐变
					color: function(params) {
						//   console.log(params);
						var colorList = [
							["#02f0fe", "#02B8EC"],
							["#02f0fe", "#02B8EC"],
							["#02f0fe", "#02B8EC"],
							["#02f0fe", "#02B8EC"],
							["#02f0fe", "#02B8EC"],
						];
						var colorItem = colorList[params.dataIndex];
						return new echarts.graphic.LinearGradient(
							1,
							0,
							0,
							0,
							[{
									offset: 0,
									color: colorItem[0],
								},
								{
									offset: 1,
									color: colorItem[1],
								},
							],
							false
						);
					},
				},
			},
			zlevel: 1,
		},
		{
			name: "进度条背景",
			type: "bar",
			barGap: "-100%",
			barWidth: 26,
			symbolOffset: [5, 0], //柱子的位置
			data: [100, 100, 100],
			color: "#fff",
			itemStyle: {
				normal: {
					barBorderRadius: 4,
				},
			},
		},
	],
};

export default option