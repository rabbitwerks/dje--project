<template>
  <div class="landing--brand flex-8">
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
</style>
