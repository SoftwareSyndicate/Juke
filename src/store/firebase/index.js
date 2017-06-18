import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Object.defineProperty(Date, 'ISOString', {
  enumerable: false,
  value(){
    return new Date().toISOString()
  }
})

const state = {
  stations: [],
  emptyStation: {
    name: "",
    description: "",
  },
  currentStation: {},
  filteredStation: [],
  stationFilters: {
    name: ""
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
