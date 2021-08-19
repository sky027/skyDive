<template>
  <div class="com-table">32343242
    <el-table
      ref="tableTemp"
      :data="tableConfig.dataList"
      tooltip-effect="dark"
      :style="{width: '100%', height: tableConfig.height + 'px', overflow: 'auto'}"
      border
      @selection-change="handleSelectionChange">
      <el-table-column v-if="tableConfig.isMultiple" type="selection" width="55"></el-table-column>
      <el-table-column v-for="(item, index) in tableConfig.columnConfig" :key="index"
                       :prop="item.prop" :label="item.label"
                       :width="item.width" :sortable="item.isSort">
        <template slot-scope="scope">{{ scope.row[item.prop] }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "com-table",
      props: {
        tableConfig: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {
          tableData: [],
          multipleSelection: []
        }
      },
      computed: {},
      methods: {
        handleSelectionChange(val) {
          if (this.tableConfig.isMultiple) {
            this.multipleSelection = val;
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .com-table{}
</style>
