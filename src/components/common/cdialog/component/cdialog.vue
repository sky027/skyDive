<template>
  <div class="com_dailog" :class="setClass('dailog')">
    <div class="dailogs">
      <!-- 头部-->
      <div class="dailog_hedaer">
        <span class="dlgicon" :class="dataList.className"></span>
        <span class="title">{{dataList.title}}</span>
        <span class="dlgicon close" @click="closedailog"></span>
      </div>
      <!-- 主体-->
      <div class="dlgbody" id="com_dlgbody">
        <component :is="apps"></component>
        <!-- <HomeHeader></HomeHeader> -->
      </div>
      <!-- 尾部-->
      <div class="dlgfoot">
        <li class="btnsli" v-for="(item, index) in dataList.buttons" :key="index" @click="alerts(item, index)">
          <span class="icontrue" v-if="index != dataList.buttons.length-1">
            <span class="litext">{{item.text}}</span>
          </span>
          <span class="iconext" @click="closedailog" v-else>{{item.text}}</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
  import "../js/jquery-2.1.4.js";
  //import test from '@/components/test.vue';
  import Vue from 'vue'
  var dom = null;
  let time = new Date().getTime();
  var url = '';
  export default {
    name: "com-dailog",
    props:["dataList"],
    data () {
      return {
        compname: '',
        vueName: 'testcom'
      };
    },
    components: {
        //HomeHeader: () => import(window.localStorage.durl)
    },
    beforeCreate() {
      url = this.$store.state.url;
      //var s = '../components/' + this.dataList.cname + '.vue';

      //this.apps= () => import(`@/components${this.dataList.cname}.vue`)
    },
    created() {
      var _this = this;
      url = this.$store.state.url;
      //this.apps = resolve => require.ensure([], () => resolve(require('@/components/test.vue'))

    },
    beforeMount() {
      var url = '@/components/test.vue';
      this.apps= () => import('@/components/test.vue');  //正常
    },
    mounted() {
      this.$nextTick(() => {
        console.log("弹窗"+time);
        console.log(this.dataList);
        this.initdailog();

      })
    },
    methods:{
      setClass(v){
        return v+time+'';
      },
      initdailog(){
        var w = this.dataList.width;
        var h = this.dataList.height;
        $(".dailog"+ time).width(window.innerWidth);
        $(".dailog"+ time).height(window.innerHeight);
        $(".dailogs").width(w);
        $(".dailogs").height(h);
        $(".dlgbody").height(h-85);
        var btns = this.dataList.buttons;
        for(var k in btns){

        }

      },
      closedailog(){
        var data = {
          flag: false
        };
        this.$emit('closedlg', data);
      },
      alerts(item, index){
        this.$emit(item.click, index);
      }


    }
  }
</script>

<style scoped>
  .com_dailog{
    border: 1px solid #A42524;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
  }
  .dailogs{
    z-index: 1001;
    box-sizing: border-box;
    border: 1px solid #0E192F;
    border-radius: 5px;
    background: #FFFFFF;
    position: relative;
  }
  .dailog_hedaer{
    width: 100%;
    height: 30px;
    line-height: 26px;
    position: relative;
    background: #4D6CAF;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .dailog_hedaer span{
    display: inline-block;
    height: 22px;
    line-height: 22px;
  }
  .dlgicon{
    vertical-align: middle;
    width: 22px;
    margin-left: 10px;
  }
  .place{
    background-image: url("../img/place.png");
  }
  .close{
    background-image: url("../img/closehov.png");
    position: absolute;
    right: 8px;
    top: 3px;
    cursor: pointer;
  }
  .close:hover{
    background-image: url("../img/close.png");
  }
  .title{
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
  }
  .dlgfoot{
    width: 100%;
    height: 54px;
    line-height: 54px;
    background: #F5F5F5;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: right;
  }

  .btnsli{
    display: inline-block;
    list-style-type: none;
    width: 73px;
    height: 26px;
    line-height: 26px;
    cursor: pointer;
    margin-left: 10px;
    text-align: center !important;
    font-size: 12px;
    position: relative;
  }
  .btnsli span{
    display: inline-block;
     width: 73px;
    height: 26px;
    line-height: 26px;
  }
  .icontrue{
    background-image: url("../img/iconbtn.png");
    position: relative;
    top: 8px;
  }
  .litext{
    color: #FFFFFF;
    position: absolute;
    top: -1px;
    left: 12px;
  }
  .iconext{
    background: #E6E6E6;
    border-radius: 13px;
  }
  .dlgfoot li:last-child{
    margin-right: 20px;
  }

  .dlgbody{
    width: 100%;
    position: relative;
  }
</style>
