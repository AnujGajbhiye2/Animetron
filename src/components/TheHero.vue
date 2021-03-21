<template>
  <div class="jumbotron jumbotron-fluid" :style="{ height: '600px' }">
    <div class="container hero-text">
      <h1 class="display-4">Welcome to Animetron</h1>
      <p class="lead">One stop for free anime without ads.</p>

      <div class="row">
        <div class="col-lg-12">
          <form class="form-inline justify-content-center">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input
            type="text"
            class="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Search your favourite anime"
          />

          <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* The hero image */
.jumbotron-fluid {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: url("https://images.unsplash.com/photo-1597809259188-0e5ffcbb0ba9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

input {
  min-width: 350px;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.ml-20 {
  margin-left: 20px !important;
}
</style>