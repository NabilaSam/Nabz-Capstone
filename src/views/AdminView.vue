<template>
  <div>
    <SpinnerC v-if="isloading"/>
    <div v-else class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8">
              <h3>Users</h3>
            </div>
            <div class="col.sm-4"> 
              <button> Add New User </button>
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
            </tr>
          </thead>
          <tbody v-for="person in users" :key="person">
            <tr>
              <td>{{ person.userID }}</td>
              <td>{{ person.imgURL }}</td>
              <td>{{ person.firstName }}</td>
              <td>{{ person.lastName }}</td>
              <td>{{ person.cellphoneNumber }}</td>
              <td>{{ person.emailAdd }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import {SpinnerC} from '../components/SpinnerC.vue'

export default {
  setup(){
    const store = useStore();
    store.dispatch('fetchProducts');
    let products = computed(() => store.state.products);

    return{
      products
    }
  },
  components: {
    SpinnerC
  },
  data(){
    return {
      isLoading: true,
    }
  },
  created(){
    setTimeout(()=> {
      this.loading = false;
    },2000);
  }
}
</script>

<style scoped>
  
.main{
  margin-top: 5rem;
}
.games{
  margin: auto;
}
    .displaying{
      margin: auto;
    }
</style>