<template>
  <div class="container">

    <h1>登录</h1>

    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="login" color="#27ba9b" @click="login">登录</van-button>
      </div>
    </van-form>

    <div class="register">还没有账号？<router-link to="/register" class="to-register">立即注册</router-link></div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const { username, password } = this
      this.axios.post('http://www.justic.store:3001/api/user/login', {
        username,
        password
      }).then(res => {
        if (!username || !password) {
          Toast.fail('请输入用户名和密码')
        } else {
          window.sessionStorage.setItem('token', res.errno)
          this.saveUserName(this.username)
        }
        if (window.sessionStorage.token) {
          this.$router.push({
            path: '/home/my'
          })
        }
      }).catch(res => {
        if (!username && !password) {
          Toast.fail('请输入用户名和密码')
        } else {
          Toast.fail('用户名或密码不正确')
        }
      })
    },
    ...mapActions(['saveUserName'])
  }
}

</script>

<style lang="scss" scoped>
.container{
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: #e9f6ed;
  h1{
    position: relative;
    top: 50px;
    text-align: center;
  }
  .van-form{
    position: relative;
    top: 120px;
    margin: 20px;
    .van-cell{
      background-color: rgba(0,0,0,0);
    }
  }
  .register{
    display: block;
    position: relative;
    text-align: center;
    top: 110px;
    .to-register{
      display: inline-block;
      color: #27ba9b;
    }
  }
}
</style>