import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import nav_items from './navItems'

Vue.use(Vuex);

const state = {
  crumbs: [],
  nav_items: nav_items,
  boxes: [],
  emptyBox: {
    name: "",
    description: "",
  },
  currentBox: null,
  filteredBoxes: [],
  boxFilters: {},
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
