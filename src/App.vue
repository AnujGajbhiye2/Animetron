<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
  export default {
    components: {
        TheNavBar
      
    }
  }
</script>

<style>

</style>