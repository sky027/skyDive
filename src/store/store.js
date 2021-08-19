import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    url: "",
    isLandscape: true,
  },
  mutations: {
    setScreenType(state, flag) {
      state.isLandscape = flag;
    }
  }
});

export default store;
