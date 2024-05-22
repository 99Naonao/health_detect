import App from './App'
import pinia from './store/index.js'
import wx from 'weixin-js-sdk'
import {
	msJsTicket
} from './utils/h5app.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3


// 获取页面参数
function getQueryString(name) {

	var url = window.location.search;

	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');

	var r = url.substr(1).match(reg);

	if (r != null) return decodeURI(r[2]);
	return null;
}
var code = getQueryString("code");
var openid = getQueryString("openid");
var isready = 0;
var title = "眠加活力健康检测"; //分享标题
var desc = "中数（福建）医疗科技有限公司" // 分享描述默认是空
var image = "https://sleep.zsyl.cc/sleeph5/share_img_not_delete.jpg";
let shareurl =
	'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ac2da77b1e55f42&redirect_uri=https://sleep.zsyl.cc/sleeph5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
// 如果没有code，刷新获取
if (!code) {
	window.location.href = shareurl;
}
// if (!code) {
// 	window.location.href = shareurl;
// }

var shareContent = ['onMenuShareTimeline', 'onMenuShareAppMessage'];

function isWeChat() { // 判断是否是微信浏览器
	//window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
	var ua = window.navigator.userAgent.toLowerCase();
	//通过正则表达式匹配ua中是否含有MicroMessenger字符串
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

// appId: "wx1ac2da77b1e55f42"
// nonceStr: "d32f6dfb-a208-4287-8631-76affadd47a8"
// signature: "02d16efc72a774fd7499ab6c1f7aa74b287ad43a"
// timestamp: "1716285379"

function register(res) {
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: res.appId, // 必填，公众号的唯一标识
		timestamp: res.timestamp, // 必填，生成签名的时间戳
		nonceStr: res.nonceStr, // 必填，生成签名的随机串
		signature: res.signature, // 必填，签名
		jsApiList: shareContent // 必填，需要使用的JS接口列表
	})

	wx.ready(() => { //需在用户可能点击分享按钮前就先调用
		console.log('readyreadyreadyreadyreadyreadyreadyready')
		isready = 1;
		// console.log('$shareurlshareurlshareurl:', shareurl)
		updateShareInfo(title, desc, shareurl, image);
	});
	wx.error(() => { //需在用户可能点击分享按钮前就先调用
		console.log('errorerrorerrorerrorerrorerrorerrorerror')
	});
}

function updateShareInfo($title, $desc, $shareurl, $image) {
	console.log('$shareurl:', $shareurl)
	// let shareeeee =
	// 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ac2da77b1e55f42&redirect_uri=https://sleep.zsyl.cc/sleeph5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	// console.log('shareeeee:', shareeeee)
	wx.onMenuShareTimeline({
		title: $title, // 分享标题
		link: $shareurl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: $image, // 分享图标
		success: () => {
			// 设置成功
		}
	})
	wx.onMenuShareAppMessage({
		title: $title, // 分享标题
		desc: $desc, // 分享描述
		link: $shareurl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: $image, // 分享图标
		success: () => {
			// 设置成功
		}
	})
}



import {
	createSSRApp
} from 'vue'
export function createApp() {
	window.wx = {}
	const app = createSSRApp(App)
	// 引入vuex
	app.use(pinia)
	return {
		app
	}
}
// #endif


// 开始初始化
var localUrl = window.location.href;
var postlocalurl = (localUrl.split("#")[0]);

if (isWeChat()) {
	var localUrl = window.location.href;
	var postlocalurl = (localUrl.split("#")[0]);

	shareurl = "https://sleep.zsyl.cc/sleeph5/index.html";
	msJsTicket({
		url: encodeURIComponent(postlocalurl)
	}).then((res) => {
		register(res);
	}).catch(res => {
		console.log('error:', res)
	})
}


async function lock() {
	// screen.orientation.unlock();
	// 锁定竖屏方向
	await screen.orientation
		.lock('portrait')
		.catch(e => {});
}

//锁定
lock()