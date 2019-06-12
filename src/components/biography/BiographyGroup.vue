<template>
  <div class="bio-group--outer fbx j-ctr">
    <div class="bio-group--inner fbx">
      <BioImage />
      <BioText :text="bioData.text" :contact="contact_GET"/>
    </div>
  </div>
</template>

<script>
import BioImage from './BioImage.vue';
import BioText from './BioText.vue';

export default {
  components: {
    BioImage,
    BioText,
  },
  computed: {
    viewport() {
      return this.$store.getters.viewportDimensions_GET;
    },
    bioData() {
      return this.$store.getters.bioData_GET;
    },
    contact_GET() {
      return this.$store.getters.contact_GET;
    }
  }
}
</script>

<style scoped>
.bio-group--inner {
  min-height: 50vh;
  width: var(--global-width);
  background: var(--view-color--one);
  margin-bottom: 5rem;
  padding: 2rem;
}
</style>
