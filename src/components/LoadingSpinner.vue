<template>
  <div id="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>

  </div>
</template>

<script>
export default {

}
</script>
<style scoped>

/**===== loader =====*/
#loader {
  padding-top: 40px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
}

#loader span {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  -webkit-animation: loader 1s infinite ease-in-out;
          animation: loader 1s infinite ease-in-out;
}

#loader span:nth-child(1) {
  left: 0px;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

#loader span:nth-child(2) {
  left: 15px;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

#loader span:nth-child(3) {
  left: 30px;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

#loader span:nth-child(4) {
  left: 45px;
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}

@keyframes loader {
  0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  50% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px);
    -webkit-transform: translateY(10px);
            transform: translateY(10px);
    background: #000000;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
}
@-webkit-keyframes loader {
  0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
  50% {
    -webkit-transform: translateY(10px);
            transform: translateY(10px);
    background: #000000;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    background: rgba(0, 0, 0, 0.25);
  }
}

</style>