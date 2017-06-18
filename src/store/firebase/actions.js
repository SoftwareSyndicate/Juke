import * as api from './api'
import * as types from './mutation-types'

export const watchStations =  ({ commit }) => {
  api.watch("stations", snap => {
    let stations = snap.val()
    if(stations){
      stations = Object.keys(stations).reduce((_stations, _id)=>{
        return _stations.concat([Object.assign({_id},stations[_id])])
      },[])
      commit(types.RECEIVE_STATIONS, {stations})
    }
  })
}


export const saveStation =  ({commit, state}) => {

}

export const createStation =  ({commit, state}, data) => {
  let ref = api.push('stations')
  data._uid = ref.key
  return api.set(ref, data)
}



export const updateStationFilter = ({ commit }, filter) => {
  commit(types.SET_STATION_FILTER, {filter})
}


export const uploadFile = ({ commit }, {file}) => {
  return api.uploadFile(file).then(results =>{
    return results
  }, error => {
    return error
  })
}
