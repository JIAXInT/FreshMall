<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <!-- slides -->
          <swiper-slide
            ><img
              src="https://s3.bmp.ovh/imgs/2022/08/01/692832dda9913d99.jpg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://s3.bmp.ovh/imgs/2022/08/01/80fbf02904ea8270.jpg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://s3.bmp.ovh/imgs/2022/08/01/795696bd53cb3836.jpg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://s3.bmp.ovh/imgs/2022/08/01/ccd0635fd7ae9147.jpg"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://s3.bmp.ovh/imgs/2022/08/01/7cd3b5e1dd8beae2.jpg"
              alt=""
          /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href="/#/product/30" id=""
          ><img
            src="https://s3.bmp.ovh/imgs/2022/08/01/fad1d43a2d7d86c2.png"
            alt=""
        /></a>
        <a href="/#/product/30" id=""
          ><img
            src="https://s3.bmp.ovh/imgs/2022/08/01/0a687b56f29c49d8.jpg"
            alt=""
        /></a>
        <a href="/#/product/30" id=""
          ><img
            src="https://s3.bmp.ovh/imgs/2022/08/01/de9a160f96e865e1.png"
            alt=""
        /></a>
        <a href="/#/product/30" id=""
          ><img
            src="https://s3.bmp.ovh/imgs/2022/08/01/13735cc46907638e.jpg"
            alt=""
        /></a>
      </div>
    </div>
    <!-- 商品区域 -->
    <HomeProduct />

    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import HomeProduct from "./../components/HomeProduct";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    HomeProduct,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  background: url("https://s3.bmp.ovh/imgs/2022/09/13/6c2ead0dbb530515.png")
    no-repeat 50% 0;
  .swiper-box {
    .swiper-cube-shadow {
      width: 0;
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 100%;
      height: 250px;
    }
  }
}
</style>
