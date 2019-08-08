<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    console.log(payload)
    this.width = payload.width;
    this.height = payload.height;
    this.$store.dispatch('calcViewportDimensions_ACTION', payload)
    
    // request most up to date data from db
    this.$store.dispatch('initRequestRemoteData_ACTION');
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
@import './assets/css/main.css';
@import './assets/css/flexbox-util.css';

.app--shell {
  height: 100vh;
}

</style>
