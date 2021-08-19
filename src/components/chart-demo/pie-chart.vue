<template>
  <div class="clearFixed chart-container-box">
    <div class="charts-box">
      <div class="chart-title">示例</div>
      <ve-pie :data="chartData"></ve-pie>
    </div>

    <div class="charts-box">
      <div class="chart-title">玫瑰图</div>
      <ve-pie :data="chartData" :settings="chartSettings1"></ve-pie>
    </div>

    <div class="charts-box">
      <div class="chart-title">多圆饼图</div>
      <ve-pie :data="chartData" :settings="chartSettings2"></ve-pie>
    </div>

    <div class="charts-box">
      <div class="chart-title">设置数据类型</div>
      <ve-pie :data="chartData" :settings="chartSettings3"></ve-pie>
    </div>

    <div class="charts-box">
      <div class="chart-title">设置饼图半径边距</div>
      <el-slider class="selectRadius" v-model="radius" @change="selectValue()"></el-slider>
      <ve-pie :data="chartData" :settings="chartSettings4"></ve-pie>
    </div>

    <div class="charts-box">
      <div class="chart-title">环形图 设置指标维度</div>
      <ve-ring :data="chartData" :settings="chartSettings5"></ve-ring>
    </div>

    <div class="charts-box">
      <div class="chart-title">环形图 玫瑰图</div>
      <ve-ring :data="chartData" :settings="chartSettings6"></ve-ring>
    </div>

    <div class="charts-box">
      <div class="chart-title">环形图 设置数据类型</div>
      <ve-ring :data="chartData" :settings="chartSettings7"></ve-ring>
    </div>

    <div class="charts-box">
      <div class="chart-title">环形图 设置环图半径</div>
      <div class="clearFixed auto-radius in">
        <span style="float: left">内 环：</span>
        <el-slider class="place" v-model="radius_in" :min="10" :max="50" @change="selectValues()"></el-slider>
      </div>
      <div class="clearFixed auto-radius out">
        <span style="float: left">外 环：</span>
        <el-slider class="place" v-model="radius_out" :min="60" :max="100" @change="selectValues()"></el-slider>
      </div>
      <ve-ring :data="chartData" :settings="chartSettings8"></ve-ring>
    </div>

    <div class="charts-box">
      <div class="chart-title">日历饼图（echarts）</div>
      <div class="ec-box" id="chart_1"></div>
    </div>
    <div class="charts-box">
      <div class="chart-title">联动数据共享（echarts）</div>
      <div class="ec-box" id="chart_2"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "pie-chart",
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
          chartData: {
            columns: ['日期', '访问用户'],
            rows: [
              { '日期': '1/1', '访问用户': 133},
              { '日期': '1/2', '访问用户': 350},
              { '日期': '1/3', '访问用户': 293},
              { '日期': '1/4', '访问用户': 723},
              { '日期': '1/5', '访问用户': 392},
              { '日期': '1/6', '访问用户': 593}
            ]
          },
        }
      },
      mounted() {
        this.initSetting();
        this.initExtend();
        this.initPies();
        this.relateData();
      },
      methods: {
        initSetting() {
          this.chartSettings1 = {
            roseType: 'radius'
          };
          this.chartSettings2 = {
            level: [
              ['1/1', '1/2', '1/3'],
              ['1/4', '1/5']
            ]
          };
          this.chartSettings3 = {
            dataType: 'percent'
          };
          this.chartSettings4 = {
            radius: this.radius,
            offsetY: 200
          };
          this.chartSettings5 = {
            dimension: '日期',
            metrics: '访问用户'
          };
          this.chartSettings6 = {
            roseType: 'radius'
          };
          this.chartSettings7 = {
            dataType: 'KMB'
          };
          this.chartSettings8 = {
            radius: [10, 100],
            offsetY: 200
          };
        },
        initExtend() {

        },
        selectValue(){
          this.chartSettings4 = {
            radius: this.radius,
            offsetY: 200
          };
        },
        selectValues() {
          this.chartSettings8 = {
            radius: [this.radius_in, this.radius_out],
            offsetY: 200
          };
        },
        initPies() {
          let that = this;
          let myChart = this.$echarts.init(document.getElementById('chart_1'));
          let option = {}
          var app = {};

          var cellSize = [80, 80];
          var pieRadius = 30;

          function getVirtulData() {
            var date = +that.$echarts.number.parseDate('2017-02-01');
            var end = +that.$echarts.number.parseDate('2017-03-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
              data.push([
                that.$echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
              ]);
            }
            return data;
          }

          function getPieSeries(scatterData, chart) {
            return scatterData.map(function (item, index) {
              var center = chart.convertToPixel('calendar', item);
              return {
                id: index + 'pie',
                type: 'pie',
                center: center,
                label: {
                  normal: {
                    formatter: '{c}',
                    position: 'inside'
                  }
                },
                radius: pieRadius,
                data: [
                  {name: '工作', value: Math.round(Math.random() * 24)},
                  {name: '娱乐', value: Math.round(Math.random() * 24)},
                  {name: '睡觉', value: Math.round(Math.random() * 24)}
                ]
              };
            });
          }

          function getPieSeriesUpdate(scatterData, chart) {
            return scatterData.map(function (item, index) {
              var center = chart.convertToPixel('calendar', item);
              return {
                id: index + 'pie',
                center: center
              };
            });
          }

          var scatterData = getVirtulData();

          option = {
            tooltip: {},
            legend: {
              data: ['工作', '娱乐', '睡觉'],
              bottom: 20
            },
            calendar: {
              top: 'middle',
              left: 'center',
              orient: 'vertical',
              cellSize: cellSize,
              yearLabel: {
                show: false,
                fontSize: 30
              },
              dayLabel: {
                margin: 20,
                firstDay: 1,
                nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
              },
              monthLabel: {
                show: false
              },
              range: ['2017-02']
            },
            series: [{
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return that.$echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 14
              },
              data: scatterData
            }]
          };
          myChart.setOption(option);
          var pieInitialized;
          setTimeout(function () {
            pieInitialized = true;
            myChart.setOption({
              series: getPieSeries(scatterData, myChart)
            });
          }, 10);

          app.onresize = function () {
            if (pieInitialized) {
              myChart.setOption({
                series: getPieSeriesUpdate(scatterData, myChart)
              });
            }
          };
        },
        relateData() {
          let that = this;
          var myChart = this.$echarts.init(document.getElementById('chart_2'));
          var option;

          setTimeout(function () {

            option = {
              legend: {},
              tooltip: {
                trigger: 'axis',
                showContent: false
              },
              dataset: {
                source: [
                  ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                  ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                  ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                  ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                  ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
                ]
              },
              xAxis: {type: 'category'},
              yAxis: {gridIndex: 0},
              grid: {top: '55%'},
              series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {
                  type: 'pie',
                  id: 'pie',
                  radius: '30%',
                  center: ['50%', '25%'],
                  emphasis: {focus: 'data'},
                  label: {
                    formatter: '{b}: {@2012} ({d}%)'
                  },
                  encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                  }
                }
              ]
            };

            myChart.on('updateAxisPointer', function (event) {
              var xAxisInfo = event.axesInfo[0];
              if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                  series: {
                    id: 'pie',
                    label: {
                      formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                      value: dimension,
                      tooltip: dimension
                    }
                  }
                });
              }
            });
            myChart.setOption(option);
          });
          option && myChart.setOption(option);
        },
        // 0-
      }
    }
</script>

<style scoped lang="scss">
  .selectRadius{
    position: absolute;
    top: 55px;
    z-index: 999;
    width: 400px;
    left: 10px;
  }
  .auto-radius{
    position: absolute;
    top: 55px;
    z-index: 999;
    width: 350px;
    left: 10px;
    & > span {
      display: block;
      float: left;
    }
    &.out{
      top: 85px;
    }
    .place{
      float: left;
      width: 350px;
      position: absolute;
      top: -7px;
      left: 57px;
    }
  }
</style>
