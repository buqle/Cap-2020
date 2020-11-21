import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Style from './assets/css/style.css'
Vue.use(Style);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
