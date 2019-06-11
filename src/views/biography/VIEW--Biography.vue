<template>
  <div 
    id="view--biography"
    class="view biography--shell">
    <ViewHeader :text="title" />
    <BiographyGroup />
  </div>
</template>

<script>
import ViewHeader from '@/components/reusable/view-header/ViewHeader.vue';
import BiographyGroup from '@/components/biography/BiographyGroup.vue'

export default {
  components: {
    ViewHeader,
    BiographyGroup,
  },
  data() {
    return {
      title: 'Biography',
    };
  },
};
</script>

<style scoped>
.biography--shell {
  background-color: var(--view-color--two);
}
</style>
