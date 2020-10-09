<template>
  <el-scrollbar>
    <div class="comp5">
        <h2>第7个页签，测试其他</h2>
        <component :is="compName"></component>
        <div class="slt-warp">
            <label>只读select：</label>
            <div class="sltdiv" :class="isSlt?'':'isRead'">
                <el-select v-model="readSlt">
                    <el-option value="1" label="AAA"></el-option>
                    <el-option value="2" label="BBB"></el-option>
                </el-select>
            </div>
        </div>
        <el-button @click="selectChoose()">select选择</el-button>
        <h6>--------------------------------------------------------------------------------------------------------</h6>
        <div style="width: 330px;">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div style="width: 230px;">
            AAA：<el-input type="text" v-model="radVal" readonly></el-input> <br>
            BBB: <el-select v-model="readSlt" readonly>
                <el-option value="1" label="AAA"></el-option>
                <el-option value="2" label="BBB"></el-option>
            </el-select>
        </div>
    </div>
  </el-scrollbar>
</template>

<script>
  import mockjs from "@/components/others/mockjs.vue";
  import scrollbar from "@/components/others/scrollbar.vue";
    export default {
        components: {
          mockjs,
          scrollbar,
        },
        data () {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                    callback(new Error('必须年满18岁'));
                    } else {
                    callback();
                    }
                }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
            return {
              compName: "mockjs",
              ruleForm: {
                pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                radVal: "",
                readSlt: "1",
                isSlt: true,
            };
        },
        mounted() {
          var _this = this;
          this.$nextTick(() => {


          });
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            selectChoose() {
                this.isSlt = !this.isSlt;
            }
        }
    }
</script>

<style scoped>
.slt-warp{
    width: 380px;
    height: 26px;
    line-height: 26px;
    margin: 18px 0;
}
.slt-warp > label{
    display: inline-block;
}
.sltdiv{
    display: inline-block;
    width: 280px;
    position: relative;
}
.sltdiv .el-select{
    width: 100%;
}
.sltdiv.isRead::after{
    content: "";
    display: block;
    position: absolute;
    width: 278px;
    height: 38px;
    border: 1px solid transparent;
    top: 0;
    border-radius: 4px;
}
.sltdiv.isRead:hover:after{
    border-color: #409EFF;
}

</style>
