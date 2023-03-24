<template>
  <div id="siteloader" style="display:none;">
    <div class="loader round-flip spinner">
</div>
</div>
</template>

<script>
export default {
    name: 'SpinnerC'
}
</script>

<style scoped>

#siteloader {
    background: #fff;
    height: 100%;
    left: 0;
    right: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    margin: auto;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 5s ease;
}
    .spinner{
      width: 40px;
      height: 40px;
      margin: 100px auto;
      border-radius: 50%;
      border: 5px solid white;
      animation: spinner linear infinite;
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
</style>