<template>
  <div class="socials-wrapper--outer">
    <social-item 
      v-for="item in socials"
      :key="item"
      :item="item"
    />
  </div>
</template>

<script>
import SocialItem from './SocialItem';

export default {
  data() {
    return {
      socials: [
        {
          site: 'facebook',
          url: 'link'
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
      ]
    }
  },
  components: {
    'social-item': SocialItem,
  },
}
</script>

<style>
.socials-wrapper--outer {
  background-color: rgb(167, 0, 0);
  width: 70%;
}
</style>
