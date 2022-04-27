<template>
  <div class="container">
      <!-- 头部导航 -->
      <van-nav-bar
        title="购物车"
        left-arrow
        fixed
        placeholder
      />

      <!-- 购物车为空 -->
      <div class="empty" v-if="cartItem[0]">
        <img src="./../assets/img/购物车空空如也.png" alt="">
        <p>购物车空空如也~</p>
        <van-button type="primary" round  class="empty-button" size="large" to="/home/index">去逛逛</van-button>
      </div>

      <!-- 购物车列表 -->
      <div class="cartlist" >
          <van-cell v-for="(item,index) in cartItem" :key="index">
            <template #icon>
              <van-checkbox v-model="item.checked" class="checkbox" checked-color="#27ba9b" :change="!item.checked" @click="selectItem(item)"></van-checkbox>
            </template>
            <van-swipe-cell>
              <van-card
                num="2"
                :price="item.total"
                :title="item.name"
                :thumb="item.imgUrl"
              >
                <template #tags>
                  <van-tag plain color="#27ba9b">包邮，最快次日送达</van-tag>
                </template>
                <template #num >
                  <van-button size="mini" round icon="minus" @click="sub(item)"></van-button>
                  <p class="num">{{item.num}}</p>
                  <van-button size="mini" color="#27ba9b" round icon="plus" @click="add(item)"></van-button>
                </template>
              </van-card>
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="deleteItem(index)" />
              </template>
            </van-swipe-cell>
          </van-cell>
      </div>

      <!-- 猜你喜欢 -->
      <GuessLike />

      <!-- 结算按钮 -->
      <van-submit-bar :price="total" button-text="去结算" button-color="#27ba9b" @submit="onSubmit">
        <van-checkbox v-model="checked" checked-color="#27ba9b" @click="allChecked(cartItem)">全选</van-checkbox>
      </van-submit-bar>

  </div>
</template>

<script>
import { Toast } from 'vant'
import GuessLike from './../components/guessLike.vue'
export default {
 data () {
    return {
      active: 2,
      checked: true,
      cartItem: this.$store.state.cartItem
    }
  },
  components: {
    GuessLike
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
    onSubmit() {
      this.$router.push('/order')
    },
    // 商品选中价格计算
    selectItem(item) {
      this.$store.dispatch('getTotalPrice', item)
    },
    // 商品减
    sub(item) {
      if (item.num === 1) {
        Toast('商品至少保留一件')
        return
      } else {
        --item.num
        item.total = parseFloat(item.price * item.num).toFixed(2)
      }
      this.$store.dispatch('getTotalPrice', item)
    },
    // 商品加
    add(item) {
      ++item.num
      item.total = parseFloat(item.price * item.num).toFixed(2)
      this.$store.dispatch('getTotalPrice', item)
    },
    // 商品删除
    deleteItem(index) {
      this.$store.dispatch('deleteItem', index)
      this.$store.dispatch('getTotalPrice', index)
    },
    // 商品全选
    allChecked(item) {
      if (this.checked) {
        this.$store.state.cartItem.map(res => {
          res.checked = true
        })
      } else {
        this.$store.state.cartItem.map(res => {
          res.checked = false
        })
      }
      this.$store.dispatch('getTotalPrice', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    .empty{
      img{
        width: 100%;
        height: 300px;
      }
      p{
        text-align: center;
        color:darkgrey
      }
      .empty-button{
        width: 200px;
        position: relative;
        left: 25%;
      }
    }
    .cartlist{
      background-color: rgba(0,0,0,0);
      margin-bottom: 50px;
      .checkbox{
        margin-left:10px;
      }
      .num {
        position: relative;
        color: black;
        padding: 0 10px;
        top: 4px;
        font-size: 16px;
      }

    .delete-button {
      height: 100%;
    }

    .van-button--danger{
      border: solid 1px #fff;
    }

    .van-cell{
      background-color: #fff;
      width: auto;
      margin: 10px;
      padding: 0;
      border-radius: 20px;
    }

    /deep/.van-card{
      background-color: #fff;
      width: 320px;
      padding: 8px 5px;
      p{
        display: inline-block;
      }
    }
    /deep/.van-tag--plain{
      margin-top: 5px;
      border-radius: 50px;
      padding: 2px 8px 2px 8px;
    }
    /deep/.van-card__price{
      margin-top: 15px;
    }
    /deep/.van-swipe-cell{
      border-radius: 20px;
    }
  }
    .van-submit-bar{
      margin-bottom: 48px;
    }
}

</style>