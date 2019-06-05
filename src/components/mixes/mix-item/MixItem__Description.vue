<template>
  <div class="mix--description" v-text="description" />
</template>

<script>
export default {
  props: ['description']
}
</script>

<style scoped>
.mix--description {
  width: 90%;
  margin-left: 10%;
  padding: 2rem;
  border: 1px solid #746ce6;
  border-radius: 3px;
}
</style>
