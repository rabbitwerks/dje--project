<template>
  <div 
    class="client--shell"
  >
    <NavBarFloat />
    <VIEW--Landing />
    <VIEW--Mixes />
    <VIEW--Biography />
    <VIEW--Shows />
    <SiteFooter />
  </div>
</template>

<script>
import NavBarFloat from '../../components/nav-bar/NavBarFloat.vue';
import VIEW__Landing from './landing/VIEW--Landing.vue';
import VIEW__Mixes from './mixes/VIEW--Mixes.vue';
import VIEW__Biography from './biography/VIEW--Biography.vue';
import VIEW__Shows from './shows/VIEW--Shows.vue';
import SiteFooter from './footer/SiteFooter.vue';

export default {
  components: {
    NavBarFloat,
    'VIEW--Landing': VIEW__Landing,
    'VIEW--Mixes': VIEW__Mixes,
    'VIEW--Biography': VIEW__Biography,
    'VIEW--Shows': VIEW__Shows,
    SiteFooter,
  },
}
</script>

<style>

</style>
