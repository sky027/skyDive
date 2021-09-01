<template>
    <div class="home" ref="home">
      <el-tabs v-if="this.$store.state.isLandscape" v-model="activeName" class="testtab" type="border-card" @tab-click="handleClick">
        <el-tab-pane :label="item.label" :name="item.key" v-for="(item, index) of menuList" :key="index">
          <transition name="fade">
            <component :is="item.compName" v-if="index == tabindex"></component>
          </transition>
        </el-tab-pane>
      </el-tabs>
      <div style="height: 100%;width: 100%" v-if="!this.$store.state.isLandscape">
        <el-button @click="getData">OKOKO</el-button>
        <component is="homePortrait" ref="childTemp"></component>
      </div>
    </div>
</template>

<script>
  import homePortrait from '@/components/home/home-portrait';
    import comp1 from '@/components/componentDemo/comp1';
    import comp2 from '@/components/componentDemo/comp2';
    import comp3 from '@/components/componentDemo/comp3';
    import comp4 from '@/components/componentDemo/comp4';
    import comp5 from '@/components/componentDemo/comp5';
    import comp6 from '@/components/comp6/treeGrid';
    import comp7 from '@/components/componentDemo/comp7';
    import comp8 from '@/components/componentDemo/comp8';
    import comp9 from '@/components/componentDemo/comp9';
    import comp10 from '@/components/componentDemo/comp10';
    import comp11 from '@/components/componentDemo/comp11';
    import comp12 from '@/components/chart-demo/chart-home';
    import swiper from '@/components/componentDemo/swiper';
    import tableTemp from '@/components/componentDemo/tableTemp';
  import expandTemp from '@/components/componentDemo/expandTemp';

    export default {
        components: {
            "comp1": comp1,
            "comp2": comp2,
            "comp3": comp3,
            "comp4": comp4,
            "comp5": comp5,
            "comp6": comp6,
            "comp7": comp7,
            "comp8": comp8,
            "comp9": comp9,
            "comp10": comp10,
            "comp11": comp11,
            "comp12": comp12,
          swiper: swiper,
          tableTemp: tableTemp,
          homePortrait: homePortrait,
          expandTemp: expandTemp
        },
        data () {
            return {
                activeName: 'eight',
                showPage: false,
                // screenType: this.$store.state.isLandscape,
                menuList: [
                    {label: "网格", key: "first", html: "<comp1></comp1>", compName: "comp1"},
                    {label: "Echarts", key: "second", html: "<comp2></comp2>", compName: "comp2"},
                    {label: "角色管理", key: "third", html: "<comp3></comp3>", compName: "comp3"},
                    {label: "滚动条测试", key: "fourth", html: "<comp4></comp4>", compName: "comp4"},
                    {label: "弹窗测试", key: "five", html: "<comp5></comp5>", compName: "comp5"},
                    {label: "表格 树", key: "six", html: "<comp6></comp6>", compName: "comp6"},
                    {label: "测试", key: "seven", html: "<comp7></comp7>", compName: "comp7"},
                    {label: "联动", key: "eight", html: "<comp8></comp8>", compName: "comp8"},
                    {label: "合计表格1", key: "nine", html: "<comp9></comp9>", compName: "comp9"},
                    {label: "合计表格2", key: "ten", html: "<comp10></comp10>", compName: "comp10"},
                    {label: "合并表格", key: "ten1", html: "<comp11></comp11>", compName: "comp11"},
                    {label: "V-Chart", key: "ten12", html: "<comp12></comp12>", compName: "comp12"},
                    {label: "轮 播", key: "swiper", html: "<swiper></swiper>", compName: "swiper"},
                    {label: "列 表", key: "table", html: "<tableTemp></tableTemp>", compName: "tableTemp"},
                  {label: "动 画", key: "expandTemp", html: "<expandTemp></expandTemp>", compName: "expandTemp"},
                ],
                tabindex: 1
            }
        },
      created() {
        window.document.title = '联动';
      },
      computed: {
        screenType() {
          return this.$store.state.isLandscape;
        }
      },
      watch: {
        screenType(a, b) {
          // 通过监听computed中的screenType值的变化，简介实现store中的值的监听
          setTimeout(() => {
            this.$refs.home.style.height = (window.innerHeight - 20) +"px";
          }, 500);
        }
      },
      mounted() {
          // this.$refs.home.style.width = (window.innerWidth - 16) +"px";
          this.$refs.home.style.height = (window.innerHeight - 20) +"px";
      },
      methods: {
        handleClick(tab, event) {
            this.tabindex = tab.index;
            window.document.title = tab.label;
        },
        getData() {
          let e = this.$refs.childTemp;
          console.log(e)
        }
      }
    }
</script>

<style scoped lang="scss">
    .home{
      .testtab{
          height: 100%;
      }
      /* 淡入 淡出 */
      .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
    }
</style>
