<template>
  <div class="bio--text--outer">
    <h3 class="bio--label">Biography Text</h3>
    <textarea 
      class="bio--text admin--input" 
      id="bio--text"
      :placeholder="text"
      @focus="!biographyEdits
        ? $event.target.value = text
        : null"

      v-model="biographyEdits"
      @input="updateBio(biographyEdits)"

      @blur="beingEdited
        ? $event.target.value = biographyEdits
        : $event.target.value = null
      "
    >
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biographyEdits: '',
    }
  },
  props: ['beingEdited', 'text', 'selectedContact'],
  watch: {
    beingEdited(value) {
      if (!value) {
        this.biographyEdits = '';
      }
    }
  },
  methods: {
    updateBio(value) {
      this.$emit('updateBio_CE', value);
    },
  },
}
</script>

<style scoped>
.bio--text--outer {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--border--primary);
  border-radius: 3px;
}

.bio--label {
  padding-bottom: 1rem;
}

.bio--text {
  width: 100%;
  min-height: 15rem;
}
</style>
