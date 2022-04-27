<template>
  <div class="container">

    <h1>注册</h1>

    <van-form @submit="register">
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
      <van-field
        v-model="password2"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="register" color="#27ba9b" @click="register">注册</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    register() {
      this.axios.post('http://www.justic.store:3001/api/user/register', {
        username: this.rusername,
        password: this.rpassword
      }).then(() => {
        Toast.success('注册成功')
        this.$router.push({
          path: '/login'
        })
      })
    }
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
    top: 100px;
    p{
      display: inline-block;
      color: #27ba9b;
    }
  }
}
</style>