<template>
  <div class="clearFixed">
    <div class="charts-box">
      <div class="chart-title">热力图 自定义 visualMap</div>
      <ve-heatmap :data="chartData" :visual-map="chartVisualMap" :grid="chartGrid"></ve-heatmap>
    </div>

    <div class="charts-box">
      <div class="chart-title">散点图 双维度多指标散点图</div>
      <ve-scatter :data="chartData2"></ve-scatter>
    </div>

    <div class="charts-box">
      <div class="chart-title">散点图 散点样式配置</div>
      <ve-scatter :data="chartData2" :settings="chartSettings2"></ve-scatter>
    </div>

    <div class="charts-box">
      <div class="chart-title">仪表盘 指标维度配置</div>
      <ve-gauge :data="chartData3" :settings="chartSettings3"></ve-gauge>
    </div>

    <div class="charts-box">
      <div class="chart-title">多树图 多树图</div>
      <ve-tree :data="chartData4" :settings="chartSettings4"></ve-tree>
    </div>

    <div class="charts-box">
      <div class="chart-title">词云图 设置词云图的颜色</div>
      <ve-wordcloud :data="chartData5" :settings="chartSettings5"></ve-wordcloud>
    </div>

    <div class="charts-box">
      <div class="chart-title">水球图 设置多个水球图</div>
      <ve-liquidfill :data="chartData6" :settings="chartSettings6"></ve-liquidfill>
    </div>
  </div>
</template>

<script>
  const treeData = {
    name: 'f',
    value: 1,
    link: 'https://ele.me',
    children: [
      {
        name: 'a',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'a-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'a-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'b',
        value: 1,
        link: 'https://ele.me',
        children: [
          {
            name: 'b-a',
            link: 'https://ele.me',
            value: 2
          },
          {
            name: 'b-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'c',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'c-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'c-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      },
      {
        name: 'd',
        value: 3,
        link: 'https://ele.me',
        children: [
          {
            name: 'd-a',
            link: 'https://ele.me',
            value: 4
          },
          {
            name: 'd-b',
            link: 'https://ele.me',
            value: 2
          }
        ]
      }
    ]
  };
    export default {
        name: "others-chart2",
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
          chartGrid: {},
          chartVisualMap: {},
          chartData: {
            columns: ['时间', '地点', '人数'],
            rows: [
              { '时间': '星期一', '地点': '北京', '人数': 1000 },
              { '时间': '星期二', '地点': '上海', '人数': 400 },
              { '时间': '星期三', '地点': '杭州', '人数': 800 },
              { '时间': '星期二', '地点': '深圳', '人数': 200 },
              { '时间': '星期三', '地点': '长春', '人数': 100 },
              { '时间': '星期五', '地点': '南京', '人数': 300 },
              { '时间': '星期四', '地点': '江苏', '人数': 800 },
              { '时间': '星期三', '地点': '北京', '人数': 700 },
              { '时间': '星期三', '地点': '上海', '人数': 200 },
              { '时间': '星期二', '地点': '杭州', '人数': 500 }
            ]
          },
          chartData2: {
            columns: ['日期', '访问用户', '下单用户', '年龄'],
            rows: {
              '上海': [
                { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
                { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
                { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
                { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
                { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
              ],
              '北京': [
                { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
                { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
                { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
                { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
                { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
              ],
              '广州': [
                { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
                { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
                { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
                { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
                { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
              ]
            }
          },
          chartData3: {
            columns: ['a', 'b', 'type', 'value'],
            rows: [
              { type: '速度', value: 80, a: 1, b: 2 }
            ]
          },
          chartData4: {
            columns: ['name', 'value'],
            rows: [
              {
                name: 'tree1',
                value: [treeData]
              },
              {
                name: 'tree2',
                value: [treeData]
              }
            ]
          },
          chartData5: {},
          chartData6: {
            columns: ['city', 'percent'],
            rows: [{
              city: '上海',
              percent: 0.6
            }, {
              city: '广州',
              percent: 0.4
            }, {
              city: '成都',
              percent: 0.9
            }]
          },
        }
      },
      mounted() {
        this.initSetting();
        this.initExtend();
      },
      methods: {
        initSetting() {
          this.chartGrid = {
            right: 100
          };
          this.chartVisualMap = {
            min: 0,
            max: 1500,
            type: 'piecewise',
            right: 0,
            top: '50%'
          };
          this.chartSettings2 = {
            symbol: 'rect',
            symbolSizeMax: 30,
            symbolRotate: 45,
            symbolOffset: [10, 10]
          };
          this.chartSettings3 = {
            dimension: 'type',
            metrics: 'value'
          };
          this.chartSettings4 = {
            seriesMap: {
              tree1: {
                top: '5%',
                left: '7%',
                bottom: '2%',
                right: '60%'
              },
              tree2: {
                top: '20%',
                left: '60%',
                bottom: '22%',
                right: '18%'
              }
            }
          };
          this.chartSettings5 = {
            color: ['#ff0', '#00f', '#f00', '#0ff']
          };
          this.chartSettings6 = {
            wave: [[0.5, 0.3, 0.1], [0.3, 0.2], []],
            seriesMap: [
              {
                color: ['red', 'green', 'yellow'],
                label: {
                  formatter (options) {
                    const {
                      seriesName,
                      data: {
                        value
                      }
                    } = options
                    return `${seriesName}\n${value}`
                  },
                  fontSize: 30
                },
                center: ['24%', '30%'],
                radius: '40%',
                waveAnimation: false
              },
              {
                label: {
                  formatter (options) {
                    return `${options.seriesName}\n${options.data.value}`
                  },
                  fontSize: 30
                },
                center: ['25%', '75%'],
                radius: '40%'
              },
              {
                label: {
                  fontSize: 30
                },
                center: ['70%', '50%'],
                radius: '40%',
                waveAnimation: false
              }
            ]
          };
        },
        initExtend() {
          this.chartData5 = {
            columns: ['word', 'count'],
            rows: [{
              'word': 'visualMap',
              'count': 22199
            }, {
              'word': 'continuous',
              'count': 10288
            }, {
              'word': 'contoller',
              'count': 620
            }, {
              'word': 'series',
              'count': 274470
            }, {
              'word': 'gauge',
              'count': 12311
            }, {
              'word': 'detail',
              'count': 1206
            }, {
              'word': 'piecewise',
              'count': 4885
            }, {
              'word': 'textStyle',
              'count': 32294
            }, {
              'word': 'markPoint',
              'count': 18574
            }, {
              'word': 'pie',
              'count': 38929
            }, {
              'word': 'roseType',
              'count': 969
            }, {
              'word': 'label',
              'count': 37517
            }, {
              'word': 'emphasis',
              'count': 12053
            }, {
              'word': 'yAxis',
              'count': 57299
            }, {
              'word': 'name',
              'count': 15418
            }, {
              'word': 'type',
              'count': 22905
            }, {
              'word': 'gridIndex',
              'count': 5146
            }, {
              'word': 'normal',
              'count': 49487
            }, {
              'word': 'itemStyle',
              'count': 33837
            }, {
              'word': 'min',
              'count': 4500
            }, {
              'word': 'silent',
              'count': 5744
            }, {
              'word': 'animation',
              'count': 4840
            }, {
              'word': 'offsetCenter',
              'count': 232
            }, {
              'word': 'inverse',
              'count': 3706
            }, {
              'word': 'borderColor',
              'count': 4812
            }, {
              'word': 'markLine',
              'count': 16578
            }, {
              'word': 'line',
              'count': 76970
            }, {
              'word': 'radiusAxis',
              'count': 6704
            }, {
              'word': 'radar',
              'count': 15964
            }, {
              'word': 'data',
              'count': 60679
            }, {
              'word': 'dataZoom',
              'count': 24347
            }, {
              'word': 'tooltip',
              'count': 43420
            }, {
              'word': 'toolbox',
              'count': 25222
            }, {
              'word': 'geo',
              'count': 16904
            }, {
              'word': 'parallelAxis',
              'count': 4029
            }]
          }
        },
      }
    }
</script>

<style scoped>

</style>
