<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="鲜果优品"
      fixed
      placeholder
    >
      <template #left>
        <van-icon name="location" size="18" color="#27ba9b" />
        <p>成都</p>
      </template>
      <template #right>
        <van-icon name="manager" size="18" color="#27ba9b" />
      </template>
    </van-nav-bar>

    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="http://www.justic.store:8083/imgs/ads/ads-1.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://www.justic.store:8083/imgs/ads/ads-2.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://www.justic.store:8083/imgs/ads/ads-3.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://www.justic.store:8083/imgs/ads/ads-4.jpg" alt=""></van-swipe-item>
    </van-swipe>

    <!-- 分类展示 -->
    <van-grid :border=false>
      <van-grid-item :icon="require('./../assets/icons/生鲜水果.png')" text="水果" />
      <van-grid-item :icon="require('./../assets/icons/生鲜-螃蟹.png')" icon-prefix="icon-third" text="海鲜" />
      <van-grid-item :icon="require('./../assets/icons/生鲜-蔬菜.png')" text="蔬菜" />
      <van-grid-item :icon="require('./../assets/icons/鸡蛋.png')" text="蛋品" />
    </van-grid>

    <!-- 限时秒杀板块 -->
    <listTable />

    <!-- 热门海鲜板块 -->
    <div class="hot">
      <van-cell class="title" title="热门海鲜" :border="false" />
      <div class="hot-card">
        <div class="hot-card-item" v-for="(item,index) in seafood" :key="index">
          <van-image radius="20px" :src="item.imgUrl" />
          <van-card
            :price="item.price"
            :title="item.name"
          >
            <template #tags>
              <van-tag plain color="#27ba9b">精选海鲜</van-tag>
            </template>
            <template #num >
              <van-button size="mini" round icon="cart-o" color="#27ba9b" @click="cartAdd(item)"></van-button>
            </template>
          </van-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import listTable from '../components/listTable.vue'
export default {
    components: {
      listTable
    },
    data () {
      return {
        value: '',
        active: 'name',
        list: [{ text: '新鲜水果' }, { text: '海产水鲜' }],
        lists: [],
        seafood: []
      }
    },
    mounted () {
      this.getGoods()
      this.getSeafood()
    },
    methods: {
      toDetail (item) {
        console.log(item)
        const detailList = item
        this.$router.push({
          path: '/detail',
          query: { detailList: detailList }
        })
      },
      getGoods () {
        this.axios.get('/category').then(res => {
          this.lists = res.data
        })
      },
      getSeafood () {
        this.axios.get('/seafood').then(res => {
          this.seafood = res.data
          console.log(this.seafood)
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
    .van-nav-bar {
      background-color: #fff;
    }
    .my-swipe {
      margin: 0 10px 0 10px;
      border-radius: 15px;
      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        margin-bottom: -80px;
        img{
          width: 100%;
        }
      }
    }

    .hot-grid{
      margin-bottom: 50px;
    }

    .van-grid{
      margin: 0 10px;
    }
    .van-grid-item {
        /deep/.van-icon__image{
          width: 50px;
          height: 50px;
        }
        /deep/.van-grid-item__text{
          font-size: 16px;
          line-height: 1
        }
        /deep/.van-grid-item__content--center{
          background-color: rgba(0,0,0,0);
        }
    }

    .van-cell{
      background-color:rgba(0,0,0,0);
      font-weight: bold;
    }

    .hot{
      background-color: #fafafa;
      margin: 10px;
      border-radius: 10px;
      margin-bottom: 50px;
      .title{
        text-align: center;
      }
      .hot-card{
        .hot-card-item{
          display: inline-block;
          width: 44%;
          margin: 5px;
          padding: 5px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow:2px 2px 2px  #f0f0f0;
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