import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { sync } from 'vuex-router-sync'
sync(store, router)

// TODO -> remove later?
// Immediately send request to get all Boxes
// store.dispatch("watchBoxes");


//Register Components Globally
import UI from 'syndicate-ui/src/main'

Vue.component('s-breadcrumbs', UI.BreadCrumbs)
Vue.component('s-button', UI.Button)
Vue.component('s-input', UI.Input)
Vue.component('s-textarea', UI.TextArea)
Vue.component('s-select', UI.Select)
Vue.component('s-side-nav', UI.SideNav)
Vue.component('s-top-nav', UI.TopNav)
Vue.component('s-tag', UI.Tag)
Vue.component('s-checkbox', UI.Checkbox)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
