<template>
  <div 
    id="view--shows"
    class="shows--shell view">
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
      title: 'Upcoming Shows',
    };
  },
};
</script>

<style scoped>
.shows--shell {
  height: 100vh;
  background-color: #090909;
}
</style>
