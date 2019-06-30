<template>
  <div class="header--outer fxbx j-ctr a-ctr">
    <h1 class="header--text" v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.header--outer {
  min-height: 5rem;
  height: 15vh;
  margin-bottom: 2rem;
}
.header--text {
  font-size: 750%;
  font-family: 'space_rangerregular', sans-serif;
  letter-spacing: 5px;
}

@media screen and (max-width: 480px) {
  .header--outer {
    height: 10vh;
    margin-bottom: 1rem;
  }
  .header--text {
    font-size: 350%;
    text-align: center;
  }
}
</style>
