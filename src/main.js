import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import ant from 'ant-design-vue'
import '@/assets/style/reset.css'
import echarts from 'echarts'
import Moment from 'moment'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$moment = Moment;
Moment.locale('zh-cn');





Vue.use(ant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



Array.prototype.indexOf = function(val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  let index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
