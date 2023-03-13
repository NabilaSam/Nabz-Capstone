<template>
  <div>
    <NavBar/>
    <main class="leftdoor maincontain rightdoor">
      <div class="dacontent">
        <router-view/>
      </div>
      
    </main>
    
    <Footer/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/FooterComp.vue';

export default{
  name: "App",
  components:{
    NavBar,
    Footer,
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0.2px 0.2px rgb(255, 0, 0);
  text-align: center;
  color: #660708;
  background-color: black;
  min-height: 100vh;
}

/* inner content */

.maincontain{
  width: 70%;
  justify-content: center;
  margin: auto;
}

/* left door animation */
.leftdoor{
  justify-content: left;
  width: 15%;
}

/* right door animation*/
.rightdoor{
  justify-content: right;
  width: 15%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
