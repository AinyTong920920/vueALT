<template>
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        XX管理系统
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><i class="glyphicon glyphicon-home"></i> 主页</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <h4 class="text-center">
        您好，{{username}}
      </h4>
      <h2 class="text-center">
        welcome
      </h2>
    </section>
  </div>
</template>
<script>
  export default{
    name:'home',
    computed: {
        username() {
            let username = localStorage.getItem('username');
            return username ? username : this.name;
        }
    }
  }
</script>