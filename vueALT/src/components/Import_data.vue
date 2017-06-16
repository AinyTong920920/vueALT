<template>
    <div class="content-wrapper">
        <Contentheader v-bind:menuList="menuList"></Contentheader>
        <section class="content">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">数据导入</h3>
                        </div>
                        <div class="box-body">
                            <h4>点击按钮导入上下班数据</h4>
                            <a href="#" class="btn btn-primary uploaderBtn">
                                上传
                                <input type="file" value="浏览" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Contentheader from './Content_header'
export default {
    name: 'import_data',
    components: {
        Contentheader
    },
    data() {
        return {
            menuList: [{
                text: "数据管理",
                isActive: false
            }, {
                text: "导入数据",
                isActive: true
            }]
        }
    }

}
</script>
<style scoped>
    .uploaderBtn{display:inline-block; position:relative; overflow:hidden;}
    .uploaderBtn input[type='file']{position:absolute; right:0; top:0; font-size:100px; opacity:0; filter:alpha(opacity=0);}
</style>