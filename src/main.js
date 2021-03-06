// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

// v-chart
import VCharts from 'v-charts'
Vue.use(VCharts);

// element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 折叠展开动画
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

// 滚动条
import vuescroll from 'vuescroll/dist/vuescroll-native';
Vue.use(vuescroll, {
  ops: {},  // 在这里设置全局默认配置
  name: 'vue-scroll' // 在这里自定义组件名字，默认是vueScroll
});

/*import { HappyScroll } from 'vue-happy-scroll'
Vue.component('happy-scroll', HappyScroll);
import 'vue-happy-scroll/docs/happy-scroll.css'*/

import PerfectScrollbar from 'perfect-scrollbar';
Vue.prototype.PS = PerfectScrollbar;


import ComDailog from "./components/common/cdialog/js/cdialog.js";
Vue.use(ComDailog);


import axios from 'axios';
Vue.prototype.$ajax = axios;

//引入mockjs
import "./assets/mockjs.js";

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

// 全局样式
import '../static/css/style.scss';

Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

export default vm;
