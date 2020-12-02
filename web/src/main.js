import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import Antd from 'ant-design-vue';
Vue.use(Antd)


//过滤器
import * as custom from './utils/filters'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))

import Style from './assets/css/style.css'
Vue.use(Style);
import api from '@/api'
Vue.prototype.$api=api



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
