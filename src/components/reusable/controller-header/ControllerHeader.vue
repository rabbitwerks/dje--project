<template>
  <div class="controller--header fbx a-ctr space-between">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.controller--header {
  height: 5rem;
  font-size: 1.5rem;
  padding-left: 2rem;
  background-color: rgb(32, 39, 44);
  border-bottom: 2px solid rgb(255, 255, 255);
}
</style>
