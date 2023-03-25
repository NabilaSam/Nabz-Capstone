<template>
    <div id="home" class="min-vh-100" >
        <button class="btn thelog">
            <router-link to="/login" class="logbtn"> 
                <h5>
                    <b>login</b>
                    </h5>
                </router-link>
        </button>

        <br>
        <button class="btn thebrowse">
            <router-link to="/products" class="logbtn">
                Browse Bonsai for sale
            </router-link>
        </button>

       
        
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
#home{
  background: url("https://i.postimg.cc/gJBSHfMF/clay-banks-G7-FS48-Ml-Gfo-unsplash.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.thelog{
    margin-top: 700px;
    border: 2px solid;
    background-color: rgb(238, 202, 155);
}
.thebrowse{
    margin-top: 20px;
    border: 2px solid;
    background-color: rgb(238, 202, 155);
}

.logbtn{
    color: black;
    margin: auto;
    text-decoration: none;
}
.logbtn:hover{
    color:  #a81848 !important;
  text-shadow: #ffffff !important;
    margin: auto;
    text-decoration: none;
}
</style>