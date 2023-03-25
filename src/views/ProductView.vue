<template>
    <SpinnerC v-if="isloading"/>
    
  <div v-else class="allproducts">

    <!-- search bar -->
    <div class="search-bar drawer top"> </div>
        <!-- Products -->
        <div class="row col-4-md ">
          <div class="card oval" v-for="item in products" :key="item" style="width: 18rem;">
    <img class="card-img-top round" :src="item.imgURL" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{item.prodName}}</h5>
      <!-- <p class="card-text">{{ item.prodDescription }}</p> -->
      <h6>R{{ item.price }}</h6>
      
      <router-link :to="{name: 'product', params: {id: item.prodId}}" >
        <a href="#" class="btn btn-round"><i class="fa fa-pagelines"></i></a>
      </router-link>
      <a href="#" class="btn btn-round"><i class="fa fa-shopping-cart"></i></a>
          </div>
        </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue'

export default {
    components: {
      SpinnerC
    },

    data(){
        return {
            isloading: true
        }
    },
    created(){
        setTimeout(()=> {
            this.isloading = false;
        },4000);
    },

    setup(){
      const store= useStore();
      store.dispatch("fetchProducts");
      const products = computed (()=> store.state.products);
      const spinner = computed (()=> store.state.SpinnerC);
      return{
        products,
        spinner
      };
    },

    methods:{
    async fetchProducts(){
        const res = await axios.get(
            `https://nintai-no-ei.onrender.com/`
        );
        this.items = res.data.results;
        console.log(res);
    },
},
}
</script>

<style scoped>

.btn-round{
  background-color: #a81848;
  border-radius: 50%;
}
.allproducts{
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 50px;
  z-index: 1;
}

.round{
  border-radius: 40%;
}

.oval{
  border-radius: 40%;
  margin: 20px;
  justify-content: center;
}
</style>