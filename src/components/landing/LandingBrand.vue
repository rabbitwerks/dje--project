<template>
  <div class="landing--brand">
    <h1>Joshua Ferris</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.landing--brand {
  color: var(--font-color--main);
  font-size: 5rem;
  font-family: 'space_rangerregular', sans-serif;
}
@media screen and (max-width: 480px){
  .landing--brand {
    font-size: 2.35rem;
  }
}
</style>
