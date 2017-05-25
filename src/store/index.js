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
  boxes: [
    {
      name: "Party Box",
      currentlyPlaying: {
        name: "Bangerang",
        artist: "Skrillex"
      },
      public: true,
      created_at: new Date()
    },
    {
      name: "Chill out",
      currentlyPlaying: {
        name: "Hi Hater",
        artist: "T fucking I"
      },
      public: false,
      created_at: new Date()
    },
    {
      name: "Dope beats",
      currentlyPlaying: {
        name: "Work",
        artist: "Gang Star"
      },
      public: true,
      created_at: new Date()
    },
  ],
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
