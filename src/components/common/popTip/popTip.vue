<template>
  <div class="pop-tip">
    <div class="tip-container">
      <div class="tip-header">
        <span class="tip-title">{{tipData.title}}</span>
        <span class="tip-close" @click="closeTip">×</span>
      </div>
      <div class="tip-body">
        <div v-if="tipData.type === 'success'" class="box-img"><div class="tip-img tip-success"></div></div>
        <div v-if="tipData.type === 'error'" class="box-img"><div class="tip-img tip-error"></div></div>
        <div v-if="tipData.type === 'alarm'" class="box-img"><div class="tip-img tip-alarm"></div></div>
        <div v-if="tipData.type === 'info'" class="box-img"><div class="tip-img tip-info"></div></div>
        <div class="tip-msg">{{tipData.msg}}</div>
      </div>
      <div class="tip-footer">
        <el-button class="btn" v-for="(item, index) in tipData.buttons" :key="index" @click="btnEvent(item)">{{item.title}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "pop-tip",
      props: {
          popTipData: Object,
        default() {
            return {}
        }
      },
      data() {
          return {
            param: {
              type: 'success',
              msg: '操作成功',
              title: '提示信息',
              buttons: [
                {title: '确定', event: 'tipSure'},
                {title: '取消', event: 'tipCancel'}
              ]
            }
          }
      },
      computed: {
        tipData() {
          for (const key in this.param) {
            if (this.popTipData.hasOwnProperty(key) && this.popTipData[key]) {
              this.param[key] = this.popTipData[key];
            }
          }
          return Object.assign(this.param, this.popTipData);
        }
      },
      methods: {
        closeTip() {
          this.$emit('tipCancel');
        },
        btnEvent(item) {
          this.$emit(item.event);
        }
      }
    }
</script>

<style scoped lang="scss">
  .pop-tip{
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
  .tip-container{
    width: 360px;
    height: 230px;
    background: #ffffff;
    position: relative;
  }
  .tip-header{
    height: 36px;
    line-height: 36px;
    background: #f2f2f2;
    padding: 0 10px;
    position: relative;
    span{
      display: inline-block;
    }
    .tip-close{
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
    .tip-title{
      font-size: 14px;
      color: #333333;
    }
  }
  .tip-body{
    height: 138px;
    text-align: center;
    position: relative;
    .tip-msg{
      height: 30px;
      line-height: 30px;
      width: 95%;
      margin: 0 auto;
    }
    .box-img{
      height: 108px;
    }
    .tip-img{
      height: 108px;
      width: 108px;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
    .tip-success{
      background-image: url("../../../assets/tip-success.png");
    }
    .tip-error{
      background-image: url("../../../assets/tip-error.png");
    }
    .tip-alarm{
      background-image: url("../../../assets/tip-alarm.png");
    }
    .tip-info{
      background-image: url("../../../assets/tip-info.png");
    }
  }
  .tip-footer{
    height: 56px;
    line-height: 56px;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .btn{
      display: inline-block;
      height: 32px;
      line-height: 32px;
      width: 72px;
      text-align: center;
      padding: 0;
    }
  }
</style>
