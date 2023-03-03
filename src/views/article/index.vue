<template>
  <div class="article-container">
    <!-- //面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right"
                   class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }"
                          class="first">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表单 -->
    <el-form ref="form"
             :model="form"
             label-width="80px"
             class="form-container">
      <el-form-item label="频道选择">
        <el-radio-group v-model="radio"
                        @input="onChange">
          <el-radio :label='0'
                    value="1">全部</el-radio>
          <el-radio v-for="item in cate"
                    :key="item.id"
                    :label="item.id">{{ item.name }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker type="date"
                          placeholder="选择日期"
                          v-model="form.date1"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">筛选</el-button>
      </el-form-item>
    </el-form>

    <!-- table表格 -->
    <template>
      <div class="table-container">
        <el-table :data=list>
          <el-table-column label="封面"
                           width="280">
            <template slot-scope="scope">
              <el-image style="width:160px; height:180px"
                        :src="scope.row.cover_img"
                        fit="fill"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="title"
                           label="标题"
                           width="350">
          </el-table-column>
          <el-table-column prop="author"
                           label="作者"
                           width="200">
          </el-table-column>
          <el-table-column prop="pub_date"
                           label="日期"
                           width="200">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini">编辑</el-button>
              <el-button size="mini"
                         type="danger"
                         @click="onDelArticle(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <span class="demonstration"></span>
        <el-pagination background
                       layout="prev, pager, next"
                       :total="1000"
                       @current-change="onCurrentChange">
        </el-pagination>
      </div>

    </template>
  </div>
</template>

<script>
import { getArticleAPI, getArticleCate, postDelArticle } from '@/api/article'

// import { getArticleCate } from '@/api/article'
export default {
  name: 'ArticleIndex',
  data () {
    return {
      radio: 0,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: ''
      },
      list: [],
      cate: [],
      cate_id: '',
      page: '',
      article_id: ''
    }
  },

  created () {
    this.loadArticles(1)
    this.loadArticleCate()
  },
  methods: {
    onDelArticle (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        postDelArticle({ id }).then(res => {
          this.loadArticles({ page: this.page })
        })

        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    onChange (value) {
      this.cate_id = value
    },
    async loadArticleCate () {
      try {
        const { data } = await getArticleCate()
        this.cate = data.data
      } catch (err) {
        this.toast('数据获取失败！')
      }
    },
    onCurrentChange (page) {
      this.page = page
      this.loadArticles()
    },
    onSubmit () {
      this.loadArticles()
    },
    loadArticles () {
      getArticleAPI(
        {
          page: this.page,
          cate_id: this.cate_id
        }
      ).then(res => {
        const list = res.data.data
        list.forEach((item) => {
          item.cover_img = 'data:image/png;base64,' + item.cover_img
        })
        this.list = list
      })
    }
  }
}
</script>

<style lang="less" scoped>
.article-container {
  background-color: #fff;
  .breadcrumb {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .first {
      margin-left: 40px;
    }
  }

  .form-container {
    padding: 30px 0px 20px 30px;
  }
  .table-container {
    padding-left: 100px;
    border-top: 2px solid #ccc;
  }
}
.article-cover {
  width: 180px;
  height: 180px;
  background-size: cover;
}
</style>
