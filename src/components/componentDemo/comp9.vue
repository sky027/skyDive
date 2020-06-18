<template>
    <div class="">
        <el-table
            :data="tableData"
            border
            :summary-method="getSummaries"
            show-summary
            @cell-dblclick="singleClick"
            style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1（元）">
                <template slot-scope="scope">
                    <span v-if="!scope.row.flag[0].flag">{{scope.row.amount1}}</span>
                    <el-input type="number" v-model.number="scope.row.amount1" v-if="scope.row.flag[0].flag"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2（元）">
                <template slot-scope="scope">
                    <span v-if="!scope.row.flag[1].flag">{{scope.row.amount2}}</span>
                    <el-input type="number" v-model.number="scope.row.amount2" v-if="scope.row.flag[1].flag"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3（元）">
                <template slot-scope="scope">
                    <span v-if="!scope.row.flag[2].flag">{{scope.row.amount3}}</span>
                    <el-input type="number" v-model.number="scope.row.amount3" v-if="scope.row.flag[2].flag"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <h6>------------------------------------------------------------------------------------------------------------</h6>
        <el-table :data="tableData3" :span-method="arraySpanMethod" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1"> </el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2"> </el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3"> </el-table-column>
        </el-table>
        <h6>------------------------------------------------------------------------------------------------------------</h6>
        <el-table :data="tableData4" style="width: 100%">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column label="配送信息">
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column label="地址">
                    <el-table-column prop="province" label="省份"></el-table-column>
                    <el-table-column prop="city" label="市区"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="zip" label="邮编"></el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    components: {},
    data() {
        return {
            tableData2: [
                { id: '20160502', name: '王小虎1', amount1: '518', flag1: false, amount2: 154, flag2: false,  amount3: 137,  flag3: false},
                { id: '20160504', name: '王小虎2', amount1: '117', flag1: false,  amount2: 234, flag2: false,  amount3: 209,  flag3: false },
                { id: '20160501', name: '王小虎3', amount1: '319', flag1: false,  amount2: 354, flag2: false,  amount3: 116,  flag3: false },
                { id: '20160503', name: '王小虎4', amount1: '151', flag1: false,  amount2: 265, flag2: false,  amount3: 153,  flag3: false}
            ],
            tableData: [
                { id: '20160502', name: '王小虎1', amount1: '518', amount2: 177, amount3: 137,
                    flag: [
                        {props: 'amount1', flag: false},
                        {props: 'amount2', flag: false},
                        {props: 'amount3', flag: false}
                    ]
                },
                { id: '20160504', name: '王小虎2', amount1: '117', amount2: 234, amount3: 209,
                    flag: [
                        {props: 'amount1', flag: false},
                        {props: 'amount2', flag: false},
                        {props: 'amount3', flag: false}
                    ]
                },
                { id: '20160501', name: '王小虎3', amount1: '319', amount2: 363, amount3: 116,
                    flag: [
                        {props: 'amount1', flag: false},
                        {props: 'amount2', flag: false},
                        {props: 'amount3', flag: false}
                    ]
                },
                { id: '20160503', name: '王小虎4', amount1: '151', amount2: 265, amount3: 153,
                    flag: [
                        {props: 'amount1', flag: false},
                        {props: 'amount2', flag: false},
                        {props: 'amount3', flag: false}
                    ]
                }
            ],
            currentRow: null,
            tableData3: [
                { id: '12987122', name: '王小虎', amount1: '234', amount2: '3.2', amount3: 10 },
                { id: '12987123', name: '王小虎', amount1: '165', amount2: '4.43', amount3: 12 },
                { id: '12987124', name: '王小虎', amount1: '324', amount2: '1.9', amount3: 9 },
                { id: '12987125', name: '王小虎', amount1: '621', amount2: '2.2', amount3: 17 },
                { id: '12987126', name: '王小虎', amount1: '539', amount2: '4.1', amount3: 15 }
            ],
            tableData4: [
                { date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-08', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-06', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 },
                { date: '2016-05-07', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333 }
            ],
        }
    },
    mounted() {
        var self = this;
        this.$nextTick(() => {
            document.body.onclick  = function(event) {
                var dom = event.target.closest("td");
                // if(dom.tagName == "TD" || dom.tagName == "td"){}
                if(!dom || dom.tagName != "TD"){
                    let list = self.tableData;
                    for(var i=0,len=list.length; i<len; i++){
                        list[i].flag.forEach((v, k) => {
                            list[i].flag[k].flag = false;
                        });
                    }
                }
            }
        });
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                        return prev + curr;
                    } else {
                        return prev;
                    }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = '/';
                }
            });
            return sums;
        },
        singleClick(row, column, cell, event){
            let list = this.tableData;
            var key = column.property;
            /* row.flag.forEach((v, i) => {
                if(v.props == key){
                    if((event.target.tagName == "INPUT" || event.target.tagName == "INPUT") && row.flag[i].flag){

                    } else {
                        row.flag[i].flag = !row.flag[i].flag;
                    }
                } else {
                    row.flag[i].flag = false;
                }
            }); */
            for(var i=0,len=list.length; i<len; i++){
                if(list[i].id == row.id){
                    list[i].flag.forEach((v, k) => {
                        if(v.props == key){
                            list[i].flag[k].flag = !list[i].flag[k].flag;
                        } else {
                            list[i].flag[k].flag = false;
                        }
                    });
                } else {
                    list[i].flag.forEach((v, k) => {
                        list[i].flag[k].flag = false;
                    });
                }
            }
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex % 2 === 0) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            }
        },
    },
}
</script>

<style scoped>

</style>
