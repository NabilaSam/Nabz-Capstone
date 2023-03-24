<template >
  <SpinnerC v-if="isloading"/>
  <div v-else class="admin">
    
    <!-- The User Table -->
    <div  class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8">
              <h3>Users</h3>
            </div>
            <div class="col.sm-4"> 
              </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>UserID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone No.</th>
              <th>EmailAdd</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="person in users" :key="person">
              <td>{{ person?.userID }} </td>
              <td><img :src="person?.userProfile" alt="user.img" style="max-height: 60px;"></td>
              <td>{{ person?.firstName }}</td>
              <td>{{ person?.lastName }}</td>
              <td>{{ person?.cellphoneNumber }}</td>
              <td>{{ person?.emailAdd }}</td>
              <td> 
                <button type="button"  
                data-bs-toggle="modal" :data-bs-target="`#exampleModal${person.userID}`">
                <i class="fa fa-pen"></i>
                </button>

                <!-- Update Product Modal -->
                <div class="modal fade" :id="`exampleModal${person.userID}`" 
                tabindex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" 
                        aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <Label>User Image</Label> <br>
                       <input type="text" v-model="person.imgURL">
                      </div>
                      <div class="modal-body">
                        <Label>First Name</Label> <br>
                       <input type="text" v-model="person.firstName">
                      </div>
                      <div class="modal-body">
                        <Label>Last Name</Label> <br>
                       <input type="text" v-model="person.lastName">
                      </div>
                      <div class="modal-body">
                        <Label>cellphone Number</Label> <br>
                       <input type="text" v-model="person.cellphoneNumber">
                      </div>
                      <div class="modal-body">
                        <Label>Email Address</Label> <br>
                       <input type="text" v-model="person.emailAdd">
                      </div>
                      
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="this.$store.dispatch('updateUser', person)" 
                        class="btn btn-light" 
                        data-bs-dismiss="modal">
                        Edit Product</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                type="button"
                @click="this.$store.dispatch('deleteUser', person.userID)">
                
                <i class="fa fa-trash"></i>
                </button>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Products Table -->
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8">
              <h3>Product</h3>
            </div>
            <div class="col.sm-4"> 
              <button type="button" class="btn btn-dark"> <AddProduct/> </button>
            </div>
          </div>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>prodID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Product Description</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="product in products" :key="product">
              <td>{{ product.prodId }} </td>
              <td><img :src="product.imgURL" alt="prod.img" style="max-height: 60px;"></td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>{{ product.category }}</td>
              <td>R{{ product.price }}</td>
              <td> <button type="button" data-bs-toggle="modal" :data-bs-target="`#Modal${product.prodId}`">
                <i class="fa fa-pen"></i>
                </button>

                <!-- Update Product Modal -->
                <div class="modal fade" :id="`Modal${product.prodId}`" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="ModalLabel">Update Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <form action="">
                        <div class="modal-body">
                          <Label>Product Name</Label> <br>
                         <input type="text" v-model="product.prodName" required>
                        </div>
                        <div class="modal-body">
                          <Label>Product Description</Label> <br>
                         <input type="text" v-model="product.prodDescription" required>
                        </div>
                        <div class="modal-body">
                          <Label>Product Price</Label> <br>
                         <input type="text" v-model="product.price" required>
                        </div>
                        <div class="modal-body">
                          <Label>Product Image</Label> <br>
                         <input type="text" v-model="product.imgURL">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button @click="this.$store.dispatch('updateProduct', product)" id="submit" class="btn btn-light" data-bs-dismiss="modal">Edit Product</button>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
                <button
                type="button"
                @click="this.$store.dispatch('deleteProduct', product.prodId)">
                
                <i class="fa fa-trash"></i>
                </button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import UpdateProduct from '../components/UpdateProduct.vue';
import AddProduct from '../components/AddProduct.vue';
// import UpdateUser from '../components/UpdateUser.vue';
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/SpinnerC.vue'

export default {
  
  // update product
  data() {
      return {
        isLoading: true,
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
  setup(){
    
    const store = useStore();
    store.dispatch('fetchProducts');
    store.dispatch('fetchUsers');

    let user = computed(()=> store.state.user);
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);

    const deleteProduct = async (id) => {
      store.dispatch('deletedProduct', id);
      store.dispatch('fetchProducts');
      store.dispatch('fetchUsers');
      location.reload();
    }

    return{
      AddProduct,
      products,
      users,
      user,
      deleteProduct,
    }
  },
  components: {
    SpinnerC,
    // UpdateProduct,
    AddProduct,
    // UpdateUser
  },
  created(){
    setTimeout(()=> {
      this.loading = false;
    },2000);
  }
}
</script>

<style scoped>
  .admin{
    z-index: 2;
  }
.table{
  max-width: 1100px;
  margin: auto;
}
</style>