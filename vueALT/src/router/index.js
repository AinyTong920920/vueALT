import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import attendance from '../components/Attendance'
import leave_record from '../components/Leave_record.vue'
import overtime_pass from '../components/Overtime_pass.vue'
import overtime_record from '../components/Overtime_record.vue'
import overtime_petitioner from '../components/Overtime_petitioner.vue'
import import_data from '../components/Import_data.vue'
import login from '../components/Login.vue'
import manage from '../components/Manage.vue'

Vue.use(Router)
// var router=new Router();
// var App = Vue.extend({});
// router.redirect({'*':'/login'})
// router.map({
// 		'/home':{name: "home", component: home },
//         '/attendance':{name:'attendance',component: attendance },
//         '/leave_record':{name:'leave_record', component: leave_record },
//         '/overtime_pass':{name:'overtime_pass', component: overtime_pass },
//         '/overtime_record':{name:'overtime_record',component: overtime_record },
//         '/overtime_petitioner':{name:'overtime_petitioner', component: overtime_petitioner },
//         '/import_data':{name:"import_data", component: import_data }
// })
// router.start(App, '#app')
export default new Router({
			routes: [{
				path: '/',
				redirect: '/login'
			}, {
				path:'/login',
				component: login,
			},{
				path: '/manage',
				name: "manage",
				component: manage,
				children: [{
					path: '/home',
					name: "home",
					component: home
				}, {
					path: '/attendance',
					component: attendance
				}, {
					path: '/leave_record',
					component: leave_record
				}, {
					path: '/overtime_pass',
					component: overtime_pass
				}, {
					path: '/overtime_record',
					component: overtime_record
				}, {
					path: '/overtime_petitioner',
					component: overtime_petitioner
				}, {
					path: '/import_data',
					component: import_data
				}]
			}]
			})