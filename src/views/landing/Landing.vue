<template>
  <div class="landing--outer flexbox flexdir-col space-center">
    <div class="landing--image flex-14">

    </div>
    <div class="landing--brand flex-5">
      <h1>{{ title }}</h1>
    </div>
    <socials-wrapper class="flex-2" />
  </div>
</template>

<script>
import SocialsWrapper from '@/components/socials/SocialsWrapper';

export default {
  data() {
    return {
      title: 'DJ ENCOUNTER',
    };
  },
  components: {
    'socials-wrapper': SocialsWrapper,
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
