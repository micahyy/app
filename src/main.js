import Vue from 'vue';
import App from './App.vue';
import { Via } from '@the-via/core';

Vue.config.productionTip = false;

// 初始化 VIA
const via = new Via();
Vue.prototype.$via = via;

new Vue({
  render: h => h(App),
}).$mount('#app');