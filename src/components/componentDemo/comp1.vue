<template>
    <div class="comp1">
        <div>
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple">条件一</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">条件二</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">条件三</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">条件四</div></el-col>
            </el-row>
        </div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border  style="width: 100%">
                    <el-table-column prop="date" label="日期" width="150"></el-table-column>
                    <el-table-column prop="name" label="姓名"  width="120"> </el-table-column>
                    <el-table-column prop="province" label="省份" width="120"> </el-table-column>
                    <el-table-column prop="city" label="市区" width="120"> </el-table-column>
                    <el-table-column prop="address" label="地址" width="300"> </el-table-column>
                    <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                    <el-pagination background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20, 40]"
                        :page-size="pagesize"
                        layout="prev, pager, next"
                        :total="tableData.length">
                    </el-pagination>
                </el-table>
            </el-col>
            <el-col :span="12">
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="index" width="50"> </el-table-column>
                    <el-table-column type="selection" width="55"> </el-table-column>
                    <el-table-column label="日期" width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
                    <el-table-column prop="address" label="地址" show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button @click="toggleSelection()">取消选择</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data () {
            return {
                currentPage:1,
                pagesize:10,
                tableData: [
                  {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    },{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    },{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                    }
                ],
                multipleSelection: []
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(){
                this.pagesize = size;
                console.log(this.pagesize)
            },
            handleCurrentChange(){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页

            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
