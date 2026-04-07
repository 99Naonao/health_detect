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

	/* #ifdef H5 */
	/**
	 * uni.showModal 需高于页面内 fixed 弹窗（如 z-index:2000）。
	 * 切勿对「所有」.uni-mask 统一提层级：picker 时间/日期选择也会用 .uni-mask，
	 * 若蒙层高于滚轮区域会导致无法点选（见睡眠问卷 topic 页）。
	 * 仅当遮罩后紧跟 .uni-modal 时，才是 showModal 的配对遮罩。
	 */
	.uni-modal {
		z-index: 10051 !important;
	}
	.uni-mask:has(+ .uni-modal) {
		z-index: 10050 !important;
	}
	/* #endif */
</style>