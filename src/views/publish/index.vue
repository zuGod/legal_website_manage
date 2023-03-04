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

      </div>
      <el-form ref="article"
               :model="article"
               label-width="80px">
        <el-form-item label="标题"
                      prop="title">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="内容"
                      prop="content">
          <!-- <el-input type="textarea"
                    v-model="article.content"></el-input> -->
          <el-tiptap v-model="article.content"
                     :extensions="extensions"></el-tiptap>
        </el-form-item>
        <el-form-item label="作者"
                      prop="author">
          <el-input v-model="article.author"
                    placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="频道选择"
                      prop="cate_id">
          <el-select v-model="article.cate_id"
                     placeholder="活动区域">
            <el-option v-for="item in cate"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">发表</el-button>
          <el-button @click="resetForm('article')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList
} from 'element-tiptap'
import { postCreateArticle, getArticleCate } from '@/api/article'

export default {
  name: 'PublishIndex',
  data () {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline(),
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList()
      ],
      article: {
        title: '',
        content: '',
        cate_id: '',
        author: ''
      },
      cate: [],
      date: ''
    }
  },
  created () {
    this.loadArticleCate()
  },
  methods: {
    async loadArticleCate () {
      try {
        const { data } = await getArticleCate()
        this.cate = data.data
        console.log(new Date())
      } catch {
        this.toast('获取频道数据失败！')
      }
    },
    onSubmit () {
      const newDate = new Date()
      const dateNow = newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
      this.date = dateNow
      postCreateArticle({
        title: this.article.title,
        content: this.article.content,
        author: this.article.author,
        pub_date: this.date,
        cate_id: this.article.cate_id
      })
      this.$message({
        type: 'success',
        message: '发布成功!'
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-tiptap-editor__content {
  height: 300px;
}
</style>
