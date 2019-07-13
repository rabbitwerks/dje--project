import Vue from 'vue';

Vue.mixin({
  computed: {
    pageLocation() {
      return this.$router.history.current.name;
    },
  },
});
