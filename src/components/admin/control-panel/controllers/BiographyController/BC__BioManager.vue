<template>
  <div class="bio-manager fbx" v-if="beingEdited">
    <button
      @click="saveBioEdits"
      class="btn save-edits"
      >Save Biography Edits
    </button>
    <button
      @click="cancelEdits"
      class="btn cancel-edits"
      >Cancel Edits
    </button>
  </div>
</template>

<script>
export default {
  props: ['beingEdited'],
  methods: {
    saveBioEdits() {
      this.$emit('saveBioEdits_CE');
    },
    cancelEdits() {
      this.$emit('cancelEdits_CE');
    },
  }
}
</script>

<style scoped>
.bio-manager {
  margin: 1rem 0;
}
.save-edits {
  margin-right: 1rem;
}
</style>
