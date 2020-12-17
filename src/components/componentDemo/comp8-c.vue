<template>
  <div class="compc">
    <el-button @click="changeValue()">改变下拉框选值（子组件传值到父组件）</el-button>
    <br/><br/><br/>
    <h5>子组件</h5>
    <el-cascader
      v-model="value"
      ref="cascader"
      :options="options"
      @change="handleChange">
    </el-cascader>
    <br /><br /><br />
    <div class="times">
      <h5>日期时间禁用</h5>
      <div class="lh40 clearFixed">
        <div class="left">开始时间：</div>
        <div class="left">
          <el-date-picker v-model="startTime" type="date"
                          @change="getTimeValue" value-format="yyyy-MM-dd"
                          :picker-options="pickerStartTime"
                          placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </div>
      <br />
      <div class="lh40 clearFixed">
        <div class="left">结束时间：</div>
        <div class="left">
          <el-date-picker v-model="endTime" type="date"
                          @change="getTimeValue" value-format="yyyy-MM-dd"
                          :picker-options="pickerEndTime"
                          placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
          return{
            pickerStartTime: {
              disabledDate: time => {
                let s = new Date(time).getTime();
                let n = new Date().getTime();
                if (this.endTime) {
                  let e = new Date(this.endTime).getTime();
                  // 开始时间不能大于当前时间
                  return (s > n || s > e);
                } else {
                  return s > n;
                }
              }
            },
            pickerEndTime: {
              disabledDate: time => {
                let n = new Date().getTime();
                let e = new Date(time).getTime();
                if (this.startTime) {
                  let s = new Date(this.startTime).getTime() - 24 * 3600 * 1000;
                  return (e < s || e > n);
                } else {
                  return e > n;
                }
              }
            },
            value: ["420000", "420100", "420111"],
            options: [],
            startTime: '',
            endTime: '',
          }
      },
      mounted() {
        this.getProvinceData();
      },
      methods: {
        changeValue() {
          this.$emit('getSelectValue', this.value);
        },
        getProvinceData(){
          var url = "../../../static/json/ssq.json";
          var self = this;
          this.$ajax.get(url).then(res => {
            self.allData = res.data;
            self.options = res.data;
          }).catch(res => {
            debugger;
          });
        },
        handleChange(value) {
          var obj = this.$refs.cascader.getCheckedNodes()[0];
          var arr = [];
          if (obj.path.length == obj.pathLabels.length) {
            obj.path.forEach((v, i) => {
              arr.push({
                value: v,
                label: obj.pathLabels[i]
              });
            });
          }
          console.log(arr);
        },
        getTimeValue() {
          console.log('开始时间');
          console.log(this.startTime);
          console.log('结束时间');
          console.log(this.endTime);
        }
      }
    }
</script>

<style scoped>
  .compc{
    position: relative;
  }
  .times{
    position: absolute;
    left: 415px;
    top: -245px;
  }
</style>
