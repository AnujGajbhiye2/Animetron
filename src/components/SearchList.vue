<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <loading-spinner v-if="isLoading"></loading-spinner>
            </div>
        </div>
        <div class="row" v-if="!isLoading">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(item, index) of animeList" :key="index">
                <anime-display-card  :image="item.img" :title="item.name" :link="item.link"  @selectedAnime="gotoAnimeDetail"></anime-display-card>
            </div>
            <!-- <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item "><a class="page-link " @click="gotoNextorPrevious( -1 )">Previous</a></li>
                    <li class="page-item" :class="page + 1 == currentPage ? 'active': ''" v-for="page in pages" :key="page">
                        <a class="page-link" @click="turnPage( page + 1 )">{{ page + 1 }}</a>
                    </li>
                    <li class="page-item"><a class="page-link" @click="gotoNextorPrevious( 1 )">Next</a></li>
                </ul>
            </nav> -->
        </div>
    </div>
</div>
  
</template>

<script>
    import AnimeDisplayCard from './AnimeDisplayCard.vue';
    import LoadingSpinner from './LoadingSpinner';
    const cheerio = require("cheerio");

    export default {

        components: {
            AnimeDisplayCard,
            LoadingSpinner
        },

        data: () => ({
            searchParam: '',
            isLoading: false,
            animeList: []
        }),

        methods: {

            getSearchedAnime() {
                this.isLoading = true;
                 this.$http.get( this.$url + `/search.html?keyword=${ this.searchParam }` )
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
            },
            
            gotoAnimeDetail( title ) {
                this.$router.push({ path: 'animeDetail', query: { category: title } })
            },

        },
        
        mounted() {
            if ( this.$route.query.keyword ) {
                this.searchParam = this.$route.query.keyword;
                this.getSearchedAnime();
            }
        }
    }
</script>

<style>

</style>