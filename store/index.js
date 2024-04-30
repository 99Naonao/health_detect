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
		}
	}
})
export default store;