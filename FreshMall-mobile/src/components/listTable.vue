//限时秒杀组件
<template>
  <div class="container">
      <van-cell :border="false" >
          <template #icon>
            <van-icon name="underway" color="#27ba9b" size="20px" />
          </template>
          <template #title>
            <span class="custom-title">限时秒杀</span>
          </template>
          <template #right-icon>
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
            <p>更多></p>
          </template>
      </van-cell>
      <van-swipe :loop="false" :width="110" height="160" azy-render="true" >
        <van-swipe-item v-for="(item,index) in fruit" :key="index" v-lazy="item">
          <van-image
            width="70px"
            height="70px"
            fit="cover"
            radius="20"
            :src="item.imgUrl"
          />
          <p class="van-ellipsis">{{item.name}}</p>
          <p class="price">￥{{item.price}}</p>
          <van-icon class="p-icon" name="cart-circle-o" size="25px" color="#27ba9b" @click="cartAdd(item)" />
          <p class="oldprice">￥{{item.price}}</p>
        </van-swipe-item>
        <template #indicator>
          <div></div>
        </template>
      </van-swipe>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      time: 30 * 60 * 60 * 1000,
      fruit: []
    }
  },
  created () {
    this.getFruit()
  },
  methods: {
    getFruit () {
      this.axios.get('/fruit').then(res => {
        this.fruit = res.data
      })
    },
    cartAdd (item) {
        item.checked = true
        item.num = 1
        item.total = item.price
        this.$store.dispatch('cartData', item)
        this.$store.dispatch('getTotalPrice', item)
        Toast.success('加入购物车成功')
    }

  }
}
</script>

<style lang="scss" scoped>

  .container{
    background-color: #fff;
    margin: 0 10px;
    border-radius: 10px;
    box-shadow:2px 2px 2px  #f0f0f0;
    .custom-title{
      position: relative;
      top: -2px;
      margin-left: 5px;
    }
  }
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #27ba9b;
  }
  .block {
    display: inline-block;
    width: 18px;
    height: 18px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #27ba9b;
    border-radius: 3px;
  }
  .van-cell{
    background-color:rgba(0,0,0,0);
    font-weight: bold;
    p{
      margin:-2px 0 0 9px;
      color: gray;
    }
  }
  .van-swipe-item{
    border: rgba(0,0,0,0);
    // text-align: center;
    height: 250px;
    margin: 10px 5px 0 10px;
    .van-image__img{
      margin-left: 20px;
    }
    p{
      font-size: 12px;
      margin: 2px;
      color: black;
    }
    .p-icon{
      position: relative;
      top:17px;
      left: 17px;
    }
    .price{
      display: inline-block;
      color: red;
      font-size: 15px;
      font-weight: bolder;
    }
    .oldprice{
      margin-left: 5px;
      color: #969799;
      font-size: 7px;
      text-decoration: line-through;
    }
  }
</style>