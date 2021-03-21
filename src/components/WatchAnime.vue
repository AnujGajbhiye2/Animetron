<template>
  <div>    
    <div class="player-container">
      <video :src="videoSource" width="100%" height="500" controls ref="videoPlayer"></video>
    </div>
    <div class="container">
      <h4>
        {{videoInfo.title}}
      </h4>
      <strong>Category: </strong><span>{{videoInfo.category}}</span>
      <br>
      <strong>Anime Info: </strong><span>{{videoInfo.animeInfo}}</span>
      <hr>
      
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 col-3" v-for="( item, index ) in getReversedEpisodeCategory" :key="index" style="margin: 10px" >
          <button type="button" class="btn btn-secondary" >
             Episode {{item + 1}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const cheerio = require("cheerio");

  export default {

    data: () => ({
      videoSource: '',
      videoInfo: {
        title: '',
        category: '',
        animeInfo: ''
      },
      episodeList: [],
      episodeNumber: 0
    }),

    computed: {
      getReversedEpisodeCategory() {
        return this.episodeList.slice().reverse();
      }
    },

    methods: {
      getVideo() {
        this.$http.get( this.$url + this.$route.query.title )
        .then( (response) => {
          const html = response.data;

        // get additional information of the selected anime
          this.getSelectedVideoInfo( html );

          const $ = cheerio.load( html );

          let ajaxRequest = $('li[class="vidcdn"]').find('a').attr('data-video').replace('load.php','ajax.php') + '&refer=https://gogoanime.ai/';
          this.$http.get('https:' + ajaxRequest )
          .then(( res ) => {
            this.videoSource = res.data.source[0].file;
            this.$refs.videoPlayer.src = this.videoSource;
          });

        });
      },

      getSelectedVideoInfo( html ) {
        const $ = cheerio.load( html );
        this.videoInfo.title = $('div[class="title_name"]').find('h2').text();
        this.videoInfo.category = $('div[class="anime_video_body_cate"]').find('a').first().text();
        this.videoInfo.animeInfo = $('div[class="anime-info"]').find('a').text();
      },

     
    },

    mounted() {
      this.getVideo();
      let query = this.$route.query.title.split('-')
      this.episodeNumber = query[ query.length - 1 ];

      this.episodeList = new Array( parseInt( this.episodeNumber ) );
      this.episodeList = [ ...Array( parseInt( this.episodeNumber ) ).keys() ]
    }

  }
</script>

<style scoped>
  iframe {
    width: 100%;
    height: 500px;
  }

  ul > li {
    display: inline-block;
    /* You can also add some margins here to make it look prettier */
    zoom:1;
    *display:inline;
    /* this fix is needed for IE7- */
  }

  .m-5 {
    margin: 5px !important;
  }

  .mr-10 {
    margin-right: 10px
  }

</style>