<template>
  <div 
    class="client--shell"
  >
    <NavBarFloat />
    <SECT--Landing />
    <SECT--Mixes />
    <SECT--Biography />
    <SECT--Shows />
    <SiteFooter />
  </div>
</template>

<script>
import NavBarFloat from '../../components/nav-bar/NavBarFloat.vue';
import SECT__Landing from './landing/SECT--Landing.vue';
import SECT__Mixes from './mixes/SECT--Mixes.vue';
import SECT__Biography from './biography/SECT--Biography.vue';
import SECT__Shows from './shows/SECT--Shows.vue';
import SiteFooter from './footer/SiteFooter.vue';

export default {
  components: {
    NavBarFloat,
    'SECT--Landing': SECT__Landing,
    'SECT--Mixes': SECT__Mixes,
    'SECT--Biography': SECT__Biography,
    'SECT--Shows': SECT__Shows,
    SiteFooter,
  },
}
</script>

<style>

</style>
