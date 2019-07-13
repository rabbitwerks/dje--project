<template>
  <div 
    class="option-item"
    >{{ optionText }}
  </div>
</template>

<script>
export default {
  props: {
    optionText: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.option-item {
  font-size: .9rem;
  padding: .25rem 2rem;
  cursor: pointer;
}
.option-item:first-child {
  border-right: 1px solid var(--border--primary);
}
.option-item:hover {
  background-color: var(--border--dark);
}
</style>
