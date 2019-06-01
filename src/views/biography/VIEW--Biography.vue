<template>
  <div 
    id="view--biography"
    class="view biography--shell">
    <ViewHeader :text="title" />
  </div>
</template>

<script>
import ViewHeader from '@/components/reusable/view-header/ViewHeader.vue';

export default {
  components: {
    ViewHeader,
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
  background-color: #111111;
  height: 100%;
}
</style>
