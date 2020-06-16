<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  /*
   * `字符串 ${ 参数 }`
  */
}
</script>

<style>
  .__vuescroll:hover .__bar-is-horizontal{
    opacity: 1;
  }
  .vue-treeselect__menu{z-index: 9999 !important;}
</style>
