<template>
  <ul class="mixes--outer flexbox flexdir-col flex-align-center">
    <li
      v-for="mix in allMixes"
      :key="mix.id"
      class="mix--item flex-1">
      <div class="mix--embed" v-html="mix.embed" />
      <div class="mix--description" v-text="mix.description" />
    </li>
  </ul>
</template>

<script>
export default {
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
.mix--item {
  width: 80%;
  margin: 2rem 0;
}
.mix--item:first-of-type {
  margin-top: 0;
}
.mix--embed {
  margin: 2rem 0;
}
</style>
