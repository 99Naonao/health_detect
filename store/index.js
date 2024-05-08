import {
	createStore
} from 'vuex'
console.log('store init!')
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
		measureToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwREVBNjhEMEUzODZGQzJDMDI2ODgwQTU4OUNGNjU4IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTUwNTAxMTQsImV4cCI6MTc0NjU4NjExNCwiaXNzIjoiaHR0cHM6Ly9tZWFzdXJlbWVudC1hdXRoLnh5bWluZC5jbiIsImF1ZCI6WyJNZWFzdXJlbWVudEFkbWluIiwiTWVhc3VyZW1lbnRNZXNzYWdlIl0sImNsaWVudF9pZCI6IjNhMTIzYTE0MDdhZDRiMDkzNDMwMTJlM2Y4YmUzYmRmIiwic3ViIjoiM2ExMjNhMTQtMDdhZS1lMjlhLTY3MWQtMTQ2NTBiNzBlYjJlIiwiYXV0aF90aW1lIjoxNzE1MDUwMTE0LCJpZHAiOiJsb2NhbCIsImxpY2Vuc2VfaWQiOiIzYTEyM2ExNC0wNzkzLTBkMGUtMGQ5NC0zYWQyYWYwOGE2ZWUiLCJsaWNlbnNlX3Nka192ZXIiOiIyIiwibGljZW5zZV9zZGtfb3JnYW5pemF0aW9uX3VuaXRfaWQiOiIzYTEyM2EwYi1mMTQ1LWZlNmItY2ZiOS04NGMzYmQ1YzYwMjkiLCJpYXQiOjE3MTUwNTAxMTQsInNjb3BlIjpbIk1lYXN1cmVtZW50QWRtaW4iLCJNZWFzdXJlbWVudE1lc3NhZ2UiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHJlbWl1bSJdfQ.NH68CCPEJt-kEXbGD2pJEsjVAoFv09UuTPDwAT8hbCBQBvyX91kb6MrlWiMjtsLUwhfZPI7ojnerfT7R2X0iMcQRf667Fi3XYVPnjH0bgPHev4CvMUEzcrwZ8WyHnG3-xiYBJZoYctP0AiSU8qCD611eOrbStb2xaFwfDhhTn44jJepkKMF3mLluWPS6Zf4hidPi69lQ7Y8qGz-nlL7_K2802f3wEgW_hv_turHyHJbrx2yR_8pRa8gCyabPYqUdArOe6_EDEOYLvZmEzLJWUThd1IZmau9m5MChxXHAol9puA5TQnTm_NhK4-YVOkKBsQ3KHiTP0vLFQXj_JYOavQ', // 密钥
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