<template>
  <div class="navbar-wrapper--outer fxbx">
    <NavBarItem 
      v-for="(item, index) in navbarItems" 
      :key="index"
      :text="item.section"
      :href="item.href"
      class="f1"
    />
  </div>
</template>

<script>
import NavBarItem from './NavBarItem.vue';

export default {
  components: {
    NavBarItem
  },
  data() {
    return {
      navbarItems: [
        {
          section: 'Landing',
          href: '#view--landing'
        },
        {
          section: 'Mixes',
          href: '#view--mixes',
        },
        {
          section: 'Biography',
          href: '#view--biography',
        },
        {
          section: 'Shows',
          href: '#view--shows',
        },
      ]
    }
  }
}
</script>

<style scoped>
.navbar-wrapper--outer {
  width: 70%;
}
</style>
