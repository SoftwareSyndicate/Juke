import api from './api'
import * as types from './mutation-types'


export const watchBoxes =  ({ commit }) => {
  api.watch("boxes", snap => {
    let boxes = snap.val()
    boxes = Object.keys(boxes).reduce((_boxes, _id)=>{
      return _boxes.concat([Object.assign({_id},boxes[_id])])
    },[])
    commit(types.RECEIVE_BOXES, {boxes})
  })
}


export const saveBox =  ({commit, state}) => {
  // Save product state in case API Request Fails
  // const saved_box = state.product
  // commit("APPLY_PRODUCT_UPDATES", state.productCopy)
  // let product = state.product
  // if(!product.id){
  //   return api.addItem('products', product).then(results => {
  //     // commit(types.ADD_PRODUCT, results)
  //   })
  // } else {
  //   return api.updateItem(product.id, 'products', product).then(results =>{
  //     commit("PRODUCT_UPDATE_SUCCESS")
  //   }, error => {
  //     commit("PRODUCT_UPDATE_FAIL", saved_product)
  //   })
  // }
}

export const updateBoxFilter = ({ commit }, filter) => {
  commit(types.SET_BOX_FILTER, {filter})
}


export const uploadFile = ({ commit }, {file}) => {
  return api.uploadFile(file).then(results =>{
    return results
  }, error => {
    return error
  })
}

// Left Nav
export const updateLeftNav = ({ commit, state }, leftNav) => {
  commit(types.UPDATE_LEFT_NAV, leftNav)
}


// Right Nav
export const toggleRightNav = ({ commit, state }) => {
  commit(types.TOGGLE_RIGHT_NAV)
}
