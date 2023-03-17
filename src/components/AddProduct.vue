<template>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#addModal">
  Add Product
</button>

<!-- Modal -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <input type="text" name="imgURL" id="imgURL" required placeholder="Product Image URL" v-model="payloadTemplate.imgURL" class="form-control">
          {{ product.imgURL }}
         <input type="text" name="prodName" id="prodName" required placeholder="Product Name" v-model="payloadTemplate.prodName" class="form-control">
          {{ product.prodName }}
         <input type="text" name="prodDescription" id="prodDescription" required placeholder="Product Description" v-model="payloadTemplate.prodDescription" class="form-control">
            {{ product.prodDescription }}
         <input type="text" name="category" id="category" required placeholder="Category" v-model="payloadTemplate.category" class="form-control">
            {{ product.category }}
         <input type="number" name="price" id="price" required placeholder="Price" v-model="payloadTemplate.price" class="form-control">
            {{ product.price }}
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  class="btn btn-primary" type="submit">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';


export default{
    name: 'AddProduct',
    setup(){
        const store = useStore();
        let payloadTemplate = {
            prodName: '',
            prodDescription: '',
            category: '',
            price: '',
            imgURL: ''
        }
        
    const addProduct = async () => {
      store.dispatch('addProduct', payloadTemplate);
      store.dispatch('fetchProducts');
      location.reload()
    }
    return{
        addProduct,
        payloadTemplate
    }
        
    }

    methods:{
        Addproduct(){
            return this.$store.dispatch("AddProduct",this.product)
        },
    }
}
</script>