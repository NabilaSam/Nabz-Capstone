<template>
    <SpinnerC v-if="isloading"/>
  <div v-else class="allproducts">
        <!-- Products -->

        <div class="card oval col-sm-3" v-for="item in products" :key="item" style="width: 18rem;">
  <img class="card-img-top round" :src="item.imgURL" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{item.prodName}}</h5>
    <!-- <p class="card-text">{{ item.prodDescription }}</p> -->
    <h6>R{{ item.price }}</h6>
    <a href="#" class="btn btn-primary">View Product</a>
  </div>
</div>
    </div>
</template>

<script>

import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import {SpinnerC} from '../components/SpinnerC.vue'

export default {
    components: {
      SpinnerC
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
    }
}
</script>

<style scoped>
.allproducts{
  margin: 
}

.round{
  border-radius: 40%;
}

.oval{
  border-radius: 40%;
}
</style>