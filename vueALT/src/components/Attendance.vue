<template>
  <div class="content-wrapper">
    <Contentheader v-bind:menuList="menuList"></Contentheader>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <form action="" class="form-inline">
                <div class="input-group">
                  <div class="input-group-addon"> <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" name="daterange" readonly="readonly"></div>
                <div class="form-group">
                  <label for="">姓名：</label>
                  <input type="text" class="form-control" placeholder="姓名"></div>
                <div class="form-group">
                  <button class="btn btn-primary ">搜索</button>
                </div>
              </form>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th style="width: 10px">ID</th>
                    <th>姓名</th>
                    <th>日期</th>
                    <th>开始</th>
                    <th>结束</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in datalist">
                    <td>{{data.number}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.date}}</td>
                    <td>{{data.startTime}}</td>
                    <td>{{data.endTime}}</td>
                  </tr>                
                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Contentheader from './Content_header.vue'
export default {
    name: 'attendance',
    components: {
        Contentheader
    },
    data() {
        return {
            menuList: [{
                text: "考勤管理",
                isActive: false
            }, {
                text: "我的考勤记录",
                isActive: true
            }],
            datalist:[{
                number:'001',name:'张三',date:'2016-11-01',
                startTime:'8:00',
                endTime:'20:00'
            },{
                number:'002',
                name:'张三',
                date:'2016-11-01',
                startTime:'7:00',
                endTime:'20:00'
            },{
                number:'003',
                name:'张三',
                date:'2016-11-01',
                startTime:'8:00',
                endTime:'20:00'
            },{
                number:'004',
                name:'张三',
                date:'2016-11-01',
                startTime:'11:00',
                endTime:'20:00'
            },{
                number:'005',
                name:'张三',
                date:'2016-11-01',
                startTime:'8:00',
                endTime:'20:00'
            },{
                number:'006',
                name:'张三',
                date:'2016-11-01',
                startTime:'8:00',
                endTime:'20:00'
            },{
                number:'008',
                name:'张三',
                date:'2016-11-01',
                startTime:'18:00',
                endTime:'20:00'
            },{
                number:'007',
                name:'张三',
                date:'2016-11-01',
                startTime:'10:00',
                endTime:'20:00'
            }]
        }
    },
    mounted() {
        this.plugin.getdatePicker();
        // $('#example1').DataTable();
    }
}
</script>