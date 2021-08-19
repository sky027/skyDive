<template>
  <div class="clearFixed chart-container-box">
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

    <div class="charts-box">
      <div class="chart-title">K线图 修改指标名和图例文字</div>
      <ve-candle :data="chartData7" :settings="chartSettings7"></ve-candle>
    </div>

    <div class="charts-box">
      <div class="chart-title">K线图 修改 MA 显示周期</div>
      <ve-candle :data="chartData8" :settings="chartSettings8"></ve-candle>
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
          chartData7: {
            columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
            rows: [
              { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
              { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
              { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
              { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
              { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
              { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
              { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
              { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
              { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
              { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
              { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
              { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
              { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
              { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
              { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
              { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
              { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
              { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
              { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
              { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
              { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
              { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
              { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
              { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
              { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
              { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
              { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
              { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
              { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
              { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
              { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
              { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
              { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
              { '日期': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
              { '日期': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
              { '日期': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
              { '日期': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
              { '日期': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
            ]
          },
          chartData8: {
            columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
            rows: [
              { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
              { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
              { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
              { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
              { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
              { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
              { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
              { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
              { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
              { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
              { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
              { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
              { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
              { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
              { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
              { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
              { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
              { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
              { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
              { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
              { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
              { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
              { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
              { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
              { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
              { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
              { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
              { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
              { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
              { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
              { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
              { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
              { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
              { '日期': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
              { '日期': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
              { '日期': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
              { '日期': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
              { '日期': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
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
          this.chartSettings7 = {
            showMA: true,
            showVol: true,
            labelMap: {
              MA5: 'ma5'
            },
            legendName: {
              '日K': 'day k'
            },
            showDataZoom: true
          };
          this.chartSettings8 = {
            showMA: true,
            MA: [1, 2, 3, 4]
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
