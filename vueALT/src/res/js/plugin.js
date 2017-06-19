// plugin.js
var moment = require('../../plugins/daterangepicker/moment.js');
var daterangepicker = require("../../plugins/daterangepicker/daterangepicker.js");
var datepicker = require('../../../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');

function getdatePicker() {
    $('input[name="daterange"]').daterangepicker({
        ranges: {
            '今天': [moment(), moment()],
            '最近7天': [moment().subtract(6, 'days'), moment()],
            '最近30天': [moment().subtract(29, 'days'), moment()],
            '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "opens": "right",
        autoclose: true,
        // buttonClasses : [ 'btn btn-default' ],  
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        locale: {
            applyLabel: '确定',
            cancelLabel: '取消',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['1月', '2月', '3月', '4月', '5月', '6月',
                '7月', '8月', '9月', '10月', '11月', '12月'
            ],
            firstDay: 1,
            customRangeLabel: "选择起止日期"
        }
    });

    $('input[name="daterangesingle"]').daterangepicker({
      "singleDatePicker": true,
      "opens": "right",
      autoclose: true,
      // buttonClasses : [ 'btn btn-default' ],  
      applyClass : 'btn-small btn-primary',  
      cancelClass : 'btn-small',
      locale : {  
        applyLabel : '确定',  
        cancelLabel : '取消',  
        daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
        monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月',  
        '7月', '8月', '9月', '10月', '11月', '12月' ],  
        firstDay : 1,
      }
    });
}

module.exports = {
    getdatePicker: getdatePicker
}