<template>
  <el-scrollbar>
    <div class="hjtable">
        <el-table
            :data="tableData"
            border
            :summary-method="getSummaries"
            show-summary
            ref="defineTable"
            style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" :show-overflow-tooltip="true"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="100" :show-overflow-tooltip="true"> </el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1（元）"></el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2（元）"></el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3（元）"></el-table-column>
            <el-table-column prop="price" sortable label="单价">
                <template slot-scope="scope">
                    <el-input type="number" min="0" max="99" maxlength="2" v-model.number="scope.row.price"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="count" sortable label="数量">
                <template slot-scope="scope">
                    <el-input type="number" v-model.number="scope.row.count"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="total" sortable label="金额">
                <template slot-scope="scope">
                    <span>{{setTotal(scope.row, scope.$index)}}</span>
                </template>
            </el-table-column>
        </el-table>

        <br><hr/><br>

        <el-button @click="getTables()">获取输入值</el-button>
        <el-table
                :data="tableData2"
                border
                ref="defineTable2"
                style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" :show-overflow-tooltip="true"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="100" :show-overflow-tooltip="true"> </el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1（元）"></el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2（元）"></el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3（元）"></el-table-column>
            <el-table-column prop="price" sortable label="单价"></el-table-column>
            <el-table-column prop="value" sortable label="数量">
                <template slot-scope="scope">
                    <el-input type="text" v-model="scope.row.value"></el-input>
                </template>
            </el-table-column>
        </el-table>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    data() {
        return {
            tableDatas: [
                { id: '20160502', name: '王小虎1王小虎1王小虎1王小虎1王小虎1王小虎1', amount1: '518', amount2: 177, amount3: 137, price: 2.00, count: 5, total: 0},
                { id: '20160504', name: '王小虎2', amount1: '117', amount2: 234, amount3: 209, price: 4.00, count: 5, total: 0},
                { id: '20160501', name: '王小虎3', amount1: '319', amount2: 363, amount3: 116, price: 3.00, count: 4, total: 0},
                { id: '20160503', name: '王小虎4', amount1: '151', amount2: 265, amount3: 153, price: 4.00, count: 6, total: 0}
            ],
			tableData2: [
				{ id: '20160502', name: '王小虎1', amount1: '518', amount2: 177, amount3: 137, price: 2.00, value: 5, props: 'param_a'},
				{ id: '20160504', name: '王小虎2', amount1: '117', amount2: 234, amount3: 209, price: 4.00, value: 5, props: 'param_b'},
				{ id: '20160501', name: '王小虎3', amount1: '319', amount2: 363, amount3: 116, price: 3.00, value: 4, props: 'param_c'},
				{ id: '20160503', name: '王小虎4', amount1: '151', amount2: 265, amount3: 153, price: 4.00, value: 6, props: 'param_d'}
			],
            tableData: [],
            currentRow: null
        }
    },
    mounted() {
        var self = this;
        this.tableData = this.tableDatas;
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总计';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    //  debugger;
                    sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                        return prev + curr;
                    } else {
                        return prev;
                    }
                    }, 0);
                    if(column.property == 'amount1'){
                        sums[index] += ' 元';
                    } else if(column.property == 'amount2'){
                        sums[index] += ' 角';
                    } else if(column.property == 'amount3'){
                        sums[index] += ' 分';
                    } else {
                        sums[index] += ' AA';
                    }
                } else {
                    sums[index] = '';
                }
            });
            return sums;
        },
        setTotal(row, index) {
            let total = row.price * row.count;
            this.tableData[index].total = total;
            return total;
        },
        getTables(){
        	let param = {};
            let data = this.$refs.defineTable2.data;
            data.forEach(item => {
				param[item.props] = item.value;
            });
            console.log(param);
        }
    },
}
</script>

<style scoped>
.hjtable /deep/ input::-webkit-outer-spin-button, .hjtable /deep/ input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
}
.hjtable /deep/ input[type="number"]{
    -moz-appearance:textfield;
}
.tdtoop{
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
