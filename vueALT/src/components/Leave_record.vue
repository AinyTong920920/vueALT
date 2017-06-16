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
                                <!-- <div class="form-group">
                                    <label for="">姓名：</label>
                                    <input type="text" class="form-control" placeholder="姓名"></div>
                                <div class="form-group">
                                    <button class="btn btn-primary">搜索</button>
                                </div> -->
                                <div class="form-group pull-right">
                                    <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal" @click.prevent>新增</button>
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
                                        <th>时长</th>
                                        <th>备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in datalist">
                                        <td>{{data.number}}</td>
                                        <td>{{data.name}}</td>
                                        <td>{{data.date}}</td>
                                        <td>{{data.duration}}</td>
                                        <td>{{data.remark}}</td>
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
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">请输入申请描述</h4>
                    </div>
                    <div class="modal-body">

                        <form action="">
                            <div class="form-group">
                                <label for="">员工编号</label>
                                <input type="text" class="form-control"></div>
                            <div class="form-group">
                                <label for="">日期</label>
                                <input type="text" class="form-control" name="daterangesingle" readonly="readonly"></div>
                            <div class="form-group">
                                <label for="">时长</label>
                                <input type="number" class="form-control"></div>
                            <div class="form-group">
                                <label for="">备注</label>
                                <textarea class="form-control" rows="3" placeholder="请输入文字" style="resize: none"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">提交</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
import Contentheader from './Content_header'
export default {
    name: 'leave_record',
    components: {
        Contentheader
    },
    data() {
        return {
            menuList: [{
                text: "考勤管理",
                isActive: false
            }, {
                text: "调休使用记录",
                isActive: true
            }],
            datalist:[{
                number:'001',name:'张三',date:'2016-11-01',
                duration:'8h',
                remark:''
            },{
                number:'002',
                name:'张三',
                date:'2016-11-01',
                duration:'7h',
                remark:''
            },{
                number:'003',
                name:'张三',
                date:'2016-11-01',
                duration:'3h',
                remark:''
            },{
                number:'004',
                name:'张三',
                date:'2016-11-01',
                duration:'6h',
                remark:''
            }]
        }
    },
    mounted(){
        this.plugin.getdatePicker();
        var table = $('#example1').DataTable({
            "dom": '<"search search1"f>tp'
        });
    }

}
</script>
<style>
div.search1 {
  margin-right: 70px;
}
</style>