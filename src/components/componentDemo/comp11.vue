<template>
  <el-scrollbar>
        <div>
            <el-select v-model="selectValue">
                <el-option value="2" label="合并 2 列"></el-option>
                <el-option value="3" label="合并 3 列"></el-option>
                <el-option value="4" label="合并 4 列"></el-option>
                <el-option value="5" label="合并 5 列"></el-option>
            </el-select>
            <el-button @click="getActiveData()">动态获取数据</el-button>
        </div><br>
        <el-table v-if="changeTable" :data="tableData4" style="width: 100%;" class="colTable" :header-cell-style="setHeadStyle">
            <el-table-column type="index" width="50">
                <template slot-scope="scope"><span>{{getIndex(scope)}}</span></template>
            </el-table-column>
            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) of thead" :key="index">
                <el-table-column v-if="item.childHead && item.childHead.length>0"
                                 v-for="(child, k) of item.childHead" :key="k" :prop="child.prop" :label="child.label"></el-table-column>
            </el-table-column>
        </el-table>
        <h6>- - - - -  - - - - - - - - - - -  - - - - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - - </h6>
        <div class="grid-content2">
            <el-table :data="gridList" ref="multipleTable" border  @selection-change="handleseSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column type="index" :index="getIndexNum(index)" width="60"></el-table-column>
                <el-table-column prop="id" label="编号"> </el-table-column>
                <el-table-column prop="name" label="姓名">
                    <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="updateRow(scope.$index, scope.row, 1)">{{scope.row.name}}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别">
                    <template slot-scope="scope">
                        <span>{{(scope.row.sex==1)?"男":"女"}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="birth" label="出生日期" :show-overflow-tooltip="true"> </el-table-column>
                <el-table-column prop="age" label="年龄" :show-overflow-tooltip="true"> </el-table-column>
                <el-table-column prop="nations" label="民族" :show-overflow-tooltip="true"> </el-table-column>
                <el-table-column prop="previce" label="所在省份" :show-overflow-tooltip="true"> </el-table-column>
                <el-table-column prop="phone" label="联系电话"> </el-table-column>
            </el-table>
            <el-pagination class="pagecla" @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           layout="total, sizes, prev, pager, next, jumper, slot"
                           :current-page="currentPage"
                           :page-sizes="[10, 20, 30, 40]"
                           :page-size="pagesize"
                           :total="totals">
            </el-pagination>
        </div>
  </el-scrollbar>
</template>

<script>
	import { getArrData, getPrevice, getNations } from '../../../static/js/getJsonData.js'
    export default {
        name: "comp11",
        data() {
            return {
                selectValue: '2',
                tableData4: [
                    { date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 28', zip: 200333, others: 0.364},
                    { date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 37', zip: 200333, others: 0.364 },
                    { date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 19', zip: 200333, others: 0.364 },
                    { date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 52', zip: 200333, others: 0.364 },
                    { date: '2016-05-08', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 60', zip: 200333, others: 0.364 },
                    { date: '2016-05-06', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 81', zip: 200333, others: 0.364 },
                    { date: '2016-05-07', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 49', zip: 200333, others: 0.364 }
                ],
                tabHead: [
                    {prop: 'name', label: '姓名'},
                    {prop: '', label: '地址',
                        childHead: [
                            {prop: 'province', label: '省份'},
                            {prop: 'city', label: '市区'},
                            {prop: 'address', label: '地址'},
                            {prop: 'zip', label: '邮编'},
                            {prop: 'others', label: '其他'},
                        ]
                    },
                    {prop: 'date', label: '日期'},
                ],
                thead: [],
                changeTable: false,
                gridList: [],  //表格数据
                currentPage: 1,
                pagesize: 10,
                loading: true,   //加载
				  index: 1,
				  indexCode: 0,//记录所选行的索引
				  multipleSeletion: [],  //保存所选择行的数据
                totals: 0,
            }
        },
        mounted() {
            this.getActiveData();
            this.queryData();
            this.getGridData();
        },
        methods: {
            setHeadStyle(a, b, c, d) {

            },
            getIndex(row) {
                return (row.$index + 1)
            },
            getActiveData() {
                const n = this.selectValue;
                this.changeTable = false;
                const list = [];
                for (let i = 0; i < this.tabHead.length ; i++) {
                    let data = {
                        prop: this.tabHead[i].prop,
                        label: this.tabHead[i].label,
                    };
                    if(this.tabHead[i].childHead && this.tabHead[i].childHead.length>0){
                        data['childHead'] = [];
                        let arr = this.tabHead[i].childHead;
                        for (let i = 0; i < arr.length ; i++) {
                            if(i < parseInt(n)){
                              data.childHead.push(arr[i]);
                            }
                        }
                    }
                    list.push(data);
                }
                this.thead = list;
                this.changeTable = true;
            },
            handleChange(value) {
                console.log(value);
            },
            queryData(){
                // this.gridList = getArrData(50);
            },
			getGridData(){
				var url = "../../../static/json/table-list-data.json";
				this.$ajax.get(url).then(res=>{
					let list = res.data.data;
					this.totals = res.data.total;
					this.gridList = list.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);
					setTimeout(() => {
						let arr = ['2VF380K3GSXJ', '4LHHN2U4ZRBH', 'XT33P7LA83XA', 'RUW180VJ86XI', '14Q48670WO4F', 'UYJW9K2IG59U', 'M59XU5871805', 'O4FPPH1Z12C1'];
						this.toggleSelection(arr);
                    }, 300);
				}).catch( function (res){
                   console.log(res);
				});
			},
			toggleSelection(rows) {
            	let that = this;
				for (let i = 0; i < this.gridList.length; i++) {
					let res = this.gridList[i];
					if (rows.indexOf(res.id) > -1) {
						this.multipleSeletion.push(res);
						this.$refs.multipleTable.toggleRowSelection(res, true);
					}
				}
			},
            handleSizeChange(val) {
                this.pagesize = val;
                this.getGridData();
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getGridData();
                console.log(`当前页: ${val}`);
            },
            handleseSelectionChange(val){
                this.multipleSeletion = val;
            },
			getIndexNum(index){
				var num = index + (this.currentPage - 1)*(this.pagesize);
				return num;
			},
        }
    }
</script>

<style scoped>
  .colTable /deep/ th{text-align: center;}
</style>
