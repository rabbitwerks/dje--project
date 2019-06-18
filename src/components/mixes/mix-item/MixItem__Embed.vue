<template>
  <div
    class="mix--embed" 
    v-html="viewport.width < 480 ? embeds.mobile : embeds.desktop"
  />
</template>

<script>
export default {
  props: ['embeds'],
}
</script>

<style scoped>
.mix--embed {
  width: var(--global-width);
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #1b35c5;
  border-radius: 3px;
}
@media screen and (max-width: 480px) {
  .mix--embed {
    padding: 1rem;
    margin-left: var(--global-margin-fix);
  }
}
</style>
