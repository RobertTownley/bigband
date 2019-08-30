import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    isAuthenticated: state => {
      return state.authenticationKey ? true : false;
    }
  },
  state: {
    authenticationKey: localStorage.getItem("authenticationKey") || "",
    userData: {}
  },
  mutations: {
    commitUserDataToStore(state, data) {
      state.userData = data;
    },
    setAuthenticationKey(state, key) {
      state.authenticationKey = key;
    }
  },
  actions: {
    authenticate({ commit }, key) {
      localStorage.setItem("authenticationKey", key);
      commit("setAuthenticationKey", key);
    },
    deauthenticate({ commit }) {
      localStorage.removeItem("authenticationKey");
      commit("setAuthenticationKey", "");
      commit("commitUserDataToStore", {});
    },
    saveUserData({ commit }, data) {
      commit("commitUserDataToStore", data);
    }
  }
});
