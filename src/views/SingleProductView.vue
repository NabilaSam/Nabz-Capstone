<template>
    <div v-if="product" data-aos="zoom-in">
        <h1 class="heading animate__animated animate__zoomInUp">Product</h1>
        <div class="container-fluid">
          <div class="" id="cards"></div>
          <div class="row">
            <div class="col-3 card g-1 my-2 mx-2">
              <div class="card-body">
                <img :src="product?.imgURL" alt="">
                <h5 class="name">{{ product?.prodName }}</h5>
                <p class="description">{{ product?.prodDescription }}</p>
                <p class="price">R{{ product?.price }}</p>
                  <a href="#" class="btn btn-round"><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.id)
  },
}
</script>

<style scoped>
    
</style>