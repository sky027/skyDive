<template>
  <div class="clearFixed">
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
