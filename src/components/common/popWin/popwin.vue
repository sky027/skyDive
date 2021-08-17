<template>
    <div class="popWin">
      <div class="pop-container" :style="{width: popWin.width + 'px', height: popWin.height + 'px'}">
        <!-- 头部 -->
        <div class="pop-header">
          <span class="ticon" :class="popWin.iconClass"></span>
          <span class="titles">{{popWin.title}}</span>
          <span class="close-btn" @click="closeLog()">×</span>
        </div>
        <!-- 主体 -->
        <div class="pop-body" :style="{height: (popWin.height - 92) + 'px'}">
          <el-scrollbar class="scroll-bar">
            <div style="padding: 0 10px"><component :is="popWin.component" ref="childTemp"></component></div>
          </el-scrollbar>
        </div>
        <!-- 尾部 -->
        <div class="pop-footer">
          <el-button class="btn" v-for="(item, index) in popWin.buttons" :key="index" @click="btnEvent(item)">{{item.title}}</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "pop-win",
      props: {
        popData: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {
          defaultPop: {
            width: 1000,
            height: 600,
            title: '标题',
            iconClass: '',
            component: '',
            path: '',
            buttons: [
              {title: '确定', icon: '', event: 'handleSure'},
              {title: '取消', icon: '', event: 'handleCancel'}
            ]
          }
        }
      },
      computed: {
        popWin() {
          for (const key in this.defaultPop) {
            if (this.popData.hasOwnProperty(key) && this.popData[key]) {
              this.defaultPop[key] = this.popData[key];
            }
          }
          const data = Object.assign(this.defaultPop, this.popData);
          data.component = () => import(`@/components${this.popData.path}`);
          return data;
        }
      },
      methods: {
        closeLog() {
          this.$emit('handleCancel', null);
        },
        btnEvent(item) {
          if (this.popWin.component) {
            const data = this.$refs.childTemp.$data;
            this.$emit(item.event, data);
          } else {
            this.$emit(item.event, null);
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .popWin{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pop-container{
    background: #ffffff;
    position: relative;
  }
  .pop-header{
    height: 36px;
    line-height: 36px;
    background: #f2f2f2;
    padding: 0 10px;
    position: relative;
    display: flex;
    span{
      display: inline-block;
    }
    .ticon{
      width: 24px;
      height: 24px;
      background-size: 100%;
      position: relative;
      top: 7px;
      margin-right: 6px;
    }
    .close-btn{
      width: 24px;
      height: 24px;
      font-size: 36px;
      color: #333333;
      line-height: 24px;
      position: absolute;
      top: 2px;
      right: 10px;
      cursor: pointer;
      &:hover {
        color: #7d7878;
      }
    }
  }
  .pop-body{
    .scroll-bar{
      height: 100%;
    }
  }
  .pop-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    line-height: 54px;
    text-align: right;
    background: #f2f2f2;
    .btn:last-child {
      margin-right: 10px;
    }
  }
</style>
