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
};
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/flexbox-util.css';

.app--shell {
  height: 100vh;
}

</style>
