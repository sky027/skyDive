<template>
    <div class="comp2">
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple echeight" id="container1"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light echeight" id="container2"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light echeight" id="container3"></div></el-col>
        </el-row>
        <el-row>
            <div id="container4"></div>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import '../../../node_modules/echarts/map/js/china.js'
    export default {
        data () {
            return {

            }
        },
        mounted(){
            this.$nextTick( () => {
                this.initBar();
                this.initline();
                this.initPie();
                this.initMaps();
            });
        },
        methods: {
            /* Math.floor(Math.random()*(max-min+1)+min); */
            getNum(type){
                var arr = [];
                if(type == 1){
                    for(var i=0;i<4;i++){
                        var num = Math.floor(Math.random()*(650000-25000+1) + 25000);
                        arr.push(num);
                    }
                } else if(type == 2){
                    for(var i=0;i<7;i++){
                        var num = Math.floor(Math.random()*20 + 5);
                        arr.push(num);
                    }
                }
                return arr;
            },
            initBar(){
                var _this = this;
                var dom = document.getElementById("container1");
                var myChart = echarts.init(dom);
                var app = {};
                var option = null;
                app.title = '世界人口总量 - 条形图';

                option = {
                    title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年', '2013年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['美国','印度','中国','世界人口(万)']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: _this.getNum(1)
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: _this.getNum(1)
                        },
                        {
                            name: '2013年',
                            type: 'bar',
                            data: _this.getNum(1)
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            initline(){
                var _this = this;
                var dom = document.getElementById("container2");
                var myChart = echarts.init(dom);
                var app = {};
                var option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            data: _this.getNum(2)
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            data: _this.getNum(2)
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            data: _this.getNum(2)
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            data: _this.getNum(2)
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            data: _this.getNum(2)
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            initPie(){
                var _this = this;
                var dom = document.getElementById("container3");
                var myChart = echarts.init(dom);
                var app = {};
                var option = {
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:Math.floor(Math.random()*41 + 60), name:'直接访问'},
                                {value:Math.floor(Math.random()*41 + 60), name:'邮件营销'},
                                {value:Math.floor(Math.random()*41 + 60), name:'联盟广告'},
                                {value:Math.floor(Math.random()*41 + 60), name:'视频广告'},
                                {value:Math.floor(Math.random()*41 + 60), name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }

            },
            initMaps(){
                var _this = this;
                function randomData() {  
                    return Math.round(Math.random()*500);  
                } 
                var mydata = [  
                    {name: '北京',value: '100' },{name: '天津',value: randomData() },  
                    {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
                    {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
                    {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
                    {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
                    {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
                    {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
                    {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
                    {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
                    {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
                    {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
                    {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
                    {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
                    {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
                    {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
                    {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
                    {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
                ];
                
                var dom = document.getElementById("container4");
                var myChart = echarts.init(dom);
                var app = {};
                var option = {  
                    backgroundColor: '#FFFFFF',  
                    title: {  
                        text: '全国地图大数据',  
                        subtext: '',  
                        x:'center'  
                    },  
                    tooltip : {  
                        trigger: 'item'  
                    },  
                    //左侧小导航图标
                    visualMap: {  
                        show : true,  
                        x: 'left',  
                        y: 'center',  
                        splitList: [   
                            {start: 500, end:600},{start: 400, end: 500},  
                            {start: 300, end: 400},{start: 200, end: 300},  
                            {start: 100, end: 200},{start: 0, end: 100},  
                        ],  
                        color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                    },  
                    
                    //配置属性
                    series: [{  
                        name: '数据',  
                        type: 'map',  
                        mapType: 'china',   
                        roam: true,  
                        label: {  
                            normal: {  
                                show: true  //省份名称  
                            },  
                            emphasis: {  
                                show: false  
                            }  
                        },  
                        data:mydata  //数据
                    }]  
                }; 
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            }

        }
    }
</script>

<style scoped>
    .echeight{
        height: 440px;
    }
    #container4{
        height: 400px;
    }
</style>
