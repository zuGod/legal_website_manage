<template>
  <div class="layout-container">
    <el-container class="container">
      <el-aside class="aside"
                width="200px">
        <AppAside class="aside-menu"></AppAside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="text">内容发布管理系统</div>
          <el-dropdown class="dropdown">
            <div class="right-user">
              <img :src="user_pic"
                   alt="">
              <span>{{user.username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <!-- native 原生事件修饰符 -->
              <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main class="main"><router-view /></el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import AppAside from './components/aside.vue'
import { userInfoAPI } from '@/api/user'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  data () {
    return {
      user: {},
      user_pic: ''
    }
  },
  methods: {
    onLogout () {
      // 清除用户状态
      window.localStorage.removeItem('token')

      this.$router.push('/login')
    },
    loadUserProfile () {
      userInfoAPI().then(res => {
        this.user = res.data.data
        this.user_pic = 'data:image/png;base64,' + this.user.user_pic
      })
    }
  },
  created () {
    this.loadUserProfile()
  }
}
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.aside {
  .aside-menu {
    height: 100%;
  }
  background-color: antiquewhite;
}
.header {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  background-color: rgb(245, 240, 240);
}
.right-user {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 6px;
  }
}
</style>
