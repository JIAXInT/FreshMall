<template>
  <div class="container">
    <!-- 头部导航 -->
    <van-nav-bar
      title="订单确认"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- 地址板块 -->
    <van-cell-group inset>
      <van-cell :title="addressList[0].address" :label="addressList[0].name" icon="location" title-style="font-size:18px;font-weight:600" is-link to="/address"/>
      <van-cell title="立即送出" value="大约17:32送达"/>
    </van-cell-group>

    <!-- 订单板块 -->
      <van-cell-group inset :border="false" >
        <van-cell title="我的订单" value="第三方物流配送 免运费" value-class="order-value" />
        <van-cell v-for="(item,index) in cartItem" :key="index">
          <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.name"
            :title="item.nickName"
            :thumb="item.imgUrl"
          />
        </van-cell>
      </van-cell-group>

      <!-- 支付方式 -->
      <van-cell-group inset>
        <van-cell  icon="alipay">
            <template #title>
              <span class="custom-title">支付宝</span>
              <van-tag class="custom-tag" type="danger">推荐</van-tag>
            </template>
          <template #right-icon>
            <van-checkbox v-model="zchecked" checked-color="#27ba9b"/>
          </template>
        </van-cell>
        <van-cell title="微信" icon="wechat-pay">
          <template #right-icon>
            <van-checkbox v-model="vchecked" checked-color="#27ba9b"/>
          </template>
        </van-cell>
      </van-cell-group>

      <div class="box"></div>

    <!-- 订单提交 -->
    <van-submit-bar :price="total" button-text="提交订单" button-color="#27ba9b" @submit="onSubmit" />

  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data() {
    return {
      zchecked: true,
      vchecked: false,
      cartItem: this.$store.state.cartItem,
      addressList: this.$store.state.addressList
    }
  },
  created() {
     this.$store.dispatch('getTotalPrice')
  },
  computed: {
    total() {
      return this.$store.state.totalPrice
    }
  },
  methods: {
    onEdit() {
      Toast('编辑')
    },
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    background-color: #fafafa;
    margin-bottom: 50px;
  }

  .order-value{
    color: #27ba9b;
  }

  .van-icon-location:before{
    font-size: 20px;
    color: #27ba9b;
  }

  .van-cell-group{
    margin: 15px 10px;
  }

  .van-card{
    border-radius: 10px;
  }

  .van-icon-alipay:before{
    font-size: 20px;
    color: #0991db;
  }

  .van-icon-wechat-pay:before{
    font-size: 20px;
    color: #27ba9b;
  }

  .custom-tag{
    margin-left: 10px;
  }

  .box{
    height: 50px;
  }
  .van-submit-bar{
    margin-top: 100px;
  }

</style>