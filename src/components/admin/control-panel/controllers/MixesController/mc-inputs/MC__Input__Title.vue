<template>
  <div class="form--group">
    <label :for="'title' + mix._id">Mix Title</label>
    <input 
      type="text" class="admin--input mix--title"
      :id="'title' + mix._id"
      :placeholder="mix.title"

      @focus="!newTitle
        ? $event.target.value = mix.title
        : null
      "

      v-model="newTitle"
      @input="updateMixTitle(newTitle)"

      @blur="beingEdited
        ? $event.target.value = newTitle
        : $event.target.value = ''
      "
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTitle: ''
    }
  },
  props: ['mix', 'beingEdited'],
  methods: {
    updateMixTitle(value) {
      this.$emit('updateMixTitle_CE', value);
    }
  }
}
</script>

<style>

</style>
