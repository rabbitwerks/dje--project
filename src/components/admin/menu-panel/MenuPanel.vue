<template>
  <div 
    class="menu--panel"
    :class="viewport.width < 480 ? '' : 'f3'"
  >
    <MenuItem
      v-for="item in controllerMenu" :key="item.title"
      :item="item"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem,
  },
  computed: {
    controllerMenu() {
      return this.$store.getters.adminState_GET.controllerMenu;
    }
  }
}
</script>

<style scoped>
.menu--panel {
  background-color: var(--view-color--two);
}

</style>
