<template>
  <div class="login-container">
    <el-form class="login-form"
             ref="form"
             :model="user"
             :rules="rules"
             label-width="40px">
      <el-form-item class="text">
        <span>中小学普法网管理服务平台</span>
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="user.username"
                  placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password"
                  type="password"
                  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary"
                   @click="onSubmit"
                   class="submit_btn"
                   :loading="loginLoading">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loginLoading: false
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    onSubmit () {
      // const user = JSON.stringify(this.user)
      // 表单验证
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        // 验证通过
        this.login()
      })
    },
    login () {
      this.loginLoading = true
      loginAPI(this.user).then(res => {
        console.log(res)
        // 登录成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.loginLoading = false
      }).catch(err => {
        console.log('登录失败', err)
        // 登录失败
        this.$message.error('账号或密码错误')
        this.loginLoading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../../public/img/login3.jpg') no-repeat;
  background-size: cover;
  .login-form {
    background-color: #fff;
    width: 400px;
    height: 240px;
    padding: 50px;
  }
  .text {
    color: rgb(33, 141, 241);
    text-align: center;
    span {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
    }
  }
  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    .submit_btn {
      width: 170px;
      font-size: 16px;
    }
  }
}
</style>
