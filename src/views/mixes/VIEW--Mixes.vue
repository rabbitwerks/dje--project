<template>
  <div
    ref="view--mixes"
    id="view--mixes"
    class="view mixes--shell flexbox flexdir-col">
    <ViewHeader :text="title"/>
    <MixesGroup />
  </div>
</template>

<script>
import ViewHeader from '../../components/reusable/view-header/ViewHeader';
import MixesGroup from '../../components/mixes/MixesGroup.vue';

export default {
  components: {
    ViewHeader,
    MixesGroup,
  },
  data() {
    return {
      title: 'Top Mixes',
    };
  },
};
</script>

<style scoped>
.mixes--shell {
  background-color: var(--view-color--one);
}
</style>
