<template>
  <div class="form--group">
    <label :for="'description' + mix.id">Mix Description</label>
    <textarea
      :id="'description' + mix.id"
      :placeholder="mix.description"
      @focus="!newDescription
        ? $event.target.value = mix.description
        : null"

      v-model="newDescription"
      @input="updateDescription(newDescription)"

      @blur="beingEdited 
        ? $event.target.value = newDescription
        : $event.target.value = null
      "
      class="admin--input mix--description"
      style="height: 5rem;"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDescription: '',
    }
  },
  props: ['mix', 'beingEdited'],
  watch: {
    beingEdited(value) {
      if (!value) {
        this.newDescription = '';
      }
    }
  },
  methods: {
    updateDescription(value) {
      this.$emit('updateDescription_CE', value);
    }
  }
}
</script>

<style>

</style>
