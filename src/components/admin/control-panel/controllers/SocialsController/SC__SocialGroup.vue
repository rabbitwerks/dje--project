<template>
  <div class="socials--group">
    <h3>Social Media Links</h3>
    <SC--SocialItem 
      v-for="(social, index) of socials" :key="social.name"
      :social="social"
      :index="index"
    />
  </div>

   
</template>

<script>
import SC__SocialItem from './SC__SocialItem.vue';

export default {
  components: {
    'SC--SocialItem': SC__SocialItem,
  },
  props: ['socials'],

}
</script>

<style scoped>
.socials--group {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--border--primary);
  border-radius: 3px;
}
h3 {
  margin-bottom: 1rem;
}
</style>
