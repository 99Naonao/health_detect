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
			address: "",
			authAt: null,
			avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eop8EWu5X9uMZ8BErjVkjiagMpRKtkWczIMpIFSibrkHjA7icdgN6DJ93a7qcHiacZPQ27URnNBCicE8Bg/132",
			birthDay: "",
			code: "",
			createIp: null,
			createTime: "2024-04-26 15:00:28",
			createUser: "-1",
			fenxiaoId: "0",
			frozen: 0,
			identityCard: "",
			isAuth: 1,
			lastLoginAt: null,
			lastLoginIp: null,
			lastMobileToken: null,
			lastSignAt: null,
			lastSignTime: null,
			lev: 1,
			mobile: "",
			msgRead: 0,
			nickName: "大白牙",
			realName: "",
			recommendCode: "",
			registerAt: "2024-04-26 15:00:28",
			registerIp: null,
			remain: 0,
			score: 0,
			sex: "M",
			smsCode: "",
			statusFlag: 1,
			token: "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjMyLCJhY2NvdW50Ijoib1d2Vno2Y19UTDhzWXJ0RWxLU18ycVM2UjFfdyIsInV1aWQiOiI5MzQ2NDY3MC0yZTYwLTRlNTktOWQxNS03ZTE4NDBmYzNkNTEiLCJyZW1lbWJlck1lIjp0cnVlLCJleHBpcmF0aW9uRGF0ZSI6MTcxNjg5OTE4ODg2OCwiY2FUb2tlbiI6bnVsbCwib3RoZXJzIjpudWxsLCJzdWIiOiIzMiIsImlhdCI6MTcxNjI5NDM4OCwiZXhwIjoxNzE2ODk5MTg4fQ.dUDUpVfSQCtR31fzXMO1s_rV7-UTMAZcFXV4BqhGbOslFM_qbUabQOezxzGi-UuzXLJ06JoAgUFFGDEhbhMurw",
			tokenExpireAt: "1716899188868",
			totalConsume: 0,
			tradingPassword: "",
			updateTime: "2024-05-21 20:26:28",
			updateUser: "-1",
			userId: "32",
			userName: "oWvVz6c_TL8sYrtElKS_2qS6R1_w",
			userPassword: "",
			userType: null,
			withdraw: 0,
			yongjin: 0,
		},
		measureToken: 'NH68CCPEJt', // 密钥
	})
})

export default userInfoStore