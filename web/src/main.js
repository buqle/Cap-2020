import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import { Dropdown,Menu } from 'ant-design-vue';
Vue.use(Dropdown,Menu);
Vue.config.productionTip = false
import Style from './assets/css/style.css'
Vue.use(Style);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
