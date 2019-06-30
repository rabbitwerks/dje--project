<template>
  <div class="mix--title--outer fxbx j-ctr">
    <div class="mix--title--inner">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.mix--title--inner {
  width: 100%;
  color: var(--font-color--main);
  font-size: 2rem;
  padding: 1rem 0;
  text-align: center;
  border-bottom: 2px solid var(--border--dark);
}
@media screen and (max-width: 480px) {
  .mix--title--inner {
    width: var(--global-width);
  }
}
</style>
