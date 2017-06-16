<template>
    <div class="content-header">
      <h1>
        {{title}}
        <small>{{v}}</small>
      </h1>
      <ol class="breadcrumb">
        <li v-for="(item,index) in menuList"  :class="item.isActive">
          <i v-if="index==0" class="glyphicon glyphicon-home"></i>{{item.text}}</li>
      </ol>
    </div>
</template>
<script>
  export default{
    name:'contentheader',
    data(){
      return{
        title:'ALT管理系统',
        v:'Version 1.0'
      }
    },
    props:['menuList']
  }
</script>
<style scoped>
  .glyphicon-home{
    margin-right: 10px;
  }
</style>