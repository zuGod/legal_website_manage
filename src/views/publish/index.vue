<template>
  <div class="publish-container">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right"
                       class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }"
                              class="first">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布文章</el-breadcrumb-item>
        </el-breadcrumb>
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0"
                   type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4"
           :key="o"
           class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PublishIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
