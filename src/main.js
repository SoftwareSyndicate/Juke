import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SyndicateUI from 'syndicate-ui'

import { sync } from 'vuex-router-sync'
sync(store, router)

// TODO -> remove later?
// Immediately send request to get all Boxes
// store.dispatch("watchBoxes");


//Install SyndicateUI
Vue.use(SyndicateUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
