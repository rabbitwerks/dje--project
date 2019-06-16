<template>
  <div class="socials-wrapper--outer flex-1 flexbox">
    <social-item
      v-for="item in socials"
      :key="item.name"
      :item="item"
      class="flexbox-space-center"
    />
  </div>
</template>

<script>
import SocialItem from './SocialItem.vue';

export default {
  components: {
    'social-item': SocialItem,
  },
  computed: {
    socials() {
      return this.$store.getters.socials_GET;
    }
  }
};
</script>

<style scoped>
.socials-wrapper--outer {
  width: 70%;
}

@media screen and (max-width: 480px){
.socials-wrapper--outer {
  width: 100%;
}
}
</style>
