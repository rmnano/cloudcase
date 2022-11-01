<template>
    <header id="header" class="tf_box pagewidth tf_clearfix" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
		<div class="header-bar tf_box">
			<div id="site-logo">
				<a href="https://www.cloudcase.net/wp-content/uploads/2019/10/CloudCase-Logo-RGB.png" title="Cloudcase - Optimising Process Automation">
					<img decoding="async" data-tf-not-load="1" src="https://staging4.lloydmichaels.com.au/wp-content/uploads/2019/09/CloudCase-Logo-RGB.png" alt="Cloudcase - Optimising Process Automation" title="CloudCase Logo RGB" width="200" height="" class="site-logo-image">
				</a>
			</div>		
		</div>						
	</header>
</template>
<script>
export default {
  name: 'CloudHeader'
}
</script>
<style scoped>
.header-bar {
	width: 100%;
	height: 80px;
	background-color: #f2f2f2;
}
#site-logo {
	height: 100%;
	width: 200px;
	margin-left: 20px;
}
#site-logo a{
	display: flex;
	height: 100%;
}
#site-logo img{
	margin: auto;
}
</style>