<template>
  <div class="header--outer fbx j-ctr a-ctr">
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
}
.header--text {
  font-size: 750%;
  font-family: 'space_rangerregular', sans-serif;
  letter-spacing: 5px;
}
</style>
