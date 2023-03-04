<template>
  <el-menu default-active="/"
           background-color="#002033"
           text-color="#fff"
           active-text-color="#ffd04b"
           router>
    <el-menu-item class="item">
      <div class="logo"><img src="../../../../public/img/logo.png"
             alt=""></div>
      <div><span class="text">中小学普法网</span></div>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-notebook-1"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="el-icon-reading"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="el-icon-tickets"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/person">
      <i class="el-icon-user"></i>
      <span slot="title">名单管理</span>
    </el-menu-item>
    <el-menu-item index="/active">
      <i class="el-icon-trophy"></i>
      <span slot="title">活动管理</span>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-setting"></i>
      <span slot="title">设置项</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AppAside'
}

</script>

<style lang="less" scoped>
.item {
  margin-top: 20px;
  margin-bottom: 20px;
}
.logo {
  float: left;
  width: 10px;
  height: 10px;
  img {
    width: 40px;
    height: 40px;
  }
}
.text {
  margin-left: 35px;
  color: rgb(247, 6, 6);
  font-size: 18px;
}
</style>
