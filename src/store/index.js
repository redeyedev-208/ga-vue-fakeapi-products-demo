import { createStore } from 'vuex';
import axios from 'axios';

// This is the central store for the application for the data
export default createStore({
  // The state is the data that is stored in the store single source of truth
  state: {
    products: [],
  },
  // The mutations are the functions that are used to change the state
  // They call the actions with commit
  mutations: {
    loadProducts(state, products) {
      // Here we would update the state
      console.log(products);
      state.products = products;
    },
  },
  // The actions are the functions that are used to change the state
  actions: {
    loadProducts({ commit }) {
      // Here we would call the API to get the products
      // and then we would call the mutation to update the state
      // we are using the action to call the mutation
      axios.get('https://fakestoreapi.com/products').then((response) => {
        commit('loadProducts', response.data);
      });
    },
  },
  // The modules are used to split the store into multiple files
  modules: {},
});
