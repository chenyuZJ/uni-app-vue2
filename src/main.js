import Vue from 'vue';
import App from './App.vue';
import api from './service/index';
import request, { checkResponse } from './utils/request';
import { showToast } from './utils/index';
import store from './store/index';
import BasePage from '@/components/BasePage';

Vue.component('BasePage', BasePage);

Vue.config.productionTip = false;

Vue.prototype.$get = request.get;
Vue.prototype.$post = request.post;
Vue.prototype.$checkResponse = checkResponse;

Vue.prototype.$api = api;

Vue.prototype.$showToast = showToast;

App.mpType = 'app';

const app = new Vue({
  ...App,
  store,
});
app.$mount();
