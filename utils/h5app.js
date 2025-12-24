// #ifdef H5
import base from '@/utils/baseUrl';
// import CsbaseUrl from '@/utils/baseUrl';
import userInfoStore from '@/store/user.js';

const api = {
	login: '/ybLoginH5',
	cardList: '/card/serList',
	wxLogin: '/ybLoginWx',
	drawList: '/ybUserWithdrawList',
	withDraw2WX: '/ybUserWithdraw',
	cityList: 'https://sleep.zsyl.cc/sleep/city.json',
	wxPay: '/ybGbUserOrder/pay',
	qrCode: '/getWxQrCode',
	fenxiaoRule: '/ybDictFenxiao/detail',
	withDrawListApi: '/user/fenxiao/yongjin/detail/page',
	// token: '/ybHealthAccessToken',
	// add: '/ybUserHealthReport/add',
	last: '/ybUserHealthReport/last',
	// history: '/ybUserHealthReport/static',
	// msJsTicket: '/ybJsTicket', // 获取jsticket
	msJsTicket: '/shopapi/Detection/ybJsTicket', // 获取jsticket
	getOpenid:'/app/getOpenid',
	// scaledetail:'/app/user-scale-detail',
	scaledetail:'/shopapi/Detection/userScaleAdd ',
	Cslogin:'/shopapi/login/codeUrl',
	oaLogin:'/shopapi/login/oaLogin',
	usercentre:'/shopapi/user/centre',
	// deepseekchat:'/app/deepseek/chat',
	deepseekchat:'/shopapi/Detection/chat',
	deduct:'/shopapi/Detection/deduct',
	gift:'/shopapi/Detection/gift',
	contactqrcode:'/app/wechat/contact-qrcode',
	Detectionsection:'/shopapi/Detection/section',
	add: '/shopapi/Detection/resultAdd',
	resultLists: '/shopapi/Detection/resultLists',
	userScaleUpdate: '/shopapi/Detection/userScaleUpdate',
	history: '/shopapi/Detection/resultSelect',
	token: '/shopapi/Detection/token',
	confgn: '/shopapi/Detection/config',
	userScaleLists: '/shopapi/Detection/userScaleLists',
	createContactQrCode: '/shopapi/Detection/createContactQrCode',
	
	
}
// 获取票据
export function msJsTicket(parameter) {
	// return request_(base.baseUrl + api.msJsTicket, parameter)
	return request_(base.CsTbaseUrl + api.msJsTicket, parameter)
}

// 获取Openid
export function getOpenid(parameter) {
	return request_(base.CsbaseUrl + api.getOpenid, parameter)
}

// 企业微信渠道二维码
export function getcontactqrcode(parameter) {
	return request_(base.CsbaseUrl + api.contactqrcode, parameter)
}


// 获取getdeepseekchat
export function getdeepseekchat(parameter) {
	return requestT_(base.CsTbaseUrl + api.deepseekchat, parameter)
}


// 获取首次检测赠送积分
export function getgift(parameter) {
	return request_(base.CsTbaseUrl + api.gift, parameter)
}

// 获取配置
export function getconfgn(parameter) {
	return request_(base.CsTbaseUrl + api.confgn, parameter)
}



// 检测扣除积分
export function getdeduct(parameter) {
	return requestT_(base.CsTbaseUrl + api.deduct, parameter)
}

// 检测扣除积分
export function getDetectionsection(parameter) {
	return request_(base.CsTbaseUrl + api.Detectionsection, parameter)
}

// 测试记录
export function getresultLists(parameter) {
	return request_(base.CsTbaseUrl + api.resultLists, parameter)
}


// 更新测试记录
export function getuserScaleUpdate(parameter) {
	return requestT_(base.CsTbaseUrl + api.userScaleUpdate, parameter)
}

// 测试记录列表
export function getuserScaleLists(parameter) {
	return request_(base.CsTbaseUrl + api.userScaleLists, parameter)
}

// 二维码
export function getcreateContactQrCode(parameter) {
	return request_(base.CsTbaseUrl + api.createContactQrCode, parameter)
}



// 用户量表明细
export function Userscaledetail(parameter) {
	return requestT_(base.CsTbaseUrl + api.scaledetail, parameter)
}

export function getWxUserInfo() {
	var that = this;
	var lang = 'cn'

	uni.login({

		provider: "weixin",

		success: (loginRes) => {
			console.log('login success');
			uni.getUserInfo({

				provider: "weixin",

				success: (userRes) => {
					console.log(userRes.userInfo);
					var city = userRes.userInfo.city
					var country = userRes.userInfo.country
					var nickName = userRes.userInfo.nickName
					var province = userRes.userInfo.province
					var avatarUrl = userRes.userInfo.avatarUrl
					// this.userInfo = userRes.userInfo;

					// this.isLogin = true;

					// uni.setStorage({

					// 	key: "userInfo",

					// 	data: userRes.userInfo,

					// });
				}
			})
		}
	})
}
/**
 * 保存结果
 **/
export function addReport(desc) {
	// return request_(base.baseUrl + api.add, desc)
	return request_(base.CsTbaseUrl + api.add, desc)
}
/**
 * 获取最近一条测量记录
 **/
export function lastReport() {
	return request_(base.baseUrl + api.last, {})
}
/**
 * 自动登录
 **/
export function autoLogin(callback) {
	var code = window.getCode()
	console.log('onGetcode:', code)
	const inviteCode = uni.getStorageSync('invite_code')
	// let data = {
	// 	'code': code,
	// 	'appId': 'wx1ac2da77b1e55f42', // 眠加家居
	// 	'userName': code
	// }
	h5Login({
		code:code,
		invite_code:inviteCode
	}).then((res) => {
		uni.showToast({
			title: "登录成功"
		});
		let userInfo = res
		console.log('wxlogin:', userInfo)
		const teuserInfoStore = userInfoStore()
		teuserInfoStore.$patch({
			'userInfo': userInfo
		})
		setUserInfo(userInfo);

		//更新用户信息
		uni.showToast({
			title: '登录成功',
			duration: 2000,
			success() {
				if (callback)
					callback()
			}
		});
	})
}

function setUserInfo(userInfo) {
	//请求前加入token
	uni.setStorageSync("userInfo", userInfo);
}

/**
 * 
 * @param {
 * pageSize token
 * pageNo} data 
 * @returns 
 */
export function getToken(data) {
	// api/user/fenxiao/yongjin/detail/page?mtrlNo=&mtrlName=&mtrlStatus=&pageNo=1&pageSize=15&userId=26
	// return get_(base.baseUrl + api.token, data);
	return get_(base.CsTbaseUrl + api.token, data);
}

/** 获取登录code**/
export async function onGetCode() {
	return new Promise((resolve, reject) => {
		const platform = uni.getSystemInfoSync().platform;
		uni.login({
			platform,
			success: function(loginRes) {
				let code = loginRes.code
				resolve(code);
			},
			fail: (res) => {
				uni.showToast({
					title: res.errMsg
				})
				reject()
			}
		})
	})
}

/**
 * 微信小程序用户授权登录
 * @param {Object} data
 * @param {String} data.code - 小程序code
 * @param {String} data.encryptedData - 微信加密的用户数据
 * @param {String} data.iv - 偏移量
 */
export function h5Login(data) {
	// const fromId = store.getters.fromUid
	// data.fromId = fromId
	// return request_(base.baseUrl + api.login, data)
	// return request_(base.CsTbaseUrl + api.Cslogin, data)
	// return get_(base.CsTbaseUrl + api.Cslogin)
	return request_(base.CsTbaseUrl + api.oaLogin, data)
	
}

export function getUsercentre(data) {
	// api/user/fenxiao/yongjin/detail/page?mtrlNo=&mtrlName=&mtrlStatus=&pageNo=1&pageSize=15&userId=26
	return get_(base.CsTbaseUrl + api.usercentre, data);
}
/** 列表**/
export function cardList() {
	return get_(base.baseUrl + api.cardList)
}
/**二维码生成接口**/
export function getSeperateQRCode(data) {
	return request_(base.baseUrl + api.qrCode, data);
}
/**获取历史记录*/
export function getHistoryData(data) {
	// return request_(base.baseUrl + api.history, data);
	return request_(base.CsTbaseUrl + api.history, data);
	
}

/** 列表**/
export function getCityList() {
	return getJson_(api.cityList)
}

/** 列表**/
export function getJsonResult(url) {
	return getJson_(url)
}
/**微信支付**/
export async function wxPay(data) {
	let result = await request_(base.baseUrl + api.wxPay, data);
	const {
		wechat,
		orderInfo,
		payType,
		paymoney
	} = result
	// 余额支付
	if (payType === 1) return result
	// 用户积分兑换支付 类型大于15
	if (payType >= 15) return result
	// 如果需要支付，则往下走支付弹窗，否则直接成功
	if (paymoney > 0) {

	} else {
		return result
	}

	let paymentParams = {}

	// 获取支付提供商
	console.log('获取支付提供商')
	const providerRes = await uni.getProvider({
		service: 'payment'
	})
	console.log(providerRes)
	if (providerRes[0]) throw Error(providerRes[0].errMsg)
	paymentParams.provider = providerRes[1].provider[0]

	// 微信支付指定支付入参
	if (data.payType === 9) {
		paymentParams = Object.assign({}, paymentParams, wechat)
	}
	// 支付
	const paymentRes = await uni.requestPayment(paymentParams)
	console.log('paymentRes:', paymentRes)
	if (paymentRes[0]) {
		const msg = paymentRes[0].errMsg.includes('requestPayment:fail cancel') ? '取消支付' : paymentRes[0].errMsg
		throw Error(msg)
	}

	// 处理微信支付回调
}


function getJson_(url) {
	return new Promise((resolve, reject) => {
		console.log('====== url ======')
		console.log(url)
		uni.request({
			url: url,
			method: 'GET',
			header: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			success: res => {
				console.log('====== result ======')
				console.log(res.data)
				const {
					data,
				} = res

				// if ([200].includes(code)) {
				return resolve(data)
				// }
			},
			fail: err => {
				reject(err)
			}
		})
	})
}

function get_(url) {
	return new Promise((resolve, reject) => {
		console.log('====== url ======')
		console.log(url)
		//请求前加入token
		let storeUserInfo = uni.getStorageSync("userInfo");
		console.log('storeUserInfo', storeUserInfo)
		let header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'version':1
		}
		
		// let token =
		// 	"eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjMyLCJhY2NvdW50Ijoib1d2Vno2Y19UTDhzWXJ0RWxLU18ycVM2UjFfdyIsInV1aWQiOiI4ODY5OThjMC03ZDgyLTQwMDgtYjM5Yy1kZDc5MjZiMzg1NDUiLCJyZW1lbWJlck1lIjp0cnVlLCJleHBpcmF0aW9uRGF0ZSI6MTcxNjA5MzM5NzYzMSwiY2FUb2tlbiI6bnVsbCwib3RoZXJzIjpudWxsLCJzdWIiOiIzMiIsImlhdCI6MTcxNTQ4ODU5NywiZXhwIjoxNzE2MDkzMzk3fQ.dc4QTPBT_MV6ZUPidFFjkuZRWVZiAKbbvCgivjgIB0L9y3Zw9050VZfLRy2IAN3tYJnpGwQ8aZRDjQzJgd99rw"
		
		// console.log("token", token)
		if (storeUserInfo && storeUserInfo.token) {
			// header['Authorization'] = storeUserInfo.token;
			header['token'] = storeUserInfo.token;
			// options.header['Cookie'] = '';  
		} else {
			// header['Authorization'] = token;
		}
		uni.request({
			url: url,
			method: 'GET',
			header:header,
			success: res => {
				console.log('====== result ======')
				console.log(res.data)
				const {
					code,
					data,
					message
				} = res.data

				if ([601, 40098].includes(code)) {
					return resolve(code)
				}
				// if ([200].includes(code)) {
				return resolve(data)
				// }
			},
			fail: err => {
				// reject(err)
			}
		})
		// uni.request({
		// 	url,
		// 	method,
		// 	{
		// 		'Content-Type': 'application/json;charset=UTF-8',
		// 		// 'project_token': base.projectToken, //项目token（可删除）
		// 	},
		// 	data: sortData,
		// 	success: res => {
		// 		console.log('====== params ======')
		// 		console.log(sortData)
		// 		console.log('====== result ======')
		// 		console.log(res.data)

		// 		const {
		// 			code,
		// 			data,
		// 			message
		// 		} = res.data

		// 		/**
		// 		 * 200 - 成功
		// 		 * 401 - 未登录
		// 		 * 400012 - 仅限公众号新粉丝参与
		// 		 * 40013 - 未注册
		// 		 * 40092 - 新人抽奖未中奖
		// 		 * 40098 - 新人抽奖无抽奖次数
		// 		 * 601 - 抽奖团前置校验未关注公众号
		// 		 */
		// 		if ([200, 40013, 40092].includes(code)) {
		// 			return resolve(wholeData ? res.data : data)
		// 		}
		// 		if ([601, 40098].includes(code)) {
		// 			return resolve(code)
		// 		}
		// 		// 仅限公众号新粉丝参与错误弹窗提示
		// 		if (code === 400012) {
		// 			return reject(res.data)
		// 		}

		// 		if (code === 401) { // 未登录清除用户信息
		// 			store.commit('LOGOUT')
		// 		}

		// 		!noToast && uni.showToast({
		// 			icon: 'none',
		// 			title: msg || '服务繁忙'
		// 		})
		// 		reject(res.data)
		// 	},
		// 	fail: err => {
		// 		reject(err)
		// 	}
		// })
	})
}

function request_(url, sortData) {
	return new Promise((resolve, reject) => {
		console.log('====== url ======')
		console.log(url)

		//请求前加入token
		let storeUserInfo = uni.getStorageSync("userInfo");
		console.log('storeUserInfo', storeUserInfo)
		let header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'version':1
		}

		// let token =
		// 	"eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjMyLCJhY2NvdW50Ijoib1d2Vno2Y19UTDhzWXJ0RWxLU18ycVM2UjFfdyIsInV1aWQiOiI4ODY5OThjMC03ZDgyLTQwMDgtYjM5Yy1kZDc5MjZiMzg1NDUiLCJyZW1lbWJlck1lIjp0cnVlLCJleHBpcmF0aW9uRGF0ZSI6MTcxNjA5MzM5NzYzMSwiY2FUb2tlbiI6bnVsbCwib3RoZXJzIjpudWxsLCJzdWIiOiIzMiIsImlhdCI6MTcxNTQ4ODU5NywiZXhwIjoxNzE2MDkzMzk3fQ.dc4QTPBT_MV6ZUPidFFjkuZRWVZiAKbbvCgivjgIB0L9y3Zw9050VZfLRy2IAN3tYJnpGwQ8aZRDjQzJgd99rw"

		// console.log("token", token)
		if (storeUserInfo && storeUserInfo.token) {
			header['Authorization'] = storeUserInfo.token;
			header['token'] = storeUserInfo.token;
			// options.header['Cookie'] = '';  
		} else {
			// header['Authorization'] = token;
		}
		console.log('header', header)
		uni.showLoading({
			title: '加载中'
		})
		uni.request({
			url: url,
			method: 'POST',
			header: header,
			data: sortData,
			success: res => {
				// store.commit("setLoadingShow", false);
				uni.hideLoading()
				console.log('====== params ======')
				console.log(sortData)
				console.log('====== result ======')
				console.log(res.data)
				const {
					code,
					data,
					message
				} = res.data

				if ([601, 40098].includes(code)) {
					return resolve(code)
				}
				// if (['A10019', 'B0301'].includes(code)) {
				// 	uni.showToast({
				// 		title: message
				// 	})
				// 	uni.clearStorageSync('userInfo')
				// 	//重新登录刷新网页
				// 	window.location.href =
				// 		'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ac2da77b1e55f42&redirect_uri=https://sleep.xinglu.shop/sleeph5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
				// 	return reject(code)
				// }
				// if ([200].includes(code)) {
				return resolve(data)
				// }
			},
			fail: err => {
				uni.hideLoading()
				reject(err)
			}
		})
		// uni.request({
		// 	url,
		// 	method,
		// 	{
		// 		'Content-Type': 'application/json;charset=UTF-8',
		// 		// 'project_token': base.projectToken, //项目token（可删除）
		// 	},
		// 	data: sortData,
		// 	success: res => {
		// 		console.log('====== params ======')
		// 		console.log(sortData)
		// 		console.log('====== result ======')
		// 		console.log(res.data)

		// 		const {
		// 			code,
		// 			data,
		// 			message
		// 		} = res.data

		// 		/**
		// 		 * 200 - 成功
		// 		 * 401 - 未登录
		// 		 * 400012 - 仅限公众号新粉丝参与
		// 		 * 40013 - 未注册
		// 		 * 40092 - 新人抽奖未中奖
		// 		 * 40098 - 新人抽奖无抽奖次数
		// 		 * 601 - 抽奖团前置校验未关注公众号
		// 		 */
		// 		if ([200, 40013, 40092].includes(code)) {
		// 			return resolve(wholeData ? res.data : data)
		// 		}
		// 		if ([601, 40098].includes(code)) {
		// 			return resolve(code)
		// 		}
		// 		// 仅限公众号新粉丝参与错误弹窗提示
		// 		if (code === 400012) {
		// 			return reject(res.data)
		// 		}

		// 		if (code === 401) { // 未登录清除用户信息
		// 			store.commit('LOGOUT')
		// 		}

		// 		!noToast && uni.showToast({
		// 			icon: 'none',
		// 			title: msg || '服务繁忙'
		// 		})
		// 		reject(res.data)
		// 	},
		// 	fail: err => {
		// 		reject(err)
		// 	}
		// })
	})
}


function requestT_(url, sortData) {
	return new Promise((resolve, reject) => {
		console.log('====== url ======')
		console.log(url)

		//请求前加入token
		let storeUserInfo = uni.getStorageSync("userInfo");
		console.log('storeUserInfo', storeUserInfo)
		let header = {
			'Content-Type': 'application/json;charset=UTF-8',
			'version':1
		}
		if (storeUserInfo && storeUserInfo.token) {
			header['Authorization'] = storeUserInfo.token;
			header['token'] = storeUserInfo.token;
		} else {
		}
		console.log('header', header)
		// uni.showLoading({
		// 	title: '加载中'
		// })
		uni.request({
			url: url,
			method: 'POST',
			header: header,
			data: sortData,
			success: res => {
				uni.hideLoading()
				console.log('====== resultT ======')
				console.log(res.data)
				const {
					code,
					data,
					message
				} = res.data

				if ([601, 40098].includes(code)) {
					return resolve(code)
				}
				// if (['A10019', 'B0301'].includes(code)) {
				// 	uni.showToast({
				// 		title: message
				// 	})
				// 	uni.clearStorageSync('userInfo')
				// 	//重新登录刷新网页
				// 	window.location.href =
				// 		'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ac2da77b1e55f42&redirect_uri=https://sleep.xinglu.shop/sleeph5&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
				// 	return reject(code)
				// }
				// if ([200].includes(code)) {
				return resolve(res.data)
				// }
			},
			fail: err => {
				uni.hideLoading()
				reject(err)
			}
		})
	})
}


// 获取用户信息
function requestGetUserInfo() {
	return request_(base.baseUrl + api.login, {}, true)
}

// export function async getUserInfo() {
// 	try {
// 		const infoRes = await this.requestGetUserInfo()
// 		// 更新有数用户信息
// 		const ysInfo = {
// 			user_id: infoRes.userId + '',
// 			tag: [{
// 				tag_id: infoRes.userId + '',
// 				tag_name: infoRes.nickname
// 			}]
// 		}
// 		this.$toast('登录成功')
// 		// this.sr.setUser(ysInfo)
// 		// // 上报登录
// 		// this.sr.track('login_wxapp')
// 		// this.$toast('登录成功')
// 		// this.UPDATE_USER_INFO(infoRes)
// 		// // 更新南迅积分
// 		// console.log('登录获取积分')
// 		// await getNxPointInfo(0)
// 		// this.$emit('success')
// 	} catch (err) {
// 		console.log(err)
// 	}
// }
// #endif