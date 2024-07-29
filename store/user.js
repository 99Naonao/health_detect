import {
	defineStore
} from 'pinia'

import {
	getToken,
	autoLogin
} from '@/utils/h5app.js'
const userInfoStore = defineStore('userInfo', {
	actions: {
		$login() {
			getToken().then(res => {
				console.log('$login:', res)
				this.measureToken = res
			})
		}
	},
	state: () => ({
		type: '1',
		userInfo: {

		},
		measureToken: 'NH68CCPEJt', // 密钥
	})
})

export default userInfoStore