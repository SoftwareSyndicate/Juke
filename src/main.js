import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import * as filters from './filters'

// sync the router with the vuex store.
// this registers `store.state.route`
import { sync } from 'vuex-router-sync'
sync(store, router)

// TODO -> remove later
// Immediately send request to get all Hubs
// store.dispatch("watchProducts");


// Register Components Globally
// import UI from 'syndicate-ui/src/main'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
