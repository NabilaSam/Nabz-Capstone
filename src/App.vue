<template>
  <div>
    <NavBar/>
    <main>
      <div class="doors">
        <img src="https://i.postimg.cc/mDWhdFFJ/istockphoto-1301187149-612x612.jpg" alt="leftdoor" class="leftdoor">

        <img src="https://i.postimg.cc/mDWhdFFJ/istockphoto-1301187149-612x612.jpg" alt="rightdoor" class="rightdoor">
      
      </div>
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
  color: #f2f2f2;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* inner content */

.doors{
  position: absolute;
  
}

/* left door animation */
.leftdoor{
  justify-content: left;
  height: 100vh;
  width: 100%;
  float: left;
  animation: slidein 2s ease 0s 1 forwards;
}

/* right door animation*/
.rightdoor{
  justify-content: right;
  height: 100vh;
  width: 100%;
  float: right;
  animation: slidein 2s ease 0s 1 forwards;
}

/* Slide in animation */
@keyframes slidein{
  from{
    transform: translateX(600px);
  }
  to{
    transform:translate(0px)
  }
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
