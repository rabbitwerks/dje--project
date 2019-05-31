<template>
  <div class="mixes--shell flexbox flexdir-col">
    <h1>Mixes!</h1>
    <MixesGroup />
  </div>
</template>

<script>
import MixesGroup from '../../components/mixes/MixesGroup';

export default {
  components: {
    MixesGroup,
  },
};
</script>

<style scoped>
.mixes--shell {
  background-color: #090909;
}
</style>
