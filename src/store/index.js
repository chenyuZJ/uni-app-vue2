import Vue from 'vue';
import Vuex from 'vuex';
import { getUserInfo, saveUserInfo } from '@/utils';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: getUserInfo(),
    isShowPop: false, // 是否显示授权弹窗
  },
  mutations: {
    changeUserInfo(state, data) {
      state.userInfo = data;
      saveUserInfo(data);
    },
    changeAuthPopup(state, status) {
      state.isShowPop = status;
    },
  },
  actions: {},
});

export default store;
