<template>
	<vue-scroll class="page-dashboard">
		
		<el-row class="mt-0" :gutter="30">
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="card-base card-shadow--medium mb-30 widget small-widget" >
					<div class="widget-header ph-20 pt-20">
						<div class="flex justify-center align-center">
							<div class="widget-icon-box mr-20 animated fadeInRight">
								<i class="widget-icon mdi mdi-account-multiple accent-text fs-30"></i>
							</div>
							<div class="widget-info box grow text-truncate animated fadeInLeft">
								<div class="o-050 widget-title text-truncate pt-5 pb-10">ปริมาณน้ำ</div>
								<h2 class="m-0 text-truncate">4,523</h2>
							</div>
						</div>
				</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="card-base card-shadow--medium mb-30 widget small-widget" >
					<div class="widget-header ph-20 pt-20">
						<div class="flex justify-center align-center">
							<div class="widget-icon-box mr-20 animated fadeInRight">
								<i class="widget-icon mdi mdi-account-multiple accent-text fs-30"></i>
							</div>
							<div class="widget-info box grow text-truncate animated fadeInLeft">
								<div class="o-050 widget-title text-truncate pt-5 pb-10">ปริมาณน้ำ</div>
								<h2 class="m-0 text-truncate">4,523</h2>
							</div>
						</div>
				</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="card-base card-shadow--medium mb-30 widget small-widget" >
					<div class="widget-header ph-20 pt-20">
						<div class="flex justify-center align-center">
							<div class="widget-icon-box mr-20 animated fadeInRight">
								<i class="widget-icon mdi mdi-account-multiple accent-text fs-30"></i>
							</div>
							<div class="widget-info box grow text-truncate animated fadeInLeft">
								<div class="o-050 widget-title text-truncate pt-5 pb-10">ปริมาณน้ำ</div>
								<h2 class="m-0 text-truncate">4,523</h2>
							</div>
						</div>
				</div>
				</div>
			</el-col>
			<el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
				<div class="card-base card-shadow--medium mb-30 widget small-widget" >
					<div class="widget-header ph-20 pt-20">
						<div class="flex justify-center align-center">
							<div class="widget-icon-box mr-20 animated fadeInRight">
								<i class="widget-icon mdi mdi-account-multiple accent-text fs-30"></i>
							</div>
							<div class="widget-info box grow text-truncate animated fadeInLeft">
								<div class="o-050 widget-title text-truncate pt-5 pb-10">ปริมาณน้ำ</div>
								<h2 class="m-0 text-truncate">4,523</h2>
							</div>
						</div>
				</div>
				</div>
			</el-col>
		</el-row>
	
	</vue-scroll>
</template>

<script>
import firebase from 'firebase'
export default {
	name: 'Dashboard',
	data () {
		return {

		}
	},
	computed: {},
	methods: {},
	mounted() {
	},
	beforeDestroy() {},
	components: {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables';

</style>

<style lang="scss">
.page-dashboard {}

@media (max-width: 768px) {
	.page-dashboard {
		.vb-content {
			padding: 0 5px !important;
			margin: -5px;
			width: calc(100% + 10px) !important;
		}
	}
}
</style>


