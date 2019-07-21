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
  min-width: 8rem;
  font-size: .9rem;
  padding: .25rem 0;
  text-align: center;
  cursor: pointer;
}
.option-item {
  border-right: 1px solid var(--border--primary);
}
.option-item:hover {
  background-color: var(--border--dark);
}
.option-item:last-of-type {
  border-right: 0;
}
</style>
