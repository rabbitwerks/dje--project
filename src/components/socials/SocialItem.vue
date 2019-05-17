<template>
  <a :href="item.url" class="social-item--outer">
    {{ item.site }}
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>

