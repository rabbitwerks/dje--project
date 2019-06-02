<template>
  <div 
    v-toggle-nav-float
    class="navbar--float fbx j-ctr a-ctr">
    <NavBarWrapper />
  </div>
</template>

<script>
import NavBarWrapper from './NavBarWrapper.vue';

export default {
  components: {
    NavBarWrapper,
  }
}
</script>

<style>
.navbar--float {
  position: fixed;
  width: 100%;
  min-height: 0rem;
  height: 3rem;
  background-color: var(--navbar-float);
  opacity: 0;
  transition: opacity 0.2s;
}
</style>
