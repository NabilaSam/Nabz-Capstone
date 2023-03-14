<template>
    <header>
      <nav class="navbar navbar-expand-lg back fixed-top">
    <div class="container-fluid">
     
       <!-- Toggle button -->
       <button class="navbar-toggler navbtn" type="button" data-bs-toggle="collapse" 
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
       aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
  
      <div class="collapse navbar-collapse navbarlinks" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" style="color: white; text-decoration: none;">
              |  <i class="fa fa-home fa-fw me-3"></i>Home  |</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/admin" style="color: white; text-decoration: none;">
              |  <i class="fa fa-user fa-fw me-3"></i>Admin  |</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" style="color: white; text-decoration: none;">
              |  <i class="fa fa-list fa-fw me-3"></i>Products  |</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" style="color: white; text-decoration: none;">
              |  <i class="fa fa-phone fa-fw me-3"></i>Contact Us  |</router-link>
            </li>
        </ul>
      </div>
  
     <!-- Logo -->
     
    <router-link to="/" class="navbar-brand" style="margin: auto;" >
        <img alt="logo" src="" style="max-width: 8rem; margin:auto; display: flex; align-content: center;">
    </router-link>
  
  
    <!-- Right links -->
    <ul class="navbar-nav ms-auto d-flex flex-row">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://i.postimg.cc/T3d6R0wV/png-clipart-frost-pro-for-os-x-icon-set-now-free-contacts-male-profile.png" class="rounded-circle"
                height="22" alt="Avatar" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
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
  
  .back{
    background-color: rgb(0, 0, 0, 0.2) ;
    padding: 0.2em;
  }
  .navbtn{
    color: white;
  }
  
  @media (min-width: 991.98px) {
  main {
  padding-left: 240px;
  }
  }
  
  </style>