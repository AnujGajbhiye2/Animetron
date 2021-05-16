<template>
  <div>
    <app-hero></app-hero>
    <div class="container">
    <h5>Recently updated animes</h5>

    </div>
    <latest-anime-list></latest-anime-list>
    <!-- <vaccination></vaccination> -->
  </div>
</template>

<script>
    import Hero from './TheHero';
    import LatestAnimeList from './LatestAnimeList';
    // import Vaccination from './Vaccination';

    export default {
        components: {
            appHero: Hero,
            LatestAnimeList,
            // Vaccination
        }, 

       

    }
</script>

<style>

</style>