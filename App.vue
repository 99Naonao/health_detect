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