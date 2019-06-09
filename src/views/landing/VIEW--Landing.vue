<template>
  <div
    id="view--landing"
    class="view landing--outer flexbox flexdir-col space-center">
    <SocialsWrapper class="flex-2" />
    <transition name="fade">
      <div class="landing--image flex-20" v-if="mounted">
        <LandingBrandLogo/>
      </div>
    </transition>
    <div class="landing--brand flex-8">
      <h1>{{ title }}</h1>
    </div>
    <NavBarWrapper class="flex-3" />
  </div>
</template>

<script>
import SocialsWrapper from '@/components/socials/SocialsWrapper.vue';
import NavBarWrapper from '../../components/nav-bar/NavBarWrapper.vue';
import LandingBrandLogo from '../../components/landing/LandingBrandLogo.vue';

export default {
  components: {
    SocialsWrapper,
    NavBarWrapper,
    LandingBrandLogo,
  },
  data() {
    return {
      title: 'DJ ENCOUNTER',
      mounted: false,
    };
  },
  mounted() {
    this.mounted = !this.mounted;
  },
};
</script>

<style scoped>
#view--landing {
  padding-top: .65rem;
}
.landing--outer {
  background-image: url('../../assets/img/view-landing_space01-1_1920x1080.jpg');
  background-size: cover;
  height: 100%;
}
.landing--image {
  height: 50%;
}
.landing--brand {
  color: var(--fontColor_Main);
  font-size: 5rem;
  font-family: 'space_rangerregular', sans-serif;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s cubic-bezier(0.7, 0.5, 0.8, 1);
}
</style>
