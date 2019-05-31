<template>
  <div id="app" class="app--shell">
    <VIEW--Landing />
    <VIEW--Mixes />
    <VIEW--Biography />
    <VIEW--Shows />
  </div>
</template>

<script>
import Landing from './views/landing/Landing.vue';
import VIEW__Mixes from './views/mixes/VIEW--Mixes.vue';
import Biography from './views/biography/Biography.vue';
import Shows from './views/shows/Shows';

export default {
  components: {
    'VIEW--Landing': Landing,
    'VIEW--Mixes': VIEW__Mixes,
    'VIEW--Biography': Biography,
    'VIEW--Shows': Shows,
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
