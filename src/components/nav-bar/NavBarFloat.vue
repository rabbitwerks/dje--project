<template>
  <div
    v-toggle-nav-float="{ viewportDimensions }"
    :key="viewportDimensions.height"
    class="navbar--float fbx j-ctr a-ctr">
    <NavBarWrapper />
  </div>
</template>

<script>
import NavBarWrapper from './NavBarWrapper.vue';

export default {
  components: {
    NavBarWrapper,
  },

  computed: {
    viewportDimensions() {
      return this.$store.getters.viewportDimensions_GET;
    }
  },
}
</script>

<style scoped>
.navbar--float {
  position: fixed;
  display: none;
  height: 3rem;
  width: 100vw;
  background-color: var(--navbar-float);
  opacity: 0;
  transition: opacity 0.2s;
}
</style>
