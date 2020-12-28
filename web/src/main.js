import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import Antd from 'ant-design-vue';
Vue.use(Antd)
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({

  locale: 'en', // 定义默认语言为中文 

  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json'),
    'my': require('@/assets/languages/other.json')

  }

});




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
  i18n,
  render: h => h(App)
}).$mount('#app')
