import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.prototype.$url = 'https://www1.gogoanime.ai/';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
