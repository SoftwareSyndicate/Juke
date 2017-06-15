import Vue from 'vue'
import Vuex from 'vuex'

import soundcloud from './soundcloud'
import firebase from './firebase'
import ui from './ui'

Vue.use(Vuex)

console.log(firebase)

const store = new Vuex.Store({
  modules: {
    ui,
    firebase,
    // soundcloud,
  }
})

export default store
