<template>
  <transition name="fade">
    <div class="landing--image" v-if="mounted">
      <LandingBrandLogo/>
    </div>
  </transition>
</template>

<script>
import LandingBrandLogo from '@/components/landing/LandingBrandLogo.vue';

export default {
  components: {
    LandingBrandLogo,
  },
  data() {
    return {
      mounted: false,
    }
  },
  mounted() {
    this.mounted = true;
  },
}
</script>

<style scoped>
.landing--image {
  height: 50%;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s cubic-bezier(0.7, 0.5, 0.8, 1);
}
</style>
