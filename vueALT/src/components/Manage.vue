<template>
	<div class="wrapper" id="manage">
		<Mainheader	></Mainheader>
		<Mainsidebar></Mainsidebar>
		<router-view></router-view>
		<div class="control-sidebar-bg"></div>
	</div>
</template>
<script>
import Mainheader from './Main_header.vue'
import Mainsidebar from './Main_sidebar.vue'
	export default{
		name:'manage',
		components:{
			Mainheader,
			Mainsidebar
		},
		created(){
			Pace.restart();
		},
		beforeUpdate(){
			Pace.restart();
		}
	}
</script>
<style>
	#manage.wrapper{
		height:100%!important;
	}
</style>