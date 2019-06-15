<template>
  <a :href="item.link" class="social-item--outer">
    <span class="social-item--inner"
      >{{ item.name }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.social-item--outer {
  text-decoration: none;
  color: var(--font-color--main);
}
.social-item--inner {
  padding: 0 1rem .5rem 1rem;
  border-bottom: 2px solid transparent;
  transition: border 0.2s;
}
.social-item--inner:hover {
  padding-bottom: .5rem;
  border-bottom: 2px solid var(--font-color--main);
}
</style>
