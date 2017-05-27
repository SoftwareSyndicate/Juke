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
  [types.TOGGLE_LEFT_NAV] (state) {
    state.leftNav.open =  !state.leftNav.open; 
  },
}
