<template>
  <div>

    <div class="main">
      <router-view></router-view>
    </div>

    <van-tabbar route active-color="#27ba9b">
      <van-tabbar-item replace  icon="home-o" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item replace  icon="apps-o" to="/home/list">分类</van-tabbar-item>
      <van-tabbar-item replace  icon="cart-o" to="/home/cart">购物车</van-tabbar-item>
      <van-tabbar-item replace  icon="contact" to="/home/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main{
  background-color: #fafafa;
  padding-bottom: 50px;
}
</style>