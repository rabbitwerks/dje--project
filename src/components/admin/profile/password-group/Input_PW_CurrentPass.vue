<template>
  <div class="form--group">
    <label for="profile-pw--current">Current Password</label>
    <input
      v-model="currentPassword"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = currentPassword
          : $event.target.value = null
      "
      class="admin--input"
      type="password"
      autocomplete=""
      id="profile-pw--current"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      currentPassword: '',
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('sendValue_CurrentPass_CE', this.currentPassword);
    }
  }
}
</script>
