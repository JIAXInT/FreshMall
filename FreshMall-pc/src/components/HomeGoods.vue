// 单个商品组件
<template>
  <div class="goods-item">
    <RouterLink :to="{path:'/detail',query:{price:item.price,item:item}}" class="image">
      <img :src="item.imgUrl" alt="" />
    </RouterLink>
    <p class="name ellipsis-2">{{item.name}}</p>
    <p class="desc">{{item.nickName}}</p>
    <p class="price">&yen;{{item.price}}</p>
    <div class="extra">
      <RouterLink :to="{path:'/detail',query:{price:item.price,item:item}}">
        <span>查看商品详情</span>
        <span>发现现多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGoods',
  data(){
    return{
    }
  },
  props:{
    item:[],

  },
  created(){
  },
  mounted(){
  },
  methods:{
      buy(){
        let id = this.$route.params.id;
        this.$router.push(`/detail/${id}`);
      },
  }
}
</script>

<style scoped lang='scss'>
.goods-item {
  width: 180px;
  height: 290px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all .5s;
  .image {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    &.name {
      height: 44px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    &.desc {
      color: #666;
      height: 22px;
    }
     &.price {
      margin-top: 10px;
      font-size: 20px;
      color: #CF4444;
    }
  }
  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 86px;
    width: 100%;
    background: #27BA9B;
    text-align: center;
    transform: translate3d(0,100%,0);
    transition: all .5s;
    span {
      display: block;
      color: #fff;
      width: 120px;
      margin: 0 auto;
      line-height: 30px;
      &:first-child {
        font-size: 18px;
        border-bottom:1px solid #fff;
        line-height: 40px;
        margin-top: 5px;
      }
    }
  }
  &:hover {
    border-color: #27BA9B;
    .extra {
      transform: none;
    }
  }
}
</style>
