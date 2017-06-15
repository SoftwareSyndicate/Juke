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
  stations: [],
  emptyStation: {
    name: "",
    description: "",
  },
  currentStation: {},
  filteredStation: [],
  stationFilters: {
    name: ""
  },
  leftNav: {
    open: false,
    currentForm: null,
    currentAction: null
  },
  rightNav: {
    open: false
  },
  modal: {
    open: true,
    component: null,
    header: null,
    size: "lg"
  }
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
