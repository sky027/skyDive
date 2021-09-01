<template>
  <div class="animation">
    <!--动画-->
    <div class="warp">
      <el-button @click="expandBox">展开/收起</el-button>
      <collapse-transition>
        <div v-show="isActive" class="collapse-wrap">展开/收起</div>
      </collapse-transition>
      <br><br>
      <el-button @click="boxshow = !boxshow">点击展开/关闭</el-button>
      <transition name="expandBox">
        <div class="collapse-wrap"  v-show="boxshow">点击展开/关闭<br/>点击展开/关闭</div>
      </transition>
      <div>AAAAA</div>
    </div>
    <div class="warp">
      <el-button @click="isFade = !isFade">淡入/淡出</el-button>
      <transition name="fade">
        <div class="collapse-wrap" v-if="isFade">
          <div class="c-box">淡入/淡出</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import collapseTransition from '../../../static/js/expand-box.js'
  export default {
    name: "expandTemp",
    components: {
      collapseTransition
    },
    data() {
      return {
        isActive: true,
        boxshow: true,
        isFade: true,
      }
    },
    methods: {
      expandBox() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style scoped lang="scss">
  .animation{
    display: flex;
    .warp{
      margin-right: 15px;
      width: 310px;
    }
    .collapse-wrap{
      width: 300px;
      height: 200px;
      border: 2px solid red;
      display: flex;justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .c-box{
      width: 100px;
      height: 50px;
      background: #df8585;
    }
    /* 展开 收起*/
    .expandBox-enter-active, .expandBox-leave-active {
      transition: all 1s ease;
    }
    .expandBox-enter, .expandBox-leave-to /* .fade-leave-active below version 2.1.8 */ {
      height: 0;
    }
    /* 淡入 淡出 */
    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>
