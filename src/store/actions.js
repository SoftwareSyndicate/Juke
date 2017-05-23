import api from './api';
import * as types from './mutation-types';


export const watchBoxes =  ({ commit }) => {
  api.watch("boxes", results => {
    let boxes = [];
    for(let key in results){
      results[key].created_at = new Date (results[key].created_at);
      boxes.push(results[key]);
    }
    commit(types.RECEIVE_BOXES, {boxes});
  });
};


export const saveBox =  ({commit, state}) => {
  // Save product state in case API Request Fails
  const saved_box = state.product
  commit("APPLY_PRODUCT_UPDATES", state.productCopy)
  let product = state.product
  if(!product.id){
    return api.addItem('products', product).then(results => {
      // commit(types.ADD_PRODUCT, results);
    });
  } else {
    return api.updateItem(product.id, 'products', product).then(results =>{
      commit("PRODUCT_UPDATE_SUCCESS")
    }, error => {
      commit("PRODUCT_UPDATE_FAIL", saved_product)
    })
  }
};

export const setFilter = ({ commit }, filter) => {
  commit(types.SET_FILTER, filter);
};


export const uploadFile = ({ commit }, {file}) => {
  return api.uploadFile(file).then(results =>{
    return results;
  }, error => {
    return error;
  })
};
