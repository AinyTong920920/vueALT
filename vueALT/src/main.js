// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require("../bower_components/bootstrap/dist/css/bootstrap.min.css")
require('../static/dist/css/AdminLTE.min.css') 
require('../static/dist/css/skins/_all-skins.min.css') 
require('../bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css')
require("../static/plugins/daterangepicker/daterangepicker.css")
require('../static/plugins/datatables/dataTables.bootstrap.css')
require('../static/plugins/pace/pace.css')
require('../bower_components/iCheck/skins/flat/blue.css')



require('../bower_components/jquery/dist/jquery.js') 
require("../bower_components/bootstrap/dist/js/bootstrap.min.js")
// require('../bower_components/iCheck/icheck.js') 
require('../static/plugins/pace/pace.js') 
require('../static/plugins/datatables/dataTables.bootstrap.js') 
require('../static/plugins/datatables/jquery.dataTables.js')
require('../static/dist/js/app.min.js')
require('../static/plugins/jquery-validation/jquery.validate.min.js')
require('../static/plugins/jquery-validation/messages_zh.js')
var plugin = require('../static/dist/js/plugin.js');


Vue.prototype.plugin=plugin;
Vue.config.productionTip = false;
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
