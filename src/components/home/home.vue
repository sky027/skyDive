<template>
    <div class="home" ref="home">
        <el-tabs v-model="activeName" class="testtab" type="border-card" @tab-click="handleClick">
            <el-tab-pane :label="item.label" :name="item.key" v-for="(item, index) of menulist" :key="index">
                <component :is="item.compName" v-if="index == tabindex"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
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
        },
        data () {
            return {
                activeName: 'eight',
                showPage: false,
                menulist: [
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
                ],
                tabindex: 8
            }
        },
        mounted() {
          this.$refs.home.style.width = (window.innerWidth - 16) +"px";
          this.$refs.home.style.height = (window.innerHeight - 20) +"px";
        },
        methods: {
            handleClick(tab, event) {
                this.tabindex = tab.index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .home{
      .testtab{
          height: 100%;
      }
    }
</style>
