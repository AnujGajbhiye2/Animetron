<template>
  <div class="container">
        <div class="row">
            <div class="col-md-12">
                <loading-spinner v-if="isLoading"></loading-spinner>
            </div>
        </div>
        <div class="row" v-if="!isLoading">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(item, index) of animeList" :key="index">
                <anime-display-card  :image="item.img" :title="item.name" :link="item.link"  @selectedAnime="gotoAnimeWatcher"></anime-display-card>
            </div>
        </div>
    </div>
</template>

<script>
    import AnimeDisplayCard from './AnimeDisplayCard.vue';
    import LoadingSpinner from './LoadingSpinner.vue';
    const cheerio = require("cheerio");

export default {

    components: {
        AnimeDisplayCard,
        LoadingSpinner
    },

    data: () => ({
            isLoading: false,
            animeList: []
        }),
    
    methods: {

        gotoAnimeWatcher( title ) {
            this.$router.push({ path: 'watch', query: {title: title} })
        }
    },

     mounted() {
            this.isLoading = true;
            this.$http.get( 'https://ajax.gogo-load.com/ajax/page-recent-release.html?page=1&type=1' )
            .then((response) => {
                 //handling the success
                const html = response.data;

                //container for scraped data
                let animeList = [];

                //loading response data into a Cheerio instance
                const $ = cheerio.load(html);

                //let's get our img urls and hyperlinks
                
                $('div[class="img"]').find('a').each((indx, elm) => {
                    let animeContainer = {};

                    animeContainer['link'] = $(elm).attr('href');
                    $( elm ).find('img').each((ind, elm2) => {
                        animeContainer['name'] = $(elm2).attr('alt');
                        animeContainer['img'] = $(elm2).attr('src');
                    });

                    animeList.push( animeContainer );

                });
                this.animeList = animeList;
                this.isLoading = false;

            });
        }

}
</script>

<style>

</style>