<template>
  <div class="mixes-controller--shell">
    <ControllerHeader text="Mixes | Content Editor" beingEdited="false" />
    <div class="mixes-controller--outer">
      <div class="mc--inner">



      </div>
    </div>
  </div>
</template>

<script>
import ControllerHeader from '../../../reusable/controller-header/ControllerHeader.vue';

export default {
  components: {
    ControllerHeader,
  },

  computed: {
    mixesData() {
      return this.$store.getters.mixesData_GET;
    }
  }

}
</script>

<style scoped>
.mixes-controller--outer {
  padding: 1.5rem 2rem;
}

</style>

