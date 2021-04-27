<template>
<main>
  <div id="app">
    <px-header/>
    <router-view class="container px-5 sm:px-20 py-20  justify-center" />
  
  <div class="c">
      <!--<Login></Login>-->
  </div>
  </div>
</main>
</template>

<script>
import PxHeader from './components/PxHeader.vue'
//import Login from './components/Login'//

export default {
  name: 'App',
  components: {
    PxHeader,
    //Login//
  }
}
</script>

<style>
#app {
  margin: 0%  ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000305;
  background-color:rgb(243, 249, 250);
}
</style>
