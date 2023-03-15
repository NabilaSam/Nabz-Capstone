import { createStore } from 'vuex'
import axios from 'axios';
const renderURL = "https://nintai-no-ei.onrender.com";

export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product:null,
    showSpinner:true,
    addProduct:null,
    addUser:null,
    message:null,
    editproduct:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, value) {
      state.user = value;
    },
    setMessage(state, values){
      state.message = values
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, value) {
      state.product = value;
    },
    setMessage(state, values){
      state.message = values
    },
    setSpinner(state, value){
      state.showSpinner = value
    }
  },
  actions: {
    async fetchUsers(context) {
      let res = await axios.get(`${renderURL}users`);
      let {results,err} = await res.data;
      if(results) {
        context.commit('setUsers',results);
      }else {
        context.commit('setMessage',err);
      }
    },

    async fetchProduct(context) {
      const res =
      await axios.get(`${renderURL}products`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
    },
    async login(context, ){
      const res = await axios.patch(`${renderURL}login`, );
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err);
      }
    },
    async register(context, ) {
      let res = await axios.post(`${renderURL}register`, );
      let {msg,err} = await res.data;
      if(msg) {
        context.commit('setMessage',msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    
    async updateUser(context, ){
      let res = await axios.put(`${renderURL}users/${id}`, );
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      console.log(`Delete: ${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.dispatch('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    },
    async addProduct(context, ) {
      let res = axios.post(`${renderURL}product`, );
      let {msg,err} = await res.data;
      if(msg) {
        context.commit('setMessage',msg)
      }
      if(err) {
        context.commit('setMessage', err)
      }
    },
    
    async fetchProduct(context, id) {
      const res =
      await axios.get(`${renderURL}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProduct', results);
          context.commit('setSpinner', false);
      }
      if(err) {
          context.commit('setMessage', err)
      }
    },
    async updateProduct(context, ) {
      const res =
      await axios.put(`${renderURL}product/${id}`, );
      const {msg, err} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', msg || err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${renderURL}product/${id}`);
      const {err, msg} = await res.data;
      if(msg) {
          context.dispatch('fetchProducts');
      }
      if(err) {
          context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})