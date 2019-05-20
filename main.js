import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import VueResource from 'vue-resource';



Vue.use(VueResource);
Vue.use($);
Vue.use(VueRouter);
Vue.use(ElementUI);
import course from "./page/course.vue";//课程
import small_program from "./page/course/small_program.vue";//小程序
import faculty from "./page/faculty.vue";//师资
import index from "./index.vue";//首页
import system from "./page/system.vue";//系统
import tools from "./page/tools.vue";//学习工具
import students from "./page/students.vue";//学生专区
import we from "./page/we.vue";//关于我们
import dagang from "./probably/dagang.vue";
import xg from "./probably/xg.vue";
const routes = [
  { path: '/course', component: course,
  children:[{path: 'small_program', component: small_program},
            {path: 'small_program', component: small_program}]  },
  { path: '/faculty', component: faculty },
  { path: '/dagang', component: dagang },
  { path: '/xg', component: xg },
  { path: '/index', component: index },
  { path: '/tools', component: tools },
  { path: '/students', component: students },
  { path: '/we', component: we },
  { path: '/system', component: system },
  { path: '*', redirect: '/index' }
]
const router = new VueRouter({
  linkActiveClass:'mui-active',
  mode:'history',
  routes: routes// （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
