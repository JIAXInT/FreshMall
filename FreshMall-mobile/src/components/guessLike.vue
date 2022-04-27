<template>
    <div class="guess">
      <van-cell class="title" title="———· 猜你喜欢 ·———" :border="false" />
      <div class="guess-card">
        <div class="guess-card-item" v-for="(item,index) in lists[3].goods" :key="index">
          <van-image radius="20px" :src="item.imgUrl" />
          <van-card
            :price="item.price"
            :title="item.name"
          >
            <template #tags>
              <van-tag plain color="#27ba9b">热门精选</van-tag>
            </template>
            <template #num >
              <van-button size="mini" round icon="cart-o" color="#27ba9b" @click="cartAdd(item)"></van-button>
            </template>
          </van-card>
        </div>
      </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    this.getGoods()
  },
  methods: {
      getGoods () {
        this.axios.get('/category').then(res => {
          this.lists = res.data
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
    .guess{
      background-color: rgba(0,0,0,0);
      margin: 10px;
      border-radius: 10px;
      margin-bottom: 50px;
      .title{
        text-align: center;
        background-color: rgba(0,0,0,0);
      }
      .guess-card{
        .guess-card-item{
          display: inline-block;
          width: 44%;
          margin: 5px;
          padding: 5px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow:2px 2px 2px  #f0f0f0;
          .van-image{
            margin: 6px;
          }
          .van-card:not(:first-child){
            margin: 0;
          }
          .van-card{
            padding: 8px 6px;
            background-color: rgba(0,0,0,0);
            .van-tag--plain{
              margin-top: 5px;
              border-radius: 50px;
              padding: 2px 8px 2px 8px;
          }
            .van-card__price {
              display: inline-block;
              color: red;
              font-weight: 600;
              font-size: 12px;
              margin: 5px 5px 0 5px;
          }
        }
      }
    }
  }
</style>