import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: {
      drawerOpen: false
    }
  },
  mutations: {
    closeDrawer(state) {
      state.ui = { ...state.ui, drawerOpen: false };
    },
    openDrawer(state) {
      state.ui = { ...state.ui, drawerOpen: true };
    }
  },
  actions: {
    toggleDrawer({ commit, state }) {
      state.ui.drawerOpen ? commit("closeDrawer") : commit("openDrawer");
    }
  }
});
