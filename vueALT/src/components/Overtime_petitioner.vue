<template>
    <div class="content-wrapper">
        <Contentheader v-bind:menuList="menuList"></Contentheader>
        <section class="content">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">加班申请</h3>
                        </div>
                        <div class="box-body">
                            <div class="form-group">
                                <label>Date:</label>
                                <div class="input-group date">
                                    <div class="input-group-addon"> <i class="fa fa-calendar"></i>
                                    </div>
                                    <input type="text" class="form-control pull-right"  name="daterangesingle"></div>
                            </div>
                            <div class="form-group"><label for="duration">时长（小时）</label> <div><input type="number" id="duration" name="duration" min="0" placeholder="duration" class="form-control"></div></div>
                            <div class="form-group"><label>备注</label> <textarea rows="3" placeholder="请输入文字" class="form-control" style="resize: none;"></textarea></div>
                            <div class="form-group"><button class="btn btn-primary pull-right">提交</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Contentheader from './Content_header'
    export default{
        name:'overtime_petitioner',
        components:{
            Contentheader
        },
    data() {
        return {
            menuList: [{
                text: "加班管理",
                isActive: false
            }, {
                text: "加班申请",
                isActive: true
            }]
        }
    },
    mounted(){
        this.plugin.getdatePicker();
    }

    }
</script>