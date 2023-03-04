<template>
  <div class="person-container">
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
        <el-table :data="regularList"
                  stripe
                  style="width: 100%">

          <el-table-column prop="name"
                           label="账户名"
                           width="230">
          </el-table-column>
          <el-table-column prop="nick_name"
                           label="昵称"
                           width="230">
          </el-table-column>
          <el-table-column prop="age"
                           label="年龄"
                           width="180">
          </el-table-column>
          <el-table-column prop="email"
                           label="邮箱">
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag type="success"
                      v-if="scope.row.state === 0">启用中</el-tag>
              <el-tag type="info"
                      v-else-if="scope.row.state !== 0">已禁用</el-tag>
            </template>
          </el-table-column>
          <el-table-column fixed="right"
                           label="操作"
                           width="100">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.state"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         :active-value="0"
                         :inactive-value="1"
                         @change="onState(scope.row)">
              </el-switch>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { regularInfo, logRegularInfo } from '@/api/user.js'
// logRegularInfo
export default {
  name: 'personIndex',
  data () {
    return {
      regularList: []
    }
  },
  created () {
    this.loadRegularInfo()
  },
  methods: {
    async loadRegularInfo () {
      try {
        const { data } = await regularInfo()
        this.regularList = data.data
      } catch (err) {
      }
    },
    onState (option) {
      logRegularInfo({
        id: option.id,
        state: option.state
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
