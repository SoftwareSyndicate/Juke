import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import nav_items from './navItems'

Vue.use(Vuex);

const state = {
  crumbs: [],
  org: {},
  products: [],
  filteredProducts: [],
  product: {},
  productUpdates: {},
  productCopy: {},
  emptyProduct: {
    name: "",
    description: "",
    product_images: [],
    wholesale_price: "0.0",
    retail_price:  "0.0",
    strain_catagory: "",
    extraction_methods: [],
    shelf_life: "",
    terpene_profiles: [],
    ingredients: [],
    allergens: [],
    nutrition_labels: [],
    selling_points: [],
    tags: [],
    marketing_images: [],
  },
  productFilters: {},
  org: {
    name: 'Flower'
  },
  nav_items: nav_items
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
