<template>
  <div 
    :class="viewport.width < 480 ? 'mobile' : 'desktop'"
    class="mix--description" v-text="description"
  />
</template>

<script>
export default {
  props: ['description']
}
</script>

<style scoped>
.mix--description {
  width: var(--global-width);
  padding: 1rem;
  border: 1px solid #746ce6;
  border-radius: 3px;
}
.desktop {
  margin-left: 10%;
}
.mobile {
  margin-left: var(--global-margin-fix);
  padding: 1rem;
  font-size: 1.15rem;
  text-align: center;
}
</style>
