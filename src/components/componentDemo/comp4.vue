<template>
  <el-scrollbar>
    <div class="comp14">
       <h2> 这是第4444个组件</h2>
        <div class="dv1" id="demo">
          <vue-scroll :ops="ops">
            <div class="dv2" id="demo2">
                <h2>滚动区域111111</h2>
                <!-- <div class="dv3">
                  <p>滚动区域111111</p>
                </div> -->
            </div>
          </vue-scroll>
        </div>
    </div>
  </el-scrollbar>
</template>

<script>
    export default {
        data () {
            return {
              showdailog: false,
              dataList: {},
              ops: {
                vuescroll: {
                   mode: 'native',
                    sizeStrategy: 'percent',
                    detectResize: true
                },
                scrollPanel: {
                  initialScrollY: false,  //组件mounted之后自动滚动的距离。 例如 100 or 10%
                  initialScrollX: false,  // (同上)
                  scrollingX: true,  //是否启用 x 或者 y 方向上的滚动
                  scrollingY: true,  // (同上)
                  speed: 300,  //多长时间内完成一次滚动。 数值越小滚动的速度越快
                  easing: undefined,   //滚动动画
                  verticalNativeBarPos: 'right'  //原生滚动条的位置。
                },
                /// 设置轨道信息
                rail: {
                  background: '#01a99e',  //轨道背景色
                  opacity: 0.1,  // 轨道透明度
                  size: '6px',  // 轨道宽度
                  specifyBorderRadius: false,  //轨道圆角 true直角，false圆角
                  gutterOfEnds: null,  //轨道距 x 和 y 轴两端的距离
                  gutterOfSide: '2px',  //轨道距离容器的距离
                  keepShow: false,  // 是否即使 bar 不存在的情况下也保持显示。
                  border: '1px solid #5FC000'
                },
                //设置滚动条信息
                bar: {
                  showDelay: 500,  //在鼠标离开容器后多长时间隐藏滚动条
                  onlyShowBarOnScroll: true,  //是否只在滚动时显示 bar
                  keepShow: false,  //滚动条是否保持显示
                  background: 'red',  //滚动条背景色
                  opacity: 1,  //滚动条透明度
                  hoverStyle: false,
                  specifyBorderRadius: false,  //是否指定滚动条的 borderRadius， 如果不那么和轨道的保持一致
                  minSize: 0.1,  //为 bar 设置一个最小尺寸, 从 0 到 1. 如 0.3, 代表 30%
                  size: '6px',   //滚动条大小
                  disable: false,  //是否禁用滚动条
                }
              }
            }
        },
        mounted() {
          this.$nextTick(() => {


          })
        },
        methods: {
          add(){
            console.log();
          }
        }
    }
</script>

<style scoped lang="scss">
  .dv1{
    width: 500px;
    height: 400px;
    border: 1px solid red;
    padding: 10px;
    overflow: hidden;
    position: relative;
    float: left;
    .dv2{
      width: 1000px;
      height: 900px;
      border:  2px solid green;
      padding: 10px;
      position: relative;
    }
    .dv3{
      width: 300px;
      height: 1300px;
      border: 2px solid blue;
    }
  }

</style>
