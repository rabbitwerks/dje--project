<template>
  <div
    id="view--landing" 
    class="view landing--outer flexbox flexdir-col space-center">
    <SocialsWrapper class="flex-2" />
    <div class="landing--image flex-20">

    </div>
    <div class="landing--brand flex-8">
      <h1>{{ title }}</h1>
    </div>
    <NavBarWrapper class="flex-3" />
  </div>
</template>

<script>
import SocialsWrapper from '@/components/socials/SocialsWrapper.vue';
import NavBarWrapper from '../../components/nav-bar/NavBarWrapper.vue';

export default {
  components: {
    SocialsWrapper,
    NavBarWrapper,
  },
  data() {
    return {
      title: 'DJ ENCOUNTER',
    };
  },
};
</script>

<style scoped>
#view--landing {
  padding-top: .65rem;
}
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
