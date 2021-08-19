<template>
  <div class="line clearFixed chart-container-box">
    <div class="charts-box">
      <div class="chart-title">示例</div>
      <ve-line :data="chartData"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置显示的指标维度</div>
      <ve-line :data="chartData" :settings="chartSettings1"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置双y轴</div>
      <ve-line :data="chartData" :settings="chartSettings2"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">横坐标的倾斜</div>
      <ve-line :data="chartData" :extend="extend"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">堆叠面积图</div>
      <ve-line :data="chartData" :settings="chartSettings3"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置别名</div>
      <ve-line :data="chartData" :settings="chartSettings4"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">显示指标数值</div>
      <ve-line :data="chartData" :extend="extend2"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置横轴为连续的数值轴</div>
      <ve-line :data="chartData2" :settings="chartSettings5"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置横轴为连续的时间轴</div>
      <ve-line :data="chartData3" :settings="chartSettings6"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">数据格式化</div>
      <ve-line :data="chartData2" :settings="chartSettings7"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">设置指标、legend别名</div>
      <ve-line :data="chartData4" :settings="chartSettings8"></ve-line>
    </div>
    <div class="charts-box">
      <div class="chart-title">时间轴</div>
      <ve-line :data="chartData3" :settings="chartSettings9"></ve-line>
    </div>
  </div>
</template>

<script>
    export default {
      name: "line-chart",
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
          chartSettings9: {},
          extend: {},
          extend2: {},
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1/1', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 13.32 },
              { '日期': '1/2', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 57.26 },
              { '日期': '1/3', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 31.76 },
              { '日期': '1/4', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 20.49 },
              { '日期': '1/5', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 69.323 },
              { '日期': '1/6', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': 43.78 }
            ]
          },
          chartData2: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
              { '日期': '2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
              { '日期': '5', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
              { '日期': '10', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
              { '日期': '11', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
              { '日期': '20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
          },
          chartData3: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '2018-01-01', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(500, 100), '下单率': this.getRandomValue(100, 60) },
              { '日期': '2018-01-02', '访问用户': this.getRandomValue(400, 300), '下单用户': this.getRandomValue(300, 100), '下单率': this.getRandomValue(200, 100) },
              { '日期': '2018-01-03', '访问用户': this.getRandomValue(500, 90), '下单用户': this.getRandomValue(400, 200), '下单率': this.getRandomValue(300, 200) },
              { '日期': '2018-01-05', '访问用户': this.getRandomValue(600, 200), '下单用户': this.getRandomValue(700, 100), '下单率': this.getRandomValue(200, 60) },
              { '日期': '2018-01-10', '访问用户': this.getRandomValue(500, 100), '下单用户': this.getRandomValue(300, 200), '下单率': this.getRandomValue(200, 50) },
              { '日期': '2018-01-20', '访问用户': this.getRandomValue(400, 100), '下单用户': this.getRandomValue(500, 100), '下单率': this.getRandomValue(500, 100) }
            ]
          },
          chartData4: {
            columns: ['date', 'PV', 'Order', 'OrderRate'],
            rows: [
              { 'date': '1/1', 'PV': 1393, 'Order': 1093, 'OrderRate': 0.32 },
              { 'date': '1/2', 'PV': 3530, 'Order': 3230, 'OrderRate': 0.26 },
              { 'date': '1/3', 'PV': 2923, 'Order': 2623, 'OrderRate': 0.76 },
              { 'date': '1/4', 'PV': 1723, 'Order': 1423, 'OrderRate': 0.49 },
              { 'date': '1/5', 'PV': 3792, 'Order': 3492, 'OrderRate': 0.323 },
              { 'date': '1/6', 'PV': 4593, 'Order': 4293, 'OrderRate': 0.78 }
            ]
          }
        }
      },
      created() {
        this.initSetting();
        this.initExtend();
      },
      mounted() {
      },
      methods: {
        getRandomValue(max, min) {
          return (Math.floor(Math.random() * (max - min)) + min);
        },
        initSetting() {
          this.chartSettings1 = {
            metrics: ['访问用户', '下单用户'],
            dimension: ['日期']
          };
          this.chartSettings2 = {
            axisSite: { right: ['下单率'] },
            yAxisType: ['KMB', 'percent'],
            yAxisName: ['数值', '比率']
          };
          this.chartSettings3 = {
            stack: { '用户': ['访问用户', '下单用户'] },
            area: true
          };
          this.chartSettings4 = {
            labelMap: {
              'PV': '访问用户',
              '下单率': 'orders'
            },
            legendName: {
              '访问用户': '访问用户 total: 10000'
            }
          };
          this.chartSettings5 = {
            xAxisType: 'value'
          };
          this.chartSettings6 = {
            xAxisType: 'time'
          };
          this.chartSettings7 = {
            metricsType: {
              '访问用户': '0.0a'
            }
          };
          this.chartSettings8 = {
            labelAlias: {
              'PV': '访问用户',
              'Order': '下单用户'
            },
            legendAlias: {
              '访问用户': '访问用户 total: 10000'
            }
          };
          this.chartSettings9 = {
            xAxisType: 'time'
          }
        },
        initExtend() {
          this.extend = {
            'xAxis.0.axisLabel.rotate': 45
          };
          this.extend2 = {
            series: {
              label: {
                normal: {
                  show: true
                }
              }
            }
          };
        }
      }
    }
</script>

<style scoped lang="scss">
  .line{
    &:after{
      visibility: hidden;
      display: block;
      clear: both;
      height: 0;
      font-size: 0;
      content: ".";
    }
  }
</style>
