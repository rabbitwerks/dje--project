<template>
  <div class="mix-manage--outer fxbx flex-justify-end">
    <button 
      v-if="beingEdited"
      @click="saveEdits(mix._id)"
      class="btn save-btn"
      >Save Edits
    </button>
    <button
      @click="deleteMix(mix._id)"
      class="btn"
      >Delete Mix</button>
  </div>
</template>

<script>
export default {
  props: ['mix', 'beingEdited'],
  methods: {
    saveEdits(_id) {
      this.$emit('saveEdits_CE', _id)
    },
    deleteMix(_id) {
      if (confirm('Are you sure you want to delete this mix entry?')) {
        this.$emit('deleteMix_CE', _id)
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
