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
	/*每个页面公共css */
	.flex {
		display: flex;
	}

	.just-align-center {
		justify-content: center;
	}

	.align-center {
		align-items: center;
	}
</style>