<template>
  <div class="active-container">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right"
                       class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }"
                              class="first">首页</el-breadcrumb-item>
          <el-breadcrumb-item>人员管理</el-breadcrumb-item>
        </el-breadcrumb>

      </div>
      <div class="table-container">
        <el-table :data="activeList"
                  stripe
                  style="width: 100%">

          <el-table-column prop="title"
                           label="标题"
                           width="230"
                           align="center">
          </el-table-column>
          <el-table-column prop="active_content"
                           label="活动内容"
                           width="330"
                           align="center">
          </el-table-column>
          <el-table-column label="活动状态"
                           width="180"
                           align="center">
            <template slot-scope="scope">
              <el-tag type="warning"
                      size="medium"
                      v-if="scope.row.active_limit === 0">未开始</el-tag>
              <el-tag type="success"
                      size="medium"
                      v-else-if="scope.row.active_limit === 1">进行中</el-tag>
              <el-tag type="info"
                      size="medium"
                      v-else-if="scope.row.active_limit === 2">已结束</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="active_reg_start"
                           label="开始时间"
                           width="180"
                           align="center">
          </el-table-column>
          <el-table-column prop="active_reg_end"
                           label="结束时间"
                           width="180"
                           align="center">
          </el-table-column>
          <el-table-column label="状态"
                           align="center">
            <template slot-scope="scope">
              <el-tag type="success"
                      size="medium"
                      v-if="scope.row.status === 0">审核通过</el-tag>
              <el-tag type="danger"
                      size="medium"
                      v-else-if="scope.row.status === 1">审核未通过</el-tag>
              <el-tag type="warning"
                      size="medium"
                      v-else-if="scope.row.status === 2">审核中</el-tag>
            </template>
          </el-table-column>
          <el-table-column fixed="right"
                           label="操作"
                           width="300px"
                           align="center">
            <template slot-scope="scope">
              <el-button type="success"
                         icon="el-icon-check"
                         circle
                         @click="onChange(scope.row)"></el-button>
              <el-button type="danger"
                         icon="el-icon-close"
                         circle
                         @click="onChangeClose(scope.row)"></el-button>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getActive, postActiveStatus } from '@/api/active'
export default {
  name: 'activeIndex',
  data () {
    return {
      activeList: [],
      submit: 2
    }
  },
  created () {
    this.loadGetActive()
  },
  methods: {
    async loadGetActive () {
      const { data } = await getActive()
      this.activeList = data.data
    },
    onChange (row) {
      postActiveStatus({ id: row.id, status: 0 }).then(() => {
        this.loadGetActive()
      })
    },
    onChangeClose (row) {
      postActiveStatus({ id: row.id, status: 1 }).then(() => {
        this.loadGetActive()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-table {
  padding-left: 20px;
}
</style>
