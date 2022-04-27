<template>
  <div class="login">
    <header class="login-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">每日新鲜</RouterLink></h1>
      <h3 class="sub"><slot /></h3>
      <RouterLink class="entry" to="/">
        进入网站首页
        <i class="iconfont icon-angle-right"></i>
        <i class="iconfont icon-angle-right"></i>
      </RouterLink>
    </div>
  </header>

    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms"  @click="centerDialogVisible = true">手机短信登录/注册</div>
            <div class="reg"  @click="centerDialogVisible = true">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 注册弹出框 -->
    <el-dialog
      title="注册"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="rusername">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="rpassword">
          </div>
          <div class="input">
            <input type="password" placeholder="确认密码" v-model="rpassword2">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">立即注册</a>
          </div>
    </el-dialog>

    <footer class="login-footer">
    <div class='container'>
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight &copy; 鲜果优品</p>
    </div>
  </footer>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data(){
    return {
      centerDialogVisible: false,
      username:'jack',
      password:'jack',
      rusername:'',
      rpassword:'',
      rpassword2:'',
      userId:''
    }
  },
  methods:{
    login(){
      let { username,password } = this;
      this.axios.post('http://www.justic.store:3001/api/user/login',{
        username,
        password
      }).then((res)=>{
        if (!username || !password) {
          this.$message.warning('请输入用户名和密码')
        } else {
          window.sessionStorage.setItem('token', this.username)
          this.$store.dispatch('saveUserName',this.username)
        }
        if (window.sessionStorage.token) {
          this.$router.push({
            path: '/index'
          })
        }
      })
    },
    ...mapActions(['saveUserName']),
    register(){
      this.axios.post('http://www.justic.store:3001/api/user/register',{
        username:this.rusername,
        password:this.rpassword,
      }).then(()=>{
        this.$message.success('注册成功');
      })
    }
  }
}
</script>
<style lang="scss">
.login{
  .login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/logo.png) no-repeat center 18px / contain;
    }
  }
  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }
  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    i {
      font-size: 14px;
      color: #27BA9B;
      letter-spacing: -5px;
    }
  }
  }
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#27BA9B;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#27BA9B;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .login-footer {
  padding: 30px 0 50px;
  background: #fff;
  p {
    text-align: center;
    color: #999;
    padding-top: 20px;
    a {
      line-height: 1;
      padding:0 10px;
      color: #999;
      display: inline-block;
      ~ a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:30px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
  
}


</style>