<template>
  <div class="view landing--outer flexbox flexdir-col space-center">
    <socials-wrapper class="flex-2" />
    <div class="landing--image flex-14">

    </div>
    <div class="landing--brand flex-5">
      <h1>{{ title }}</h1>
    </div>

  </div>
</template>

<script>
import SocialsWrapper from '@/components/socials/SocialsWrapper.vue';

export default {
  components: {
    'socials-wrapper': SocialsWrapper,
  },
  data() {
    return {
      title: 'DJ ENCOUNTER',
    };
  },
};
</script>

<style scoped>
.landing--outer {
  background-image: url('../../assets/img/space-bg.jpg');
  background-size: cover;
  height: 100%;
}
.landing--image {
  height: 50%;
}
.landing--brand {
  color: var(--fontColor_Main);
  font-size: 4rem;
}
</style>
