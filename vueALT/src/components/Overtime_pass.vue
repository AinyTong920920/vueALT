<template>
    <div class="content-wrapper">
        <Contentheader v-bind:menuList="menuList"></Contentheader>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <div style="margin:10px 0;">
                                <button class="btn btn-sm btn-primary">批量同意</button>
                            </div>
                            <form action="" class="form-inline">
                                <div class="form-group">
                                    <label>类别：</label>
                                    <select class="form-control">
                                        <option>全部</option>
                                        <option>未通过</option>
                                        <option>已通过</option>
                                        <option>已审批</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">姓名：</label>
                                    <input type="text" class="form-control" placeholder="姓名"></div>
                                <div class="input-group date">
                                    <div class="input-group-addon"> <i class="fa fa-calendar"></i>
                                    </div>
                                    <input type="text" class="form-control pull-right"  name="daterangesingle"></div>
                                <div class="form-group">
                                    <button class="btn btn-primary ">搜索</button>
                                </div>
                            </form>
                        </div>
                        <div class="box-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>姓名</th>
                                        <th>日期</th>
                                        <th>时长</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in datalist">
                                        <td>{{data.id}}</td>
                                        <td>{{data.name}}</td>
                                        <td>{{data.date}}</td>
                                        <td>{{data.duration}}h</td>
                                        <td>
                                            <button type="button" data-toggle="modal" data-target="#modal" class="btn btn-sm btn-default">详情</button>
                                            <button type="button" class="btn btn-sm btn-primary">同意</button>
                                            <button type="button" class="btn btn-sm btn-default">拒绝</button>
                                        </td>
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

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">提交</button>
                    </div>
                </div>
                <!-- /.modal-content --> </div>
            <!-- /.modal --> </div>
    </div>
</div>
</template>
<script>
import Contentheader from './Content_header'
// import iCheck from '../../static/plugins/iCheck/icheck.js'
export default {
    name: 'overtime_pass',
    components: {
        Contentheader
    },
    data() {
        return {
            menuList: [{
                text: "加班管理",
                isActive: false
            }, {
                text: "加班审批",
                isActive: true
            }],
            datalist:[{
                id:'001',name:'李四',date:'2017-6-11',duration:"4"},{
                id:'002',name:'李四',date:'2017-6-11',duration:"4"},{
                id:'003',name:'李四',date:'2017-6-11',duration:"4"},{
                id:'004',name:'李四',date:'2017-6-11',duration:"4"    
            }]
        }
    },
    mounted(){
        this.plugin.getdatePicker();
    }

}
</script>