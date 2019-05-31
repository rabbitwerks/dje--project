<template>
  <a :href="item.url" class="social-item--outer">
    <span class="social-item--inner"
      >{{ item.site }}
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
  color: var(--fontColor_Main);
}
.social-item--inner {
  transition: border 0.2s;
  border-bottom: 3px solid transparent;
  padding-bottom: .5rem;
}
.social-item--inner:hover {
  padding-bottom: .5rem;
  border-bottom: 3px solid var(--fontColor_Main);
}
</style>
