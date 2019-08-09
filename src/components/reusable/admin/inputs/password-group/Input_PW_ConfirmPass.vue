<template>
  <div class="form--group">
    <label for="profile-pw--confirm">Confirm Password</label>
    <input
      v-model="confirmPassword"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = confirmPassword
          : $event.target.value = null
      "
      class="admin--input"
      type="password"
      autocomplete=""
      id="profile-pw--confirm"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      confirmPassword: '',
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('sendValue_ConfirmPass_CE', this.confirmPassword);
    }
  }
}
</script>
