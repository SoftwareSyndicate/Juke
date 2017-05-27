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
      id: 1,
      name: "Party Box",
      currentlyPlaying: {
        name: "Bangerang",
        artist: "Skrillex",
        image: "http://orig00.deviantart.net/12fd/f/2015/243/0/c/albumcoverfor_benprunty_fragments_sylviaritter_by_faith303-d97uftr.png"
      },
      public: true,
      created_at: new Date()
    },
    {
      id: 2,
      name: "Chill out",
      currentlyPlaying: {
        name: "Hi Hater",
        artist: "T.I ",
        image: "http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-03.jpg"
      },
      public: false,
      created_at: new Date()
    },
    {
      id: 3,
      name: "Dope beats",
      currentlyPlaying: {
        name: "Work",
        artist: "Gang Star",
        image: "https://edmparty.files.wordpress.com/2013/02/daft-punk-2013-album-art.png"
      },
      public: true,
      created_at: new Date()
    },
    {
      id: 4,
      name: "Party Box",
      currentlyPlaying: {
        name: "Bangerang",
        artist: "Skrillex",
        image: "http://orig00.deviantart.net/12fd/f/2015/243/0/c/albumcoverfor_benprunty_fragments_sylviaritter_by_faith303-d97uftr.png"
      },
      public: true,
      created_at: new Date()
    },
    {
      id: 5,
      name: "Chill out",
      currentlyPlaying: {
        name: "Hi Hater",
        artist: "T.I ",
        image: "http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-03.jpg"
      },
      public: false,
      created_at: new Date()
    },
    {
      id: 6,
      name: "Dope beats",
      currentlyPlaying: {
        name: "Work",
        artist: "Gang Star",
        image: "https://edmparty.files.wordpress.com/2013/02/daft-punk-2013-album-art.png"
      },
      public: true,
      created_at: new Date()
    },
    {
      id: 7,
      name: "Chill out",
      currentlyPlaying: {
        name: "Hi Hater",
        artist: "T.I ",
        image: "http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-03.jpg"
      },
      public: false,
      created_at: new Date()
    },
    {
      id: 8,
      name: "Dope beats",
      currentlyPlaying: {
        name: "Work",
        artist: "Gang Star",
        image: "https://edmparty.files.wordpress.com/2013/02/daft-punk-2013-album-art.png"
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
  leftNav: {
    open: true
  }
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
