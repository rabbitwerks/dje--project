<template>
  <div class="mixes--outer fbx flexdir-col">
    <ul class="mixes--inner flexbox flexdir-col flex-align-center">
      <MixItem
        v-for="mix in allMixes.mixes"
        :key="mix.id"
        :title="mix.title"
        :embeds="mix.embeds"
        :description="mix.description"
      />
    </ul>
    <div class="mixes-info--outer fbx j-ctr a-ctr">
      <div class="mixes-info--inner" v-text="allMixes.info" />
    </div>
  </div>
</template>

<script>
import MixItem from './mix-item/MixItem.vue';

export default {
  components: {
    MixItem,
  },
  computed: {
    viewport() {
      return this.$store.getters.viewportDimensions_GET;
    },
    allMixes() {
      return this.$store.getters.mixesData_GET;
    },
  },
};
</script>

<style scoped>
.mixes--outer {
  margin-bottom: 5rem;
}
.mixes--inner {
  list-style: none;
}
.mixes-info--outer {
  padding-top: 2rem;
}
.mixes-info--inner {
  width: 90%;
  margin: 0 2rem;
  padding-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  border-top: 2px solid var(--border--dark);
}
</style>
