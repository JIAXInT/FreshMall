<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><el-checkbox v-model="checked" @click="selectItem(item)" ></el-checkbox>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in cartItem" :key="index">
              <div class="item-check">
                <el-checkbox v-model="item.checked" ></el-checkbox>
              </div>
              <div class="item-name">
                <img :src="item.imgUrl" alt="">
                <span>{{item.name}}</span>
              </div>
              <div class="item-price">{{item.price}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart('-',item)">-</a>
                  <span>{{item.num}}</span>
                  <a href="javascript:;" @click="updateCart('+',item)">+</a>
                </div>
              </div>
              <div class="item-total">{{item.UnitPrice}}</div>
              <div class="item-del" @click="deleteItem(index)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <RouterLink to="/index">继续购物</RouterLink>
            共<span>{{cartItem.length}}</span>件商品，已选择<span>3</span>件
          </div>
          <div class="total fr">
            合计：<span>{{total}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import ServiceBar from './../components/ServiceBar'
  import NavFooter from './../components/NavFooter'
  export default{
    name:'index',
    components:{
      OrderHeader,
      ServiceBar,
      NavFooter
    },
    data(){
      return {
        checked:true,
        allChecked:true,//是否全选
        cartItem:this.$store.state.cartItem,
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
    methods:{
      // 购物车下单
      order(){
        this.$router.push('/order/confirm');
      },
      //选中商品
      check(){
        !this.checked
      },
      //计算数量
      updateCart(type,item){
          let quantity = item.num
          if(type == '-'){
            if(quantity == 1){
              this.$message.warning('商品至少保留一件');
              return;
            }
            --quantity;
            item.num = quantity
          }else if(type == '+'){
            if(quantity > 10){
              this.$message.warning('购买数量不能超过库存数量');
              return;
            }
            ++quantity;
            item.num = quantity
          }
          item.UnitPrice = parseFloat(item.price*item.num).toFixed(2)
          this.$store.dispatch('getTotalPrice')
      },
      // 商品删除
      deleteItem(index) {
        this.$store.dispatch('deleteItem', index)
        this.$store.dispatch('getTotalPrice', index)
      },
    }
  }
</script>
<style lang="scss">
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .el-checkbox__inner{
          width: 18px;
          height: 18px;
          &:after{
            height: 10px;
            left: 6px;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
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
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>