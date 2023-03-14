<template>
    <div>
        

        <!-- Products -->

        <div class="card" v-for="item in products" :key="item" style="width: 18rem;">
  <img class="card-img-top" :src="item.imgURL" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{item.prodName}}</h5>
    <p class="card-text">{{ item.prodDescription }}</p>
    <h6>R{{ item.price }}</h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>