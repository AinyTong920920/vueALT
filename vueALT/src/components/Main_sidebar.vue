<template>
    <div class="main-sidebar">
        <div class="sidebar">
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../static/dist/img/user.png" class="img-circle" alt="User Image"></div>
                <div class="pull-left info">
                    <p>{{username}}</p>
                     <i class="fa fa-circle text-success"></i> Online
                </div>
            </div>
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"> <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <li class="active">
                    <router-link to='/home'><i class="glyphicon glyphicon-home"></i><span>主页</span></router-link>
                </li>
                <li class="treeview" v-for="item in mainNavs"><a href="javascript:;"><i class="fa" :class="item.icon_class"></i> <span>{{item.title}}</span> <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
                    <ul class="treeview-menu">
                        <li v-for="secd_item in item.secondNavs">
                            <router-link :to="secd_item.path"><i class="fa fa-circle-o"></i>{{secd_item.title}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mainsidebar',
    data() {
        return {
            mainNavs: [
                {
                    title: '考勤管理',
                    icon_class: 'fa-files-o',
                    secondNavs: [{
                        path: '/attendance',
                        title: '我的考勤记录'
                    }, {
                        path: '/leave_record',
                        title: '调休使用记录'
                    }]
                },{
                    title: '加班管理',
                    icon_class: 'fa-th',
                    secondNavs: [{
                        path: '/overtime_record',
                        title: '加班记录'
                    }, {
                        path: '/overtime_petitioner',
                        title: '加班申请'
                    },{
                        path: '/overtime_pass',
                        title: '加班审批'
                    }]
                },{
                    title: '数据管理',
                    icon_class: 'fa-pie-chart',
                    secondNavs: [{
                        path: '/import_data',
                        title: '导入数据'
                    }]
                }
            ]
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('username');
            return username ? username : this.name;
        }
    }
}
</script>
