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
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  const cheerio = require("cheerio");

  export default {

    data: () => ({
      link: '',
      category: {
        img: '',
        title: '',
        summary: '',
        genre: ''
      }
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
          console.log(this.category);
          
        });
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