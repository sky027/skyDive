<template>
    <div class="tableTemp">
      <com-table :tableConfig="tableConfig"></com-table>
    </div>
</template>

<script>
    import {getArrData} from "../../../static/js/getJsonData";

    export default {
        name: "tableTemp",
      data() {
          return {
            tableConfig: {
              isMultiple: true, // 是否多选
              height: 500,
              dataList: [],
              columnConfig: [
                {label: '日期', prop: 'birth', width: 150, isSort: true},
                {label: '姓名', prop: 'name', width: 150, isSort: true},
                {label: '地址', prop: 'newId', width: 450, isSort: false},
                {label: '操作', prop: 'operate', width: 180, isSort: false},
              ]
            },
            multipleSelection: []
          }
      },
      created() {
          this.queryData();
      },
      methods: {
          queryData() {
            this.tableConfig.dataList = getArrData(20);
          }
      }
    }
</script>

<style scoped>

</style>
