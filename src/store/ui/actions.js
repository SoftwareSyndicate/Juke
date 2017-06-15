import * as types from './mutation-types'

// Left Nav
export const updateLeftNav = ({ commit, state }, leftNav) => {
  commit(types.UPDATE_LEFT_NAV, leftNav)
}


// Right Nav
export const toggleRightNav = ({ commit, state }) => {
  commit(types.TOGGLE_RIGHT_NAV)
}
