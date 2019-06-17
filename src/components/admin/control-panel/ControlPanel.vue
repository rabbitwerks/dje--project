<template>
  <div class="control--panel f3">
    <keep-alive>
      <component :is="adminState.activeController"></component>
    </keep-alive>
  </div>
</template>

<script>
import MixesController from './controllers/MixesController.vue';
import BiographyController from './controllers/BiographyController.vue';
import SocialsController from './controllers/SocialsController.vue';

export default {
  components: {
    MixesController,
    BiographyController,
    SocialsController,
  },
  computed: {
    adminState() {
      return this.$store.getters.adminState_GET;
    }
  }
}
</script>

<style scoped>
.control--panel {
  background-color: rgb(7, 56, 54);
}
</style>
