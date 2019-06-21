<template>
  <div class="form--group">
    <label :for="'mix--desktop' + mix.id">Desktop Embed Link</label>
    <input
      type="text" class="admin--input mix--embed--desktop"
      :id="'mix--desktop' + mix.id"
      :placeholder="mix.embeds.desktop"
      @focus="!newDesktopEmbed
        ? $event.target.value = mix.embeds.desktop
        : null
      "

      v-model="newDesktopEmbed"
      @input="updateEmbedDesktop(newDesktopEmbed)"

      @blur="beingEdited
        ? $event.target.value = newDesktopEmbed
        : $event.target.value = ''
      "
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDesktopEmbed: '',
    }
  },
  props: ['mix', 'beingEdited'],
  methods: {
    updateEmbedDesktop(value) {
      this.$emit('updateEmbedDesktop_CE', value);
    }
  }
}
</script>

<style>

</style>
