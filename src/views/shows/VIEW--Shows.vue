<template>
  <div class="shows--shell">
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
  height: 100%;
  background-color: #090909;
}
</style>
