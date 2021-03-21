<template>
  <div>
    <app-hero></app-hero>
    <div class="container">
    <h5>Recently updated animes</h5>

    </div>
    <latest-anime-list></latest-anime-list>
  </div>
</template>

<script>
    import Hero from './TheHero';
    import LatestAnimeList from './LatestAnimeList';

    export default {
        components: {
            appHero: Hero,
            LatestAnimeList
        },

        

       

    }
</script>

<style>

</style>