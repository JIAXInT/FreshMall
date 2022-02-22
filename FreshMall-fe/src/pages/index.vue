<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <!-- slides -->
          <swiper-slide><img src="/imgs/slider/slide-1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/slider/slide-2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/slider/slide-3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/slider/slide-4.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/slider/slide-5.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="" id=""><img src="/imgs/ads/ads-1.png" alt=""></a>
        <a href="" id=""><img src="/imgs/ads/ads-2.jpg" alt=""></a>
        <a href="" id=""><img src="/imgs/ads/ads-3.png" alt=""></a>
        <a href="" id=""><img src="/imgs/ads/ads-4.jpg" alt=""></a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <!-- 商品区域 -->
    <HomeProduct />
 
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ServiceBar from './../components/ServiceBar'
  import HomeProduct from './../components/HomeProduct'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,
      ServiceBar,
      HomeProduct
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect:'cube',
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index{
    background:url('/imgs/index-bg.png') no-repeat 50% 0;
    .swiper-box{
      .swiper-cube-shadow{
        width: 0;
      }
      .swiper-container {
        height: 451px;
        img{
          width:100%;
          height:100%;
        }
      }  
    }
    .ads-box{
      @include flex();
      margin-top:14px;
      margin-bottom:31px;
      a{
        width:296px;
        height:167px;
      }
    }
    .banner{
      margin-bottom:50px;
      img{
        width: 100%;
        height: 250px;
      }
    }
    
  }
</style>