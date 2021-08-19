<template>
  <div class="clearFixed chart-container-box">
    <div class="charts-box">
      <div class="chart-title">示例</div>
      <ve-histogram :data="chartData"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">设置显示的指标维度</div>
      <ve-histogram :data="chartData" :settings="chartSettings1"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">设置双y轴</div>
      <ve-histogram :data="chartData" :settings="chartSettings2"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">柱状图+折线图</div>
      <ve-histogram :data="chartData" :settings="chartSettings3"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">堆叠柱状图</div>
      <ve-histogram :data="chartData" :settings="chartSettings4"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">默认显示柱状图数据</div>
      <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
    </div>

    <div class="charts-box">
      <div class="chart-title">设置横轴为连续的数值轴</div>
      <ve-histogram :data="chartData2" :settings="chartSettings5"></ve-histogram>
    </div>
    <!----------------------------------------------------------------------->
    <div class="charts-box">
      <div class="chart-title">条形图</div>
      <ve-bar :data="chartData"></ve-bar>
    </div>

    <div class="charts-box">
      <div class="chart-title">堆叠条形图</div>
      <ve-bar :data="chartData" :settings="chartSettings6"></ve-bar>
    </div>

    <div class="charts-box">
      <div class="chart-title">正负条形图（echarts）</div>
      <div class="ec-box" id="chart-1"></div>
    </div>
    <div class="charts-box">
      <div class="chart-title">改变现实状态（echarts）</div>
      <div class="ec-box" id="chart-2"></div>
    </div>
    <div class="charts-box">
      <div class="chart-title">大量柱状图（echarts）</div>
      <div class="ec-box" id="chart-3"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "bar-chart",
      data() {
        return {
          chartSettings1: {},
          chartSettings2: {},
          chartSettings3: {},
          chartSettings4: {},
          chartSettings5: {},
          chartSettings6: {},
          extend: {},
          extend2: {},
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': '1/1', '访问用户': 133, '下单用户': 193, '下单率': 13.32 },
              { '日期': '1/2', '访问用户': 350, '下单用户': 330, '下单率': 57.26 },
              { '日期': '1/3', '访问用户': 293, '下单用户': 623, '下单率': 31.76 },
              { '日期': '1/4', '访问用户': 723, '下单用户': 423, '下单率': 20.49 },
              { '日期': '1/5', '访问用户': 392, '下单用户': 342, '下单率': 69.323 },
              { '日期': '1/6', '访问用户': 593, '下单用户': 493, '下单率': 43.78 }
            ]
          },
          chartData2: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
            rows: [
              { '日期': 1, '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
              { '日期': 2, '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
              { '日期': 5, '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
              { '日期': 10, '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
              { '日期': 20, '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
              { '日期': 22, '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            ]
          }
        }
      },
      mounted() {
        this.initSetting();
        this.initExtend();
        this.initBarChart();
        this.initMoreBar();
      },
      methods: {
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
            showLine: ['下单用户']
          };
          this.chartSettings4 = {
            stack: { '用户': ['访问用户', '下单用户'] }
          };
          this.chartSettings5 = {
            xAxisType: 'value'
          };
          this.chartSettings6 =  {
            stack: {
              'xxx': ['访问用户', '下单用户']
            }
          };
        },
        initExtend() {
          this.extend = {
            series: {
              label: { show: true, position: "top" }
            }
          };
        },
        initBarChart() {
          let chart1 = this.$echarts.init(document.getElementById('chart-1'));
          let option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data: ['利润', '支出', '收入']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'value'
              }
            ],
            yAxis: [
              {
                type: 'category',
                axisTick: {
                  show: false
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
            ],
            series: [
              {
                name: '利润',
                type: 'bar',
                label: {
                  show: true,
                  position: 'inside'
                },
                emphasis: {
                  focus: 'series'
                },
                data: [200, 170, 240, 244, 200, 220, 210]
              },
              {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 341, 374, 390, 450, 420]
              },
              {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                  show: true,
                  position: 'left'
                },
                emphasis: {
                  focus: 'series'
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
              }
            ]
          };
          chart1.setOption(option);
          /*--------------------------------------------------------------------------------------*/
          let option2 = {
            title: {
              text: '某地区蒸发量和降水量',
              subtext: '纯属虚构'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['蒸发量', '降水量']
            },
            toolbox: {
              show: true,
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                  data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                  ]
                },
                markLine: {
                  data: [
                    {type: 'average', name: '平均值'}
                  ]
                }
              },
              {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                  data: [
                    {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                    {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                  ]
                },
                markLine: {
                  data: [
                    {type: 'average', name: '平均值'}
                  ]
                }
              }
            ]
          };
          let chart2 = this.$echarts.init(document.getElementById('chart-2'));
          chart2.setOption(option2);
        },
        initMoreBar() {
          let that = this;
          let dataCount = 1e5; // 5e5  50000   1e5  10000
          let data = generateData(dataCount);
          let chart = this.$echarts.init(document.getElementById('chart-3'));

          let option = {
            title: {
              text: that.$echarts.format.addCommas(dataCount) + ' Data',
              left: 10
            },
            toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: false
                },
                saveAsImage: {
                  pixelRatio: 2
                }
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              bottom: 90
            },
            dataZoom: [{
              type: 'inside'
            }, {
              type: 'slider'
            }],
            xAxis: {
              data: data.categoryData,
              silent: false,
              splitLine: {
                show: false
              },
              splitArea: {
                show: false
              }
            },
            yAxis: {
              splitArea: {
                show: false
              }
            },
            series: [{
              type: 'bar',
              data: data.valueData,
              // Set `large` for large data amount
              large: true
            }]
          };
          chart.setOption(option);
          function generateData(count) {
            var baseValue = Math.random() * 1000;
            var time = +new Date(2011, 0, 1);
            var smallBaseValue;

            function next(idx) {
              smallBaseValue = idx % 30 === 0
                ? Math.random() * 700
                : (smallBaseValue + Math.random() * 500 - 250);
              baseValue += Math.random() * 20 - 10;
              return Math.max(
                0,
                Math.round(baseValue + smallBaseValue) + 3000
              );
            }

            var categoryData = [];
            var valueData = [];

            for (var i = 0; i < count; i++) {
              categoryData.push(that.$echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
              valueData.push(next(i).toFixed(2));
              time += 1000;
            }

            return {
              categoryData: categoryData,
              valueData: valueData
            };
          }
        }
      }
    }
</script>

<style scoped>

</style>
