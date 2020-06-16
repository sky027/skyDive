<template>
    <div class="comp5">
        <h2>第五个页签，测试弹窗</h2>
        <button class="btns" @click="frodailog">OKOKO</button>
        <test></test>
        <com-dailog v-if="showdailog"
         :dataList="dataList" @alertinfo1="alertinfo11" @alertinfo2="alertinfo22"
         @closedlg="closeinfo"
        >
        </com-dailog>
    </div>
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
              showdailog: false
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
