<template>
    <header class="main-header">
        <a href="#" class="logo">
            <span class="logo-mini"> <b>A</b>
                LT
            </span>
            <span class="logo-lg"> <b>Admin</b>
                LTE
            </span>
        </a>
        <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li v-for="(item,index) in items" class="dropdown messages-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa" :class="item.fa"></i>
                            <span class="label" :class="item.label">{{item.num}}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">You have {{item.num}} messages</li>
                            <li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">
                                            <div class="pull-left">
                                                <img :src="item.src" class="img-circle" alt="User Image"></div>
                                            <h4>
                                                Sender Name
                                                <small> <i class="fa fa-clock-o"></i>
                                                    {{item.time}}
                                                </small>
                                            </h4>
                                            <p>Message Excerpt</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer">
                                <a href="#">See All Messages</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="../../static/dist/img/user.png" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{username}}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li id="exit" @click="loginout"><a href="javascript:;">退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'mainheader',
    data() {
        return {
            name: 'Ainy',
            items: [{
                'fa': ' fa-envelope-o',
                'label': 'label-success',
                'num': 4,
                'src': '../../static/dist/img/user1-128x128.jpg',
                "time": '5mins'
            }, {
                'fa': 'fa-bell-o',
                'label': 'label-warning',
                'num': 10,
                'src': '../../static/dist/img/user2-160x160.jpg',
                "time": '2mins'
            }, {
                'fa': ' fa-flag-o',
                'label': 'label-danger',
                'num': 5,
                'src': '../../static/dist/img/user3-128x128.jpg',
                "time": '15mins'
            }]
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('username');
            return username ? username : this.name;
        }
    },
    methods: {
        loginout() {
            localStorage.removeItem('username')
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
.navbar-custom-menu>.navbar-nav>li.user>.dropdown-menu {
    width: 80px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    text-align: center;
}

li.user>.dropdown-menu #exit,
#exit a {
    height: 40px;
    line-height: 40px;
    padding: 0;
}
</style>
