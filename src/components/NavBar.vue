<template>
    <header>
   <nav class="navbar navbar-expand-lg bg-black navbar-dark fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <router-link to="/" style="text-decoration: none;">
            <i class="fa fa-home fa-fw me-3"></i>Home  </router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/admin" style="text-decoration: none;">
            <i class="fa fa-user fa-fw me-3"></i>Admin </router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/products" style="text-decoration: none;">
              <i class="fa fa-list fa-fw me-3"></i>Products</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/contact" style="text-decoration: none;">
              <i class="fa fa-phone fa-fw me-3"></i>Contact Us</router-link>
        </li>

        <li class="dropdown-menu"></li>
      </ul>
    </div>
    <ul class="navbar-nav ms-auto d-flex flex-row">
        <li >
          <router-link class="navicon" to="/checkout"><i class="fa fa-shopping-cart"></i>Cart</router-link>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://i.postimg.cc/T3d6R0wV/png-clipart-frost-pro-for-os-x-icon-set-now-free-contacts-male-profile.png" class="rounded-circle"
                height="22" alt="Avatar" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end da-bg" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link to="/register" class="dropdown-item">Register</router-link>
              </li>
              <li>
                <router-link to="/login" class="dropdown-item" >login</router-link>
                
              </li>
            </ul>
          </li>
        </ul>
  </div>
</nav>
  </header>
  </template>


  <script>
  export default {
    
  }
  </script>
  <style scoped>
  
.nav {
  background-color: black !important;
  position: fixed;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a:hover{
  color:  #a81848;
  text-shadow: #ffffff !important;
}

nav a.router-link-exact-active {
  color: #a81848;
}

.navicon
{
  margin:auto;
  padding-top: 40px;
  text-decoration: none;

}
.da-bg{
  background-color: black !important;
  border: 2px solid #ffffff93;
}

  @media (min-width: 991.98px) {
  main {
  padding-left: 240px;
  }
  }
  
  </style>