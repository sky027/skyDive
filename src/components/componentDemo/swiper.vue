<template>
  <div class="swiper">
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 20" :key="item" :style="{background: setColor()}">slider {{item}}</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <h6><split-line></split-line></h6>
  </div>
</template>

<script>
    export default {
      name: "swiper",
      data() {
        return {
          swiperOption: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
        }
      },
      mounted() {
        this.$nextTick(() => {
          new this.$swiper ('#swiper', {
            direction: 'horizontal', // 垂直切换选项   vertical
            loop: false, // 循环模式选项
            autoplay: false,//可选选项，自动滑动
            slidesPerView: 3,//一行显示3个
            slidesPerColumn: 2,//显示2行
            centeredSlides: false,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        });
      },
      methods: {
        setColor() {
          var r = Math.floor(Math.random() * 256);
          var g = Math.floor(Math.random() * 256);
          var b = Math.floor(Math.random() * 256);
          return 'rgb('+ r +', '+ g +', '+ b +')';
        }
      }
    }
</script>

<style scoped lang="scss">
  .swiper{
    .swiper-container{
      width: 720px;
      height: 305px;
      margin: 0;
    }
    .swiper-wrapper{
      height: 280px;
      .swiper-slide{
        width: 200px !important;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        margin: 20px;
      }
    }
  }
</style>
