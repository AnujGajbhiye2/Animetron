<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Animetron</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="isShow = !isShow">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" :class="isShow ? 'show': '' " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item">
         <router-link class="nav-link" to="/" exact="">Home</router-link>
     </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/animeList" exact="">Anime List</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/popularAnime" exact="">Popular</router-link>
      </li>
      
    </ul>
   
  </div>
</nav>
  </div>
</template>

<script>
export default {

  data: () => ({
    isShow: false
  })

}
</script>

<style>

</style>