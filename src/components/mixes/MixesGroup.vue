<template>
  <ul class="mixes--outer flexbox flexdir-col flex-align-center">
    <MixItem
      v-for="mix in allMixes"
      :key="mix.id"
      :title="mix.title"
      :embed="mix.embed"
      :description="mix.description"
    />

  </ul>
</template>

<script>
import MixItem from './mix-item/MixItem.vue';

export default {
  components: {
    MixItem,
  },
  computed: {
    allMixes() {
      return this.$store.getters.allMixes;
    },
  },
};
</script>

<style scoped>
.mixes--outer {
  list-style: none;
}

</style>
