<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary w-100"
    data-bs-toggle="modal"
    :data-bs-target="`#addModal${product.prodId}`"
  >
    Edit Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="`addModal${product.prodId}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-dark" id="exampleModalLabel">
            Edit Product
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div action="updateProduct" class="modal-body" @submit.prevent="updateProduct(product.prodId)">

          <!-- Prevent will stop the page from reloading as you enter the data -->

            <input
            type="text"
              name="imgURL"
              id="imgURL"
              required
              placeholder={{ product.imgURL }}
              v-model="imgURL"
              class="input"
            />
            Product Name
            <input
              type="text"
              name="prodName"
              id="prodName"
              required
              placeholder={{product.prodName}}
              v-model="prodName"
              class="input"
              />
              <input
              type="text"
              name="prodDescription"
              id="prodDescription"
              required
              placeholder={{product.description}}
              v-model="prodDescription"
              class="input"
            />
            <input
              type="text"
              name="category"
              id="category"
              required
              placeholder={{product.price}}
              v-model="category"
              class="input"
              />
              Price
              <input
              type="number"
              name="price"
              id="price"
              required
              placeholder={{product.price}}
              v-model="price"
              class="input"
              />
              
              <button class="btn btn-primary" type="submit">Update Product</button>
            </div>
            <div class="modal-footer">
              <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              >
              Close
            </button>
          </div>
        
        </div>
      </div>
    </div>
</template>

<script>
// import { useStore } from 'vuex';
// import computed from '@vue/runtime-core';

export default {
  data() {
    return {
      prodId: null,
      imgURL: "",
      prodName: "",
      prodDescription: "",
      category: "",
      price: ""
    };
  },

  methods: {
    updateProduct(id) {
      const payload = {
        prodId: id,
        imgURL: this.imgURL,
        prodName: this.prodName,
        prodDescription: this.prodDescription,
        category: this.category,
        price: this.price
      };
      this.$store.dispatch("updateProduct", payload);
    },
  },
};
</script>






<!-- <template>                              

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
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="updateProd(product.prodId)">Save changes</button>
          </div>
        </div>
        
      </div>
    </div>
    </template>
    
    <script>
    import { useStore } from 'vuex';
    import {computed} from '@vue/runtime-core';
    import updateProd from '../components/UpdateProduct.vue';

    export default{
        inheritAttrs:false,
        props: ['product', 'prodId'],
        setup(){
        const store = useStore();
        let user = computed(() => store.state.user);
        let payloadnew = {
                prodName: '',
                prodDescription: '',
                price: '',
                prodQuantity: '',
                imgURL: ''
            }
        
        let payload = async (prodId) => {
            let payload = await {
                prodId: await prodId,
                imgURL: payloadnew.imgURL,
                prodName: payloadnew.prodName,
                prodDescription: payloadnew.prodDescription,
                category: payloadnew.category,
                price: payloadnew.price,
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
            updateProd
        }
        },
    }
    </script>

    <style scoped>

</style> -->