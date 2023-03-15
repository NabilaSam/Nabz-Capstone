<template>
    <div class="spinner">
</div>
</template>

<script>
export default {
    name: 'SpinnerC'
}
</script>

<style scoped>
    .spinner{
      width: 40px;
      height: 40px;
      margin: 100px auto;
      border-radius: 50%;
      border: 5px solid white;
      animation: spinner 0.8s linear infinite;
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
</style>