<template>
  <div class="form--group">
    <label for="profile-username">Username</label>
    <input
      :placeholder="username"
      @focus="
        !isEditing
          ? $event.target.value = username
          : $event.target.value = updatedUsername
      "
      v-model="updatedUsername"

      @input="handleInput"

      @blur="
        isEditing
          ? $event.target.value = updatedUsername
          : $event.target.value = null
      "
      class="admin--input"
      type="text" 
      id="profile-username"
    >
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
      default: '',
    }
  },
  data() {
    return {
      isEditing: false,
      updatedUsername: '',
    }
  },
  methods: {
    handleInput() {
      this.isEditing = true;
      this.$emit('updateUsername_CE', this.updatedUsername);
    },
  },
}
</script>
