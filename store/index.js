import {
	createStore
} from 'vuex'

// #ifdef H5
import {
	getToken,
	autoLogin
} from '@/utils/h5app.js'
// #endif

// #ifdef MP-WEIXIN
import {
	getToken,
	autoLogin
} from '@/utils/miniapp.js'
// #endif
const store = createStore({
	state: {
		type: '1',
		measureToken: '', // 密钥
	},
	mutations: {

	},
	actions: {
		$login(stateAll) {
			console.log('login', stateAll.state)
			getToken().then(res => {
				console.log('$login:', res)
				stateAll.state.measureToken = res
			})
		}
	},
	getters: {
		measureToken(state) {
			return state.measureToken
		},
		userInfo(state) {
			let userInfo = uni.getStorageSync("userInfo");
			return userInfo
		}
	}
})
export default store;