import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import nav_items from './navItems'

const state = {
  crumbs: [],
  nav_items: nav_items,
  leftNav: {
    open: false,
    currentForm: null,
    currentAction: null
  },
  rightNav: {
    open: false
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
