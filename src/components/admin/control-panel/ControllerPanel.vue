<template>
  <div class="control--panel f10">
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
  background-color: #1d1d1d;
  border-left: 2px solid #eee;
}
@media screen and (max-width: 480px) {
  .control--panel {
    border-left: 0;
  }
}
</style>
