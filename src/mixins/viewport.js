import Vue from 'vue';

export default Vue.mixin({
  computed: {
    viewport() {
      return this.$store.getters.viewportDimensions_GET;
    },
  },
});
