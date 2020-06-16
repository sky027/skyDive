import Mock from 'mockjs';
var Random = Mock.Random;
//延时400s请求到数据
Mock.setup({
    timeout: 400
});
/* //延时200-600毫秒请求到数据
Mock.setup({
    timeout: '200-600'
}); */

let url = "192.168.65.146:8080/api/query_common_credit";
let url2 = "/\/api\/msdk\/proxy\/query_common_credit/"
var common = {parta: "AAAA",partb: "BBBBB",partc: "CCCC",partd: "DDDD",parte: "EEEE",partf: "FFFF"};
var arr = [1,2,3,4,5,6,7,8,9,10];
Mock.mock(url, "get", {
  "state": 1,
  /*"list": {
    "mtime": "@datetime",   //随机生成日期时间
    "score|1-100": 100,   //随机生成1-100的数字
    "rank|1-500": 500,   //随机生成1-500的数字
    "start|1-5": 5,   //随机生成1-5的数字
    "nicName": "@cname" //随机生成中文名字
  } */
  "list|5-10": [
    {
      "id|+1": 0,  //自动+1
      "flag": "@boolean",  //布尔类型
      "mtime": "@datetime",   //随机生成日期时间
      "rank|1-500": 500,   //随机生成1-500的数字
      "start|1-5": 5,   //随机生成1-5的数字
      "nicName": "@cname", //随机生成中文名字
      "part|2-5": common,   //随机取对象下标,组成新的object
      "snum|2-5": ["@natural(1, 100)"],  //生成数组元素个数2-5,1-00之间的整数
      "xiaoshu|1-10.5": 1,  //带5位小数的浮点数
    }
  ]
});
