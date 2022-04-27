<template>
  <div class="container">
      <van-nav-bar
        :title="detailList.nickName"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
      />

      <!-- 商品图片轮播 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  @change="onChange">
        <van-swipe-item v-for="(item,index) in detailList.pic" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>

      <!-- 商品详情  -->
      <van-card
        num="2"
        :price="detailList.price"
        :desc="detailList.nickName"
        :title="detailList.name"
      />

      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <!-- 底部按钮 -->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="kefu" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart"/>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          type="danger"
          text="加入购物车"
          @click="cartAdd(detailList)"
          color="#27ba9b"
        />
      </van-goods-action>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      current: 0,
      detailList: this.$route.query.detailList,
      total: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onChange(index) {
      this.current = index
    },
    cartAdd (item) {
        item.checked = true
        item.num = 1
        item.total = item.price
        this.$store.dispatch('cartData', item)
        this.$store.dispatch('getTotalPrice', item)
        Toast.success('加入购物车成功')
    },
    kefu () {
      Toast('客服暂未上线')
    },
    toCart () {
      this.$router.push('/home/cart')
    }

  }
}
</script>

<style lang="scss" scoped>

    .container{
      height: 100%;
      background-color: #fafafa;
    }
    .van-swipe-item{
      img{
        width: 100% !important;
      }
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: white;
      background: #27ba9b;
      padding: 2px 6px;
      margin: 5px;
      border-radius: 20px;
    }
    .van-card {
      margin: 0;
      background-color: #fff;
      .van-card__title{
        font-weight: 600;
        font-size: 15px;
        line-height: 16px;
      }
      .van-card__price{
        color: red !important
      }
    }
</style>