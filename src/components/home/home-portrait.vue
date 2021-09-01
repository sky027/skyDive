<template>
  <div>
    <h2>当前是 竖 屏 状态</h2>
    <h3>Unstoppable</h3>
    <comp12></comp12>
  </div>
</template>

<script>
  import comp12 from '@/components/chart-demo/chart-home';
    export default {
        name: "home-portrait",
      components: {
        "comp12": comp12,
      },
      data() {
          return {
            portrait: '竖屏页面数据'
          }
      },
      beforeCreate() {
          window.document.title = 'V-Chart'
      }
    }
</script>

<style scoped>

</style>
