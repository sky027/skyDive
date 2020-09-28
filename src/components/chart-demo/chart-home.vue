<template>
  <!---->
  <div class="chart-home">
    <el-scrollbar>
      <div class="chart-cont">
        <div class="chart-area" v-for="(item, index) in chartList" :key="index">
          <h3>---> <span class="links" @click="showChart(item)">{{item.name}}</span></h3>
          <component :is="item.component" v-if="item.isShow"></component>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
  import lineChart from '@/components/chart-demo/line-chart';
  import barChart from '@/components/chart-demo/bar-chart';
  import pieChart from '@/components/chart-demo/pie-chart';
  import otherChart from '@/components/chart-demo/others-chart';
  import otherChart2 from '@/components/chart-demo/others-chart2';
  import eventChart from '@/components/chart-demo/event-chart';
  export default {
    name: "chart-home",
    components: {
      lineChart,barChart,pieChart,otherChart,otherChart2,eventChart
    },
    data() {
      return {
        chartList: [
          {name: '折线图', isShow: false, component: 'lineChart'},
          {name: '柱状图', isShow: false, component: 'barChart'},
          {name: '饼 图/ 环形图', isShow: false, component: 'pieChart'},
          {name: '其他图形', isShow: false, component: 'otherChart'},
          {name: '其他图形 2', isShow: false, component: 'otherChart2'},
          {name: '图形事件绑定', isShow: false, component: 'eventChart'},
        ]
      }
    },
    mounted() {
      this.chartList[0].isShow = true;
    },
    methods: {
      showChart(item) {
        item.isShow = !item.isShow;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chart-home{
    width: 100%;
    height: 100%;
    .chart-area{
      height: auto;
    }
    .links{
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>
