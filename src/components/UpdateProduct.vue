<template>                              <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+this.product.id">
      Edit
    </button>
    
    
    <div class="modal fade" :id="'exampleModal'+this.product.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title text-dark" id="exampleModalLabel">Edit {{ this.product.prodName }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
                <input type="number" name="id" :id="'productId'+productId" class="form-control" :value="productId" readonly>
              <input type="text" name="name" class="form-control" :placeholder="this.product.prodName" v-model="payloadTemplate.prodName" required>
              <input type="text" name="description" class="form-control" :placeholder="this.product.prodDescription" v-model="payloadTemplate.prodDescription" required>
              <input type="number" name="price" class="form-control" :placeholder="this.product.price" v-model="payloadTemplate.price" required>
              <input type="text" name="quantity" class="form-control" :placeholder="this.product.prodQuantity" v-model="payloadTemplate.prodQuantity" required>
              <input type="text" name="url" class="form-control" :placeholder="this.product.imgURL" v-model="payloadTemplate.imgURL" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="editProduct(productId)">Save changes</button>
          </div>
        </div>
        
      </div>
    </div>
    </template>
    
    <script>
    import { useStore } from 'vuex';
    import {computed} from '@vue/runtime-core'
    import updateProd from '../components/UpdateProduct.vue'
    export default{
        inheritAttrs:false,
        props: ['product', 'prodId'],
        setup(){
        const store = useStore();
        let user = computed(() => store.state.user);
        let payloadTemplate = {
                prodName: '',
                prodDescription: '',
                price: '',
                prodQuantity: '',
                imgURL: '',
                userID: '2'
            }
        
        let payload = async (prodId) => {
            let payload = await {
                prodId: await prodId,
                prodName: payloadTemplate.prodName,
                prodDescription: payloadTemplate.prodDescription,
                price: payloadTemplate.price,
                prodQuantity: payloadTemplate.prodQuantity,
                imgURL: payloadTemplate.imgURL,
                userID: '2'
            }
            return payload
        }
        
    const editProduct = async (productId) => {
        console.log(await payload(productId))
            store.dispatch('updateProduct', await payload(productId))
            store.dispatch('fetchProducts');
            location.reload();
        }
        return{
            payload,
            editProduct,
            user,
            payloadTemplate
        }
        },
    }
    </script>

    <style scoped>

</style>