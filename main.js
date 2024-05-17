import App from './App'
import store from './store/index.js'

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
import {
	createSSRApp
} from 'vue'
export function createApp() {
	window.wx = {}
	const app = createSSRApp(App)
	// 引入vuex
	app.use(store)
	return {
		app
	}
}
// #endif