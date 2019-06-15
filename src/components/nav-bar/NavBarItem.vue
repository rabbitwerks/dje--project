<template>
  <div class="navbar-item--outer fbx j-ctr a-ctr">
    <a class="navbar-item--inner" :href="href">
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

a.navbar-item--inner {
  color: var(--font-color--main);
  text-decoration: none;
  padding: .25rem 2rem;
}

a.navbar-item--inner:hover {
  background-color: rgba(219, 219, 219);
  color: var(--navbar-float);
  transition: all 0.15s ease-in-out .05s;
  border-radius: 3px
}


</style>
