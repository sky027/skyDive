<template>
    <div class="comp8">
        <el-cascader :props="props"></el-cascader>
        <br /><br /><br />
        <el-cascader
            v-model="value"
            :options="provinceAndCity"
            @change="handleChange">
        </el-cascader>
    </div>
</template>

<script>
    let id = 0;
    export default {
        data () {
            return {
                props: {
                    lazy: true,
                    lazyLoad (node, resolve) {
                        const { level } = node;
                        setTimeout(() => {
                        const nodes = Array.from({ length: level + 1 })
                            .map(item => ({
                            value: ++id,
                            label: `选项${id}`,
                            leaf: level >= 2
                            }));
                        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                        resolve(nodes);
                        }, 1000);
                    }
                },
                value: [],
                options: [
                    {value: 'zhinan',label: '指南',
                        children: [
                            { value: 'shejiyuanze', label: '设计原则',
                                children: [
                                    { value: 'yizhi', label: '一致' }, 
                                    { value: 'fankui', label: '反馈' }, 
                                    { value: 'xiaolv', label: '效率' }, 
                                    { value: 'kekong', label: '可控' }
                                ]
                            }, 
                            { value: 'daohang', label: '导航',
                                children: [
                                    { value: 'cexiangdaohang', label: '侧向导航' }, 
                                    { value: 'dingbudaohang', label: '顶部导航' }
                                ]
                            }
                        ]
                    }, 
                    {value: 'zujian', label: '组件',
                        children: [
                            { value: 'basic', label: 'Basic',
                                children: [
                                    { value: 'layout', label: 'Layout 布局' }, 
                                    { value: 'color', label: 'Color 色彩' }, 
                                    { value: 'typography', label: 'Typography 字体' }, 
                                    { value: 'icon', label: 'Icon 图标' }, 
                                    { value: 'button', label: 'Button 按钮' }
                                ]
                            }, 
                            { value: 'form', label: 'Form',
                                children: [
                                    { value: 'radio', label: 'Radio 单选框' }, 
                                    { value: 'checkbox', label: 'Checkbox 多选框' }, 
                                    { value: 'input', label: 'Input 输入框' }, 
                                    { value: 'input-number', label: 'InputNumber 计数器' }, 
                                    { value: 'select', label: 'Select 选择器' }, 
                                    { value: 'cascader', label: 'Cascader 级联选择器' }, 
                                    { value: 'switch', label: 'Switch 开关' }, 
                                    { value: 'slider', label: 'Slider 滑块' }, 
                                    { value: 'time-picker', label: 'TimePicker 时间选择器'}, 
                                    { value: 'date-picker', label: 'DatePicker 日期选择器' }, 
                                    { value: 'datetime-picker', label: 'DateTimePicker 日期时间选择器' }, 
                                    { value: 'upload', label: 'Upload 上传' }, 
                                    { value: 'rate', label: 'Rate 评分' }, 
                                    { value: 'form', label: 'Form 表单' }
                                ] 
                            }, 
                            { value: 'data', label: 'Data',
                                children: [
                                    { value: 'table', label: 'Table 表格' }, 
                                    { value: 'tag', label: 'Tag 标签' }, 
                                    { value: 'progress', label: 'Progress 进度条' }, 
                                    { value: 'tree', label: 'Tree 树形控件' }, 
                                    { value: 'pagination', label: 'Pagination 分页' }, 
                                    { value: 'badge', label: 'Badge 标记' }
                                ]
                            }, 
                            { value: 'notice', label: 'Notice',
                                children: [
                                    { value: 'alert', label: 'Alert 警告' }, 
                                    { value: 'loading', label: 'Loading 加载' }, 
                                    { value: 'message', label: 'Message 消息提示' }, 
                                    { value: 'message-box', label: 'MessageBox 弹框' }, 
                                    { value: 'notification', label: 'Notification 通知' }
                                ]
                            }, 
                            { value: 'navigation', label: 'Navigation',
                                children: [
                                    { value: 'menu', label: 'NavMenu 导航菜单' }, 
                                    { value: 'tabs', label: 'Tabs 标签页' }, 
                                    { value: 'breadcrumb', label: 'Breadcrumb 面包屑' }, 
                                    { value: 'dropdown', label: 'Dropdown 下拉菜单' }, 
                                    { value: 'steps', label: 'Steps 步骤条' }
                                ]
                            }, 
                            { value: 'others', label: 'Others',
                                children: [
                                    { value: 'dialog', label: 'Dialog 对话框' }, 
                                    { value: 'tooltip', label: 'Tooltip 文字提示' }, 
                                    { value: 'popover', label: 'Popover 弹出框' }, 
                                    { value: 'card', label: 'Card 卡片' }, 
                                    { value: 'carousel', label: 'Carousel 走马灯' }, 
                                    { value: 'collapse', label: 'Collapse 折叠面板' }
                                ]
                            }
                        ]
                    }, 
                    {  value: 'ziyuan', label: '资源',
                        children: [
                            { value: 'axure', label: 'Axure Components' }, 
                            { value: 'sketch', label: 'Sketch Templates' },
                            { value: 'jiaohu', label: '组件交互文档'}
                        ]
                    }
                ],
                provinceAndCity: [],
                allData: [],
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.value = ["130000", "130300", "130303"];
            });
            this.getJsonData();
        },
        methods: {
            handleChange(value) {
                var list = this.allData;
                var result = [];
                for(var k=0; k<value.length; k++){
                    for(var i=0,len=list.length; i<len; i++){
                        if(value[k] == list[i].value){
                            var data = {
                                value: value[k],
                                label: list[i].label
                            };
                            result.push(data);
                            continue;
                        }
                    }
                }
                console.log(result);
            },
            getJsonData(){
                var url = "../../../static/json/shengshiqu.json";
                var self = this;
                this.$ajax.get(url).then(res => {
                    var item1 = res.data;
                    var result = [];
                    var allResult = [];
                    for(var i in item1){
                        var d1 = {
                            value: i +"",
                            label: item1[i].name,
                            children: []
                        };
                        allResult.push(d1);
                        if(item1[i].child){
                            var item2 = item1[i].child;
                            for(var k in item2){
                                var d2 = {
                                    value: k +"",
                                    label: item2[k].name,
                                    children: []
                                };
                                allResult.push(d2);
                                d1.children.push(d2);
                                if(item2[k].child){
                                    var item3 = item2[k].child;
                                    for(var j in item3){
                                        var d3 = {
                                            value: j +"",
                                            label: item3[j]
                                        };
                                        d2.children.push(d3);
                                        allResult.push(d3);
                                    }
                                }
                            }
                        }
                        result.push(d1);
                    }
                    // console.log(allResult);
                    self.allData = allResult;
                    // console.log(result);
                    self.provinceAndCity = result;
                    
                }).catch(res => {
                    debugger;
                });
            }
        }
    }
</script>

<style scoped>
    
</style>
