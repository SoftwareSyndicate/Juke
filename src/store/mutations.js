import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.UPDATE_BREADCRUMBS] (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  [types.RECEIVE_BOXES] (state, {boxes}) {
    state.boxes = boxes
  },
  [types.ADD_BOX] (state, {box}) {
    state.boxes.push(box)
  },
  [types.SET_BOX_FILTER] (state, {filter}) {
    console.log(filter);
    state.boxFilters = filter
  },
  [types.UPDATE_LEFT_NAV] (state, leftNav) {
    state.leftNav =  Object.assign(state.leftNav, leftNav)
  },
  [types.TOGGLE_RIGHT_NAV] (state) {
    state.rightNav.open =  !state.rightNav.open
  },
}
