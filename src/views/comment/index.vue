<template>
  <div class="comment-container">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right"
                       class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }"
                              class="first">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布文章</el-breadcrumb-item>
        </el-breadcrumb>

      </div>
      <div class="table-container">
        <el-table :data="commentList"
                  stripe
                  style="width: 100%">

          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="title"
                           label="标题">
          </el-table-column>
          <el-table-column prop="content"
                           label="内容">
          </el-table-column>
          <el-table-column prop="email"
                           label="邮箱">
          </el-table-column>
        </el-table>
      </div>
    </el-card>

  </div>
</template>

<script>
import { getComment } from '@/api/comment'
export default {
  name: 'commentIndex',
  data () {
    return {
      commentList: []
    }
  },
  created () {
    this.loadComment()
  },
  methods: {
    async loadComment () {
      try {
        const { data } = await getComment()
        console.log(data)
        this.commentList = data.data
      } catch (err) {
        this.toast('数据获取失败！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
