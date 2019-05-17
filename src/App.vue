<template>
  <div id="app" class="app--shell">
    <landing />
    <mixes />
    <biography />
    <shows />
  </div>
</template>

<script>
import Landing from './views/landing/Landing';
import Mixes from './views/mixes/Mixes';
import Biography from './views/biography/Biography';
import Shows from './views/shows/Shows';

export default {
  components: {
    'landing': Landing,
    'mixes': Mixes,
    'biography': Biography,
    'shows': Shows,
  }
};
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/flexbox-util.css';

.app--shell {
  height: 100vh;
}

</style>
