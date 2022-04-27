<template>
  <div class="detail">
    <NavHeader/>
    <div class="container wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in item.pic" :key="index"><img :src="item" ></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{item.name}}</h2>
          <div class="delivery">优品自营</div>
          <div class="item-price">{{item.price}}<span class="del">{{item.price}}</span></div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">四川 成都市 都江堰市 青城山镇</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-num clearfix">
            <h2>选择数量</h2>
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart('-')">-</a>
                  <span>{{item.num}}</span>
                  <a href="javascript:;" @click="updateCart('+')">+</a>
                </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{item.name}}</div>
              <div class="fr">{{item.price}}元 x {{item.num}}</div>
            </div>
            <div class="phone-total">总计：{{total}}元</div>
          </div>
          <div class="btn-group">
            <a class="btn btn-huge fl"  @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <NavFooter/>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import NavHeader from '../components/NavHeader.vue';
import NavFooter from '../components/NavFooter.vue';
export default{
  name:'detail',
  data(){
    return {
      item:this.$route.query.item,
      price:this.$route.query.price,
      total:'',
      swiperOption:{
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    }
  },
  components:{
    NavHeader,
    NavFooter,
    swiper,
    swiperSlide,
  },
  mounted(){
    this.item.num = 1
    this.total = parseFloat(this.price*this.item.num).toFixed(2)
  },
  methods:{
    addCart(){
      this.item.UnitPrice = this.total
      this.item.checked = true
      this.$store.dispatch("cartData", this.item);
      this.$router.push('/cart')
    },
    //计算数量
    updateCart(type){
          let quantity = this.item.num
          if(type == '-'){
            if(quantity == 1){
              this.$message.warning('商品至少保留一件');
              return;
            }
            --quantity;
            this.item.num = quantity
          }else if(type == '+'){
            if(quantity > 10){
              this.$message.warning('购买数量不能超过库存数量');
              return;
            }
            ++quantity;
            this.item.num = quantity
          }
          this.total = parseFloat(this.price*this.item.num).toFixed(2)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .detail{
    background-color:#E5E5E5;
    .wrapper{
       background-color: #FFF;
       width: 1200px;
      .swiper{
        float:left;
        width:500px;
        margin-top:25px;
        margin-left: 55px;
        img{
          width:100%;
          height:100%;
        }
      }
      .content{
        float:right;
        width:584px;
        height:870px;
        .item-title{
          width: 500px;
          font-size:28px;
          padding-top:30px;
          padding-bottom:16px;
          height: 26px;
        }
        .item-info{
          font-size:14px;
          height: 36px;
        }
        .delivery{
          font-size:16px;
          color:#FF6700;
          margin-top:35px;
          margin-bottom:14px;
          height: 15px;
        }
        .item-price{
          font-size:20px;
          color:#FF6700;
          height: 19px;
          .del{
            font-size:16px;
            color:#999999;
            margin-left:10px;
            text-decoration:line-through;
          }
        }
        .line{
          height:0;
          margin-top:25px;
          margin-bottom:28px;
          border-top:1px solid #E5E5E5;
        }
        .item-addr{
          width: 500px;
          height:108px;
          background-color:#FAFAFA;
          border:1px solid #E5E5E5;
          box-sizing:border-box;
          padding-top:31px;
          padding-left:64px;
          font-size:14px;
          line-height:14px;
          position:relative;
          .icon-loc{
            position: absolute;
            top: 27px;
            left: 34px;
            @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
          }
          .addr{
            color:#666666;
          }
          .stock{
            margin-top:15px;
            color:#FF6700;
          }
        }

          .item-num{
              flex:2;
              margin-top:30px;
              h2{
                font-size:18px;
                margin-bottom:20px;
              }
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                  text-align: center;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                  text-align: center;
                }
              }
            }
        
        .item-total{
          width: 500px;
          height: 108px;
          background: #FAFAFA;
          padding: 24px 33px 29px 30px;
          font-size: 14px;
          margin-top:50px;
          margin-bottom:30px;
          box-sizing: border-box;
          .phone-total{
            font-size: 24px;
            color: #FF6600;
            margin-top: 18px;
          }
        }
      }
    }
    .price-info{
      background-color:#F3F3F3;
      height:340px;
      h2{
        font-size:24px;
        color:#333333;
        padding-top:38px;
        margin-bottom:30px;
      }
    }
  }
</style>