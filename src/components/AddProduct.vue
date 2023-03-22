<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary w-100"
    data-bs-toggle="modal"
    data-bs-target="#addModal"
  >
    Add Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-dark" id="exampleModalLabel">
            Add Product
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" @submit.prevent="addProduct">
          <!-- Prevent will stop the page from reloading as you enter the data -->
            <input
              type="text"
              name="imgURL"
              id="imgURL"
              required
              placeholder="Product Image URL"
              v-model="imgURL"
              class="input"
            />

            <input
              type="text"
              name="prodName"
              id="prodName"
              required
              placeholder="Product Name"
              v-model="prodName"
              class="input"
            />

            <input
              type="text"
              name="prodDescription"
              id="prodDescription"
              required
              placeholder="Product Description"
              v-model="prodDescription"
              class="input"
            />

            <input
              type="text"
              name="category"
              id="category"
              required
              placeholder="Category"
              v-model="category"
              class="input"
            />

            <input
              type="number"
              name="price"
              id="price"
              required
              placeholder="Price"
              v-model="price"
              class="input"
            />

            <button class="btn btn-primary" type="submit" @click="($event) => addProduct()">Add Product</button>
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
      imgURL: "",
      prodName: "",
      prodDescription: "",
      category: "",
      price: "",
    };
  },
  // computed: {
  //   msg() {
  //     return this.$store.state.message;
  //   },
  // },
  methods: {
    addProduct() {
      const payload = {
        imgURL: this.imgURL,
        prodName: this.prodName,
        prodDescription: this.prodDescription,
        category: this.category,
        price: this.price,
      };
      this.$store.dispatch("addProduct", payload);
    },
  },
};

// export default{
//     name: 'AddProduct',
//     setup(){
//       // let user = computed(()=> store.state.user);
//         const store = useStore();
//         let payloadTemplate = {
//             prodName: '',
//             prodDescription: '',
//             category: '',
//             price: '',
//             imgURL: ''
//         }

//     const addProduct = async () => {
//       store.dispatch('addProduct', payloadTemplate);
//       store.dispatch('fetchProducts');
//       location.reload()
//     }
//     return{
//         addProduct,
//         payloadTemplate
//     }
//     },

//     methods:{
//         Addproduct(){
//             return this.$store.dispatch("AddProduct",this.product)
//         },
//     }
// }
</script>
