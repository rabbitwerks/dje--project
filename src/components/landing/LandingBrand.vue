<template>
  <div class="landing--brand">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.landing--brand {
  color: var(--fontColor_Main);
  font-size: 5rem;
  font-family: 'space_rangerregular', sans-serif;
}
@media screen and (max-width: 480px){
  .landing--brand {
    font-size: 2.35rem;
  }
}
</style>
