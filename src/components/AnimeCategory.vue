<template>
  <div>
      <div class="container">
          <ul>
              <li v-for="( item, index ) in animeCategory" :key="index">
                  <a href="javascript:void(0)" @click="gotoSelectedAnime( item.link )">{{ item.name }}</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        animeCategory: {
            type: Array,
            required: true
        }
    },

    methods: {
        
        gotoSelectedAnime( link ) {
            this.$router.push({ path: 'animeDetail' , query: { category: link }})
        }
    }
}
</script>

<style scoped>
    ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    }

</style>