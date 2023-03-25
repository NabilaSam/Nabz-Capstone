import { createStore } from 'vuex'
import axios from 'axios';
const renderURL = "https://nintai-no-ei.onrender.com/";
// import router from "../router";

export default createStore({
  state: {
    users: null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    products: null,
    product: null,
    showSpinner: true,
    addProduct: null,
    addUser: null,
    message: null,
    updateProduct: null,
    jwToken: null
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner
    }
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value;
    },
    setMessage(state, values) {
      state.message = values
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, value) {
      state.product = value;
    },
    setUpdate(state, value) {
      state.product = value;
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setToken(state, value) {
      state.jwToken = value
    }
  },
  actions: {
    // Users
    async fetchUsers(context, payload) {
      let res = await axios.get(`${renderURL}users`, payload);
      let { results, err } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      } else {
        context.commit('Could not retrieve user', err);
      }
    },

    async addUser(context, payload) {
      let res = axios.post(`${renderURL}users`, payload);
      let { result, err } = await res.data;
      if (result) {
        context.commit('set User', result)
      } else {
        context.commit('unable to set User', err)
      }
    },

    async updateUser(context, payload) {
      let res = await axios.put(`${renderURL}users/${payload.userID}`, payload);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit('fetchUsers')
      } else {
        context.commit('setMessage', err);
      }
    },

    async deleteUser(context, id) {
      console.log(id);
      let res = await axios.delete(`${renderURL}user/${id}`);
      console.log(`Delete User: ${id}`);
      let { msg } = await res.data.msg;
      if (msg) {
        context.dispatch('fetchUsers');
      }
      if (msg) {
        context.commit('setMessage', msg);
      }
      context.dispatch('fetchUsers');
    },

    // async login(context, payload) {
    //   try {
    //     const res =await axios.post(`${renderURL}login`, payload)
    //     const { result, jwToken} = res.data
    //     if (result) {
    //       console.log('This may take a while');
    //       context.commit('setUser', result);
    //       context.commit('setToken', jwToken);
    //       localStorage.setItem("admin", result.userRole)
    //       localStorage.setItem("cookie", jwToken)
    //     } else{
    //       console.log('error');
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    async login(context, payload) {
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
          localStorage.setItem("admin", response.data.userID)
          localStorage.setItem("cookie", response.data.jwToken)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response.data.err);
        });
    },

    async register(context, payload) {
      console.log(payload);
      let res = await axios.post(`${renderURL}register`, payload);
      console.log(res);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },


    // Products
    async fetchProducts(context, payload) {
      const res =
        await axios.get(`${renderURL}products`, payload);
      const { results } = await res.data;
      if (results) {
        context.commit('setProducts', results);
        context.commit('setSpinner', false);
      } else {
        context.commit('setSpinner', true)
      }
    },


    // Single product
    async fetchProduct(context, id) {
      const res =
        await axios.get(`${renderURL}product/${id}`);
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results[0]);
        context.commit('setSpinner', false);
      } else {
        context.commit('setSpinner', true)
      }
    },

    async addProduct(context, payload) {
      let res = await axios.post(`${renderURL}product`, payload);
      console.log(res.data);
      let { result, err } = await res.data;
      if (result) {
        context.commit('setMessage', result)
      } else {
        context.commit('setMessage', err)
      }
    },

    async deleteProduct(context, id) {
      console.log(id);
      let res = await axios.delete(`${renderURL}product/${id}`);
      console.log(`Delete product: ${id}`);
      let { msg } = await res.data.msg;
      if (msg) {
        context.dispatch('fetchProducts');
      }
      if (msg) {
        context.commit('setMessage', msg);
      }
      context.dispatch('fetchProducts');
    },



    // Update Product
    async updateProduct(context, payload) {
      let res = await axios.put(`${renderURL}users/${payload.prodId}`, payload);
      let { msg, err } = await res.data;
      if (msg) {
        context.commit('fetchProducts')
      } else {
        context.commit('setMessage', err);
      }
    },

    // async updateProduct(context, id) {
    //   console.log(id);
    //   let res = await axios.put(`${renderURL}product/${id}`);
    //   console.log(`updated product: ${id}`);
    //   let { msg } = await res.data.msg;
    //   if (msg) {
    //     context.dispatch('fetchProducts');
    //   }
    //   if (msg) {
    //     context.commit('setMessage', msg);
    //   }
    //   // router.push({})
    //   context.dispatch('fetchProducts');
    // },

    // async updateProduct(context,product) {
    //   const res = await axios.put(`${renderURL}product/${product.id}`);
    // // console.log(`UpdateProduct: ${id}`);
    // console.log(res.data);
    // const msg = await res.data.msg;
    // const { results, err } = await res.data;
    // if (msg) {
    //   context.dispatch('setUpdate', msg);
    // } 
    //   if(msg) {
    //     context.commit('setMessage', msg)
    //   }
    // }


  },
  modules: {
  }
})