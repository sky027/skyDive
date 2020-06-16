<template>
    <div class="scrollbar">
      <div class="container">
          <ul class="nav" :class="[isSelected]">
            <li class="scroli"><a id="navon0" href="javascript:;" @click="navClick">nav0</a> </li>
            <li class="scroli"><a id="navon1" href="javascript:;" @click="navClick">nav1</a> </li>
            <li class="scroli"><a id="navon2" href="javascript:;" @click="navClick">nav2</a> </li>
            <li class="scroli"><a id="navon3" href="javascript:;" @click="navClick">nav3</a> </li>
            <li class="scroli"><a id="navon4" href="javascript:;" @click="navClick">nav4</a> </li>
            <li class="scroli"><a id="navon5" href="javascript:;" @click="navClick">nav5</a> </li>
            <li class="scroli"><a id="navon6" href="javascript:;" @click="navClick">nav6</a> </li>
          </ul>
          <article>
            <div id="div0">0</div>
            <div id="div1">1</div>
            <div id="div2">2</div>
            <div id="div3">3</div>
            <div id="div4">4</div>
            <div id="div5">5</div>
            <div id="div6">6</div>
          </article>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data () {
            return {
                isSelected: ""
            }
        },
        mounted() {
          var self = this;
          var liIds = [];
          var doc = document;
          var lis = doc.querySelectorAll('.scroli');
          for (var i = 0; i < lis.length; i++) {
            var element = lis[i];
            liIds.push(element.querySelector('a').id);
          }

          var $scrollBox = doc.querySelector('.container');
          var scrollCallback = self.debounce(function () {
            var top = $scrollBox.scrollTop; //设置变量top,表示当前滚动条到顶部的值
            var tt = $scrollBox.clientHeight; //设置变量tt,表示当前滚动窗口高度的值
            var num = 0;
            for (var n = 0; n < 7; n++) {
              //在此处通过判断滚动条到顶部的值和当前窗口高度的关系
              //（当前窗口的n倍 <= top <= 当前窗口的n+1倍）来取得和导航索引值的对应关系
              if (top >= n * tt && top <= (n + 1) * tt) {
                num = n;
              }
              self.isSelected = liIds[num] + '-selected';
            }

          }, 100)
          $scrollBox.addEventListener('scroll', scrollCallback)

        },
        methods: {
          // 防抖
          debounce(func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            var later = function () {
              // 据上一次触发时间间隔
              var last = new Date() - timestamp;
              // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
              if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
              } else {
                timeout = null;
                // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
                if (!immediate) {
                  result = func.apply(context, args);
                  if (!timeout) context = args = null;
                }
              }
            };

            return function () {
              context = this;
              args = arguments;
              timestamp = new Date();
              var callNow = immediate && !timeout;
              // 如果延时不存在，重新设定延时
              if (!timeout) timeout = setTimeout(later, wait);
              if (callNow) {
                result = func.apply(context, args);
                context = args = null;
              }

              return result;
            };
          },
          //节流
          throttle(func, wait, options) {
            // 上下文，函数参数，函数返回值
            var context, args, result;
            // 延时器
            var timeout = null;
            // 上一次执行的func的时间点
            var previous = 0;
            if (!options) options = {};
            // 延时执行函数
            var later = function () {
              // 如果及时调用被关闭，则设置previous为0
              previous = options.leading === false ? 0 : new Date();
              timeout = null;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            };
            /** 以上变量以及函数都是通过闭包的方式访问的 **/
            return function () {
              var now = new Date();
              if (!previous && options.leading === false) previous = now;
              // remaining容易理解，表示还剩多少时间可以再次执行func
              var remaining = wait - (now - previous);
              // 保存上下文
              context = this;
              // 获取函数参数
              args = arguments;
              // 及时模式
              // remaining小于等于0是跳出wait的限制，可以执行了
              // remaining大于wait的情况，只有在客户机修改了系统时间的时候才会出现
              // 这两种情况都可以立刻对func做调用
              if (remaining <= 0 || remaining > wait) {
                // 清除定时器
                if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
              } else if (!timeout && options.trailing !== false) { // 延时模式
                timeout = setTimeout(later, remaining);
              }
              return result;
            };
          },
          navClick(e) {
            var scrollBox1 = document.querySelector('.container');
            scrollBox1.scrollTo(0, [...e.target.id].pop() * 500)
            this.isSelected = e.target.id + '-selected';
          }
        }
    }
</script>

<style scoped>
  *{margin:0}
  .nav li a:hover,.navon0-selected #navon0,
  .navon1-selected #navon1,.navon2-selected #navon2,
  .navon3-selected #navon3,.navon4-selected #navon4,
  .navon5-selected #navon5,.navon6-selected #navon6{border-bottom:2px solid #0052e4}
  *{padding:0}
  li{list-style-type:none}
  a{text-decoration:none;outline:0}
  .container{
    display:flex;overflow:auto;width:600px;height:475px;margin:auto}
  .nav{
    position:fixed;z-index:5;display:inline-flex;flex-wrap:wrap;
    width:100px;height:inherit;background:#fff}
  .nav li{display:flex;align-items:center;justify-content:center;width:100%}
  .nav li a{font-size:18px;display:block;padding:10px 5px;cursor:pointer;color:#3c3c3c}
  #div0{background:#e6e6e6}
  #div1{background:#fd5331}
  #div2{background:#c00ab9}
  #div3{background:#149ce1}
  #div4{background:#f99831}
  #div5{background:#0aff3c}
  #div6{background:#dbe6f7}
  article{display:inline-block;width:80%;margin-left:100px}
  article>div{width:100%;height:500px}
</style>
