<template>
  <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <img :src="category.img" :alt="category.title">
          </div>
          <div class="col-lg-8 col-md-8">
              <h3>{{ category.title }}</h3>
              <strong>Genre: </strong> <p> {{ category.genre }} </p>
              <strong>Summary: </strong> <p> {{category.summary }} </p>
              <episode-list :paginatedEpisodeList="paginatedEpisodeList" @selectedEpisode="watchEpisode"></episode-list>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  const cheerio = require("cheerio");
  import EpisodeList from './EpisodeList';

  export default {

    components: {
      EpisodeList
    },

    data: () => ({
      link: '',
      category: {
        img: '',
        title: '',
        summary: '',
        genre: ''
      },
      episodeList: [],
      paginatedEpisodeList: [],
      start: 0,
      end: 20,
      totalEpisode: 0
    }), 

    methods: {
      getDetails() {
        this.$http.get( this.$url + this.link )
        .then( ( response ) => {

          const html = response.data;

          //loading response data into a Cheerio instance
          const $ = cheerio.load(html);

          let parent = $('div[class="anime_info_body_bg"]');

          this.category['img'] = parent.find('img').attr('src');
          this.category['title'] = parent.find('h1').text();
          this.category['summary'] =  parent.find('p[class="type"]').text().split('Genre')[0];
          this.category['genre'] = parent.find('p[class="type"]').find('a').text().split('Completed')[0];
          let episoldeList = $('div[class="anime_video_body"]').find('ul[id="episode_page"]').find('li').find('a').text().split('-');
          this.totalEpisode = parseInt( episoldeList[ episoldeList.length - 1 ] );

          this.episodeList = new Array( parseInt( this.totalEpisode ) );
          this.episodeList = [ ...Array( parseInt( this.totalEpisode ) ).keys() ]
          this.episodeList = this.episodeList.slice().reverse();

          this.paginatedEpisodeList = this.episodeList.slice( this.start, this.end );

          
        });
      },

      watchEpisode( val ) {
        let animeName = this.link.split('/')[2];
        this.$router.push( { path: 'watch', query: { title: `${animeName}-episode-${val}`} })
      }
    },

    mounted() {
      this.link = this.$route.query.category;
      this.getDetails();
    }

  }
</script>

<style>

</style>