<template>
  <section 
    id="view--shows"
    class="shows--shell view">
    <ViewHeader :text="title" />
    <Tourbox />
  </section>
</template>
<script>
import ViewHeader from '@/components/reusable/view-header/ViewHeader.vue';
import Tourbox from '@/components/shows/SongkickTourbox.vue';

export default {
  components: {
    ViewHeader,
    Tourbox
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
  padding-bottom: 5rem;
  background-color: 
  var(--view-color--one);
}
.songkick-title {
  padding: 1rem 0;
}
</style>
