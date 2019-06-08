<template>
  <div class="mixes--outer fbx flexdir-col">
    <ul class="mixes--inner flexbox flexdir-col flex-align-center">
      <MixItem
        v-for="mix in allMixes"
        :key="mix.id"
        :title="mix.title"
        :embed="mix.embed"
        :description="mix.description"
      />
    </ul>
    <div class="mixes-info--outer fbx j-ctr a-ctr">
      <div class="mixes-info--inner" v-text="mixesInfo" />
    </div>
  </div>
</template>

<script>
import MixItem from './mix-item/MixItem.vue';

export default {
  components: {
    MixItem,
  },
  data() {
    return {
      mixesInfo: 'These are just a few of the best. My entire collection of mixes is available to stream on SoundCloud.'
    }
  },
  computed: {
    allMixes() {
      return this.$store.getters.allMixes;
    },
  },
};
</script>

<style scoped>
.mixes--inner {
  list-style: none;
}
.mixes-info--outer {
  margin-bottom: 5rem;
  padding: 2rem;
}
.mixes-info--inner {
  width: 90%;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  font-size: 1.5rem;
  text-align: center;
  border-top: 2px solid var(--border--dark);
}
</style>
