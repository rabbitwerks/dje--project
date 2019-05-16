<template>
  <div id="app" class="app--shell">
    <landing />
  </div>
</template>

<script>
import Landing from './components/landing/Landing';

export default {
  components: {
    'landing': Landing,
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
