<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <a href="#">Previous</a>
        </div>
        <div class="col-lg-6" >
          <a href="#" style="float: right">Next</a>
        </div>
      </div>

      
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 col-3" v-for="( item, index ) in paginatedEpisodeList" :key="index" style="margin: 0 30px 30px 30px " >
          <button type="button" class="btn btn-secondary mr-10" @click="gotoEpisode( item + 1 )" >
             Episode {{item + 1}}
          </button>
        </div>
        
        
      </div>
  </div>
</template>

<script>
export default {

    props: {
        paginatedEpisodeList: {
            type: Array,
            required: true
        }
    },

    methods: {
        gotoEpisode( episodeNumber ) {
            this.$emit('selectedEpisode', episodeNumber );
        }
    }

}
</script>

<style scoped>
    
  .m-5 {
    margin: 5px !important;
  }

  .mr-10 {
    margin-right: 10px
  }

</style>