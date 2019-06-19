<template>
  <div
    @click="$store.dispatch('setActiveController_ACTION', item.controller)"
    class="menu--item fbx a-ctr"
    >{{ item.title }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: {
        title: 'No title found',
        controller: 'No controller found',
      }
    }
  }
}
</script>

<style scoped>
.menu--item {
  height: 5rem;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  background: rgb(10, 15, 26);
  border-bottom: 2px solid rgb(85, 85, 85);
  cursor: pointer;
}
.menu--item:hover {
  background: rgb(26, 58, 95);
}
</style>
