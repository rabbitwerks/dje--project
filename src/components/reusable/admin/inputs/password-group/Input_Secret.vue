<template>
  <div class="form--group">
    <label for="pw--secret">New Password</label>
    <input
      v-model="secret"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = secret
          : $event.target.value = null
      "
      class="admin--input"
      type="password"
      autocomplete=""
      id="pw--secret"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      secret: ''
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('updateRegData_Secret_CE', this.secret);
    }
  }
}
</script>

<style>

</style>
