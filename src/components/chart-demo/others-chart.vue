<template>
  <div class="clearFixed">
    <div class="charts-box">
      <div class="chart-title">瀑布图 设置数据类型</div>
      <ve-waterfall :data="chartData" :settings="chartSettings1"></ve-waterfall>
    </div>

    <div class="charts-box">
      <div class="chart-title">漏斗图 指定数据类型漏斗图</div>
      <ve-funnel :data="chartData2" :settings="chartSettings2"></ve-funnel>
    </div>

    <div class="charts-box">
      <div class="chart-title">雷达图 设置显示的指标维度</div>
      <ve-radar :data="chartData3" :settings="chartSettings3"></ve-radar>
    </div>

    <div class="charts-box">
      <div class="chart-title">地图 设置指标维度</div>
      <ve-map :data="chartData4" :settings="chartSettings4"></ve-map>
    </div>

    <div class="charts-box">
      <div class="chart-title">地图 设置选中模式</div>
      <span>当前选中了: {{ cityName || '-' }}</span>
      <ve-map :data="chartData5" :settings="chartSettings5" :events="chartEvents"></ve-map>
    </div>

    <div class="charts-box">
      <div class="chart-title">桑基图 设置数据类型</div>
      <ve-sankey :data="chartData6" :settings="chartSettings6"></ve-sankey>
    </div>

  </div>
</template>

<script>
  import china from "echarts/map/json/china.json";
    export default {
      name: "others-chart",
      data() {
        return {
          chartSettings1: {},
          chartSettings2: {},
          chartSettings3: {},
          chartSettings4: {},
          chartSettings5: {},
          chartSettings6: {},
          chartSettings7: {},
          chartSettings8: {},
          extend: {},
          extend2: {},
          radius: 40,
          radius_in: 10,
          radius_out: 100,
          chartEvents: null,
          chartData: {
            columns: ['活动', '时间'],
            rows: [
              { '活动': '吃饭', '时间': 0.1 },
              { '活动': '睡觉', '时间': 0.2 },
              { '活动': '打豆豆', '时间': 0.3 }
            ]
          },
          chartData2: {
            columns: ['状态', '数值'],
            rows: [
              { '状态': '展示', '数值': 0.9 },
              { '状态': '访问', '数值': 0.6 },
              { '状态': '点击', '数值': 0.3 },
              { '状态': '订单', '数值': 0.1 }
            ]
          },
          chartData3: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
              { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
              { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
              { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
              { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
              { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
          },
          chartData4: {
            columns: ['位置', '税收', '人口', '面积'],
            rows: [
              { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
              { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
              { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
              { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
            ]
          },
          cityName: '',
          chartData5: {
            columns: ['位置', 'GDP'],
            rows: [
              { '位置': '吉林', 'GDP': 123 },
              { '位置': '北京', 'GDP': 1223 },
              { '位置': '上海', 'GDP': 2123 },
              { '位置': '浙江', 'GDP': 4123 }
            ]
          },
          chartData6: {
            columns: ['页面', '访问量'],
            rows: [
              { '页面': '首页', '访问量': 100000 },
              { '页面': '列表页a', '访问量': 20000 },
              { '页面': '列表页b', '访问量': 80000 },
              { '页面': '内容页a-1', '访问量': 10000 },
              { '页面': '内容页a-2', '访问量': 10000 },
              { '页面': '内容页b-1', '访问量': 60000 },
              { '页面': '内容页b-2', '访问量': 20000 }
            ]
          },
        }
      },
      mounted() {
        this.initSetting();
        this.initExtend();
      },
      methods: {
        initSetting() {
          this.chartSettings1 = {
            dataType: 'percent'
          };
          this.chartSettings2 = {
            dataType: 'percent'
          };
          this.chartSettings3 = {
            dimension: ['日期'],
            metrics: ['访问用户', '下单用户', '下单率'],
            dataType: { '下单率': 'percent' }
          };
          this.chartSettings4 = {
            mapOrigin: china,
            position: 'china',
            dimension: '位置',
            metrics: ['人口', '面积'],
            dataType: {
              '面积': 'KMB'
            }
          };
          this.chartSettings5 = {
            mapOrigin: china,
            position: 'china',
            // selectData: true,
            selectedMode: 'single'
          };
          this.chartEvents = {
            click: (v) => {
              this.cityName = v.name
            }
          };
          this.chartSettings6 = {
            links: [
              { source: '首页', target: '列表页a', value: 0.5 },
              { source: '首页', target: '列表页b', value: 0.5 },
              { source: '列表页a', target: '内容页a-1', value: 0.1 },
              { source: '列表页a', target: '内容页a-2', value: 0.4 },
              { source: '列表页b', target: '内容页b-1', value: 0.2 },
              { source: '列表页b', target: '内容页b-2', value: 0.3 }
            ],
            dataType: ['KMB', 'percent']
          };
        },
        initExtend() {

        },
      }
    }
</script>

<style scoped>

</style>
