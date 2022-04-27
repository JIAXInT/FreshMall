<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(item,index) in cartItem" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                2021-12-20 11:43:08
                <span>|</span>
                justic
                <span>|</span>
                订单号：1352216743 
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.UnitPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img :src="item.imgUrl" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">{{item.price}} X {{item.num}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item.isPay">已支付</a>
                <a href="javascript:;" v-else>未支付</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  export default{
    name:'order-list',
    components:{
      OrderHeader
    },
    computed:{
      cartItem(){
        return this.$store.state.cartItem
      },
      username(){
        return  this.$store.state.username
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>