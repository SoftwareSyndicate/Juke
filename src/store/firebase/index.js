import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

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
