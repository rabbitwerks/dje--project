<template>
  <div class="socials-wrapper--outer flex-1 flexbox">
    <social-item
      v-for="item in socials"
      :key="item.site"
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
  data() {
    return {
      socials: [
        {
          site: 'facebook',
          url: 'link',
        },
        {
          site: 'instagram',
          url: 'link',
        },
        {
          site: 'soundcloud',
          url: 'link',
        },
        {
          site: 'email',
          url: 'email',
        },
      ],
    };
  },
};
</script>

<style>
.socials-wrapper--outer {
  width: 70%;
}
</style>
