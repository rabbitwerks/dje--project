<template>
  <div id="app" class="app--shell">
    <NavBarFloat />
    <VIEW--Landing />
    <VIEW--Mixes />
    <VIEW--Biography />
    <VIEW--Shows />
  </div>
</template>

<script>
import NavBarFloat from './components/nav-bar/NavBarFloat.vue';

import VIEW__Landing from './views/landing/VIEW--Landing.vue';
import VIEW__Mixes from './views/mixes/VIEW--Mixes.vue';
import VIEW__Biography from './views/biography/VIEW--Biography.vue';
import VIEW__Shows from './views/shows/VIEW--Shows';

export default {
  components: {
    NavBarFloat,
    'VIEW--Landing': VIEW__Landing,
    'VIEW--Mixes': VIEW__Mixes,
    'VIEW--Biography': VIEW__Biography,
    'VIEW--Shows': VIEW__Shows,
  },
  data() {
    return {
      viewport: {
        width: 0,
        height: 0,
      }
    }
  },
  created() {
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.$store.dispatch('calcViewportDimensions_ACTION', payload);
  },
  mounted() {
    window.addEventListener('resize', (e) => {
      const payload = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      console.log('resize: ', payload);
      this.viewport.width = payload.width;
      this.viewport.height = payload.height;
      this.$store.dispatch('calcViewportDimensions_ACTION', payload);
    });
  }, 
};
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/flexbox-util.css';

.app--shell {
  height: 100vh;
}

</style>
