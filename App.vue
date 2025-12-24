<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		/**
		 * from（触发返回行为的来源）:
		 *    'backbutton': 左上角导航栏按钮及安卓返回键；
		 *    'navigateBack': uni.navigateBack()方法；
		 *     支付宝小程序端不支持返回此字段。
		 */
		onBackPress(options) {
			console.log(options.from)
			if (true) {
				window.history.go(-2);
				return true;
			} else {
				return false;
			}
		}
	}
</script>

<style>
	html,
	body {
		height: 100%;
		overflow: scroll;
	}

	/*每个页面公共css */
	.flex {
		display: flex;
	}

	.uni-checkbox-input {
		border-radius: 100% !important;
		background-color: #F77913 !important;
		border: none !important;
		color: #ffffff !important;
	}

	.just-align-center {
		justify-content: center;
	}

	.align-center {
		align-items: center;
	}
</style>