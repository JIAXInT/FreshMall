<template>
  <div class="header">
    <!-- 顶部通栏 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">每日新鲜</a>
          <a href="javascript:;">会员中心</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">关于我们</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" @click="login">登录</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon--cart"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <!-- 头部区域 -->
     <header class='app-header'>
    <div class="container">
      <h1 class="logo"><RouterLink to="/">每日新鲜</RouterLink></h1>
      <ul class="navs">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li>
          <a href="#">新鲜水果</a>
          <div class="layer">
            <ul>
              <li v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imgs/nav-img/nav-1.jpg" alt="">
                  <p>山竹</p>
                </a>
              </li>
            </ul>
          </div>
        </li>        
        <li>
          <a href="#">海产水鲜</a>
          <div class="layer">
            <ul>
              <li v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imgs/nav-img/nav-2.jpg" alt="">
                  <p>三文鱼</p>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">精选肉类</a>
          <div class="layer">
            <ul>
              <li v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imgs/nav-img/nav-3.jpg" alt="">
                  <p>牛排</p>
                </a>
              </li>
            </ul>
          </div>
          </li>
        <li>
          <a href="#">冷饮冻食</a>
          <div class="layer">
            <ul>
              <li v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imgs/nav-img/nav-4.jpg" alt="">
                  <p>酸奶</p>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">蔬菜蛋品</a>
          <div class="layer">
            <ul>
              <li v-for="i in 8" :key="i">
                <a href="#">
                  <img src="/imgs/nav-img/nav-5.jpg" alt="">
                  <p>玉米</p>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
         <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
    </div>
  </header>

  </div>
</template>
<script>
  export default{
    name:'nav-header',
    methods:{
      login(){
        this.$router.push('/login');
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height:39px;
      line-height:39px;
      background-color:#333333;
      color:#B0B0B0;
      .container{
        @include flex();
        a{
          display:inline-block;
          color:#B0B0B0;
          margin-right:17px;
        }
        .my-cart{
          width:110px;
          background-color:#27BA9B;
          text-align:center;
          color:#ffffff;
          margin-right:0;
          .icon--cart{
            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
            margin-right:4px;
          }
        }
      }
    }

  }
  .app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 250px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/logo.png) no-repeat center 18px / contain;
    }
  }
  .navs {
    width: 820px;
    display: flex;
    justify-content: space-around;
    padding-left: 20px;
    li {
      margin-right: 20px;
      width: 80px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
      }
      &:hover {
        a {
          color: #27BA9B;
          border-bottom: 1px solid #27BA9B;
        }
         > .layer {
        height: 132px;
        opacity: 1;
       }
      }
      .layer {
        width: 1226px;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 112px;
        height: 0;
        overflow: hidden;
        opacity: 0;
        box-shadow: 0 0 5px #ccc;
        transition: all .2s .1s;
        z-index: 10;
        ul {
          display: flex;
          flex-wrap: wrap;
          padding: 0 70px;
          align-items: center;
          height: 132px;
          li {
            width: 110px;
            text-align: center;
            img {
              width: 60px;
              height: 60px;
            }
            p {
              padding-top: 10px;
            }
            &:hover {
              p {
                color: #27BA9B;
              }
            }
          }
        }
      }
    }
  }
  .header-search{
          width:319px;
          .wrapper{
            height:40px;
            border:1px solid #E0E0E0;
            display:flex;
            align-items:center;
            input{
              border:none;
              box-sizing: border-box;
              border-right:1px solid #E0E0E0;
              width:264px;
              height:30px;
              padding-left:14px;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-left:15px;
              margin-right:15px;
            }
          }
        }
}
</style>