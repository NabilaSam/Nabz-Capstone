import { createStore } from 'vuex'
import axios from 'axios';
const renderURL = "https://nintai-no-ei.onrender.com/";
// import router from "../router";

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
    showSpinner(state){
      return state.showSpinner
    }
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
    setSpinner(state, value){
      state.showSpinner = value
    }
  },
  actions: {
    // Users
    async fetchUsers(context, payload) {
      let res = await axios.get(`${renderURL}users`, payload);
      let {results,err} = await res.data;
      if(results) {
        context.commit('setUsers',results);
      }else {
        context.commit('Could not retrieve user',err);
      }
    },

    async addUser(context, payload) {
      let res = axios.post(`${renderURL}users`, payload);
      let {result,err} = await res.data;
      if(result) {
        context.commit('set User',result)
      }else {
        context.commit('unable to set User', err)
      }
    },
    
    async updateUser(context , payload){
      let res = await axios.put(`${renderURL}users/:id`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('fetchUsers')
      }else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, id) {
      let res = await axios.put(`${renderURL}users/:id`, );
      console.log(`Delete User: ${id}`);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('fetchUsers');
      }else {
        context.commit('setMessage', err);
      }
    },
    
    async login(context, payload){
      console.log(payload);
      axios.post(`${renderURL}login`, payload)
        .then(response => {
          // Handle success.
          // gets the whole response
          console.log(response);
          // gets the msg
          console.log(response.data.msg);
          // gets the token
          console.log(response.data.jwToken);
          // gets the user data
          console.log(response.data.result[0]);
          })
          .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response.data.err);
          });
      // const res = await axios.post(`${renderURL}login`, payload);
      // const {result, err} = await res.data;
      // if(result) {
          // router.push("/");
      //   context.commit('setUser', result);
      // }else {
      //   context.commit('setMessage', err);
      // }
    },
    
    async register(context, payload) {
      console.log(payload);
      let res = await axios.post(`${renderURL}register`, payload);
      console.log(res);
      let {msg,err} = await res.data;
      if(msg) {
        context.commit('setMessage',msg);
      }else {
        context.commit('setMessage', err);
      }
    },


    // Products
    async fetchProducts(context, payload) {
      const res =
      await axios.get(`${renderURL}products`, payload);
      const {results} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }else {
          context.commit('setSpinner', true)
      }
    },

    // router.get("${renderURL}product/:id")

    // const category =[
    //   "Hinoki",
    // ];

    // Single product
    async fetchProduct(context) {
      const res =
      await axios.get(`${renderURL}product/:id`);
      const {results} = await res.data;
      if(results) {
          context.commit('setProducts', results);
          context.commit('setSpinner', false);
      }else {
          context.commit('setSpinner', true)
      }
    },

      async addProduct(context) {
      let res = axios.post(`${renderURL}product/:id`, );
      let {result,err} = await res.data;
      if(result) {
        context.commit('setMessage',result)
      }else {
        context.commit('setMessage', err)
      }
    },

    async deleteProduct(context) {
      const res = await axios.delete(`${renderURL}product/:id`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setProducts', results);
      } else {
          context.commit('setMessage', err);
      }
    },
    
    async updateProduct(context) {
      const res =
      await axios.put(`${renderURL}product/:id`);
      const {results, err} = await res.data;
      if(results) {
          context.commit('setUpdate', results);
      } else {
          context.commit('setMessage', err);
      }
    }

  },
  modules: {
  }
})