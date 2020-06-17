<template>
  <div id="app">
    <!-- <img alt="Vue logo   <Login />" src="./assets/logo.png">    -->
    <!-- <MainPage/> -->
    <Login />
  </div>
</template>

// <script>
// import MainPage from './views/MainPage.vue'
  import Login from  './views/Login.vue'
export default {
  name: 'App',
  components: {
      // MainPage,
       Login
  }
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