<template>
  <div class="mix--title--outer fbx j-ctr">
    <div class="mix--title--inner" v-text="title"/>
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
  font-size: 1.75rem;
  padding: 1rem 0;
  text-align: center;
  border-bottom: 2px solid var(--border--dark);

}
</style>
