<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in alphabetList"
          :key="index"
          style="margin: 10px"
        >
          <a href="javascript:void(0)" @click="showAnimeStartWithItem( item )"><strong>{{item}}</strong></a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <anime-category :animeCategory="animeCategory"></anime-category>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AnimeCategory from './AnimeCategory.vue';
  const cheerio = require("cheerio");

  export default {
    components: { AnimeCategory },
    data: () => ({
      alphabetList: [],
      animeCategory: []
    }),

    methods: {
      showAnimeStartWithItem( chosenAlphabet ) {
        this.$http.get('https://www1.gogoanime.ai/anime-list-' + chosenAlphabet )
        .then((response) => {
            //handling the success
              const html = response.data;

              // category array
              let categoryArray = []

              //loading response data into a Cheerio instance
              const $ = cheerio.load(html);

              $('div[class="anime_list_body"]').find('ul > li ').each(function (index, element) {
                categoryArray.push(
                  {
                    'link': $(element).find('a').attr('href'),
                    'name': $(element).find('a').text()
                  });
              });
              this.animeCategory = categoryArray;
        })
      }
    },

    mounted() {
      this.alphabetList = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
      this.showAnimeStartWithItem( 'A' );
    },
  };
</script>

<style scoped>
</style>