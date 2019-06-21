<template>
  <div class="form--group">
    <label :for="'mix--mobile' + mix.id">Mobile Embed Link</label>
    <input
      type="text" class="admin--input mix--embed--mobile"
      :id="'mix--mobile' + mix.id"
      :placeholder="mix.embeds.mobile"
      @focus="!newMobileEmbed
        ? $event.target.value = mix.embeds.mobile
        : null
      "

      v-model="newMobileEmbed"
      @input="updateEmbedMobile(newMobileEmbed)"

      @blur="beingEdited
        ? $event.target.value = newMobileEmbed
        : $event.target.value = ''
      "
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMobileEmbed: '',
    }
  },
  props: ['mix', 'beingEdited'],
  methods: {
    updateEmbedMobile(value) {
      this.$emit('updateEmbedMobile_CE', value);
    }
  }
}
</script>

<style>

</style>
