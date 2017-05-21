import api from './api';
import * as types from './mutation-types';


export const watchProducts =  ({ commit }) => {
  api.watch("products", results => {
    let products = [];
    for(let key in results){
      results[key].created_at = new Date (results[key].created_at);
      products.push(results[key]);
    }
    commit(types.RECEIVE_PRODUCTS, {products});
  });
};


export const saveProduct =  ({commit, state}) => {
  // Save product state in case API Request Fails
  const saved_product = state.product
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
