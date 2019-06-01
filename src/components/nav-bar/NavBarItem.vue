<template>
  <div class="navbar-item--outer fbx j-ctr a-ctr">
    <a class="nabar-item--inner" :href="href">
      {{ text }}
    </a>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

a {
  color: var(--fontColor_Main);
  text-decoration: none;
}

</style>
