<template>
  <div id="app">
    <!-- <img alt="Vue logo   <Login />" src="./assets/logo.png">    -->
    <!-- <MainPage/> -->
    <router-view></router-view>
  </div>
</template>

// <script>
// import MainPage from './components/MainPage.vue'
  import Login from  './components/Login.vue'
export default {
  name: 'App',
  // components: {
  //     // MainPage,
  //      Login
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
</style>