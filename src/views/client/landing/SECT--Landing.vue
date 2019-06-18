<template>
  <section
    id="view--landing"
    class="view landing--outer fbx fd-c sp-ctr">
    <SocialsWrapper class="flex-2" />
    <LandingImage class="flex-20" />
    <LandingBrand class="flex-8" :title="title" />
    <NavBarWrapper class="flex-3" />
  </section>
</template>

<script>
import SocialsWrapper from '@/components/socials/SocialsWrapper.vue';
import NavBarWrapper from '@/components/nav-bar/NavBarWrapper.vue';
import LandingImage from '@/components/landing/LandingImage.vue';
import LandingBrand from '@/components/landing/LandingBrand.vue';


export default {
  components: {
    SocialsWrapper,
    NavBarWrapper,
    LandingImage,
    LandingBrand,
  },
  data() {
    return {
      title: 'DJ ENCOUNTER',
      mounted: false,
    };
  },

};
</script>

<style scoped>
#view--landing {
  padding-top: .65rem;
}
.landing--outer {
  background-image: url('https://res.cloudinary.com/rabbitwerks-js/image/upload/q_auto:good/v1560820554/dj-encounter/view-landing_space01-1_1920x1080.jpg');
  background-size: cover;
  height: 100vh;
}
@media screen and (max-width: 480px) {
  .landing--outer {
    background-image: url('https://res.cloudinary.com/rabbitwerks-js/image/upload/c_scale,h_800/c_crop,g_xy_center,h_800,w_480,x_540/v1560820554/dj-encounter/view-landing_space01-1_1920x1080.jpg');
  }
}

</style>
