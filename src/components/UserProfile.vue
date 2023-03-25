<template>
    <div>
        <section class="vh-100" style="background-color: #f4f5f7;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img :src="$store.state.user.userProfile"
                alt="userPic" class="img-fluid my-5" style="width: 80px;" />
              <h5>{{ $store.state.user.firstName }}</h5>
              <p>Web Designer</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">

                  <div class="col-6 mb-3">
                    <h6>Name</h6>
                    <p>{{$store.state.user.firstName }} {{ $store.state.user.lastName }}</p>
                  </div>

                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{{$store.state.user.email}}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted"><i class="fa fa-phone"></i> 123 456 789</p>
                  </div>
                </div>
                
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';

const el = ref()

onMounted(() => {
  el.value // <div>
})

export default {
  name:'userProfileView',
  setup() {
        const store = useStore()
        onMounted(async () => {
            await store.dispatch('fetchUser')
        })
    },
}
</script>
<style scoped>
    
</style>