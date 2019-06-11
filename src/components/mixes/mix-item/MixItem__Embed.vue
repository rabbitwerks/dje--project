<template>
  <div class="mix--embed" v-html="embeds.desktop" />
</template>

<script>
export default {
  props: ['embeds'],
  
}
</script>

<style scoped>
.mix--embed {
  width: 90%;
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #192ea3;
  border-radius: 3px;
}
</style>
