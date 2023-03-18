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
         <input type="text" name="imgURL" id="imgURL" required placeholder="Product Image URL" v-model="imgURL" class="form-control">
          {{ product?.imgURL }}
         <input type="text" name="prodName" id="prodName" required placeholder="Product Name" v-model="prodName" class="form-control">
          {{ product?.prodName }}
         <input type="text" name="prodDescription" id="prodDescription" required placeholder="Product Description" v-model="prodDescription" class="form-control">
            {{ product?.prodDescription }}
         <input type="text" name="category" id="category" required placeholder="Category" v-model="category" class="form-control">
            {{ product?.category }}
         <input type="number" name="price" id="price" required placeholder="Price" v-model="price" class="form-control">
            {{ product?.price }}
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  class="btn btn-primary" type="submit">Add Product</button>
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
            firstName: "",
            lastName: "",
            cellphoneNumber: null,
            emailAdd: "",
            userPass: "",
            userRole: "",
            userProfile: "https://i.postimg.cc/26Y1n3gw/3445053.png"
        }
    },
    computed : {
        msg() {
            return this.$store.state.message
        }
    },
    methods: {
        register() {
            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                cellphoneNumber: this.cellphoneNumber,
                emailAdd: this.emailAdd,
                userPass: this.userPass,
                userRole: this.userRole,
                userProfile: this.userProfile,
            }
            this.$store.dispatch('register', payload)
        }
    }
}

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