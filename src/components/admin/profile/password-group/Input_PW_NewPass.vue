<template>
  <div class="form--group">
    <label for="profile-pw--new">New Password</label>
    <input
      v-model="newPassword"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = newPassword
          : $event.target.value = null
      "
      class="admin--input"
      type="password"
      autocomplete=""
      id="profile-pw--new"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newPassword: '',
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('sendValue_NewPass_CE', this.newPassword);
    }
  }
}
</script>
