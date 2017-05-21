import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.UPDATE_BREADCRUMBS] (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  [types.RECEIVE_PRODUCTS] (state, {products}) {
    state.products = products
  },
  [types.ADD_PRODUCT] (state, {product}) {
    state.products.push(product)
  },

  ["PRODUCT_UPDATE_SUCCESS"] (state) {
    // console.log("PRODUCT UPDATED");
  },

  ["PRODUCT_UPDATE_FAIL"] (state, saved_product) {
    // console.log("PRODUCT UPDATE FAILED");
    state.product = Object.assign({}, saved_product)
  },

  ["APPLY_PRODUCT_UPDATES"] (state, product) {
    // console.log("updates: ", updates)
    state.product = Object.assign({}, product)
  },

  ["SET_PRODUCT"] (state, val) {
    state.product = val
  },

  ["COPY_PRODUCT"] (state, product) {
    state.productCopy = Object.assign(state.emptyProduct, product)
  },

}
