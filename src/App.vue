<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  /*
   * `字符串 ${ 参数 }`
  */
  mounted() {
    let that = this;
    this.$nextTick(() => {
      window.onload = function () {
        oriente();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", oriente, false);
      }

      function oriente() {
        if (window.orientation === 180 || window.orientation === 0) {
          that.$store.commit('setScreenType', false);
          console.log('竖屏状态！ B ' + window.orientation + checkDevice());
        }
        if (window.orientation === 90 || window.orientation === -90 ){
          that.$store.commit('setScreenType', true);
          console.log('横屏状态！ A ' + window.orientation + checkDevice());
        }
      }

      function checkDevice() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isAndroid && !isIOS) {
          return ' android终端';
        }
        if (isIOS && !isAndroid) {
          return ' IOS终端';
        }
      }
    });
  }
}
</script>

<style>
  .__vuescroll:hover .__bar-is-horizontal{
    opacity: 1;
  }
  .vue-treeselect__menu{z-index: 9999 !important;}
</style>
