<template>
  <div class="client--shell">
    <NavBarFloat />
    <VIEW--Landing />
    <VIEW--Mixes />
    <VIEW--Biography />
    <VIEW--Shows />
  </div>
</template>

<script>
import NavBarFloat from '../../components/nav-bar/NavBarFloat.vue';
import VIEW__Landing from './landing/VIEW--Landing.vue';
import VIEW__Mixes from './mixes/VIEW--Mixes.vue';
import VIEW__Biography from './biography/VIEW--Biography.vue';
import VIEW__Shows from './shows/VIEW--Shows.vue';

export default {
  components: {
    NavBarFloat,
    'VIEW--Landing': VIEW__Landing,
    'VIEW--Mixes': VIEW__Mixes,
    'VIEW--Biography': VIEW__Biography,
    'VIEW--Shows': VIEW__Shows
  },
  created() {
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.$store.dispatch('calcViewportDimensions_ACTION', payload)
  },
  mounted() {
    window.addEventListener('resize', () => {
      const payload = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.$store.dispatch('calcViewportDimensions_ACTION', payload)
    })
  }
}
</script>

<style>

</style>
