<template>
  <div>
    <el-button @click="changeValue()">改变下拉框选值（子组件传值到父组件）</el-button>
    <br/><br/><br/>
    <h5>子组件</h5>
    <el-cascader
      v-model="value"
      ref="cascader"
      :options="options"
      @change="handleChange"></el-cascader>
  </div>
</template>

<script>
    export default {
      data() {
          return{
            value: ["420000", "420100", "420111"],
            options: [],
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
        }
      }
    }
</script>

<style scoped>

</style>
