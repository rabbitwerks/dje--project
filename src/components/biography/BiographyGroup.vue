<template>
  <div 
    class="bio-group--outer fbx j-ctr">
    <div 
      class="bio-group--inner fbx"
      :class="viewport.width < 480 
        ? ['fd-c', 'a-ctr']
        : 'j-ctr'
    "
    >
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
  margin-bottom: 5rem;
  padding: 2rem;
  border: 1px solid #192ea3;
  border-radius: 3px;
}

@media screen and (max-width: 480px) {
  .bio-group--inner {
    width: calc(var(--global-width) - 5%);
  }
}
</style>
