import {
	createStore
} from 'vuex'
import {
	getToken,
	autoLogin
} from '@/utils/miniapp.js'
const store = createStore({
	state: {
		type: '1',
		token: '', // 密钥
	},
	mutations: {

	},
	actions: {
		$login() {
			console.log('login')
			getToken().then(res => {
				console.log(res)
				this.token = res
			})
		}
	},
	getters: {

	}
})
export default store;