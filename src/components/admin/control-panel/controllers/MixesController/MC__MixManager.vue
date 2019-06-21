<template>
  <div class="mix-manage--outer fbx flex-justify-end">
    <button 
      v-if="beingEdited"
      @click="saveEdits(mix.id)"
      class="btn save-btn"
      >Save Edits
    </button>
    <button
      @click="deleteMix(mix.id)"
      class="btn"
      >Delete Mix</button>
  </div>
</template>

<script>
export default {
  props: ['mix', 'beingEdited'],
  methods: {
    saveEdits(id) {
      this.$emit('saveEdits_CE', id)
    },
    deleteMix(id) {
      if (confirm('Are you sure you want to delete this mix entry?')) {
        this.$emit('deleteMix_CE', id)
      };
      return;
    }
  }
}
</script>

<style scoped>
.save-btn {
  margin-right: 1rem;
}
</style>
