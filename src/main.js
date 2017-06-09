import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SC from 'soundcloud'

import SyndicateUI from 'syndicate-ui'

import { sync } from 'vuex-router-sync'
sync(store, router)

// TODO -> remove later?
// Immediately send request to get all Boxes
// store.dispatch("watchBoxes");


//Install SyndicateUI
Vue.use(SyndicateUI)

// initialize soundcloud sdk
SC.initialize({
  client_id: '1b2adbaac77a0cf4178cd3598b9859a6',
  // redirect_uri: 'http://example.com/callback'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
