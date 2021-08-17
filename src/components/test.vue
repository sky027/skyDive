<template>
  <div style="height: 200px">
    <h1>这是测试弹窗组件</h1>
    <h6><split-line :height="1"></split-line> </h6>
    <div>
      <el-button @click="openLog()">OPEN</el-button>
    </div>
    <pop-win v-if="showPop" :popData="popData" @handleSure="handleSure" @handleCancel="handleCancel"></pop-win>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          msg: '获取子组件数据',
          info: '弹窗组件获取数据',
          showPop: false,
          popData: {
            width: 500,
            height: 200,
            title: 'BBBBBBB',
            titleIcon: 'src/assets/logo.png',
            component: '',
            path: '/test.vue',
          },
        }
      },
      methods: {
        openLog() {
          this.showPop = true;
        },
        handleSure(data) {
          this.showPop = false;
        },
        handleCancel() {
          this.showPop = false;
        }
      }
    }
</script>

<style>
</style>
