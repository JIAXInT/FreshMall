<template>
  <div>
      <van-nav-bar
        title="分类"
        fixed
        placeholder
        left-arrow
      />

    <van-tree-select height="55vw" :items="list" :main-active-index.sync="active">
      <template #content >
        <van-cell-group>
          <van-cell v-for="(item,index) in lists[0].goods" :key="index" v-show="active === 0">
            <van-card
              :price="item.price"
              :desc="item.name"
              :title="item.nickName"
              :thumb="item.imgUrl"
              :origin-price="100.00"
              @click="toDetail(item)"
            />
          </van-cell>

          <van-cell v-for="(item,index) in lists[1].goods" :key="index" v-show="active === 1">
            <van-card
              :price="item.price"
              :desc="item.name"
              :title="item.nickName"
              :thumb="item.imgUrl"
              :origin-price="100.00"
              @click="toDetail(item)"
            />
          </van-cell>

          <van-cell v-for="(item,index) in lists[2].goods" :key="index" v-show="active === 2">
            <van-card
              :price="item.price"
              :desc="item.name"
              :title="item.nickName"
              :thumb="item.imgUrl"
              :origin-price="100.00"
              @click="toDetail(item)"
            />
          </van-cell>

          <van-cell v-for="(item,index) in lists[3].goods" :key="index" v-show="active === 3">
            <van-card
              :price="item.price"
              :desc="item.name"
              :title="item.nickName"
              :thumb="item.imgUrl"
              :origin-price="100.00"
              @click="toDetail(item)"
            />
          </van-cell>

          <van-cell v-for="(item,index) in lists[4].goods" :key="index" v-show="active === 4">
            <van-card
              :price="item.price"
              :desc="item.name"
              :title="item.nickName"
              :thumb="item.imgUrl"
              :origin-price="100.00"
              @click="toDetail(item)"
            />
          </van-cell>
        </van-cell-group>

      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
        active: 2,
        list: [{ text: '新鲜水果' }, { text: '海产水鲜' }, { text: '精选肉类' }, { text: '冷饮冻食' }, { text: '蔬菜蛋品' }],
        lists: []
    }
  },
  mounted () {
    this.getGoods()
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
      }
  }
}
</script>

<style lang="scss" scoped>
    /deep/.van-tree-select{
      height: 155vw !important;
        &:hover{
          color: #fff;
        }
    }

    .van-cell{
      padding: 0;
    }

    .van-card {
      background-color: #fff;
      .van-card__title{
        font-weight: 600 !important
      }
      .van-card__price{
        color: red !important
      }
    }
    .van-card:not(:first-child){
      margin: 0;
    }

    /deep/.van-sidebar-item--select::before{
      background-color:#27ba9b;
      top: 0;
      height: 100px;
      width: 6px;
    }
    /deep/.van-sidebar-item--select:hover{
      color: #27ba9b;
    }
</style>