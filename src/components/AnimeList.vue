<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in alphabetList"
          :key="index"
          style="margin: 10px"
        >
          <router-link :to="'anime-list-' + item">
            <strong>
              {{ item }}
            </strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    alphabetList: [],
  }),

  mounted() {
    this.alphabetList = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  },
};
</script>

<style scoped>
</style>