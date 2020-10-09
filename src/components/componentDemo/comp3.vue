<template>
  <el-scrollbar>
    <div class="comp3">
        <el-row :gutter="20" class="toprow">
            <el-col :span="6">
                <div class="block">
                    <span class="demonstration">默认 click 触发子菜单</span>
                    <el-cascader
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange">
                    </el-cascader>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <div class="block">
                        <span class="demonstration">hover 触发子菜单</span>
                        <el-cascader
                            expand-trigger="hover"
                            :options="options"
                            v-model="selectedOptions2"
                            @change="handleChange">
                        </el-cascader>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <span class="demonstration">带搜索的下拉框</span>
                <el-select v-model="value8" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <span class="demonstration">日期选择</span>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <!-- 表格部分 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <div class="grid-content2">
                  <!--:row-style="tablebgc" :cell-style="cellsty" :header-cell-style="headsty"-->
                    <el-table :data="gridList.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
                    class="gridcla" border @selection-change="handleseSelectionChange">
                        <el-table-column type="selection" width="50"> </el-table-column>
                        <el-table-column type="index" :index="getIndex(index)" width="40"> </el-table-column>
                        <el-table-column prop="id" label="编号" v-if="fsnumshow" width="145"> </el-table-column>
                        <el-table-column prop="name" label="姓名" width="80">
                            <template slot-scope="scope">
                                <a href="javascript:void(0);" @click="updateRow(scope.$index, scope.row, 1)">{{scope.row.name}}</a>
                            </template>
                        </el-table-column>
                        <el-table-column prop="sex" label="性别" width="60">
                            <template slot-scope="scope">
                                <span>{{(scope.row.sex==1)?"男":"女"}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="birth" label="出生日期" width="115" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="age" label="年龄" width="65" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="nations" label="民族" width="110" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="previce" label="所在省份" width="120" :show-overflow-tooltip="true"> </el-table-column>
                        <el-table-column prop="phone" label="联系电话" width="135"> </el-table-column>
                        <el-table-column fixed="right" label="操作" width="140">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="updateRow(scope.$index, scope.row, 1)">查看</el-button>
                                <el-button type="text" size="small" @click="updateRow(scope.$index, scope.row, 2)">编辑</el-button>
                                <el-button type="text" size="small" @click="deleteInfo(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination class="pagecla" @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout="total, sizes, prev, pager, next, jumper, slot"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pagesize"
                        :total="gridList.length">
                        <span>第4/4页</span>
                    </el-pagination>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content2">
                    <el-row :span="20" class="spanrow">
                        <el-button type="primary" @click="queryData">查 询</el-button>
                    </el-row>
                    <el-row :span="20" class="spanrow">
                        <el-button type="primary" @click="addRow">新 增</el-button>
                    </el-row>
                    <el-row :span="20" class="spanrow">
                        <el-button type="primary" @click="consoleInfo">打印选中行数据</el-button>
                    </el-row>
                </div>
            </el-col>
        </el-row>
      <!-- 弹窗 -->
        <div class="showInfo">
            <el-dialog :title="titles" :visible.sync="dialogFormVisible" :before-close="handleClose">
                <el-form :model="form" :rules="rules" ref="ruleForm">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="编号：" :label-width="formLabelWidth" prop="id">
                                <el-input :disabled="forEdit" v-model="form.id" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="姓名：" :label-width="formLabelWidth" prop="name">
                                <el-input :disabled="checkInfo" v-model="form.name" auto-complete="off"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="12">
                          <el-form-item label="性别：" :label-width="formLabelWidth" prop="sexradio">
                            <el-radio :disabled="checkInfo" v-model="sexradio" label="1">男</el-radio>
                            <el-radio :disabled="checkInfo" v-model="sexradio" label="2">女</el-radio>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="出生日期：" :label-width="formLabelWidth" prop="birth">
                              <el-date-picker :disabled="checkInfo" type="date" v-model="form.birth" format="yyyy-MM-dd"
                                 value-format="yyyy-MM-dd" placeholder="选择出生日期"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <el-form-item label="年龄：" :label-width="formLabelWidth" prop="age">
                          <el-input :disabled="checkInfo" v-model.number="form.age" auto-complete="off"></el-input>
                        </el-form-item>
                      </el-col>
                        <el-col :span="12">
                            <el-form-item label="民族：" :label-width="formLabelWidth" prop="nations">
                                <el-select :disabled="checkInfo" v-model="form.nations" placeholder="请选择民族">
                                  <el-option v-for="(item, index) in selectNationsList" :key="index" :label="item" :value="item">{{item}}</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <el-form-item label="所在省份：" :label-width="formLabelWidth" prop="previce">
                          <el-select :disabled="checkInfo" v-model="form.previce" placeholder="请选择所在省份">
                            <el-option v-for="(item, index) in selectPriceList" :key="index" :label="item" :value="item">{{item}}</el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="联系电话：" :label-width="formLabelWidth" prop="phone">
                          <el-input :disabled="checkInfo" v-model="form.phone" auto-complete="off"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" v-show="showBtns" @click="saveFormData('ruleForm')">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
  </el-scrollbar>
</template>

<script>
    import { getArrData, getPrevice, getNations } from '../../../static/js/getJsonData.js'
    export default {
        components: {},
        data: function () {
            var checkid = (rule, value, callback) => {
                let reg = /^(?![0-9]+$)(?![A-Z]+$)[0-9A-Z]{8,12}$/;
                if (value === '') {
                  callback(new Error('请输入编号'));
                } else if (!reg.test(value)) {
                  callback(new Error('编号是由8-12位大写字母加数字组成'));
                } else {
                  callback();
                }
            }
            var checkPhone = (rule, value, callback) => {
                let reg = /^(1[3456789])\d{9}$/;
                if (value === '') {
                    callback(new Error('请输入联系电话'));
                } else if (!reg.test(value)) {
                    callback(new Error('联系电话格式不正确'));
                } else {
                    callback();
                }
            };
            return {
                options: [
                  {
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                        value: 'yizhi',
                        label: '一致'
                      }, {
                        value: 'fankui',
                        label: '反馈'
                      }, {
                        value: 'xiaolv',
                        label: '效率'
                      }, {
                        value: 'kekong',
                        label: '可控'
                      }]
                    }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                      }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                      }]
                    }]
                  }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                      }, {
                        value: 'color',
                        label: 'Color 色彩'
                      }, {
                        value: 'typography',
                        label: 'Typography 字体'
                      }, {
                        value: 'icon',
                        label: 'Icon 图标'
                      }, {
                        value: 'button',
                        label: 'Button 按钮'
                      }]
                    }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                      }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                      }, {
                        value: 'input',
                        label: 'Input 输入框'
                      }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                      }, {
                        value: 'select',
                        label: 'Select 选择器'
                      }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                      }, {
                        value: 'switch',
                        label: 'Switch 开关'
                      }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                      }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                      }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                      }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                      }, {
                        value: 'upload',
                        label: 'Upload 上传'
                      }, {
                        value: 'rate',
                        label: 'Rate 评分'
                      }, {
                        value: 'form',
                        label: 'Form 表单'
                      }]
                    }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                        value: 'table',
                        label: 'Table 表格'
                      }, {
                        value: 'tag',
                        label: 'Tag 标签'
                      }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                      }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                      }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                      }, {
                        value: 'badge',
                        label: 'Badge 标记'
                      }]
                    }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                      }, {
                        value: 'loading',
                        label: 'Loading 加载'
                      }, {
                        value: 'message',
                        label: 'Message 消息提示'
                      }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                      }, {
                        value: 'notification',
                        label: 'Notification 通知'
                      }]
                    }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                      }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                      }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                      }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                      }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                      }]
                    }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                      }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                      }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                      }, {
                        value: 'card',
                        label: 'Card 卡片'
                      }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                      }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                      }]
                    }]
                  }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                      value: 'axure',
                      label: 'Axure Components'
                    }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                    }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                    }]
                  }],
                selectedOptions: [],
                selectedOptions2: [],
                value8: '',
                value1: '',
                //--------------
                gridList: [],  //表格数据
                currentPage: 1,
                pagesize: 10,
                loading: true,   //加载
                dialogFormVisible: false,  //弹窗开启关闭
                fsnumshow: true,   //隐藏id
                index: 1,
                indexCode: 0,//记录所选行的索引
                showBtns: true,   //按钮
                multipleSeletion: [],  //保存所选择行的数据
                isdisabled: false,   //是否可编辑
                code: 0,  //记录类型
                checkInfo: false,
                form: {id: "", name: "", sex: "", birth: "", age: "", nations: "", previce: "", phone: ""},
                titles: "查看消息",
                formLabelWidth: '100px',
                sexradio: "1",
                sexdisaled: false,
                forEdit: true,
                selectPriceList: [],
                selectNationsList: [],
                rules: {
                    id: [
                      { required: true, trigger: 'blur', validator:checkid }
                    ],
                    name: [
                      { required: true, message: '请输入姓名', trigger: 'blur' },
                      { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                      { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    birth: [
                      { required: true, message: '请选择出生日期', trigger: 'change' }
                    ],
                    age: [
                      { required: true, message: '请输入年龄', trigger: 'blur' },
                      { type: 'number', message: '年龄必须为数字值'}
                    ],
                    nations: [
                      { required: true, message: '请选择民族', trigger: 'change' }
                    ],
                    previce: [
                      { required: true, message: '请选择所在省份', trigger: 'change' }
                    ],
                    phone: [
                      { required: true, validator:checkPhone, trigger: 'blur' }
                    ]
                }

            }
        },
        mounted(){
            this.$nextTick(() => {
                this.getGridData();
                this.queryData();
                //console.log(this.gridList);
                setTimeout(() => {
                    var list = this.gridList;
                    var dom = document.getElementsByClassName("gridcla")[0];
                    var h1 = dom.querySelector(".el-table__body-wrapper").offsetHeight;
                    var h2 = dom.querySelector(".el-table__header-wrapper").offsetHeight;
                    // document.getElementsByClassName("gridcla")[0].querySelector(".el-table__fixed-right").style.height = (h1 + h2) +'px';
                }, 2000);

            });
        },
        computed:{

        },
        methods: {
            getIndex(index){
                var num = index + (this.currentPage - 1)*(this.pagesize);
                return num;
            },
            handleChange(value) {
                console.log(value);
            },
            queryData(){
                this.gridList = getArrData(100);
                this.selectPriceList = getPrevice("arr");
                this.selectNationsList = getNations("arr");
                //console.log(this.selectNationsList);
            },
            getGridData(){
                var url = "../../../static/json/optionData.json";
                this.$ajax.get(url)
                .then(res=>{
                    //console.log(res.data);
                })
                .catch( function (res){
                    console.log(res);
                });
            },
            handleSizeChange(val) {
                this.pagesize = val;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            },
            tablebgc(row, rowIndex){

            },
            cellsty(row, rowIndex){
                 return "text-align: center;"
            },
            headsty(row, column, rowIndex, columnIndex){
                return "text-align: center;"
            },
            handleseSelectionChange(val){
                this.multipleSeletion = val;
            },
            consoleInfo(){
                if(this.multipleSeletion.length == 0){
                    /* this.$message({
                        type: 'error',
                        showClose: true,
                        message: "请至少选择一条数据"
                    }); */
                    this.$alert('请至少选择一条数据', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: "你点了确定"
                            });
                        }
                    });
                }else{
                    console.log(this.multipleSeletion);
                }
            },
            updateRow(index, row, code){
                var num = index + (this.currentPage - 1)*(this.pagesize);
                this.indexCode = num;
                this.code = code;
                this.dialogFormVisible = true;
                this.form = row;
                this.sexradio = row.sex+"";
                if(code == 1){   //查看
                    console.log(row.name);
                    console.log("数据序号"+num+"---表格序号"+(num+1));
                    this.showBtns = false;
                    this.checkInfo = true;
                    this.forEdit = true;
                } else if(code == 2){   //修改
                    this.checkInfo = false;
                    this.showBtns = true;
                    this.forEdit = true;
                }

            },
            addRow(){
                this.code = 3;
                this.dialogFormVisible = true;
                this.$refs.ruleForm.resetFields();
                this.checkInfo = false;
                this.forEdit = false;
                this.showBtns = true;
                this.clearData();
            },
            deleteInfo(index){
                var num = index + (this.currentPage - 1)*(this.pagesize);
                let _this = this;
                this.$confirm('确认删除本条数据？')
                .then(_ => {
                   _this.gridList.splice(num,1);
                })
                .catch(_ => {});
            },
            /*  弹窗部分 */
            handleClose(){
                var _this = this;
                _this.dialogFormVisible = true;
                /*this.$confirm('确认关闭？')
                .then(_ => {
                    //done();
                    _this.dialogFormVisible = false;
                })
                .catch(_ => {});*/
            },
            saveFormData(formName){
              var _this = this;
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  saveCheckData(_this);
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
              function saveCheckData (_this){
                if(_this.code == 3){
                  var data = _this.form;
                  data.sex = _this.sexradio;
                  for(let k in data){
                    if(!data[k] || data[k]==""){
                      this.$alert('请填写完整的表单再提交', {
                        confirmButtonText: '确定'
                      });
                      return;
                    }
                  }

                  _this.loadingPage();
                  _this.gridList.push(data);
                  _this.clearData();
                  _this.dialogFormVisible = false;
                } else if(_this.code == 2){
                  let index = _this.indexCode;
                  var data = _this.form;
                  data.sex = _this.sexradio;

                  _this.gridList[index]= data;
                  _this.clearData();
                  _this.dialogFormVisible = false;
                }
              }
            },
            clearData(){
               this.form = {id: "", name: "", sex: "", birth: "", age: "", nations: "", previce: "", phone: ""};
            },
            closeDialog(){
              this.dialogFormVisible = false;
            },
            loadingPage(){
              const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
              setTimeout(() => {
                loading.close();
              }, 2000);
            }




        }
    }
</script>

<style scoped lang="scss">
    .toprow{
        margin-top: -10px;
        margin-bottom: 10px;
    }
    .grid-content2{
        height: 490px;
        border: 1px solid #fff;
    }
    .gridcla{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .pagecla{
        width: 100%;
        height: 90%;
        overflow-y: auto;
    }
    .spanrow{
        margin-top: 8px;
        margin-left: 10px;
    }
    .showInfo .el-select{
        width: 100%;
    }
</style>
