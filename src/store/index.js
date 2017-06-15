import Vue from 'vue'
import Vuex from 'vuex'

import soundcloud from './soundcloud'
import firebase from './firebase'

Vue.use(Vuex)

console.log(firebase)

const store = new Vuex.Store({
  modules: {
    firebase,
    // soundcloud,
  }
})

export default store
