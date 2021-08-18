<template>
  <el-scrollbar>
    <div class="comp5">
        <h4>第五个页签，测试弹窗</h4>
        <button class="btns" @click="frodailog">OKOKO</button>
        <com-dailog v-if="showdailog"
         :dataList="dataList" @alertinfo1="alertinfo11" @alertinfo2="alertinfo22"
         @closedlg="closeinfo">
        </com-dailog>
      <h6><split-line :height="1"></split-line> </h6>
      <div>
        <el-button @click="openLog()">OPEN</el-button>
        <div>回传数据：{{msg}}</div>
      </div>
      <pop-win v-if="showPop" :popData="popData" @handleSure="handleSure" @handleCancel="handleCancel"></pop-win>
      <h6><split-line :height="1"></split-line> </h6>
      <div>
        <h4>消息提示</h4>
        <el-button @click="openTip(1)">SUCCESS</el-button>
        <el-button @click="openTip(2)">ALARM</el-button>
        <el-button @click="openTip(3)">INFO</el-button>
        <el-button @click="openTip(4)">ERROR</el-button>
        <pop-tip v-if="showTip" :popTipData="tipData" @tipSure="tipSure" @tipCancel="tipCancel"></pop-tip>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
    import test from "@/components/test.vue";
    export default {
        components: {
          test
        },
        data () {
            return {
              cnames: '',
              dataList: {},
              showdailog: false,
              showPop: false,
              popData: {
                title: 'AAAAAAAA',
                iconClass: 'title-place',  // title-logo
                path: '/test.vue',
              },
              msg: '',
              showTip: false,
              tipData: {}
            };
        },
        mounted() {
          var _this = this;
          this.$nextTick(() => {
          });
        },
        methods: {
          add(){
            console.log("12345");
          },
          frodailog(){
            this.showdailog = true;
            this.$store.state.url = '@/components/test.vue';
            window.localStorage.durl = '@/components/test.vue';
            var _this = this;
            this.dataList = {
              width: 900,
              height: 400,
              className: 'place',
              title: "弹窗测试",
              url: '@/components/test.vue',
              cname: "test",
              buttons: [
                {text: "确定",click: 'alertinfo1'},
                {text: "暂存",click: 'alertinfo2'},
                {text: "暂存2",click: 'alertinfo3'},
                {text: "取消",click: ''},
              ]
            };

          },
          alertinfo11(){
            alert("确定");
            this.showdailog = false;
          },
          alertinfo22(){
            alert("暂存");
          },
          closeinfo(data){
            this.showdailog = data.flag;

          },
          openLog() {
            this.showPop = true;
          },
          handleSure(data) {
            console.log(data);
            if (data) {
              this.msg = data.info;
            }
            this.showPop = false;
          },
          handleCancel() {
            this.showPop = false;
          },
          openTip(type) {
            switch (type) {
              case 1:
                this.tipData = {
                  type: 'success'
                };
                break;
              case 4:
                this.tipData = {
                  type: 'error',
                  msg: '操作失败'
                };
                break;
              case 3:
                this.tipData = {
                  type: 'info',
                  msg: '提示信息'
                };
                break;
              case 2:
                this.tipData = {
                  type: 'alarm',
                  msg: '警告信息⚠'
                };
                break;
            }
            this.showTip = true;
          },
          tipSure(){
            console.log(this.tipData.type)
            this.showTip = false;
          },
          tipCancel() {
            this.showTip = false;
          }
        }
    }
</script>

<style scoped lang="scss">
  .btns{
    cursor: pointer;
    width: 80px;
    height: 32px;
    background: gray;
    border-radius: 5px;
    border: none;
  }

</style>
