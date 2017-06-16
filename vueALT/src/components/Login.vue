<template>
    <div class="login">
        <div class="center-block loginbox">
            <h2 class="text-center">后台管理系统</h2>
            <div class="panel panel-default">
                <div class="panel-body">
                    <form id="submitForm" method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" id="username" name="username" autocomplete="off" v-model='uname' placeholder="用户名">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="pwd" class="form-control" id="password" name="password" autocomplete="off" placeholder="密码">
                        </div>
                        <button type="submit" class="btn btn-primary form-control">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
        	uname:'',
        	pwd:''
        }
    },
    mounted() {
    	var self=this;
        $("#submitForm").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            message: {
                username: {
                    required: "请输入用户名",
                    minlength: "用户名必需由两个字母组成"
                },
                password: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于5个字母"
                },
            },
            submitHandler(valid) {
              if(valid){
              	localStorage.setItem('username',self.uname);
              	self.$router.push('/home');
              }else{
              	console.log('error submit!!');
              	return false;
              }
            }
        });
    }
}
</script>
<style scoped>
.login {
    height: 100%;
    overflow-y: hidden;
    background-color: #367FA9;
}

.loginbox {
    width: 25%;
    margin-top: 10%;
}

h2 {
    color: #fff;
    margin-bottom: 25px;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}

</style>
